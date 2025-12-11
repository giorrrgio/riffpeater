# RiffPeater - Video Loop Player

A video/audio loop player focused on guitar practice. Set precise loop points, automate speed increases, and save sessions/loops locally so you can return to riffs without re-entering timings.

If this app helps your practice sessions and you’d like to support it, you can buy me a coffee on Ko-fi:

<a href='https://ko-fi.com/U7U21PYGKF' target='_blank' id="kofi-button"><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi1.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Features
- Load videos
- Set loop start/end by time or current playhead
- Automate incremental speed lifts every N loops with a max-speed cap
- Save multiple sessions with thumbnails and per-loop notes
- Export/import sessions as JSON

## Getting started
1) Install dependencies
```bash
npm install
```
2) Run the dev server
```bash
npm run dev
```
3) Open the provided local URL in your browser.

## Using the app
- Enter a video URL/ID, then **Load & Reset** to start fresh.
- Set loop start/end, click **Start Loop**, and adjust speed as needed.
- In **Speed & Automation**, set how often to increase speed, the increment, and a max speed; automation stops at that cap.
- Save loops and sessions in **Saved Sessions**; they persist in local storage.

## Importing a sample session
A ready-made sample is included at `sample-session.json` in the repo root.

To import it:
1) Open the app.
2) In **Saved Sessions**, click **Import JSON**.
3) Choose `sample-session.json`.
4) Load the imported session or specific loops from the list.

## Sharing the sample session

Send anyone the app URL with the `sampleSession` query flag (for example `/?sampleSession=true` or `/?sampleSession=1`). Landing on that link automatically imports the included `sample-session.json` data, so the recipient can jump straight into the guided demo without manual steps.

## Exporting your work
- Click **Export JSON** in **Saved Sessions** to download your sessions for backup or sharing.

## Notes
- Local storage is used for persistence; clearing site data will remove saved sessions unless exported.
