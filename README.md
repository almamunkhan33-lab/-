# নতুন দিনের বার্তা — Deployable News Portal

বাংলা নিউজ পোর্টাল starter built with Next.js 15 + React 19.

## Brand
- Name: নতুন দিনের বার্তা
- Tagline: সত্যের সাথে ন্যায়ের পথে অবিচল

## Local run
```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain before production.

## Production build
```bash
npm install
npm run build
npm start
```

## Deploy to Vercel (recommended)
1. Upload this project to a GitHub repository.
2. Import the repository into Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the final domain, e.g. `https://news.example.com`.
4. Deploy.
5. In Vercel → Settings → Domains, add your own domain.
6. At your domain registrar/DNS provider, add the DNS record Vercel asks for.
7. Wait for DNS + SSL to become active.

## Facebook sharing
Every article uses server-rendered Next.js metadata:
- og:title
- og:description
- og:image
- og:url
- og:type=article
- canonical URL
- Twitter summary_large_image
- NewsArticle JSON-LD

Before sharing publicly, make sure `NEXT_PUBLIC_SITE_URL` is the real HTTPS domain and article images are publicly accessible HTTPS URLs.

## Important for the 10 demo posts
The included demo posts are paraphrased demo summaries based on current Daily Ittefaq archive items and link back to Ittefaq as the source. Replace them with your own verified reporting, licensed/owned images, and original article text before publication.

## Own hosting
Vercel is the easiest option for this Next.js project. If your hosting provider supports Node.js/Next.js, use the production commands above and configure the provider's reverse proxy/domain settings to point to the Next.js server.
