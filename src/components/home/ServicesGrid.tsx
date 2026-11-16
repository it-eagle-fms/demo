import React from "react";
import Link from "next/link";
import {
  Code2,
  Palette,
  TrendingUp,
  Smartphone,
  Users,
  Layers,
  ArrowRight,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-7 h-7 text-brand-600" />,
  Palette: <Palette className="w-7 h-7 text-accent-600" />,
  TrendingUp: <TrendingUp className="w-7 h-7 text-emerald-600" />,
  Smartphone: <Smartphone className="w-7 h-7 text-purple-600" />,
  Users: <Users className="w-7 h-7 text-blue-600" />,
  Layers: <Layers className="w-7 h-7 text-amber-600" />,
};

const iconBgMap: Record<string, string> = {
  Code2: "bg-brand-50 group-hover:bg-brand-600 group-hover:text-white",
  Palette: "bg-accent-50 group-hover:bg-accent-600 group-hover:text-white",
  TrendingUp: "bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white",
  Smartphone: "bg-purple-50 group-hover:bg-purple-600 group-hover:text-white",
  Users: "bg-blue-50 group-hover:bg-blue-600 group-hover:text-white",
  Layers: "bg-amber-50 group-hover:bg-amber-600 group-hover:text-white",
};

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/60" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="End-to-End Technology Services"
          badgeVariant="brand"
          title="Digital IT Solutions Engineered for"
          highlight="Real Business Growth"
          subtitle="From conversion-focused business websites to custom CRM and ERP software, we build solutions that eliminate operational friction and generate local sales."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Card
              key={service.slug}
              hoverEffect
              className="group flex flex-col justify-between border-slate-200/90 hover:border-brand-400 relative overflow-hidden"
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    iconBgMap[service.iconName] || "bg-brand-50"
                  }`}
                >
                  <div className="group-hover:scale-110 transition-transform [&>svg]:group-hover:text-white">
                    {iconMap[service.iconName]}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                    From {service.startingPrice}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-2">
                  {service.shortDescription}
                </p>

                {/* Key feature pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.deliverables.slice(0, 2).map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-600">
                  ⚡ {service.turnaroundTime}
                </span>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 group-hover:text-brand-700 group-hover:translate-x-1 transition-all"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Banner to Services Overview */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600">
            Need a tailored combination of services for your company?{" "}
            <Link
              href="/services"
              className="font-bold text-brand-600 hover:text-brand-700 underline underline-offset-4 ml-1"
            >
              Explore our full service blueprints and pricing guides →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
