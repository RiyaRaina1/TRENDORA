# Trendora

AI-powered Instagram growth toolkit built with React, TypeScript, Vite, Tailwind CSS, and Supabase (optional).

## Features

- Caption Generator (viral score)
- Hook Generator
- Reel Script Generator
- Hashtag Intelligence
- Trend Radar
- Carousel Generator
- 30-day Content Calendar
- AI Growth Assistant chat
- Saved Library
- Pricing page scaffold

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 3
- Framer Motion
- React Router 7
- Supabase JS 2 (optional)
- Sonner (toasts)

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create env file:

```bash
cp .env.example .env
```

3. Add environment variables if you want real Supabase auth/storage:

- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY

If variables are missing, the app runs in demo mode with mock AI responses and local storage fallback.

4. Start dev server:

```bash
npm run dev
```

5. Build for production:

```bash
npm run build
```

## Deploy to Vercel (Recommended)

### One-time setup

1. Push this repo to GitHub.
2. In Vercel, click New Project and import the repository.
3. Framework Preset: Vite (auto-detected).
4. Build settings (already configured in vercel.json):
   - Build Command: npm run build
   - Output Directory: dist
5. Add environment variables in Vercel Project Settings > Environment Variables:
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY
6. Deploy.

### Why this works for SPA routes

The included vercel.json adds a fallback so direct refreshes on routes like /dashboard/captions do not 404.

## Optional: Deploy with Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

## Notes

- Node.js 20+ is required.
- If Supabase is not configured, auth/content still works in demo mode.
