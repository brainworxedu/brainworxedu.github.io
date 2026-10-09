const ACTIVE_TTL_SECONDS = 180;
const ACTIVE_WINDOW_MS = 120000;
const ALLOWED_ORIGINS = new Set([
  "https://brainworxgames.github.io",
  "https://brainworxedu.github.io"
]);

function ukDay(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London", year: "numeric", month: "2-digit", day: "2-digit"
  }).formatToParts(date);
  const p = Object.fromEntries(parts.map(x => [x.type, x.value]));
  return `${p.year}-${p.month}-${p.day}`;
}

function json(data, status = 200, origin = "") {
  const headers = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    headers["access-control-allow-origin"] = origin;
    headers["access-control-allow-methods"] = "POST, GET, OPTIONS";
    headers["access-control-allow-headers"] = "Content-Type";
    headers["vary"] = "Origin";
  }
  return new Response(status === 204 ? null : JSON.stringify(data), { status, headers });
}

async function keysWithPrefix(kv, prefix) {
  const all = [];
  let cursor;
  do {
    const page = await kv.list({ prefix, limit: 1000, ...(cursor ? { cursor } : {}) });
    all.push(...page.keys);
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);
  return all;
}

async function getStats(env) {
  const day = ukDay();
  const now = Date.now();
  const [visitors, activeKeys] = await Promise.all([
    keysWithPrefix(env.BRAINWORX_STATS, `unique:${day}:`),
    keysWithPrefix(env.BRAINWORX_STATS, "active:")
  ]);
  let activeUsers = 0;
  await Promise.all(activeKeys.map(async key => {
    const lastSeen = Number(await env.BRAINWORX_STATS.get(key.name));
    if (Number.isFinite(lastSeen) && now - lastSeen <= ACTIVE_WINDOW_MS) activeUsers++;
    else env.BRAINWORX_STATS.delete(key.name).catch(() => {});
  }));
  return { activeUsers, dailyVisitors: visitors.length, day };
}

async function sendOrEditDiscord(env) {
  if (!env.DISCORD_WEBHOOK_URL || !env.BRAINWORX_STATS) return;
  const stats = await getStats(env);
  const unix = Math.floor(Date.now() / 1000);
  const body = {
    content: `📊 **BrainWorx live stats**\n\n🟢 Active now: **${stats.activeUsers}**\n📅 Unique today (UK): **${stats.dailyVisitors}**\n🕒 Updated <t:${unix}:R>`
  };
  const storedMessageId = await env.BRAINWORX_STATS.get("discord:message-id");
  if (storedMessageId) {
    const editUrl = new URL(env.DISCORD_WEBHOOK_URL);
    editUrl.pathname = editUrl.pathname.replace(/\/$/, "") + `/messages/${encodeURIComponent(storedMessageId)}`;
    editUrl.searchParams.delete("wait");
    try {
      const edit = await fetch(editUrl, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
      if (edit.ok) return;
    } catch (_) {}
  }
  const createUrl = new URL(env.DISCORD_WEBHOOK_URL);
  createUrl.searchParams.set("wait", "true");
  const created = await fetch(createUrl, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
  if (!created.ok) throw new Error(`Discord webhook returned HTTP ${created.status}`);
  const message = await created.json();
  if (message && message.id) await env.BRAINWORX_STATS.put("discord:message-id", String(message.id));
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    if (origin && !ALLOWED_ORIGINS.has(origin)) return json({ error: "Origin not allowed" }, 403, origin);
    if (request.method === "OPTIONS") return json({}, 204, origin);
    if (url.pathname === "/health" && request.method === "GET") {
      return json({ ok: true, statsNamespaceConfigured: !!env.BRAINWORX_STATS, discordConfigured: !!env.DISCORD_WEBHOOK_URL }, 200, origin);
    }
    if (url.pathname !== "/track" || request.method !== "POST") return json({ error: "Not found" }, 404, origin);
    if (!env.BRAINWORX_STATS) return json({ error: "KV namespace BRAINWORX_STATS is not configured" }, 503, origin);
    try {
      const payload = await request.json();
      const clientId = String(payload.clientId || "");
      if (!/^[A-Za-z0-9_-]{16,80}$/.test(clientId)) return json({ error: "Invalid clientId" }, 400, origin);
      const day = ukDay();
      const now = Date.now();
      const uniqueKey = `unique:${day}:${clientId}`;
      if (!(await env.BRAINWORX_STATS.get(uniqueKey))) {
        await env.BRAINWORX_STATS.put(uniqueKey, "1", { expirationTtl: 400 * 24 * 60 * 60 });
      }
      await env.BRAINWORX_STATS.put(`active:${clientId}`, String(now), { expirationTtl: ACTIVE_TTL_SECONDS });
      const stats = await getStats(env);
      return json(stats, 200, origin);
    } catch (error) {
      console.error("Stats tracking error:", error);
      return json({ error: "Could not update site stats" }, 500, origin);
    }
  },
  async scheduled(controller, env, ctx) {
    ctx.waitUntil(sendOrEditDiscord(env).catch(err => console.error("Discord summary update failed:", err)));
  }
};
