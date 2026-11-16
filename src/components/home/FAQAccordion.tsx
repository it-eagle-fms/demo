"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";
import { faqsData } from "@/data/faqs";
import { siteConfig } from "@/data/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQJsonLd } from "@/components/seo/JsonLd";

export const FAQAccordion: React.FC = () => {
  // Open first FAQ by default
  const [openIds, setOpenIds] = useState<string[]>(["faq-1"]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-100" id="faqs">
      {/* Inject Schema for Search Engines */}
      <FAQJsonLd faqs={faqsData} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Frequently Asked Questions"
          badgeVariant="slate"
          title="Common Questions from"
          highlight="Bangalore Clients"
          subtitle="Everything you need to know about our web development, local SEO, custom CRM & ERP systems, and in-person consultations."
        />

        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200 hover:border-brand-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-2xl cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-brand-50 text-brand-600" : "text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Local Help Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Have a specific question about your project?</h4>
              <p className="text-xs text-slate-500">Speak directly to our senior tech lead in Wilson Garden today.</p>
            </div>
          </div>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call: {siteConfig.contact.displayPhone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
