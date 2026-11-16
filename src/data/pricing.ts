export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: string;
  billingPeriod: string;
  description: string;
  popular: boolean;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  deliveryTime: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter Presence",
    price: "₹14,999",
    billingPeriod: "one-time investment",
    description: "Perfect for local shops, clinics, and professionals establishing a verified digital presence.",
    popular: false,
    deliveryTime: "7 - 10 Days Delivery",
    ctaText: "Choose Starter Plan",
    features: [
      "Up to 5 Custom Responsive Pages",
      "Next.js / WordPress Super-Fast Architecture",
      "Google Business Profile Setup & Verification",
      "Wilson Garden Local SEO On-Page Optimization",
      "1-Click WhatsApp & Direct Call CTAs",
      "Free SSL Certificate & 1 Year Domain/Hosting",
      "Contact Form with Instant Email Notifications",
      "Basic Admin Dashboard for Content Edits",
    ],
    notIncluded: ["Custom CRM / ERP Modules", "E-Commerce Payment Gateway", "Mobile Application"],
  },
  {
    id: "growth",
    name: "Growth Business",
    badge: "Most Popular in Bangalore",
    price: "₹29,999",
    billingPeriod: "one-time investment",
    description: "Designed for ambitious companies seeking consistent inbound leads and high Google rankings.",
    popular: true,
    deliveryTime: "12 - 18 Days Delivery",
    ctaText: "Choose Growth Plan",
    features: [
      "Up to 12 Premium Tailored Pages",
      "Figma UI/UX Prototype with 3 Revision Rounds",
      "Advanced Local SEO: Top 3 Map Pack Optimization",
      "Sub-Second Page Load Guarantee (95+ PageSpeed)",
      "Razorpay / Cashfree UPI Payment Integration",
      "Lead Capture synced to Google Sheets / CRM",
      "Automated WhatsApp Lead Confirmation",
      "Dynamic Blog System for Content Marketing",
      "1-Year Priority Tech Support & Cloud Backups",
    ],
  },
  {
    id: "enterprise",
    name: "Custom Enterprise",
    badge: "Tailored Architecture",
    price: "₹59,999+",
    billingPeriod: "milestone-based",
    description: "For established businesses needing custom CRM, ERP systems, or iOS & Android mobile apps.",
    popular: false,
    deliveryTime: "3 - 6 Weeks Delivery",
    ctaText: "Request Enterprise Quote",
    features: [
      "Fully Custom Web Application or Mobile App (Flutter)",
      "Tailored CRM / ERP Workflow & Business Logic",
      "Multi-Branch & Warehouse Inventory Control",
      "GST Billing, E-Way Bill & Tally Integration",
      "Role-Based Staff Access & Security Audits",
      "Official Meta WhatsApp Cloud API Setup",
      "Dedicated Technical Account Manager",
      "On-Site Staff Training in Bangalore",
      "Comprehensive SLA & 99.9% Uptime Guarantee",
    ],
  },
];
