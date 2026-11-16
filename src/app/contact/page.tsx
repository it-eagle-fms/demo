import React from "react";
import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Building2,
  Navigation,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact Us | Web Development & IT Solutions in Wilson Garden, Bangalore",
  description:
    "Contact Eagle Vision Tech in Wilson Garden, Bangalore. Visit our office near Lalbagh East Gate, call +91 98860 12345, or request an instant free project quotation.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Eagle Vision Tech | Wilson Garden Bangalore",
    description:
      "Get in touch with Wilson Garden's premier IT and website engineering team.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Contact Us", url: "/contact" },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-50/70 via-white to-slate-50 py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-100/70 text-brand-800 mb-4">
            <Building2 className="w-3.5 h-3.5 text-brand-600" />
            Wilson Garden Office & Discovery Hub
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Let’s Build Something Great in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-700 to-accent-600">
              Bangalore
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have a new website, custom CRM, or mobile app in mind? Drop by our Wilson Garden office, call our tech team directly, or fill out the quotation form below.
          </p>
        </div>
      </section>

      {/* Main 2-Column Section: Contact Form + NAP Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-slate-50/80 p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-soft">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-1">
                  Online Inquiry
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Request a Free Proposal & Callback
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  We reply within <strong>30 minutes</strong> during working hours with an itemized estimate.
                </p>
              </div>

              <ContactForm sourceContext="Contact Page Inquiry" />
            </div>

            {/* Right Column: Full Verified NAP + Direct Channels */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Call & WhatsApp Highlight Box */}
              <div className="bg-gradient-to-br from-slate-950 to-slate-900 text-white p-7 rounded-3xl border border-slate-800 shadow-xl space-y-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  ⚡ Immediate Response
                </span>
                <h3 className="text-xl font-bold">
                  Prefer to Talk Right Now?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Call our senior engineers directly or message us on WhatsApp for rapid questions, budget estimates, and availability.
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Direct</span>
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20Eagle%20Tech,%20I%20would%20like%20to%20discuss%20a%20project%20in%20Bangalore.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Complete NAP Card */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-soft space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Bangalore Headquarters
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    {siteConfig.legalName}
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Physical Address:</strong>
                      <span>{siteConfig.contact.address.street}</span>
                      <br />
                      <span>{siteConfig.contact.address.area}, {siteConfig.contact.address.city} - {siteConfig.contact.address.postalCode}</span>
                      <br />
                      <span>{siteConfig.contact.address.state}, {siteConfig.contact.address.country}</span>
                      <p className="text-xs text-amber-600 font-medium mt-1">
                        📍 Landmark: {siteConfig.contact.address.landmark}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-600 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900 block text-xs">Phone:</strong>
                      <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-brand-600 transition-colors">
                        {siteConfig.contact.displayPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brand-600 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900 block text-xs">Email:</strong>
                      <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand-600 transition-colors">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-brand-600 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900 block text-xs">Business Hours:</strong>
                      <span>{siteConfig.contact.openingHours.days}: {siteConfig.contact.openingHours.hours}</span>
                    </div>
                  </div>
                </div>

                {/* How to Reach Us */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-900 block mb-1">
                    Directions & Connectivity:
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Easily accessible via Lalbagh Metro Station (Green Line) and Wilson Garden 10th Cross bus stop. Visitor parking is available at our premises.
                  </p>
                </div>
              </div>

              {/* Embedded Interactive Google Map */}
              <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-card h-64 relative bg-slate-100">
                <iframe
                  title="Eagle Tech Wilson Garden Office Location"
                  src={siteConfig.contact.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
                <div className="absolute top-3 left-3 bg-white/95 px-3 py-1.5 rounded-xl shadow-md text-xs font-bold text-slate-800 flex items-center gap-1.5 backdrop-blur-sm">
                  <Navigation className="w-3.5 h-3.5 text-brand-600" />
                  <span>Wilson Garden, Bangalore 560027</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
