import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Terms of Service | Eagle Vision Tech Bangalore",
  description: "Terms and conditions of service for Eagle Vision Tech Wilson Garden Bangalore.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfServicePage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Terms of Service", url: "/terms" },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbItems} />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-2">
              Commercial Agreement
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Effective Date: November 2026 | Last Updated: November 16, 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-6">
            <p>
              Welcome to <strong>{siteConfig.legalName}</strong>. By accessing our website, purchasing our services, or commissioning custom website development, mobile application programming, CRM, or ERP software, you agree to comply with the following contractual terms and conditions.
            </p>

            <h2 className="text-xl font-bold text-slate-900">1. Scope of Work & Proposals</h2>
            <p>
              All software development, UI/UX design, and SEO services are governed by written proposals, Statements of Work (SOW), or milestone schedules agreed upon before project initiation. Any additional feature requests, scope changes, or third-party API additions requested beyond the signed SOW will be scoped as formal addendums with corresponding time and cost estimates.
            </p>

            <h2 className="text-xl font-bold text-slate-900">2. Intellectual Property & Code Ownership</h2>
            <p>
              We firmly believe in complete client ownership. Upon 100% settlement of all project invoices and milestone payments, all custom source code, database structures, HTML/CSS assets, and Figma design files created specifically for your project become your exclusive intellectual property. Eagle Tech retains no proprietary lock-in or licensing claims over your custom build.
            </p>

            <h2 className="text-xl font-bold text-slate-900">3. Milestone Payments & Invoicing</h2>
            <p>
              Projects typically operate on structured milestone phases (e.g., initial deposit upon wireframe approval, development delivery demo, and final balance upon production launch and handover). All invoices are issued with applicable Goods and Services Tax (GST) compliant under Karnataka jurisdiction.
            </p>

            <h2 className="text-xl font-bold text-slate-900">4. Warranty & Post-Launch Support</h2>
            <p>
              Unless otherwise specified in writing, custom websites and applications include a complimentary 1-year technical warranty covering bug fixes, server uptime monitoring, and security patching directly attributable to our codebase. Support does not encompass defects resulting from unauthorized third-party alterations, hosting non-payment, or major breaking external API modifications.
            </p>

            <h2 className="text-xl font-bold text-slate-900">5. Limitation of Liability & Governing Law</h2>
            <p>
              In no event shall {siteConfig.legalName} be liable for indirect, incidental, or consequential damages resulting from downtime or third-party service outages. These Terms shall be governed and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
              <strong>Need clarification regarding our terms or custom enterprise SLAs?</strong>
              <p className="mt-1">
                Contact our contracts desk at <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-600 font-semibold">{siteConfig.contact.email}</a> or call our Wilson Garden office at {siteConfig.contact.displayPhone}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
