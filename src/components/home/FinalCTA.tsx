import React from "react";
import Image from "next/image";
import { ArrowRight, PhoneCall, CheckCircle, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-brand-950 to-slate-900 text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl border border-slate-800">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ready to Grow in Bangalore?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Transform Your Online Presence with Wilson Garden’s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-accent-300 to-amber-300">
                  Leading IT Partner
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Whether you need a high-converting business website, a custom CRM to automate lead follow-ups, or a multi-warehouse ERP, our engineering team is ready to build it.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  href="/contact"
                  size="lg"
                  variant="gold"
                  className="w-full sm:w-auto shadow-lg"
                >
                  <span>Get Your Free Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  href={`tel:${siteConfig.contact.phone}`}
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-white border-slate-700 hover:bg-slate-800 hover:text-white"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Call {siteConfig.contact.displayPhone}</span>
                </Button>
              </div>

              {/* Trust micro-row */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Free Initial Discovery Call</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Code & Asset Ownership</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>In-Person Bangalore Meetings</span>
                </div>
              </div>
            </div>

            {/* Right Emblem Illustration */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-brand-500/20 to-accent-500/20 border border-white/10 p-4 flex items-center justify-center relative">
                <Image
                  src="/images/eagle-emblem.png"
                  alt="Eagle Tech Quality Seal"
                  width={200}
                  height={200}
                  className="object-contain w-36 h-36"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
