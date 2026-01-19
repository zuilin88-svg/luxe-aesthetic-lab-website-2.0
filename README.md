<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Luxe Aesthetic Lab Website 2.0

A modern, responsive marketing website for Luxe Aesthetic Lab - a luxury skincare and aesthetic services provider in East Meadow, Long Island.

## Tech Stack

- **Frontend Framework:** React 19 with TypeScript
- **Build Tool:** Vite 6
- **Routing:** React Router 7
- **Styling:** Tailwind CSS (CDN)
- **Icons:** Lucide React
- **Fonts:** Playfair Display & Lato (Google Fonts)

## Features

- Responsive design optimized for all devices
- Service catalog with detailed information
- Customer testimonials and reviews
- FAQ section
- About page with business information
- Smooth scrolling and animations
- SEO-optimized meta tags

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd "Luxe Website2.0"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your API keys.

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Type Checking

Run TypeScript type checking:
```bash
npm run typecheck
```

### Building for Production

Build the application:
```bash
npm run build
```

This will:
1. Run TypeScript type checking
2. Build the production bundle to the `dist` directory

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
.
├── components/
│   └── Layout/
│       ├── Header.tsx
│       └── Footer.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── ServiceDetail.tsx
│   ├── Testimonials.tsx
│   └── FAQ.tsx
├── App.tsx              # Main app component with routing
├── index.tsx            # Application entry point
├── constants.ts         # Service data and site constants
├── types.ts             # TypeScript type definitions
├── index.html           # HTML template
└── vite.config.ts       # Vite configuration
```

## Environment Variables

See `.env.example` for required environment variables.

- `GEMINI_API_KEY` - API key for Gemini AI features (optional)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## SEO Features

This website includes comprehensive SEO optimizations:

- **Semantic HTML structure** with proper heading hierarchy
- **Open Graph tags** for social media sharing
- **Twitter Card meta tags** for Twitter previews
- **Structured Data (JSON-LD)** for local business schema
- **Canonical URLs** to prevent duplicate content
- **Sitemap.xml** for search engine crawling
- **Robots.txt** for crawler directives
- **Clean URLs** using BrowserRouter (no hash URLs)
- **Image alt attributes** for accessibility and SEO
- **Meta descriptions** and title tags optimized for search

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions and SEO configuration checklist.

**Important:** Before deploying, update the domain URLs in:
- `index.html` (meta tags)
- `public/sitemap.xml`
- `public/robots.txt`

## License

See LICENSE file for details.
