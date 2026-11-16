import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { pricingTiers } from "@/data/pricing";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Transparent Bangalore Rates"
          badgeVariant="brand"
          title="Affordable Packages with"
          highlight="Zero Hidden Costs"
          subtitle="Fixed upfront pricing tailored for local startups, shops, clinics, and growing enterprises. No recurring lock-ins."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.popular
                  ? "bg-gradient-to-b from-brand-900 via-slate-900 to-slate-950 text-white shadow-2xl border-2 border-brand-500 scale-100 lg:-translate-y-2"
                  : "bg-slate-50/70 border border-slate-200/90 text-slate-900 hover:border-slate-300 shadow-soft"
              }`}
            >
              {/* Popular Pill */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className={`text-xl font-bold ${tier.popular ? "text-white" : "text-slate-900"}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-xs mt-1 ${tier.popular ? "text-slate-300" : "text-slate-500"}`}>
                    {tier.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="my-6 pb-6 border-b border-slate-200/20">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold tracking-tight">
                      {tier.price}
                    </span>
                    <span className={`text-xs ${tier.popular ? "text-slate-300" : "text-slate-500"}`}>
                      {tier.billingPeriod}
                    </span>
                  </div>
                  <div className={`text-xs font-semibold mt-2 ${tier.popular ? "text-brand-300" : "text-brand-600"}`}>
                    ⏱ {tier.deliveryTime}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${tier.popular ? "text-brand-300" : "text-slate-500"}`}>
                    What is Included:
                  </div>
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          tier.popular
                            ? "bg-brand-500/30 text-brand-300"
                            : "bg-brand-100 text-brand-700"
                        }`}
                      >
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={tier.popular ? "text-slate-200" : "text-slate-700"}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <Button
                  href={`/contact?plan=${tier.id}`}
                  variant={tier.popular ? "gold" : "primary"}
                  size="lg"
                  className="w-full justify-center"
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <p className={`text-center text-[11px] mt-2.5 ${tier.popular ? "text-slate-400" : "text-slate-400"}`}>
                  Includes 1-Year Hosting & Tech Warranty
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Scoping Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-50/60 border border-brand-100 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-700">
            Have a unique software architecture, multi-warehouse ERP, or complex API requirement?{" "}
            <Link href="/contact" className="font-bold text-brand-700 hover:underline">
              Request a custom detailed milestone proposal & NDA →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
