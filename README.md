

## AdSense


## Settings

Settings lets visitors choose a custom tab title, upload a custom tab icon, or select a supplied YouTube, Google, Google Drive, or Google Classroom icon preset.

## Deploy

Copy everything in this folder into the repository root, then:

```bash
git add -A
```


## AdSense
The AdSense Auto Ads script is installed site-wide for publisher `ca-pub-4294926180211945`, and `ads.txt` is included. Actual ad serving is controlled by Google; Auto ads must be enabled for the site and the site must be approved/ready in AdSense.


## New games in this build

Added NoomiClone, Crashout Crew, People Playground, Skate 3, and Gamble With Your Friends. The supplied "Downloaded from" Noah's Tutoring Hub overlays were removed from the game HTML files. The Gamble With Your Friends port splash credit is retained.

## Live visitor stats + Discord

The homepage counter no longer uses the old external image badge that caused the box/overlay. It displays **active browser profiles** and **unique browser profiles today** once connected to the stats Worker. This is an approximate browser/profile count, not a count of identifiable people. The website is static, so the stats backend must be deployed separately.

1. In Discord, **delete/regenerate the webhook URL you pasted into chat** and make a fresh webhook. Treat the old URL as compromised.
2. In Cloudflare, create a KV namespace and bind it to the Worker as `BRAINWORX_STATS`.
3. Create a Cloudflare Worker using `workers/brainworx-stats-worker.js`. Add a **secret** named `DISCORD_WEBHOOK_URL` with the newly regenerated webhook URL. Do not put that URL in the site files.
4. Add a Cron Trigger of `*/5 * * * *` so the Worker updates one Discord message every five minutes.
5. Open `stats-config.js` and set `window.BRAINWORX_STATS_ENDPOINT` to the deployed Worker URL ending in `/track`, for example `https://your-worker.your-subdomain.workers.dev/track`. Commit and push the site again.
6. Visit the Worker's `/health` URL to check that its KV namespace and Discord secret are configured.

The Worker is allow-listed for `brainworxgames.github.io` and `brainworxedu.github.io`. If you use a different domain, add that exact HTTPS origin to `ALLOWED_ORIGINS` in the Worker before deploying.
