# Eagle Vision Tech — Production Marketing Website

A high-performance, modern multi-section marketing website for **Eagle Vision Tech** (`https://eaglevisiontech.in/`), an IT services and digital agency based in **Wilson Garden, Bangalore**.

Engineered with Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, and React Hook Form + Zod, built from scratch with 100% original content and hyper-targeted for local Bangalore search engine optimization (SEO).

---

## 🚀 Key Features & Highlights

- **Local SEO Domination**:
  - Primary Local Keyword: *"Website Development Company in Wilson Garden, Bangalore"*
  - Structured Semantic Data: `LocalBusiness`, `Organization`, `Service`, `FAQPage`, `BreadcrumbList`, and `Article` JSON-LD schemas
  - Auto-generated `sitemap.xml` and `robots.txt`
  - High-intent local keyword targeting: "web development company near me", "SEO services near me Bangalore", "mobile app development Wilson Garden"
- **All 13 Home Page Sections**:
  1. Sticky header with logo, navigation, services dropdown, CTA & mobile drawer
  2. Hero with primary local keyword H1, one-line subheading, dual CTAs & stats graphic
  3. Trust strip with animated counters (12+ Years, 250+ Projects, 99% Satisfaction, 24/7 SLA)
  4. Services grid with 6 cards and "Learn more" links
  5. Why Choose Us with 6 differentiators
  6. 5-step process timeline (Discovery → Design → Development → Testing → Launch & Support)
  7. Portfolio preview with 6 project cards and impact metrics
  8. Technology logo row (Next.js, React, Node, WordPress, Flutter, Laravel, etc.)
  9. Testimonials carousel featuring 5 realistic Bangalore business reviews
  10. 3-tier pricing packages with quote CTA buttons
  11. Interactive FAQ accordion with 8 local-SEO questions & FAQPage JSON-LD
  12. High-conversion final CTA banner
  13. Complete footer with NAP (Name, Address, Phone), embedded Google Map, and quick links
- **Full Route Suite**:
  - `/` (Home)
  - `/about` (Company story, values, team & Wilson Garden culture)
  - `/services` (Comprehensive services overview)
  - `/services/web-development`
  - `/services/web-design`
  - `/services/seo`
  - `/services/mobile-app-development`
  - `/services/crm`
  - `/services/erp`
  - `/portfolio` (Filterable project grid across Web, Mobile, CRM/ERP, UI/UX, E-Commerce)
  - `/blog` & `/blog/[slug]` (3 in-depth, original articles with table of contents & schemas)
  - `/contact` (Interactive contact form, NAP details, embedded map & business hours)
  - `/privacy-policy` & `/terms` (Compliant with IT Act 2000 & DPDP Act 2023 principles)
  - Custom `not-found.tsx` (404 page)
- **High-Conversion Inbound Lead Flow**:
  - React Hook Form + Zod client validation
  - Honeypot anti-spam protection
  - Confetti celebration upon quotation submission
  - Floating WhatsApp bubble with pulse ping badge
  - Floating click-to-call mobile button
  - Route handler (`/api/contact`) with email dispatch simulation and Resend API support

---

## 📁 Project Structure

```
demo/
├── public/
│   └── images/
│       ├── banner.png                  # Showcase graphic
│       ├── eagle-emblem.png            # Brand logo emblem
│       └── process-infographic.png     # Engineering process graphic
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts            # Contact form route handler with validation & honeypot
│   │   ├── about/
│   │   │   └── page.tsx                # About company, values, team & location
│   │   ├── blog/
│   │   │   ├── page.tsx                # Blog index & featured guide
│   │   │   └── [slug]/
│   │   │       └── page.tsx            # Dynamic reading view with TOC & Article JSON-LD
│   │   ├── contact/
│   │   │   └── page.tsx                # NAP, interactive form & Google Map embed
│   │   ├── portfolio/
│   │   │   └── page.tsx                # Filterable case study showcase
│   │   ├── privacy-policy/
│   │   │   └── page.tsx                # Privacy policy (IT Act / DPDP)
│   │   ├── services/
│   │   │   ├── page.tsx                # Services overview
│   │   │   └── [slug]/
│   │   │       └── page.tsx            # Dynamic route for all 6 core services
│   │   ├── terms/
│   │   │   └── page.tsx                # Terms of service
│   │   ├── globals.css                 # Custom scrollbar, typography & Tailwind
│   │   ├── layout.tsx                  # Root layout with LocalBusiness JSON-LD & sticky nav
│   │   ├── not-found.tsx               # Custom 404 page
│   │   ├── page.tsx                    # Home page (all 13 sections in order)
│   │   ├── robots.ts                   # Robots.txt generator
│   │   └── sitemap.ts                  # Sitemap.xml generator
│   ├── components/
│   │   ├── forms/
│   │   │   └── ContactForm.tsx         # Client form with Zod, honeypot, confetti
│   │   ├── home/
│   │   │   ├── FAQAccordion.tsx        # SEO accordion + FAQPage schema
│   │   │   ├── FinalCTA.tsx            # High-conversion gradient banner
│   │   │   ├── Hero.tsx                # Local H1, dual CTAs & stats graphic
│   │   │   ├── PortfolioPreview.tsx    # 6 project cards with impact metrics
│   │   │   ├── PricingSection.tsx      # 3 transparent packages
│   │   │   ├── ProcessTimeline.tsx     # 5-step development workflow
│   │   │   ├── ServicesGrid.tsx        # 6 services with cards
│   │   │   ├── TechStackRow.tsx        # Technology badges
│   │   │   ├── TestimonialsSection.tsx # Interactive review carousel
│   │   │   ├── TrustStrip.tsx          # Animated counters
│   │   │   └── WhyChooseUs.tsx         # 6 local differentiators
│   │   ├── layout/
│   │   │   ├── CookieConsent.tsx       # GDPR/DPDP cookie banner
│   │   │   ├── FloatingCTAs.tsx        # WhatsApp bubble & mobile call pill
│   │   │   ├── Footer.tsx              # Full NAP, Google Map embed & links
│   │   │   └── Navbar.tsx              # Sticky header with services dropdown & mobile drawer
│   │   ├── seo/
│   │   │   └── JsonLd.tsx              # LocalBusiness, Service, FAQ, Breadcrumbs & Article schemas
│   │   └── ui/
│   │       ├── Badge.tsx               # Pill badges
│   │       ├── Button.tsx              # Reusable button with variants
│   │       ├── Card.tsx                # Rounded-2xl card primitive
│   │       └── SectionHeading.tsx      # Semantic typography header
│   ├── data/
│   │   ├── blog.ts                     # 3 comprehensive articles with TOC
│   │   ├── faqs.ts                     # 8 local-SEO questions & answers
│   │   ├── portfolio.ts                # 8 detailed client case studies
│   │   ├── pricing.ts                  # 3 pricing tiers (Starter, Growth, Enterprise)
│   │   ├── services.ts                 # All 6 services with features, tech & pricing
│   │   ├── site-config.ts              # NAP, coordinates, phone, WhatsApp & social links
│   │   └── testimonials.ts             # 5 Bangalore client reviews
│   └── lib/
│       └── utils.ts                    # Class name utility & currency formatting
├── .env.example
├── .env.local
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🛠️ Quick Start & Setup

### 1. Prerequisites
- Node.js 18.17+ or 20+
- pnpm (recommended) or npm

### 2. Installation
```bash
pnpm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Configure your credentials:
```env
NEXT_PUBLIC_SITE_URL=https://eagletech.in
NEXT_PUBLIC_COMPANY_NAME="Eagle Vision Tech"
NEXT_PUBLIC_PHONE="+919886012345"
NEXT_PUBLIC_WHATSAPP="+919886012345"
NEXT_PUBLIC_EMAIL="contact@eagletech.in"

# Resend API Key for automated lead notifications (optional)
RESEND_API_KEY=re_123456789
CONTACT_NOTIFICATION_EMAIL=contact@eagletech.in
```

### 4. Running Locally
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
pnpm build
pnpm start
```

---

## 🎨 How to Edit Content, Colours & SEO

### 1. Editing Company Details & NAP (Name, Address, Phone)
All contact information is centralized in **`src/data/site-config.ts`**:
- Company Legal Name & Tagline
- Address, Wilson Garden Landmarks, and GPS Coordinates
- Phone numbers, Email, and WhatsApp number
- Navigation items and Google Map embed URL

### 2. Editing Services, Pricing & Portfolio
- **Services**: Edit **`src/data/services.ts`** to update pricing, turnaround times, deliverables, tech stacks, and FAQs for each of the 6 services.
- **Pricing Tiers**: Edit **`src/data/pricing.ts`** to update packages, inclusions, and labels.
- **Portfolio Projects**: Edit **`src/data/portfolio.ts`** to add new case studies, images, and ROI statistics.
- **Testimonials**: Edit **`src/data/testimonials.ts`** to update client reviews.
- **FAQs**: Edit **`src/data/faqs.ts`** to add or modify questions.

### 3. Customizing Brand Colors
Colors are defined in **`tailwind.config.ts`** and **`src/app/globals.css`**:
- **Primary Brand Color**: `colors.brand[600]` (Default: `#2563eb`)
- **Secondary Accent**: `colors.accent[500]` (Default: `#06b6d4`)
- **Gold Accent**: `colors.gold[500]` (Default: `#f59e0b`)

---

## 📋 Post-Launch SEO & Marketing Checklist

1. **Google Business Profile (GBP)**:
   - Ensure the Business Name matches: *"Eagle Vision Tech"*
   - Address: *"No. 14/2, 10th Cross, Subbaiah Circle Road, Wilson Garden, Bangalore 560027"*
   - Add Primary Category: *"Website Designer"* and Secondary Categories: *"Software Company"*, *"Internet Marketing Service"*.
   - Upload office photos with geo-coordinates tagged to Wilson Garden.
2. **Google Search Console (GSC)**:
   - Verify domain property via DNS TXT record or HTML tag.
   - Submit sitemap URL: `https://yourdomain.com/sitemap.xml`.
   - Monitor Index Coverage to ensure all 23 routes are indexed.
3. **Schema Markup Validation**:
   - Test `https://yourdomain.com` with Google's [Rich Results Test](https://search.google.com/test/rich-results).
   - Verify `LocalBusiness`, `Organization`, and `FAQPage` schemas have zero errors.
4. **Google Analytics 4 & Conversion Tracking**:
   - Set up custom events for `form_submission`, `whatsapp_click`, and `phone_call_click`.
5. **Local Citations**:
   - Claim listings on Justdial, IndiaMART, Sulekha, and TradeIndia with exact matching NAP.
