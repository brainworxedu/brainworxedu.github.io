# BrainWorks

## Deploy

This is a static site. Copy the contents of this folder into the root of your GitHub Pages repository, then commit and push:

```bash
git add -A
git commit -m "Update BrainWorks games and popular card"
git push
```

## Games

NoomiClone, Crashout Crew, People Playground, Skate 3 and Gamble With Your Friends are included. Skate 3 and Gamble With Your Friends appear near the beginning of the games catalogue. The supplied Crashout Crew thumbnail is used. Injected "Downloaded from" / Noah's Tutoring Hub HTML overlays have been removed from game pages. The Gamble With Your Friends port intro/credit is retained.

## Popular card and counter

The games page shows **Random** followed by **🔥 Popular**. Popular is selected from game launches recorded in local storage for the current date. On a new browser profile, Skate 3 is the starter featured game until plays have been recorded.

The homepage stats panel is local-only: **Active Tabs** counts open BrainWorks tabs in the same browser profile, and **Games Played Today** counts launches recorded by that profile. They are not global visitor counts. A globally shared active-user/daily-user leaderboard needs a backend service; GitHub Pages by itself cannot securely aggregate activity from all visitors.

## Discord webhook

The Discord webhook URL is deliberately **not** included in the public site JavaScript. Anyone could read a webhook embedded in a public page and use it to spam the Discord channel. The webhook URL pasted in chat should be regenerated/revoked in Discord before using it again. A secure global stats-to-Discord integration requires a server-side endpoint hosted somewhere other than the static GitHub Pages files; this build includes no webhook URL or external stats endpoint configuration.

## AdSense

The AdSense Auto Ads script is installed for publisher `ca-pub-4294926180211945`, and `ads.txt` is included. Actual ad serving is controlled by Google.

## Settings

Settings lets visitors choose a custom tab title, upload a custom tab icon, or select a supplied YouTube, Google, Google Drive, or Google Classroom icon preset.
