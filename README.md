<<<<<<< HEAD
games added like skate
=======
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
>>>>>>> dc29880 (Add colour themes and falling background)
