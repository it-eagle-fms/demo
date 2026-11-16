export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  client: string;
  location: string;
  category: "Web Development" | "Mobile Apps" | "CRM & ERP" | "UI/UX Design" | "E-Commerce";
  summary: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  technologies: string[];
  image: string;
  featured: boolean;
  link?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "proj-1",
    slug: "lalbagh-specialty-clinic-portal",
    title: "Healthcare Clinic Portal & Online Booking",
    client: "Lalbagh Multi-Specialty Clinic",
    location: "Wilson Garden, Bangalore",
    category: "Web Development",
    summary:
      "A fast, patient-friendly medical clinic website with online doctor appointment scheduling and automated WhatsApp reminders.",
    challenge:
      "The clinic was losing prospective patients due to a slow, outdated website with no mobile appointment booking, resulting in congested phone lines and high patient no-shows.",
    solution:
      "Engineered an ultra-fast Next.js 14 web portal featuring doctor specialty filtering, real-time slot booking, Google Maps navigation, and automated WhatsApp SMS confirmations.",
    impactMetrics: [
      { label: "Increase in Bookings", value: "+185%" },
      { label: "Google PageSpeed", value: "99/100" },
      { label: "Reduction in No-Shows", value: "42%" },
    ],
    technologies: ["Next.js 14", "Tailwind CSS", "TypeScript", "WhatsApp Cloud API", "Vercel"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: "proj-2",
    slug: "south-bangalore-steel-crm",
    title: "Custom Steel & Hardware CRM System",
    client: "Karnataka Structural Metals",
    location: "Wilson Garden / Subbaiah Circle, Bangalore",
    category: "CRM & ERP",
    summary:
      "A custom sales pipeline and WhatsApp quote generation software for an established Bangalore metal distributor.",
    challenge:
      "Sales engineers were spending up to 45 minutes manually preparing multi-item metal weight quotations in Excel, leading to delayed quotes and missed customer calls.",
    solution:
      "Developed a custom cloud CRM featuring an automated tonnage-to-price calculator, one-click PDF quotation generator, and automated WhatsApp status tracking.",
    impactMetrics: [
      { label: "Quote Generation Time", value: "2 Mins" },
      { label: "Deals Closed / Mo", value: "+64%" },
      { label: "Team Productivity", value: "+3.2x" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "WhatsApp API", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: "proj-3",
    slug: "bangalore-artisan-roastery-ecommerce",
    title: "Direct-to-Consumer Coffee & Roastery Store",
    client: "Malnad Brew Artisan Roasters",
    location: "Jayanagar / Wilson Garden, Bangalore",
    category: "E-Commerce",
    summary:
      "High-speed D2C specialty coffee shop with recurring subscription orders, grind-size selection, and instant UPI checkout.",
    challenge:
      "Existing WooCommerce setup took over 5 seconds to load on 4G phones, causing an alarming 70% cart abandonment rate during evening rush hours.",
    solution:
      "Re-platformed to a headless e-commerce store with instant Razorpay checkout, automated subscription renewals, and localized Bangalore express delivery tracking.",
    impactMetrics: [
      { label: "Mobile Checkout Speed", value: "1.2s" },
      { label: "Cart Conversion", value: "+82%" },
      { label: "Monthly Subscriptions", value: "1,200+" },
    ],
    technologies: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Razorpay", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: "proj-4",
    slug: "urban-delivery-logistics-app",
    title: "Last-Mile Delivery Driver & Merchant Mobile App",
    client: "SwiftRoute Hyperlocal",
    location: "Koramangala & Central Bangalore",
    category: "Mobile Apps",
    summary:
      "Dual Flutter mobile apps for merchants and delivery riders with real-time GPS tracking and live proof of delivery.",
    challenge:
      "Dispatchers relied on manual phone calls to assign delivery riders, causing delivery delays, customer disputes, and lost parcels across Central Bangalore traffic.",
    solution:
      "Created a robust Flutter application pairing Google Maps route optimization with instant push notifications, Bluetooth thermal receipt printing, and digital signature capture.",
    impactMetrics: [
      { label: "Average Delivery Time", value: "-28%" },
      { label: "Daily Deliveries", value: "4,500+" },
      { label: "App Store Rating", value: "4.8 ★" },
    ],
    technologies: ["Flutter", "Firebase", "Google Maps API", "Node.js", "Dart"],
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: "proj-5",
    slug: "south-bangalore-legal-tax-website",
    title: "Corporate Legal & Chartered Accountant Portfolio",
    client: "Pragathi Corporate Advisors",
    location: "Richmond Town / Wilson Garden, Bangalore",
    category: "UI/UX Design",
    summary:
      "A distinguished, modern corporate web presence designed to attract high-net-worth business clients and corporate tax retainers.",
    challenge:
      "The firm had no digital identity except a basic YellowPages listing, failing to capture corporate compliance retainers in Bangalore's booming startup corridor.",
    solution:
      "Crafted an elegant brand design system in Figma with deep navy and gold accents, client case study carousels, and an interactive GST compliance calculator.",
    impactMetrics: [
      { label: "Corporate Inquiries", value: "+140%" },
      { label: "Average Retainer Value", value: "+55%" },
      { label: "Client Time on Site", value: "4m 12s" },
    ],
    technologies: ["Figma", "Next.js 14", "Tailwind CSS", "Lucide Icons", "Vercel"],
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: "proj-6",
    slug: "pharma-distribution-erp-system",
    title: "Pharma Distribution & Multi-Warehouse ERP",
    client: "Apex Lifecare Distributors",
    location: "Wilson Garden, Bangalore",
    category: "CRM & ERP",
    summary:
      "A custom GST e-invoicing and batch inventory management ERP controlling 8,000+ medical SKUs across 3 Bangalore distribution hubs.",
    challenge:
      "Frequent drug batch expiry write-offs, manual e-way bill generation errors, and delays in dispatching emergency medical orders to city hospitals.",
    solution:
      "Architected a custom PostgreSQL + Next.js enterprise ERP with FEFO (First-Expired, First-Out) stock dispatch, barcode verification, and automated GST IRN generation.",
    impactMetrics: [
      { label: "Expiry Losses Prevented", value: "₹18 Lakh/yr" },
      { label: "Daily Invoice Processing", value: "850+ Orders" },
      { label: "Warehouse Dispatch Speed", value: "3x Faster" },
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker", "GST API", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: "proj-7",
    slug: "luxury-interior-design-studio",
    title: "High-End Residential Interior Studio Web Experience",
    client: "Aura Living Spaces",
    location: "Wilson Garden / Indiranagar, Bangalore",
    category: "Web Development",
    summary:
      "Visual storytelling portfolio showcasing bespoke residential villas with interactive before/after transformation sliders.",
    challenge:
      "The client relied solely on an Instagram page where high-ticket luxury homeowners couldn't appreciate the engineering depth and material specifications of their work.",
    solution:
      "Engineered an editorial-style luxury portfolio with smooth motion reveals, high-resolution WebP project galleries, and a 2-step budget estimator.",
    impactMetrics: [
      { label: "Qualified Villa Enquiries", value: "38 / Mo" },
      { label: "Conversion on Ad Traffic", value: "+110%" },
      { label: "Bounce Rate", value: "22%" },
    ],
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=80",
    featured: false,
  },
  {
    id: "proj-8",
    slug: "fitness-gym-community-mobile-app",
    title: "Gym Membership & Class Booking Mobile App",
    client: "IronForge Athletic Club",
    location: "Shanthi Nagar / Wilson Garden, Bangalore",
    category: "Mobile Apps",
    summary:
      "Cross-platform community mobile app for crossfit workouts, QR attendance check-in, and instant UPI membership renewal.",
    challenge:
      "Front desk was overwhelmed with manual cash payments, lost punch cards, and crowded 7 PM workout sessions.",
    solution:
      "Launched an intuitive React Native app allowing members to reserve gym slots, scan QR codes at the turnstile, and renew subscriptions with UPI autopay.",
    impactMetrics: [
      { label: "Active Mobile Users", value: "1,850+" },
      { label: "On-Time Renewals", value: "94%" },
      { label: "Front Desk Queue Time", value: "0 Mins" },
    ],
    technologies: ["React Native", "Node.js", "UPI Autopay", "Tailwind CSS", "Firebase"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80",
    featured: false,
  },
];
