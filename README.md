# Anis Douar — Video Editor Portfolio

A cinematic portfolio website for **Anis Douar**, creator of the [Movies Consigliere](https://www.youtube.com/@MoviesConsigliere) YouTube channel.

## Features

- 🎬 **Embedded YouTube videos** with live stats (views, likes, comments)
- 🎨 **Dark cinematic theme** inspired by classic film aesthetics
- 📱 **Fully responsive** — looks great on desktop, tablet, and mobile
- 🔍 **Category filters** — filter by Goodfellas, The Godfather, Pulp Fiction, The Sopranos, and more
- ✉️ **Contact form** with mailto fallback (no backend needed)
- ⚡ **Zero dependencies** — pure HTML, CSS, and vanilla JavaScript

## Setup: YouTube API Key (Optional but Recommended)

To display live video stats (view count, likes, comments) and channel stats (subscribers, total views):

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or use existing)
3. Enable the **YouTube Data API v3**
4. Create an **API Key** under Credentials
5. (Recommended) Restrict the key to:
   - **YouTube Data API v3** only
   - Your website domain (HTTP referrer restriction)
6. Open `script.js` and paste your key:
   ```js
   const YT_API_KEY = 'YOUR_API_KEY_HERE';
   ```

> Without an API key, the site still works — videos are fully playable, but stats will show "Watch on YouTube" links instead of numbers.

## Free Hosting with GitHub Pages

1. Create a GitHub account at [github.com](https://github.com) (if you don't have one)
2. Create a new repository (e.g., `portfolio`)
3. Upload all three files (`index.html`, `style.css`, `script.js`)
4. Go to **Settings → Pages**
5. Under "Source", select **Deploy from a branch**
6. Choose `main` branch and `/ (root)` folder
7. Click **Save**
8. Your site will be live at `https://yourusername.github.io/portfolio/`

### Alternative: Use the repository name `yourusername.github.io`
If you name your repo `yourusername.github.io`, it becomes your root GitHub Pages site at `https://yourusername.github.io/`.

## File Structure

```
├── index.html    # Main HTML structure
├── style.css     # All styling (dark cinematic theme)
├── script.js     # Video data, API calls, filtering, interactions
└── README.md     # This file
```

## Customization

- **Add/remove videos**: Edit the `VIDEOS` array in `script.js`
- **Change colors**: Edit CSS custom properties in `:root` in `style.css`
- **Update bio**: Edit the About section in `index.html`
- **Add social links**: Add more links in the Contact section in `index.html`

## License

© 2024 Anis Douar. All rights reserved.
