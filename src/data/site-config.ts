export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  contact: {
    phone: string;
    displayPhone: string;
    whatsapp: string;
    displayWhatsapp: string;
    email: string;
    address: {
      street: string;
      locality: string;
      area: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
      landmark: string;
    };
    coordinates: {
      latitude: number;
      longitude: number;
    };
    openingHours: {
      days: string;
      hours: string;
      isoFormat: string;
    };
    mapEmbedUrl: string;
  };
  socials: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    github: string;
  };
  navItems: {
    label: string;
    href: string;
    children?: { label: string; href: string; description?: string }[];
  }[];
  keywords: string[];
}

export const siteConfig: SiteConfig = {
  name: "Eagle Vision Tech",
  legalName: "Eagle Vision Technologies Pvt Ltd",
  tagline: "Top Website Development & IT Solutions Company in Wilson Garden, Bangalore",
  description:
    "Wilson Garden's trusted technology partner. We build lightning-fast custom websites, mobile apps, custom CRM, ERP software, and high-ROI local SEO solutions for Bangalore SMBs, clinics, and startups.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://eagletech.in",
  ogImage: "/images/banner.png",
  contact: {
    phone: "+919886012345",
    displayPhone: "+91 98860 12345",
    whatsapp: "+919886012345",
    displayWhatsapp: "+91 98860 12345",
    email: "contact@eagletech.in",
    address: {
      street: "No. 14/2, 10th Cross, Subbaiah Circle Road",
      locality: "Wilson Garden",
      area: "Wilson Garden",
      city: "Bangalore",
      state: "Karnataka",
      postalCode: "560027",
      country: "India",
      landmark: "Near Lalbagh East Gate & Wilson Garden Post Office",
    },
    coordinates: {
      latitude: 12.9497,
      longitude: 77.5969,
    },
    openingHours: {
      days: "Monday – Saturday",
      hours: "9:00 AM – 7:00 PM IST",
      isoFormat: "Mo-Sa 09:00-19:00",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.354117565787!2d77.5947!3d12.9497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b9c0c16fb3%3A0x6b746a5b6c2f42a1!2sWilson%20Garden%2C%20Bengaluru%2C%20Karnataka%20560027!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  socials: {
    facebook: "https://facebook.com/eagletechin",
    twitter: "https://twitter.com/eagletechin",
    linkedin: "https://linkedin.com/company/eagle-vision-tech",
    instagram: "https://instagram.com/eagletechin",
    github: "https://github.com/eagletechin",
  },
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      children: [
        {
          label: "Custom Web Development",
          href: "/services/web-development",
          description: "High-performance Next.js, React & WordPress websites built for lead generation.",
        },
        {
          label: "UI/UX & Web Design",
          href: "/services/web-design",
          description: "Clean, customer-centric website design tailored to convert local visitors.",
        },
        {
          label: "Local SEO & Marketing",
          href: "/services/seo",
          description: "Rank #1 on Google Maps and search results in Wilson Garden and Bangalore.",
        },
        {
          label: "Mobile App Development",
          href: "/services/mobile-app-development",
          description: "Cross-platform iOS and Android apps powered by Flutter and React Native.",
        },
        {
          label: "Custom CRM Solutions",
          href: "/services/crm",
          description: "Streamline sales pipelines, WhatsApp messaging, and customer management.",
        },
        {
          label: "Enterprise ERP Systems",
          href: "/services/erp",
          description: "Inventory, invoicing, GST compliance, and operations automated seamlessly.",
        },
      ],
    },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  keywords: [
    "website development company in Wilson Garden Bangalore",
    "web development company near me",
    "web design agency Wilson Garden",
    "SEO services near me Bangalore",
    "mobile app development Wilson Garden",
    "custom CRM development Bangalore",
    "ERP software for small business Bangalore",
    "best software company in Wilson Garden",
    "affordable website designer Lalbagh Bangalore",
  ],
};
