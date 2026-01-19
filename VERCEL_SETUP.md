# Vercel Automatic Deployment Setup

This guide shows how to connect your GitHub repository to Vercel for automatic deployments.

## Automatic Deployment (Recommended)

### Using Vercel Dashboard

1. **Visit Vercel Dashboard**: https://vercel.com/dashboard

2. **Import Repository**:
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Select `luxe-aesthetic-lab-website-2.0`
   - Click "Import"

3. **Configure Build Settings**:
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   Root Directory: ./
   ```

   ✅ These should be auto-detected from vercel.json

4. **Environment Variables** (Optional):
   - Add `GEMINI_API_KEY` if using AI features
   - Click "Add" to save

5. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete (~2 minutes)
   - Get your live URL: `https://your-project.vercel.app`

### What Happens After Setup

✅ **Automatic Deployments**: Every push to `main` branch triggers a new deployment
✅ **Preview Deployments**: Pull requests get preview URLs automatically
✅ **Production URL**: Your main branch deploys to production
✅ **Build Logs**: View real-time build logs in dashboard
✅ **Instant Rollbacks**: Rollback to any previous deployment instantly

### Branch Deployments

- **main branch** → Production deployment
- **Pull requests** → Preview deployments with unique URLs
- **Other branches** → Can be configured for preview deployments

## Using Vercel CLI (Alternative)

If you prefer command line:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Link project to GitHub repo (one-time setup)
vercel link

# Deploy to production
vercel --prod
```

After running `vercel link`, Vercel will connect your local project to the GitHub repository and enable automatic deployments.

## Verify Automatic Deployment Works

1. Make a small change to your project
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Test automatic deployment"
   git push origin main
   ```
3. Visit your Vercel dashboard
4. You should see a new deployment automatically triggered
5. Wait for it to complete (~1-2 minutes)
6. Visit your production URL to see the changes

## Deployment Settings

Your project includes:
- ✅ `vercel.json` - Build and routing configuration
- ✅ SPA routing redirects
- ✅ Security headers
- ✅ Asset caching (1 year for static files)

## Troubleshooting

**Build fails?**
- Check build logs in Vercel dashboard
- Ensure `package.json` scripts are correct
- Verify all dependencies are in `package.json`

**Routes not working?**
- The `vercel.json` rewrites should handle this
- Check deployment logs for any errors

**Need to update environment variables?**
- Go to Project Settings → Environment Variables
- Add/edit variables
- Redeploy for changes to take effect

## Managing Deployments

**View all deployments**:
- Dashboard → Your Project → Deployments

**Rollback to previous version**:
- Find deployment in list
- Click "..." menu → "Promote to Production"

**Delete a deployment**:
- Click "..." menu → "Delete"

**View build logs**:
- Click on any deployment → View build logs

## Custom Domain Setup

After your site is working:

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate (automatic)
5. Your site will be live on your domain!

## Performance Features

Vercel automatically provides:
- ✅ Global CDN (Edge Network)
- ✅ Automatic SSL certificates
- ✅ Image optimization
- ✅ Instant cache invalidation
- ✅ Zero-downtime deployments
- ✅ DDoS protection

## Monitoring

- **Analytics**: Enable in project settings for visitor insights
- **Logs**: Real-time function and build logs
- **Performance**: Web Vitals tracking available
