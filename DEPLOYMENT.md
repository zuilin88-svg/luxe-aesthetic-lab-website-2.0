# Deployment Guide

This document provides deployment instructions for the Luxe Aesthetic Lab website.

## Important: SPA Routing Configuration

This application uses React Router with `BrowserRouter` for clean URLs (e.g., `/about` instead of `/#/about`). This requires server configuration to work properly in production.

**Mobile 404 Fix:** The app includes multiple fallback mechanisms to ensure routes work on all devices and hosting platforms.

## Deployment Configurations Included

The following configuration files are already set up:

- **`netlify.toml`** - Netlify configuration with redirects and security headers
- **`vercel.json`** - Vercel configuration with rewrites
- **`public/_redirects`** - Alternative Netlify redirect file
- **`public/.htaccess`** - Apache server configuration
- **`public/404.html`** - Fallback for static hosting without redirect support

## Platform-Specific Instructions

### Netlify (Recommended for Easy Deployment)

**Configuration:** ✅ Already included (`netlify.toml` and `public/_redirects`)

1. Connect your GitHub repository to Netlify
2. Build settings are automatically detected
3. Deploy - routing will work immediately on all devices

**Manual deployment:**
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Vercel

**Configuration:** ✅ Already included (`vercel.json`)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts to deploy

Or connect your GitHub repository via the Vercel dashboard.

### Apache Server

**Configuration:** ✅ Already included (`public/.htaccess`)

The `.htaccess` file will be automatically copied to your build output. Just upload the `dist/` folder to your server.

**Requirements:**
- `mod_rewrite` must be enabled
- `AllowOverride All` in your Apache configuration

### Nginx

Add this to your Nginx configuration file:

```nginx
server {
  listen 80;
  server_name yourdomain.com;
  root /path/to/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  # Cache static assets
  location /assets/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
}
```

### GitHub Pages

**Note:** GitHub Pages requires special handling for SPAs.

1. Build: `npm run build`
2. The `404.html` fallback will handle routing automatically
3. Deploy the `dist/` folder to your `gh-pages` branch

### Firebase Hosting

Create `firebase.json` in project root:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

Deploy: `firebase deploy`

### AWS S3 + CloudFront

1. Upload `dist/` contents to S3 bucket
2. In CloudFront, set custom error responses:
   - 404 → /index.html (200 response)
   - 403 → /index.html (200 response)

### Other Static Hosting

If your hosting provider doesn't support redirects:

The included `404.html` will automatically redirect to the correct route. This works on:
- Surge.sh
- Render
- Railway
- Most static hosting platforms

## SEO Checklist

Before deploying, make sure to:

1. **Update Domain in Meta Tags**: Replace `https://luxeaestheticlab.com/` with your actual domain in:
   - `index.html` (canonical URL, Open Graph tags, Twitter tags)
   - `public/sitemap.xml` (all URL entries)
   - `public/robots.txt` (sitemap location)

2. **Add Social Media Image**: Create and add an Open Graph image at `public/og-image.jpg` (recommended size: 1200x630px)

3. **Update Structured Data**: In `index.html`, update the JSON-LD schema with:
   - Actual business phone number
   - Complete street address
   - Accurate business hours
   - Verified social media URLs

4. **Verify Domain**: Update the canonical URL domain throughout the application

5. **Submit Sitemap**: After deployment, submit your sitemap to:
   - [Google Search Console](https://search.google.com/search-console)
   - [Bing Webmaster Tools](https://www.bing.com/webmasters)

## Performance Optimization

Consider these improvements for production:

1. **Replace Tailwind CDN**: The current implementation uses Tailwind via CDN. For better performance, consider installing Tailwind CSS as a dependency and using PostCSS.

2. **Image Optimization**: Optimize all images and consider using WebP format with fallbacks.

3. **Lazy Loading**: Images are already using native lazy loading where appropriate.

## Deployment Steps

1. Build the production bundle:
   ```bash
   npm run build
   ```

2. Test the production build locally:
   ```bash
   npm run preview
   ```

3. Deploy the `dist/` folder to your hosting provider.

4. Verify all routes work correctly.

5. Test SEO meta tags using:
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
