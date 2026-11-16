import React from "react";
import {
  MapPin,
  Zap,
  Search,
  BadgeDollarSign,
  Headphones,
  Code2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      icon: <MapPin className="w-6 h-6 text-brand-600" />,
      title: "Local Wilson Garden Team",
      description:
        "No ghosting freelancers or disconnected call centers. We are based right at Subbaiah Circle Road, Wilson Garden. Meet us face-to-face for discovery sessions, design reviews, and training.",
      badge: "In-Person Accountability",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "14-Day Rapid Delivery",
      description:
        "While traditional agencies take 4 to 6 months of endless back-and-forth, our modern Next.js component system allows us to launch production-grade business websites in 7 to 14 days.",
      badge: "Agile Sprints",
    },
    {
      icon: <Search className="w-6 h-6 text-emerald-600" />,
      title: "SEO-Ready From Day 1",
      description:
        "We don't build pretty digital brochures that remain invisible. Every build includes Google Business Profile synchronization, localized Wilson Garden schema, and sub-second load times.",
      badge: "Built to Rank",
    },
    {
      icon: <BadgeDollarSign className="w-6 h-6 text-blue-600" />,
      title: "100% Transparent Fixed Pricing",
      description:
        "Clear, itemized proposals with zero hidden costs, unexpected hosting markups, or proprietary hostage traps. You own 100% of your code and digital assets from day one.",
      badge: "Zero Hidden Fees",
    },
    {
      icon: <Headphones className="w-6 h-6 text-purple-600" />,
      title: "1-Year Dedicated Support SLA",
      description:
        "Every project includes 365 days of complimentary technical warranty: security patches, daily cloud backups, uptime monitoring, and direct phone/WhatsApp engineer support.",
      badge: "Peace of Mind",
    },
    {
      icon: <Code2 className="w-6 h-6 text-rose-500" />,
      title: "Clean, Modern Codebase",
      description:
        "We build with Next.js 14, TypeScript, and Tailwind CSS—not heavy, bloated WordPress themes with 30 slow plugins. Enjoy enterprise-grade reliability and seamless future expansion.",
      badge: "Modern Tech",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Eagle Advantage"
          badgeVariant="gold"
          title="Why Bangalore Businesses Choose"
          highlight="Eagle Vision Tech"
          subtitle="We combine the engineering rigor of top tech startups with the personal responsiveness, affordability, and accountability of a friendly neighborhood partner."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-brand-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
