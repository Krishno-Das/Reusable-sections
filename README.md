# Section Catalog

A personal static gallery of reusable UI sections — browse by thumbnail, click a card to copy the HTML or CSS straight into any project. No build step, no framework, no dependencies.

## Files

```
index.html      ← the page (HTML + inline JS, no dependencies)
css/style.css   ← all styles
js/data.js      ← YOUR sections go here (the only file you edit)
```

## Add a new section

Open `js/data.js` and copy the template block at the bottom of the file. Fill in:

- **id** — unique slug, e.g. `hero-02`
- **code** — catalog label shown on the card, e.g. `HERO-02`
- **name** — human-readable name
- **category** — used for the filter tabs (e.g. `Hero`, `Navbar`, `Cards`)
- **tags** — extra search keywords as an array
- **thumbnail** — an SVG string (inline, no file needed). Sketch a simple schematic of the layout — rectangles, lines, circles. Copy the style of the existing thumbnails: dark `#14202a` background, `#1e3a4a` shapes, `#4fa8a8` accents, `#c97a3d` highlight.
- **html** — your markup (use a template literal)
- **css** — your styles

Save and refresh — nothing else to touch.

## Run locally

Open `index.html` directly in a browser. If you want `file://` links to feel identical to the live site, serve it:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository:

```bash
git init
git add .
git commit -m "Initial catalog"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

2. In the repository on GitHub go to **Settings → Pages**.
3. Set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save. Your site is live at `https://YOUR-USERNAME.github.io/YOUR-REPO/` within ~60 seconds.

Every `git push` to `main` redeploys automatically.
