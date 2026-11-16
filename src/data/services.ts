export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  localTitle: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  iconName: string;
  startingPrice: string;
  turnaroundTime: string;
  deliverables: string[];
  benefits: { title: string; description: string }[];
  features: { title: string; description: string }[];
  technologies: string[];
  useCases: { industry: string; scenario: string }[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "web-dev",
    slug: "web-development",
    title: "Custom Website Development",
    localTitle: "Website Development Company in Wilson Garden, Bangalore",
    metaTitle: "Website Development in Wilson Garden, Bangalore | Eagle Vision Tech",
    metaDescription:
      "Looking for a top website development company in Wilson Garden, Bangalore? Eagle Vision Tech builds ultra-fast, mobile-responsive, SEO-optimized business websites.",
    shortDescription:
      "Engineered for speed, conversion, and effortless Google ranking. Custom Next.js, WordPress, and full-stack solutions for ambitious Bangalore businesses.",
    heroHeadline: "Custom Website Development Built for Bangalore's Fast-Moving Businesses",
    heroSubtitle:
      "Stop losing customers to outdated websites. We build lightning-fast, high-converting digital storefronts that generate genuine local enquiries 24/7.",
    iconName: "Code2",
    startingPrice: "₹14,999",
    turnaroundTime: "7 - 14 Days",
    deliverables: [
      "Custom responsive design (Mobile, Tablet, Desktop)",
      "Next.js 14 SSR/SSG architecture for sub-second loads",
      "Full local SEO on-page markup and schema tags",
      "Contact forms connected with WhatsApp & instant email alerts",
      "Google Analytics 4 & Search Console verification",
      "1-Year free technical support & daily cloud backups",
    ],
    benefits: [
      {
        title: "Sub-Second Page Loads",
        description:
          "90+ Google PageSpeed score guaranteed. Fast load times keep visitors engaged and dramatically increase search engine rankings.",
      },
      {
        title: "Conversion-Focused Architecture",
        description:
          "Strategic CTA placement, clear service breakdowns, and 1-click WhatsApp inquiry buttons designed specifically to drive phone calls and quotation requests.",
      },
      {
        title: "Full Ownership & No Lock-in",
        description:
          "You own 100% of your source code, domain, and hosting. No hidden monthly hostage fees or proprietary lock-ins.",
      },
      {
        title: "Local Bangalore Support",
        description:
          "Meet us right here in Wilson Garden. Direct access to our engineering team whenever you need updates or additions.",
      },
    ],
    features: [
      {
        title: "Custom Full-Stack Builds",
        description: "Tailored code using Next.js, React, and Node.js without bloated heavy plugins.",
      },
      {
        title: "CMS Integration",
        description: "Easy-to-use admin panel for editing products, banners, blogs, and team members with zero coding required.",
      },
      {
        title: "E-Commerce & Payment Gateways",
        description: "Razorpay, Cashfree, UPI, and Stripe integrations with automated WhatsApp order updates.",
      },
      {
        title: "Lead Capture & CRM Sync",
        description: "Automated routing of inbound enquiries directly into your Google Sheets, CRM, or sales phone.",
      },
      {
        title: "Enterprise Grade Security",
        description: "SSL configuration, DDOS mitigation, form honeypot spam filters, and strict sanitization.",
      },
      {
        title: "Accessibility (WCAG 2.1)",
        description: "Accessible color contrast, screen-reader markup, and intuitive keyboard navigation.",
      },
    ],
    technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Node.js", "WordPress", "PostgreSQL", "Vercel"],
    useCases: [
      {
        industry: "Medical Clinics & Doctors",
        scenario: "Appointment booking, doctor profiles, patient test reviews, and Google Maps directions.",
      },
      {
        industry: "Retail & Wholesalers",
        scenario: "Catalog showcases, WhatsApp B2B order requests, and quotation generators.",
      },
      {
        industry: "Professional Services & CA Firms",
        scenario: "High-trust corporate portfolios, client consultation intake forms, and case studies.",
      },
      {
        industry: "Bangalore Tech Startups",
        scenario: "Modern SaaS landing pages, interactive product previews, and investor decks.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to build a business website in Wilson Garden?",
        answer:
          "For standard 5-to-10 page business websites, our typical turnaround is 7 to 12 working days from content approval. Custom web applications and e-commerce platforms take between 3 to 5 weeks.",
      },
      {
        question: "Will my website rank on Google for local searches in Bangalore?",
        answer:
          "Yes. Every website we build includes complete technical and on-page SEO: localized schema JSON-LD, meta titles targeting your neighborhood/city, sitemaps, OpenGraph tags, and lightning-fast Core Web Vitals.",
      },
      {
        question: "Can I edit text and photos myself after launch?",
        answer:
          "Absolutely. We deliver an intuitive, user-friendly CMS dashboard along with recorded video training so anyone on your team can update copy, photos, and blog posts effortlessly.",
      },
      {
        question: "Can we visit your office in Wilson Garden to discuss the project?",
        answer:
          "Yes! We welcome local business owners to our office in Wilson Garden, Bangalore for in-person consultations, wireframe discussions, and coffee.",
      },
    ],
  },
  {
    id: "web-design",
    slug: "web-design",
    title: "UI/UX & Web Design",
    localTitle: "UI/UX & Website Design Services in Wilson Garden, Bangalore",
    metaTitle: "Web Design in Wilson Garden, Bangalore | Eagle Vision Tech",
    metaDescription:
      "Expert UI/UX and website design agency in Wilson Garden, Bangalore. We craft visually stunning, user-friendly, high-converting digital interfaces in Figma.",
    shortDescription:
      "Human-centered design that turns casual visitors into lifelong customers. Mobile-first Figma prototypes, design systems, and brand identities.",
    heroHeadline: "Modern Web Design That Establishes Instant Credibility & Trust",
    heroSubtitle:
      "In a crowded Bangalore market, first impressions are everything. We design clean, elegant, and interactive interfaces that elevate your brand above the competition.",
    iconName: "Palette",
    startingPrice: "₹11,999",
    turnaroundTime: "5 - 10 Days",
    deliverables: [
      "Complete Figma design file with interactive clickable prototype",
      "Custom responsive layouts for mobile, tablet, and widescreen",
      "Brand style guide: typography, color palette, icons, and button states",
      "Micro-animations and scroll interaction specifications",
      "Asset export in optimized SVG, WebP, and vector formats",
      "Developer handoff with design tokens",
    ],
    benefits: [
      {
        title: "Distinctive Visual Identity",
        description: "No cookie-cutter templates. We craft tailored visual aesthetics that represent your brand personality.",
      },
      {
        title: "Intuitive User Journeys",
        description: "Eliminate friction so customers find what they need in fewer than 3 clicks.",
      },
      {
        title: "Figma Interactive Prototypes",
        description: "Click through and test your real website design on your phone before a single line of code is written.",
      },
      {
        title: "Optimized for Mobile Screens",
        description: "Over 75% of Indian web traffic is mobile. We design thumb-friendly layouts with intuitive bottom CTAs.",
      },
    ],
    features: [
      {
        title: "Wireframing & Information Architecture",
        description: "Structuring your site content logically for maximum user engagement and search engine clarity.",
      },
      {
        title: "High-Fidelity Figma UI",
        description: "Pixel-perfect mockups with real typography scales, soft shadows, and modern whitespace.",
      },
      {
        title: "Design System Architecture",
        description: "Reusable component libraries for buttons, modals, cards, and inputs for long-term consistency.",
      },
      {
        title: "Interactive Micro-Interactions",
        description: "Subtle hover states, card lifts, and progress bars that give your site a premium, polished feel.",
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        description: "High-contrast CTA buttons, trust badges, and social proof layouts proven to lift inquiry rates.",
      },
      {
        title: "Brand Collateral Integration",
        description: "Cohesive logos, custom icons, and visual graphics that align with your offline marketing material.",
      },
    ],
    technologies: ["Figma", "Adobe XD", "Illustrator", "Tailwind CSS", "Framer", "Lottie Animations"],
    useCases: [
      {
        industry: "Boutique Retail & Fashion",
        scenario: "Lookbooks, high-fashion aesthetic grids, and seamless shopping cart checkout flows.",
      },
      {
        industry: "Real Estate & Architecture",
        scenario: "Floorplan showcases, virtual project walk-throughs, and luxury aesthetic branding.",
      },
      {
        industry: "Education & Coaching Centers",
        scenario: "Course curriculum tables, student testimonials, and easy fee inquiry forms.",
      },
      {
        industry: "Hospitality & Cafes",
        scenario: "Mouth-watering visual digital menus, Instagram feed integration, and table booking UI.",
      },
    ],
    faqs: [
      {
        question: "Do you provide Figma files after the project is done?",
        answer:
          "Yes. You receive full edit and view access to the complete Figma master file, organized with auto-layouts, components, and exportable vectors.",
      },
      {
        question: "How many design revisions are included?",
        answer:
          "We offer 3 iterative feedback rounds on the wireframes and high-fidelity mockups to ensure the final look is 100% aligned with your vision.",
      },
      {
        question: "Can you redesign my existing slow or outdated website?",
        answer:
          "Yes! We frequently overhaul outdated websites, improving user flow, mobile responsiveness, and conversion rates without losing existing SEO rank.",
      },
      {
        question: "Can your team also code the design after approval?",
        answer:
          "Yes, we are a full-service agency. Our frontend engineering team translates the approved Figma prototypes into clean Next.js/Tailwind code.",
      },
    ],
  },
  {
    id: "seo",
    slug: "seo",
    title: "Local SEO & Digital Marketing",
    localTitle: "Local SEO & Google Ranking Services in Wilson Garden, Bangalore",
    metaTitle: "SEO Services in Wilson Garden, Bangalore | Eagle Vision Tech",
    metaDescription:
      "Dominate local Google search and Google Maps in Wilson Garden & Bangalore. Drive high-intent customer phone calls and inquiries with proven local SEO.",
    shortDescription:
      "Get found when nearby customers search for your services. Google Business Profile optimization, local keyword domination, and high-authority citation building.",
    heroHeadline: "Rank #1 on Google When Customers in Bangalore Search For Your Business",
    heroSubtitle:
      "Stop wasting ad money on temporary clicks. Build long-term organic visibility on Google Search and Maps that generates steady inbound leads every single day.",
    iconName: "TrendingUp",
    startingPrice: "₹9,999/mo",
    turnaroundTime: "Ongoing / 30-Day Sprints",
    deliverables: [
      "Complete Google Business Profile (GBP) audit & optimization",
      "Targeted local keyword research (Wilson Garden, Lalbagh, South Bangalore)",
      "Technical SEO fix: Core Web Vitals, crawl errors, structured data JSON-LD",
      "On-page optimization of all H1s, meta tags, and internal link silos",
      "Local citations on 50+ verified Indian business directories",
      "Monthly transparent rank tracking & phone call attribution reports",
    ],
    benefits: [
      {
        title: "Top 3 Google Map Pack Presence",
        description: "Appear in the coveted 3-pack on Google Maps when local customers search 'near me' on their smartphones.",
      },
      {
        title: "High-Intent Inbound Phone Calls",
        description: "Local searchers are ready to buy. We turn organic traffic directly into direct phone calls and WhatsApp messages.",
      },
      {
        title: "Zero Ad Spend Dependency",
        description: "Unlike PPC ads that vanish the second budget runs out, organic SEO rankings deliver compounding free leads for years.",
      },
      {
        title: "100% White-Hat Methodology",
        description: "No risky spam backlinks. We use authentic local citations, content silos, and technical schema approved by Google guidelines.",
      },
    ],
    features: [
      {
        title: "Google Business Profile Optimization",
        description: "Category tuning, geo-tagged image uploads, weekly updates, and review generation strategy.",
      },
      {
        title: "Local Keyword Targeting",
        description: "Identifying exact neighborhood and commercial search terms used by Bangalore buyers.",
      },
      {
        title: "Structured Schema Markup",
        description: "LocalBusiness, GeoCoordinates, OpeningHours, and Service JSON-LD code for rich Google snippets.",
      },
      {
        title: "High-Authority Local Citations",
        description: "Consistent Name, Address, Phone (NAP) listings across Justdial, IndiaMART, Sulekha, and Google.",
      },
      {
        title: "Content Marketing & Local Silos",
        description: "Publishing localized service pages and informative blog posts answering local buyer queries.",
      },
      {
        title: "Core Web Vitals Speed Boost",
        description: "Compressing images, eliminating render-blocking scripts, and achieving 95+ performance scores.",
      },
    ],
    technologies: ["Google Search Console", "Google Analytics 4", "Semrush", "Ahrefs", "Google Tag Manager", "Schema.org"],
    useCases: [
      {
        industry: "Dental & Eye Clinics",
        scenario: "Capture high-urgency patients searching for 'dentist in Wilson Garden' or 'eye clinic near me'.",
      },
      {
        industry: "Automotive Repair & Services",
        scenario: "Rank #1 for emergency breakdown, car detailing, and two-wheeler servicing in South Bangalore.",
      },
      {
        industry: "HVAC & Electrical Contractors",
        scenario: "Receive daily phone calls for commercial AC installation and residential wiring across Bangalore.",
      },
      {
        industry: "Lawyers & Chartered Accountants",
        scenario: "Build trust with corporate clients searching for tax audit and company registration experts.",
      },
    ],
    faqs: [
      {
        question: "How long does local SEO take to show tangible results?",
        answer:
          "Local map pack optimizations often show improvements in 4 to 8 weeks. Competitive organic keywords typically reach page 1 within 3 to 6 months of consistent optimization.",
      },
      {
        question: "What is the difference between Google Ads and Local SEO?",
        answer:
          "Google Ads charge you for every click and stop immediately when your budget finishes. Local SEO builds permanent organic authority that brings free, qualified enquiries 24/7.",
      },
      {
        question: "Do you guarantee #1 ranking on Google?",
        answer:
          "No ethical agency can guarantee an exact #1 position because Google's algorithm changes frequently. However, we have a proven track record of placing 90%+ of our clients in the Top 3 Map Pack.",
      },
      {
        question: "Will you manage our Google Business reviews?",
        answer:
          "Yes. We set up automated QR code review cards and email/WhatsApp follow-ups to help you systematically collect 5-star Google reviews from happy clients.",
      },
    ],
  },
  {
    id: "mobile-apps",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    localTitle: "iOS & Android Mobile App Development in Wilson Garden, Bangalore",
    metaTitle: "Mobile App Development in Wilson Garden, Bangalore | Eagle Vision Tech",
    metaDescription:
      "Custom iOS & Android mobile app development company in Wilson Garden, Bangalore. Cross-platform Flutter and React Native apps with offline support & push alerts.",
    shortDescription:
      "Native-feel iOS and Android applications built with Flutter and React Native. From MVP prototypes to scalable enterprise apps deployed on App Store and Play Store.",
    heroHeadline: "High-Performance Mobile Apps Built for iOS & Android",
    heroSubtitle:
      "Put your business directly in your customer's pocket. We engineer responsive, secure, and intuitive mobile applications that drive daily customer engagement.",
    iconName: "Smartphone",
    startingPrice: "₹29,999",
    turnaroundTime: "3 - 6 Weeks",
    deliverables: [
      "Production-ready Flutter / React Native cross-platform codebase",
      "Native deployment to Google Play Store & Apple App Store",
      "Backend REST / GraphQL API with cloud database configuration",
      "Push notification system (Firebase Cloud Messaging)",
      "Secure authentication (OTP, Google, Apple ID)",
      "Offline caching and real-time synchronization",
    ],
    benefits: [
      {
        title: "Single Codebase, Both Platforms",
        description: "Save up to 40% in development and maintenance costs by launching simultaneously on iOS and Android.",
      },
      {
        title: "Fluid 60 FPS Performance",
        description: "Smooth animations, rapid tap response, and native device hardware access (Camera, GPS, Bluetooth).",
      },
      {
        title: "Guaranteed Store Approval",
        description: "We handle strict Apple App Store and Google Play policy compliance and guide you through approval.",
      },
      {
        title: "Instant Push Notifications",
        description: "Re-engage customers with personalized offers, order tracking updates, and appointment reminders.",
      },
    ],
    features: [
      {
        title: "Cross-Platform Frameworks",
        description: "Flutter and React Native for beautiful native widgets and rapid feature iteration.",
      },
      {
        title: "Cloud Backend & Scalable APIs",
        description: "Node.js, Supabase, or Firebase backends capable of scaling from 100 to 1,000,000 active users.",
      },
      {
        title: "Secure Payment Gateway Integration",
        description: "UPI auto-pay, Razorpay, Cashfree, and Apple In-App Purchases with webhook verification.",
      },
      {
        title: "Real-Time Tracking & Maps",
        description: "Google Maps integration, live delivery driver tracking, and geo-fencing triggers.",
      },
      {
        title: "Admin Super-App Dashboard",
        description: "Manage users, inspect analytics, dispatch orders, and push announcements from a web browser.",
      },
      {
        title: "Biometric & OTP Login",
        description: "FaceID, fingerprint recognition, and fast SMS/WhatsApp OTP login flows.",
      },
    ],
    technologies: ["Flutter", "React Native", "Firebase", "Node.js", "Dart", "Swift", "Kotlin", "Supabase"],
    useCases: [
      {
        industry: "On-Demand Delivery & Logistics",
        scenario: "Live driver tracking, route optimization, digital signatures, and proof of delivery.",
      },
      {
        industry: "Healthcare & Teleconsultation",
        scenario: "Video consultations, prescription downloads, and lab test booking.",
      },
      {
        industry: "Field Service Teams",
        scenario: "Job dispatching, equipment inspection forms, and offline photo uploads.",
      },
      {
        industry: "Fitness & Wellness",
        scenario: "Workout tracking, membership subscriptions, and nutritionist chat.",
      },
    ],
    faqs: [
      {
        question: "Should I choose Flutter or Native development for my app?",
        answer:
          "For 95% of business applications, Flutter or React Native is the ideal choice. It allows you to build for both Android and iOS from one codebase, reducing cost and launch time by nearly half.",
      },
      {
        question: "Do you help with publishing the app on the Play Store and App Store?",
        answer:
          "Yes. We configure your developer accounts, set up privacy policies, prepare screenshots, and shepherd the application through the entire review process until it is live.",
      },
      {
        question: "Can the app function when the user has poor internet connectivity?",
        answer:
          "Yes! We build offline-first architectures using local SQLite/Hive caching so users can view data and queue actions even with patchy connectivity.",
      },
      {
        question: "What happens after the app is launched?",
        answer:
          "We offer 3 months of complimentary warranty support, followed by flexible Annual Maintenance Contracts (AMC) covering OS updates, security patches, and feature additions.",
      },
    ],
  },
  {
    id: "crm",
    slug: "crm",
    title: "Custom CRM Solutions",
    localTitle: "Custom CRM Software Development in Wilson Garden, Bangalore",
    metaTitle: "Custom CRM Solutions in Wilson Garden, Bangalore | Eagle Vision Tech",
    metaDescription:
      "Custom CRM software development in Wilson Garden, Bangalore. Eliminate spreadsheet chaos, automate WhatsApp lead follow-ups, and track your sales pipeline.",
    shortDescription:
      "Stop losing leads in messy WhatsApp chats and Excel sheets. Custom Customer Relationship Management software tailored to your specific business workflows.",
    heroHeadline: "Custom CRM Software That Automates Your Sales & Customer Care",
    heroSubtitle:
      "Off-the-shelf CRMs charge hefty monthly fees for features you never use. We build tailored, lightweight CRM software built around your exact sales process.",
    iconName: "Users",
    startingPrice: "₹24,999",
    turnaroundTime: "2 - 4 Weeks",
    deliverables: [
      "Custom cloud CRM web app accessible on desktop and mobile",
      "Visual drag-and-drop sales pipeline stages",
      "Official WhatsApp Business API integration for automated follow-ups",
      "Automated lead capture from Website, Facebook Ads, and IndiaMART",
      "Role-based staff permissions (Executives, Managers, Admin)",
      "1-Click Quotation & PDF Invoice generator with GST calculation",
    ],
    benefits: [
      {
        title: "Zero Lead Leakage",
        description: "Every website enquiry, incoming call, and WhatsApp message is automatically logged and assigned to your sales reps.",
      },
      {
        title: "Automated WhatsApp Follow-ups",
        description: "Send automated greetings, product catalogs, and payment reminders via official WhatsApp API.",
      },
      {
        title: "No Per-User Monthly SaaS Fees",
        description: "Own your software with a one-time build cost or low-cost self-hosting. No paying ₹3,000/seat/month to foreign SaaS platforms.",
      },
      {
        title: "Real-Time Sales Performance",
        description: "View daily call counts, conversion rates, and revenue projections from a clean executive dashboard.",
      },
    ],
    features: [
      {
        title: "Visual Pipeline Kanban",
        description: "Drag leads from 'New Inquiry' to 'Quote Sent' and 'Deal Closed' with instant value totals.",
      },
      {
        title: "Multi-Channel Lead Ingestion",
        description: "Connect your website contact form, Justdial, IndiaMART, Facebook Leads, and Google Ads seamlessly.",
      },
      {
        title: "WhatsApp & Email Automation",
        description: "Trigger follow-up sequences when leads change stage, reducing manual follow-up effort by 70%.",
      },
      {
        title: "Quotation & Invoice Generator",
        description: "Generate branded PDF quotations with GST breakdown in 30 seconds and send directly to customer WhatsApp.",
      },
      {
        title: "Call & Meeting Logging",
        description: "Record call notes, schedule follow-up reminders with calendar notifications, and avoid missed meetings.",
      },
      {
        title: "Granular Role Permissions",
        description: "Prevent staff from downloading customer databases while giving them access to their assigned accounts.",
      },
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "WhatsApp Cloud API", "Tailwind CSS", "Prisma"],
    useCases: [
      {
        industry: "Real Estate Brokers & Developers",
        scenario: "Property site visit scheduling, buyer budget matching, and automated builder inventory updates.",
      },
      {
        industry: "B2B Industrial Equipment & Traders",
        scenario: "Multi-line quotation approvals, dealer networks, and purchase order tracking.",
      },
      {
        industry: "Immigration & Visa Consultants",
        scenario: "Document checklist management, visa status tracking, and automated student notifications.",
      },
      {
        industry: "Interior Designers & Contractors",
        scenario: "Client project milestones, 3D render approval stages, and stage-wise payment collections.",
      },
    ],
    faqs: [
      {
        question: "Can your CRM connect with our WhatsApp Business number?",
        answer:
          "Yes! We integrate with the official Meta WhatsApp Cloud API so you can send automated template messages, receive incoming chats in a shared team inbox, and trigger instant alerts.",
      },
      {
        question: "How is a custom CRM better than Zoho or Salesforce?",
        answer:
          "Standard CRMs are often bloated with hundreds of complex menus your team won't use, and their monthly subscription fees grow rapidly as you add staff. A custom CRM has only what you need, runs faster, and has zero recurring per-user fees.",
      },
      {
        question: "Can you import our existing customer contacts from Excel?",
        answer:
          "Yes. We sanitize and import all your legacy spreadsheets, customer phone numbers, notes, and past order history during migration.",
      },
      {
        question: "Is our customer data secure on our own servers?",
        answer:
          "Absolutely. We deploy the database to your private AWS, DigitalOcean, or Supabase cloud with automatic daily backups and strict encryption.",
      },
    ],
  },
  {
    id: "erp",
    slug: "erp",
    title: "Enterprise ERP Systems",
    localTitle: "Custom ERP Software & Business Automation in Wilson Garden, Bangalore",
    metaTitle: "ERP Systems in Wilson Garden, Bangalore | Eagle Vision Tech",
    metaDescription:
      "Enterprise ERP systems and business automation in Wilson Garden, Bangalore. Integrated inventory, GST billing, multi-branch operations, and purchase tracking.",
    shortDescription:
      "Unify your entire enterprise operations under one intelligent dashboard. Custom ERP systems designed for Indian MSMEs, manufacturers, and distributors.",
    heroHeadline: "Complete Business Operations Automated Under One Unified System",
    heroSubtitle:
      "Replace disconnected tally files, registers, and manual chaos. We build comprehensive ERP software that ties inventory, accounts, billing, and employees together.",
    iconName: "Layers",
    startingPrice: "₹49,999",
    turnaroundTime: "4 - 8 Weeks",
    deliverables: [
      "Custom cloud ERP accessible securely from any browser or branch",
      "Real-time multi-warehouse inventory tracking with barcode scanning",
      "GST-compliant e-Invoicing and automated E-way bill generation",
      "Purchase order, vendor quotation, and accounts payable workflow",
      "Employee attendance, payroll calculations, and PF/ESI records",
      "Executive business intelligence reports and profit/loss analytics",
    ],
    benefits: [
      {
        title: "100% Stock Accuracy",
        description: "Track inventory movement between warehouses, retail counters, and dispatch bays in real time.",
      },
      {
        title: "Effortless GST Compliance",
        description: "Generate compliant tax invoices, calculate CGST/SGST/IGST automatically, and export one-click GSTR-1 data.",
      },
      {
        title: "Multi-Branch Synchronization",
        description: "Connect multiple stores or factories across Bangalore and India with centralized reporting.",
      },
      {
        title: "Reduce Operating Costs by 35%",
        description: "Eliminate duplicate data entry, human calculation errors, and stockout delays across your company.",
      },
    ],
    features: [
      {
        title: "Warehouse & Inventory Control",
        description: "Batch tracking, expiry alerts, low-stock reorder automation, and handheld barcode scanning.",
      },
      {
        title: "GST Invoicing & Billing",
        description: "Instant PDF invoices with QR codes, multi-currency support, payment links, and debit/credit notes.",
      },
      {
        title: "Procurement & Vendor Portal",
        description: "Purchase requisitions, quotation comparisons, supplier evaluations, and goods received notes (GRN).",
      },
      {
        title: "Production & Bill of Materials (BOM)",
        description: "Track raw material consumption, production work orders, wastage ratios, and finished goods.",
      },
      {
        title: "HR, Biometric & Payroll",
        description: "Sync with biometric fingerprint machines, calculate overtime, deductions, and issue payslips.",
      },
      {
        title: "Custom Executive Analytics",
        description: "Drill down into gross margins, customer outstanding balances, and fast-moving SKU reports.",
      },
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Redis", "TypeScript", "Tailwind CSS", "AWS"],
    useCases: [
      {
        industry: "Manufacturing & Fabrication",
        scenario: "Raw material tracking, machining work order stages, and quality inspection checklists.",
      },
      {
        industry: "Wholesale FMCG & Pharma Distributors",
        scenario: "Batch expiry management, delivery van route dispatch, and credit limit locks for retailers.",
      },
      {
        industry: "Multi-Location Retail Chains",
        scenario: "Centralized stock replenishment, inter-branch transfers, and consolidated daily sales tally.",
      },
      {
        industry: "Textiles & Garment Exporters",
        scenario: "Fabric inventory, cutting-to-stitching progress, export packing lists, and commercial invoices.",
      },
    ],
    faqs: [
      {
        question: "Can your ERP system integrate with Tally?",
        answer:
          "Yes. We can build bidirectional synchronization with Tally Prime via XML/ODBC so your chartered accountant can continue their routine audits while your team uses the modern ERP.",
      },
      {
        question: "Does the ERP handle GST e-Invoicing and E-way bills?",
        answer:
          "Yes, we integrate with approved GSP (GST Suvidha Provider) APIs to generate IRN (Invoice Reference Number) and E-way bill numbers directly from the billing screen in one click.",
      },
      {
        question: "How long does ERP implementation and staff training take?",
        answer:
          "A phased rollout typically takes 4 to 8 weeks. We provide hands-on training sessions for your warehouse staff, billing clerks, and management at our Wilson Garden office or your facility.",
      },
      {
        question: "Can we access the ERP system securely on smartphones?",
        answer:
          "Yes, the ERP interface is fully responsive and encrypted. Management can approve purchase orders, inspect real-time sales, and check inventory levels from any smartphone securely.",
      },
    ],
  },
];
