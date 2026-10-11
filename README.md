# BrainWorks

## Website deploy

Upload the contents of this folder to the root of the GitHub Pages repository and commit/push. Global counter tracking is wired directly into `site.js`; there is no separate project, API key, webhook, stats endpoint, or database setup to configure.

## Games

BuildNow GG, Russian Counter Strike, and Granny are included. Skate 3 and Gamble With Your Friends remain near the top. Injected “Downloaded from” / Noah’s Tutoring Hub overlay code is removed from game HTML files; the Gamble With Your Friends port intro/credit is retained.

## Global stats and Popular game

The site uses [CounterAPI](https://counterapi.com/) as shared storage, so counters are global across visitors rather than stored only in each browser. The homepage displays:

- **Using it now** — distinct browser IDs that sent a heartbeat within the last two minutes.
- **Peak today** — highest global active count observed for the current UK calendar day.
- **Total today** — unique browser IDs seen for the current UK calendar day.
- **🔥 Popular** — the game with the most global launches recorded today.

All day-specific keys use `Europe/London` and switch at UK midnight. The shared API needs to be online for the live counters to update. Peak recording uses a best-effort max update, because CounterAPI's public counter interface does not provide an atomic “set this value only if it's larger” operation; very close simultaneous updates can occasionally overstate the peak. These are informal public counters, not tamper-proof analytics.

## AdSense and settings

The AdSense Auto Ads code and `ads.txt` remain included. Settings still allows visitors to customize the tab title and icon.

## CS Surf and Black Ops 1 Zombies (new)

- **CS Surf** is listed under `play/cs-surf.html`. The source HTML, game bundle and stylesheet from your upload are packaged under `games/` and `games/surf_files/`. Some missing bundled imports and online resources are loaded from surfd.net; the page includes an “Open directly” alternative if remote dependencies fail.
- **BO1 Zombies** is listed under `play/bo1-zombies.html`. It uses the supplied map-select artwork and opens maps from the original hosted game at vel.gg/bo1z. The provided upload did not contain map engine binaries, so maps are embedded from their host with an “Open directly” option if their embedding policy blocks the iframe.
- Both entries appear in the site-wide search and game catalogue, and participate in the existing daily Popular tracking.
- This ZIP is uploaded as-is to GitHub Pages: no additional Cloudflare/Netlify backend or Discord webhook was added.
- The remote game servers must remain online; offline play or independently hosting the entire engines is not supported by the supplied files.
