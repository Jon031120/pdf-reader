# Make EA PDF your default PDF app — complete beginner guide

No GitHub experience needed, no domain needed. GitHub gives you a free web
address automatically. Everything is point-and-click in your browser — about
10 minutes, one time.

The folder this guide sits in (`pwa-deploy`) contains the 5 files you'll
upload: `index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`.

---

## Part 1 — Create a free GitHub account (2 min)

1. In Chrome, go to **github.com**
2. Click **Sign up**, use your email (jon@brstechnology.co.uk is fine)
3. Pick a username — e.g. `jon-brs`. **Your free web address will be based on
   this**, e.g. `https://jon-brs.github.io/...` — no domain to buy.
4. Choose the **Free** plan if asked.

## Part 2 — Put the app online (3 min)

1. Once signed in, click the **+** in the very top-right corner → **New repository**
2. Repository name: `pdf-reader` (lowercase, no spaces)
3. Make sure **Public** is selected (required for free hosting — the app code
   is visible, but PDFs you open NEVER get uploaded; everything runs in your
   browser)
4. Click the green **Create repository** button
5. On the next page, click the link that says **"uploading an existing file"**
6. Drag **all 5 files** from this `pwa-deploy` folder into the upload box
   (don't drag the folder itself — open it and drag the files)
7. Click the green **Commit changes** button and wait for the upload

## Part 3 — Switch on the free website (1 min)

1. In your repository, click **Settings** (tab along the top)
2. In the left sidebar, click **Pages**
3. Under "Build and deployment" → Source: choose **Deploy from a branch**
4. Branch: choose **main**, folder **/ (root)** → click **Save**
5. Wait ~2 minutes, then refresh the page. A box appears at the top:
   **"Your site is live at https://YOUR-USERNAME.github.io/pdf-reader/"**
6. Click that link — the EA PDF should open. Bookmark it.

## Part 4 — Install it as a Mac app (1 min)

1. With the app open in Chrome, look at the **right end of the address bar** —
   there's a small install icon (a screen with a down-arrow), or use
   Chrome menu ⋮ → **Cast, save and share** → **Install page as app**
2. Click **Install**. The app opens in its own window and now exists as a
   real Mac app (Chrome puts it in your Applications, under "Chrome Apps").

## Part 5 — Make it the default for PDFs (1 min)

1. In **Finder**, right-click any PDF file → **Get Info**
2. Under **Open with:**, click the dropdown → **Other…**
3. In the dialog, set "Enable" to **All Applications**, then find
   **EA PDF** (look in Applications → Chrome Apps if needed),
   select it, tick **Always Open With**, click Add
4. Back in the Get Info window, click **Change All…** → **Continue**
5. Double-click any PDF to test. The **first time**, Chrome shows a small
   permission bar — click **Allow** (tick "remember") so it always opens PDFs.

Done — every PDF now opens in your reader with the file already loaded.
Multiple PDFs open as tabs inside the app.

---

## Updating the app later

When you get a new version of the app file:

1. Go to your repository on github.com → click `index.html` → click the
   **pencil icon** (top right of the file view)
2. Select-all, delete, paste in the new file's contents → **Commit changes**
   (Or: repository → **Add file → Upload files** → drag the new `index.html`
   over the old one)
3. Wait a minute or two. In `sw.js`, bumping `brs-pdf-reader-v1` to `-v2`
   the same way forces the app to pick up the update immediately.

## Troubleshooting

- **No install icon in Chrome?** Wait a minute after first load, refresh.
  Make sure you're on the `https://….github.io/…` address, not the local file.
- **App not listed in "Open with"?** It must be *installed* (Part 4) first,
  and you may need to look in ~/Applications/Chrome Apps.
- **404 page?** GitHub Pages takes a couple of minutes after setup — wait
  and refresh. Check the file is called exactly `index.html`.
- **Works offline?** Yes — after the first visit, the app and its libraries
  are cached on your Mac.
- **Privacy:** drawings/PDFs are processed entirely inside your browser.
  Nothing is uploaded to GitHub or anywhere else.
