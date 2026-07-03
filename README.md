# Section Catalog

A personal static gallery of reusable UI sections. No build step, no framework, no dependencies.

## Adding a screenshot thumbnail

1. Open the section's **Preview ↗** in your browser
2. Take a screenshot (crop it tight to the component)
3. Save it into the `/thumbnails` folder, e.g. `thumbnails/hero-01.png`
4. In `js/data.js` change the section's `thumbnail` field:
   ```js
   thumbnail: 'thumbnails/hero-01.png',
   ```
5. Push to GitHub — the image shows up automatically

## Adding a new section

Open `js/data.js` and copy the template at the bottom. Fill in `id`, `code`, `name`, `category`, `tags`, `thumbnail`, `html`, and `css`. Save and push.

## Deploy to GitHub Pages

```bash
git add .
git commit -m "Update"
git push
```

Settings → Pages → Source: Deploy from branch → main / root → Save.

Live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`
