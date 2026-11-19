# SYNERA Setup

## Requirements

- Node.js 20+
- npm
- A Supabase project

## Install

```bash
npm install
cp .env.example .env.local
npm run dev
```

Fill the public Supabase variables in `.env.local`:

```text
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```

Never commit `.env.local` or place `SUPABASE_SERVICE_ROLE_KEY` in browser/client code.

## Supabase Auth

Configure the site URL and redirect URLs for your environment:

- Development: `http://localhost:3000/**`
- Production: your Vercel domain and callback routes

Email confirmation and password recovery should be enabled according to the deployment policy.

## Available scripts

```bash
npm run dev
npm run build
npm run lint
npm run test
npm run test:e2e
```
