import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Palette,
  TrendingUp,
  Smartphone,
  Users,
  Layers,
  ArrowRight,
  CheckCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "IT Services in Wilson Garden, Bangalore",
  description:
    "Comprehensive IT services in Wilson Garden, Bangalore: Custom Website Development, UI/UX Web Design, Local SEO, Mobile App Development, Custom CRM, and Enterprise ERP.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "IT Services in Wilson Garden, Bangalore | Eagle Vision Tech",
    description:
      "Explore full-stack digital solutions: Web development, mobile apps, CRM, and ERP designed to grow your Bangalore business.",
    url: `${siteConfig.url}/services`,
  },
};

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-8 h-8 text-brand-600" />,
  Palette: <Palette className="w-8 h-8 text-accent-600" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-emerald-600" />,
  Smartphone: <Smartphone className="w-8 h-8 text-purple-600" />,
  Users: <Users className="w-8 h-8 text-blue-600" />,
  Layers: <Layers className="w-8 h-8 text-amber-600" />,
};

export default function ServicesOverviewPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbItems} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-50/60 via-white to-slate-50 py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-100/70 text-brand-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            Engineering Excellence in South Bangalore
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            IT & Software Services in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-700 to-accent-600">
              Wilson Garden, Bangalore
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From lightning-fast business websites to bespoke mobile apps, CRM, and ERP systems. Built with modern architectures and backed by our dedicated Wilson Garden engineering team.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Button href="#service-list" variant="primary" size="md">
              <span>Explore All 6 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/contact" variant="outline" size="md">
              <span>Request Custom Proposal</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-white" id="service-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {servicesData.map((service, index) => (
            <div
              key={service.slug}
              id={service.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl border transition-all duration-300 ${
                index % 2 === 0
                  ? "bg-slate-50/70 border-slate-200/80 hover:border-brand-300"
                  : "bg-white border-slate-200 shadow-soft hover:border-accent-300"
              }`}
            >
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center flex-shrink-0">
                    {iconMap[service.iconName]}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                      Service 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.heroSubtitle}
                </p>

                {/* Key Deliverables Checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.deliverables.slice(0, 4).map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  <span className="text-xs font-semibold text-slate-500 mr-2">Tech Stack:</span>
                  {service.technologies.slice(0, 5).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium bg-white text-slate-700 border border-slate-200 px-2.5 py-0.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Pricing & Fast CTA Card */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-xs text-slate-500 block">Starting Investment</span>
                      <span className="text-3xl font-extrabold text-slate-900">{service.startingPrice}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-500 block">Typical Delivery</span>
                      <span className="text-xs font-bold text-brand-700 flex items-center gap-1 justify-end mt-1">
                        <Clock className="w-3.5 h-3.5" />
                        {service.turnaroundTime}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Targeted Use Cases in Bangalore:
                    </span>
                    {service.useCases.slice(0, 2).map((uc, uIdx) => (
                      <div key={uIdx} className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <strong className="text-slate-800 block mb-0.5">{uc.industry}:</strong>
                        <span>{uc.scenario}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <Button
                    href={`/services/${service.slug}`}
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                  >
                    <span>View Service Blueprint & FAQs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    variant="outline"
                    size="md"
                    className="w-full justify-center border-slate-200"
                  >
                    <span>Get Instant Quote</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation & Quote Form Embed */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Personalized Consultation"
            badgeVariant="brand"
            title="Request a Custom Technology"
            highlight="Quotation & Scope"
            subtitle="Tell us about your project requirements. Our engineering team in Wilson Garden will review your specs and send an itemized proposal within 24 hours."
          />

          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-card">
            <ContactForm sourceContext="Services Overview Page" />
          </div>
        </div>
      </section>
    </>
  );
}
