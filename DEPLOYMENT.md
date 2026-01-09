# AgentCamp 2026 - Deployment Guide

## Netlify Deployment

This project is configured for automatic deployment on Netlify.

### Build Settings

- **Build Command**: `npm run build`
- **Publish Directory**: `app/dist`
- **Base Directory**: `app`
- **Node Version**: 20

### Environment Variables

No environment variables are required for basic deployment.

### Routes

All routes are handled by React Router with client-side routing:

- `/` - Homepage
- `/fase-0` to `/fase-6` - Workshop phases
- `/technical` - Technical deep dive
- `/articles/fundamentos-ia` - AI Fundamentals article
- `/articles/machine-learning` - Machine Learning article
- `/articles/ia-agentica` - Agentic AI article

### SEO Configuration

- **Sitemap**: Available at `/sitemap.xml`
- **Robots.txt**: Available at `/robots.txt`
- **Meta Tags**: Comprehensive SEO, Open Graph, and Twitter Card tags
- **Structured Data**: Schema.org Event markup

### Redirects

All routes redirect to `/index.html` for SPA functionality (status 200).
Legacy routes (e.g., `/fase0`) redirect to new format (e.g., `/fase-0`) with 301 status.

### Headers

Security headers are configured:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

Static assets are cached for 1 year with immutable flag.

### Manual Deployment

1. Push changes to the main branch
2. Netlify will automatically build and deploy
3. Check deployment status in Netlify dashboard

### Local Testing

```bash
cd app
npm install
npm run build
npm run preview
```

This will build and preview the production version locally.
