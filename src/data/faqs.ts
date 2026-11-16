export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "SEO" | "Pricing" | "Process" | "Support";
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Why should I choose a website development company in Wilson Garden, Bangalore instead of a remote freelancer?",
    answer:
      "Working with a local team in Wilson Garden gives you direct accountability, clear communication, and the opportunity to meet in person to review wireframes, demos, and progress. Unlike remote freelancers who frequently go unresponsive or miss deadlines, Eagle Vision Tech is an established Bangalore IT partner with dedicated in-house developers, local contracts, and guaranteed post-launch support.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "How much does website development cost for a small or medium business in Bangalore?",
    answer:
      "Our transparent website development packages start at ₹14,999 for a high-performance 5-page business website. Growing companies requiring advanced local SEO, payment gateways, and custom integrations typically choose our Growth Business tier at ₹29,999. Custom software, mobile apps, CRM, and ERP systems are scoped transparently based on your specific operational requirements.",
    category: "Pricing",
  },
  {
    id: "faq-3",
    question: "Will my website appear when customers search 'web development company near me' or 'services in Wilson Garden'?",
    answer:
      "Yes. Local search engine optimization is built into every project from day one. We implement complete schema markup (LocalBusiness, GeoCoordinates, OpeningHours), optimize localized meta tags targeting Wilson Garden and Bangalore commercial corridors, speed up load times to score 95+ on Google PageSpeed, and link your verified Google Business Profile to capture local high-intent search traffic.",
    category: "SEO",
  },
  {
    id: "faq-4",
    question: "How long will it take to design, develop, and launch our new website?",
    answer:
      "Most standard business websites are completed and launched within 7 to 14 working days from content approval. Custom web applications, Flutter mobile apps, and enterprise CRM/ERP solutions typically take between 3 to 6 weeks, delivered through transparent milestone sprints where you review working prototypes every week.",
    category: "Process",
  },
  {
    id: "faq-5",
    question: "Do I own 100% of the website, code, and design assets after launch?",
    answer:
      "Yes, absolutely. You retain 100% ownership of your source code, domain, database, hosting accounts, and Figma design files upon project completion. We do not believe in proprietary lock-ins or holding client assets hostage. If you ever decide to manage it in-house or migrate, everything is neatly organized and yours.",
    category: "General",
  },
  {
    id: "faq-6",
    question: "Can you build custom CRM or ERP software tailored specifically to our business workflow?",
    answer:
      "Yes! That is one of our primary specialties. If off-the-shelf software like Zoho or Salesforce feels too complicated or expensive with recurring per-user fees, we build lightweight, custom CRM and ERP software with exact fields, GST billing, automated WhatsApp alerts, and inventory control matching how your Bangalore business actually operates.",
    category: "Process",
  },
  {
    id: "faq-7",
    question: "What post-launch technical support and maintenance do you provide?",
    answer:
      "All projects include 1-year complimentary technical support covering cloud server monitoring, security updates, daily automated backups, and bug fixes. For companies needing continuous marketing, weekly content additions, or feature expansions, we provide affordable Annual Maintenance Contracts (AMC).",
    category: "Support",
  },
  {
    id: "faq-8",
    question: "Can we visit your office in Wilson Garden, Bangalore to discuss our requirements?",
    answer:
      "Yes! We are located at No. 14/2, 10th Cross, Subbaiah Circle Road, Wilson Garden, Bangalore (close to Lalbagh East Gate). We encourage business owners, startup founders, doctors, and retail managers to visit us for an in-person discovery consultation, demo session, and coffee.",
    category: "General",
  },
];
