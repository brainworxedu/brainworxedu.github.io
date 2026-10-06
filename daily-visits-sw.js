const COUNTER_URL = 'https://hitscounter.dev/api/hit?url=https%3A%2F%2Fbrainworxgames.github.io%2F&label=&icon=&color=%23ff4fa9&message=&style=for-the-badge&tz=Europe%2FLondon';
const CACHE_PREFIX = 'bwx-daily-counter-';

function dayKey() {
  return new Date().toISOString().slice(0, 10);
}

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    await self.clients.claim();
    const keys = await caches.keys();
    const keep = CACHE_PREFIX + dayKey();
    await Promise.all(keys.filter(k => k.startsWith(CACHE_PREFIX) && k !== keep).map(k => caches.delete(k)));
  })());
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (!url.pathname.endsWith('/__brainworx_daily_visits.svg')) return;
  event.respondWith((async () => {
    const cacheName = CACHE_PREFIX + dayKey();
    const cache = await caches.open(cacheName);
    const cached = await cache.match(event.request);
    if (cached) return cached;

    try {
      const response = await fetch(COUNTER_URL, {cache: 'no-store'});
      if (response.ok || response.type === 'opaque') {
        await cache.put(event.request, response.clone());
      }
      return response;
    } catch (err) {
      return new Response('', {status: 503, statusText: 'Counter unavailable'});
    }
  })());
});
