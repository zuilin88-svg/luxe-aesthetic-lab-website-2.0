# Deployment Guide

This document provides deployment instructions for the Luxe Aesthetic Lab website.

## Important: SPA Routing Configuration

This application uses React Router with `BrowserRouter` for clean URLs (e.g., `/about` instead of `/#/about`). This requires server configuration to work properly in production.

### Netlify

A `_redirects` file is included in the `public/` folder. No additional configuration needed.

```
/*    /index.html   200
```

### Vercel

Create a `vercel.json` file in the project root:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Apache (.htaccess)

If deploying to an Apache server, create a `.htaccess` file in your build output directory:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Nginx

Add this to your Nginx configuration:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Other Hosting Providers

Ensure your hosting provider is configured to serve `index.html` for all routes. Consult their documentation for SPA deployment.

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
