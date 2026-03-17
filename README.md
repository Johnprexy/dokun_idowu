# Rev. Dokun Idowu — Ministry Website

**Stack:** Next.js 14 (App Router) · Tailwind CSS · Sanity CMS · TypeScript  
**Design:** Warm earth tones — parchment, amber, ember, espresso · Playfair Display + Lora + DM Sans  
**Style:** TD Jakes / Steven Furtick inspired — bold, media-heavy, spiritual

---

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set up Sanity
```bash
# Create a free Sanity project at https://sanity.io
# Then copy your Project ID from the dashboard

cp .env.local.example .env.local
# Fill in NEXT_PUBLIC_SANITY_PROJECT_ID
```

### 3. Run locally
```bash
npm run dev
# Site → http://localhost:3000
# Sanity Studio → http://localhost:3000/studio
```

---

## Sanity CMS — Content Guide

Access the Studio at `/studio`. Here's what each content type controls:

### 📄 Site Settings (one document)
| Field | Controls |
|---|---|
| Hero Tagline | Eyebrow text above the main title |
| Hero Title | Main heading (defaults to "Rev. Dokun Idowu") |
| Hero Subtitle | Paragraph below the heading |
| Hero Image | **Pastor's photo** — upload here first |
| About Image | Photo in the About section |
| About Body | Bio paragraphs (rich text) |
| Highlights | Stat cards (number + label) |
| Mentorship fields | Title, body, CTA, 4 pillars |

### 🎥 Sermons & Teachings
For each teaching:
- **Title** — shown on the card
- **YouTube Video ID** — the `v=XXXXX` part of the YouTube URL  
  e.g. `https://youtube.com/watch?v=dQw4w9WgXcQ` → enter `dQw4w9WgXcQ`
- **Series Tag** — shown as a badge (e.g. "Rhema Nigeria", "RBTC Taster")
- **Thumbnail** — optional; auto-uses YouTube thumbnail if left blank

### 💬 Quotes
Add 3 quotes from Rev. Idowu — shown in the dark quote strip.

### 👨‍👩‍👧‍👦 Family Photos
Upload family photos with captions. First photo displays larger (portrait format).

---

## Adding Pastor's Photo

1. Go to `/studio`
2. Click **Site Settings**
3. Scroll to **Hero Image** → upload his portrait
4. Also upload to **About Image** for the About section
5. Publish — changes appear in 60 seconds (ISR)

---

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard:
# NEXT_PUBLIC_SANITY_PROJECT_ID
# NEXT_PUBLIC_SANITY_DATASET
# SANITY_API_TOKEN
# NEXT_PUBLIC_WEB3FORMS_KEY
```

### CORS for Sanity
After deploying, add your Vercel URL to Sanity's allowed origins:
- Go to **sanity.io/manage** → your project → **API** → **CORS Origins**
- Add `https://yourdomain.vercel.app`

---

## Contact Form
The form uses [Web3Forms](https://web3forms.com) — free, no backend needed.
1. Sign up at web3forms.com
2. Get your access key
3. Add to `.env.local` as `NEXT_PUBLIC_WEB3FORMS_KEY`

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout + metadata
│   ├── page.tsx                # Main page (async Sanity fetches)
│   └── studio/[[...tool]]/     # Embedded Sanity Studio at /studio
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Fixed nav, scroll state, mobile menu
│   │   └── Footer.tsx          # Brand, links, social
│   └── sections/
│       ├── HeroSection.tsx     # Full-height dark hero with marquee strip
│       ├── AboutSection.tsx    # Bio + image frame + stat highlights
│       ├── QuoteStrip.tsx      # 3-column dark quote section
│       ├── TeachingsSection.tsx# Video grid + modal player
│       ├── MentorshipSection.tsx # 4-pillar grid
│       ├── FamilySection.tsx   # Photo masonry grid
│       └── ContactSection.tsx  # Split layout contact form
├── lib/
│   └── sanity.ts               # Client, urlFor(), all GROQ queries
└── styles/
    └── globals.css             # Fonts, Tailwind, animations, grain
sanity/
└── schemas/                    # All content type schemas
sanity.config.ts                # Studio config with structured sidebar
```

---

## Color Palette

| Token | Hex | Use |
|---|---|---|
| `parchment` | `#F5EFE0` | Light text on dark bg |
| `linen` | `#EDE5D0` | Section backgrounds |
| `sand` | `#D9C9A8` | Borders, dividers |
| `taupe` | `#B5A48A` | Muted labels |
| `umber` | `#7A6248` | Body text |
| `espresso` | `#3D2B1F` | Dark sections bg |
| `mahogany` | `#2A1B12` | Darkest bg (hero, footer) |
| `ember` | `#C4622D` | Primary CTA, italic accents |
| `amber` | `#D4933A` | Gold accents, eyebrows |
| `gold` | `#C8A84B` | Decorative highlights |

---

*Built for the Kingdom. Designed with purpose.*
