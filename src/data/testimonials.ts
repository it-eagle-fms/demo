export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  service: string;
  rating: number;
  content: string;
  metrics: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. Arvind Rao",
    role: "Chief Medical Director",
    company: "Lalbagh Multi-Specialty Clinic",
    location: "Wilson Garden, Bangalore",
    service: "Custom Web Development & SEO",
    rating: 5,
    content:
      "Eagle Vision Tech completely turned around our clinic's digital presence. Our old website took forever to load and barely brought in two inquiries a month. Within 60 days of launching their custom Next.js site with local SEO, we were ranking on page 1 for doctors in Wilson Garden, and patient bookings jumped by over 180%. Having a local tech team we can meet in person makes all the difference.",
    metrics: "+185% Patient Inquiries",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "test-2",
    name: "Suresh Nambiar",
    role: "Managing Director",
    company: "Karnataka Structural Metals",
    location: "Subbaiah Circle, Bangalore",
    service: "Custom CRM & WhatsApp Automation",
    rating: 5,
    content:
      "We were drowning in Excel sheets and lost quotes. The custom CRM Eagle Vision Tech developed for us simplified our whole sales process. Our sales team now drafts multi-item steel quotations in under 2 minutes right on their phones and sends them via WhatsApp with one click. They delivered on time, within our budget, and provided fantastic hands-on training to our staff.",
    metrics: "Quote Time: 45m → 2m",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "test-3",
    name: "Ananya Hegde",
    role: "Founder & Master Roaster",
    company: "Malnad Brew Artisan Roasters",
    location: "Jayanagar / Wilson Garden, Bangalore",
    service: "E-Commerce & Performance Optimization",
    rating: 5,
    content:
      "Our coffee subscription shop was suffering from terrible 5-second mobile load times and high drop-offs. The team at Eagle rebuilt our storefront with Next.js and Razorpay UPI checkout. The speed is unbelievable—pages load instantly and our checkout conversion skyrocketed by 82%. If you want an engineering team that understands real business numbers instead of just technical buzzwords, hire Eagle.",
    metrics: "+82% Mobile Sales",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "test-4",
    name: "Rajeshwar Gowda",
    role: "Operations Head",
    company: "Apex Lifecare Distributors",
    location: "Wilson Garden, Bangalore",
    service: "Enterprise ERP & GST Automation",
    rating: 5,
    content:
      "Managing 8,000 pharmaceutical SKUs across multiple warehouses in Bangalore was pure chaos until Eagle deployed our custom ERP. The real-time batch tracking, automated GST e-way bill generation, and barcode scanning saved us over ₹18 Lakhs in expired stock in the very first year alone. Their support team answers within minutes whenever we need anything.",
    metrics: "₹18 Lakhs Saved in Expiry Loss",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "test-5",
    name: "Pooja Venkatesh",
    role: "Principal Architect",
    company: "Aura Living Spaces",
    location: "Wilson Garden / Indiranagar, Bangalore",
    service: "UI/UX & Web Design",
    rating: 5,
    content:
      "The design quality Eagle delivered blew us away. They created an interactive portfolio that truly captures the luxury aesthetic of our architectural projects. High-net-worth villa clients constantly compliment the smooth animations and speed of our website. It has helped us close several 8-figure design contracts this year.",
    metrics: "38+ Villa Inquiries / Mo",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
  },
];
