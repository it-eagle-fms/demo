import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy | Eagle Vision Tech Bangalore",
  description: "Privacy Policy and data protection terms for Eagle Vision Tech Wilson Garden Bangalore.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy" },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbItems} />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-2">
              Legal Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Effective Date: November 2026 | Last Updated: November 16, 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-6">
            <p>
              At <strong>{siteConfig.legalName}</strong> (&ldquo;Eagle Tech&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we take the privacy and confidentiality of our clients, prospective business partners, and website visitors seriously. This Privacy Policy details how we collect, store, utilize, and protect your personal and commercial data in accordance with the Information Technology Act 2000, Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules 2011, and the Digital Personal Data Protection (DPDP) Act 2023 of India.
            </p>

            <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              We collect information that you knowingly and voluntarily provide to us when submitting inquiries through our contact forms, direct telephone conversations, email correspondence, or in-person meetings at our Wilson Garden, Bangalore office:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact Information:</strong> Full name, business email address, phone/WhatsApp number, company name, and physical address.</li>
              <li><strong>Project Specifications:</strong> Business goals, technical requirements, estimated budget parameters, and domain credentials provided for development purposes.</li>
              <li><strong>Automated Analytics:</strong> Non-personally identifiable technical information such as browser type, operating system, IP address, referral source, and pages viewed, gathered via cookies to assess website performance.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
            <p>The information we collect is strictly used for legitimate business purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To evaluate project scope, formulate technical proposals, and provide itemized cost quotations.</li>
              <li>To communicate regarding milestone deliverables, design reviews, testing schedules, and system maintenance.</li>
              <li>To send service notifications, security updates, and invoice receipts.</li>
              <li>To improve our website performance, Core Web Vitals, and localized user experience.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900">3. Non-Disclosure & Confidentiality</h2>
            <p>
              We treat all client business concepts, intellectual property, databases, source code, and customer records with strict confidentiality. We do not sell, rent, or trade your personal or commercial data to third-party data brokers or marketing lists under any circumstances.
            </p>

            <h2 className="text-xl font-bold text-slate-900">4. Third-Party Infrastructure & Data Security</h2>
            <p>
              We implement industry-standard encryption (SSL/TLS), firewalls, access controls, and honeypot spam filters to safeguard submitted data. When executing cloud infrastructure for clients, we utilize reputable, ISO-certified providers (e.g. AWS, Vercel, Supabase, PostgreSQL) with automated backup safeguards.
            </p>

            <h2 className="text-xl font-bold text-slate-900">5. Your Data Rights</h2>
            <p>
              You possess the right to inspect, correct, or request the deletion of your personal data from our contact databases at any point. To exercise these rights, please email us directly at <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-600 font-semibold">{siteConfig.contact.email}</a>.
            </p>

            <h2 className="text-xl font-bold text-slate-900">6. Contact Our Grievance Officer</h2>
            <p>
              For questions regarding this policy or data processing practices, please contact our designated grievance team:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1">
              <strong>{siteConfig.legalName}</strong>
              <p>{siteConfig.contact.address.street}, {siteConfig.contact.address.area}, {siteConfig.contact.address.city} - {siteConfig.contact.address.postalCode}</p>
              <p>Email: {siteConfig.contact.email} | Phone: {siteConfig.contact.displayPhone}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
