# webmcp-extension

A dependency-free Chromium extension scaffold using Manifest V3.

## Load locally

1. Open `chrome://extensions` in Chrome or `edge://extensions` in Edge.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select this repository's root directory.
4. Pin **WebMCP** from the extensions menu, then click its toolbar icon to open
   the popup.

No dependency installation or build step is required.

## Development

- `manifest.json` defines the extension and its entry points.
- `background.js` is the background service worker.
- `popup.html` and `popup.css` define the toolbar popup.

After editing files, click **Reload** on the extension's card and reopen the
popup. Use the card's service worker inspection link to debug the background
script.

With Node.js and npm installed, run `npm run check` to check JavaScript syntax.
To smoke-test in Chromium, confirm that the extension loads without errors and
the toolbar popup displays the WebMCP heading and ready message.