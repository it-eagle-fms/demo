import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  PhoneCall,
  Clock,
  Sparkles,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { servicesData, ServiceDetail } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import { ServiceJsonLd, FAQJsonLd, BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/forms/ContactForm";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${service.title} in Wilson Garden Bangalore`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [siteConfig.ogImage],
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${service.slug}` },
  ];

  const relatedServices = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Search Engine Schemas */}
      <ServiceJsonLd service={service} />
      <FAQJsonLd faqs={service.faqs} />
      <BreadcrumbsJsonLd items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-50/70 via-white to-slate-50/50 pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li>
                <Link href="/" className="hover:text-brand-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </li>
              <li className="font-semibold text-slate-800" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Local H1, Subheading, CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <Badge variant="brand" icon={<MapPin className="w-3.5 h-3.5 text-brand-600" />}>
                  Wilson Garden, Bangalore Service Center
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                {service.localTitle}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {service.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Button href="#quote-form" size="lg" variant="primary" className="w-full sm:w-auto shadow-md">
                  <span>Get Free Service Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  href={`tel:${siteConfig.contact.phone}`}
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white"
                >
                  <PhoneCall className="w-4 h-4 text-brand-600" />
                  <span>Call: {siteConfig.contact.displayPhone}</span>
                </Button>
              </div>

              {/* Fast Trust Indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-600" />
                  <span>Turnaround: {service.turnaroundTime}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>1-Year Support Included</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Starting at {service.startingPrice}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Deliverables Card */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-card space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-1">
                    What You Receive
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">
                    Complete Production Package
                  </h2>
                </div>

                <div className="space-y-3">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Pricing Starts From</span>
                    <span className="text-2xl font-black text-slate-900">{service.startingPrice}</span>
                  </div>
                  <Button href="#quote-form" variant="primary" size="sm">
                    <span>Inquire Now</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
              Strategic Advantages
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Why Bangalore Companies Choose Our {service.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, idx) => (
              <Card key={idx} hoverEffect className="p-8 border-slate-200/80">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features & Modules Grid */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-700 bg-accent-50 px-3 py-1 rounded-full">
              Technical Modules
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Comprehensive Features Built Into Every Build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-brand-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-700 mb-4">
                  ✓
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases in Bangalore */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
              Real-World Applications
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Tailored for Diverse Industries Across Bangalore
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.useCases.map((uc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-soft transition-all"
              >
                <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-2">
                  {uc.industry}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">{uc.scenario}</p>
              </div>
            ))}
          </div>

          {/* Technology Badges */}
          <div className="mt-16 pt-10 border-t border-slate-100 text-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-4">
              Core Technologies Deployed for {service.title}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
              {service.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service-Specific FAQs */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-200/70 px-3 py-1 rounded-full">
              Answers & Advice
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
              Frequently Asked Questions About {service.title}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs"
              >
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-brand-600 font-extrabold">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Inquiry Form Embed */}
      <section className="py-20 bg-white" id="quote-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
              Get Started Today
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Request a Free Quote for {service.title}
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
              Speak with our senior engineers in Wilson Garden. No obligations, clear milestones, and rapid estimates.
            </p>
          </div>

          <div className="bg-slate-50/80 p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-soft">
            <ContactForm
              defaultService={service.title}
              sourceContext={`Service Page: ${service.title}`}
            />
          </div>
        </div>
      </section>

      {/* Related Services Links */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Related Capabilities
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              Explore Complementary IT Services in Bangalore
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-brand-400 hover:shadow-soft transition-all group block"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {rel.title}
                  </h4>
                  <ArrowRight className="w-4 h-4 text-brand-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-slate-600 line-clamp-2">{rel.shortDescription}</p>
                <span className="text-[11px] font-bold text-brand-700 mt-3 inline-block">
                  From {rel.startingPrice} • {rel.turnaroundTime}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
