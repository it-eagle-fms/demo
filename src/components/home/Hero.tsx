import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  PhoneCall,
  Star,
  Zap,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-slate-50/50 pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-100">
      {/* Background radial gradient highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-brand-200/30 to-accent-200/20 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Local Keyword H1, Subheading, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Local Geo-Target Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="brand" icon={<MapPin className="w-3.5 h-3.5 text-brand-600" />}>
                Based in Wilson Garden, Bangalore
              </Badge>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Available for New Projects
              </span>
            </div>

            {/* Critical SEO H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Website Development Company in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-700 to-accent-600">
                Wilson Garden, Bangalore
              </span>
            </h1>

            {/* One-Line Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We engineer lightning-fast custom websites, mobile apps, CRM, and ERP systems that help Bangalore SMBs, clinics, and startups capture high-intent local customer enquiries.
            </p>

            {/* Dual High-Conversion CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button href="/contact" size="lg" variant="primary" className="w-full sm:w-auto shadow-lg shadow-brand-600/25">
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                href={`tel:${siteConfig.contact.phone}`}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-slate-300 hover:border-brand-600 bg-white"
              >
                <PhoneCall className="w-4 h-4 text-brand-600" />
                <span>Call Now: {siteConfig.contact.displayPhone}</span>
              </Button>
            </div>

            {/* Trust Micro-Bullets */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>14-Day Rapid Launch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Free 1-Year Local Support</span>
              </div>
            </div>

            {/* Google Rating Social Proof Strip */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-700">
                4.9 / 5.0 Rating from 75+ Bangalore Business Owners
              </span>
            </div>
          </div>

          {/* Right Column: Hero Graphic + Floating Metric Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 via-accent-500/20 to-transparent rounded-3xl blur-2xl -z-10" />

            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Main Card Graphic */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/80 shadow-2xl bg-slate-900 group">
                <Image
                  src="/images/banner.png"
                  alt="Eagle Vision Tech Bangalore Web Development Showcase"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-semibold text-brand-300 uppercase tracking-wider">
                      Featured IT Solution
                    </p>
                    <p className="text-base font-bold">
                      Full-Stack Web & Automation Architecture
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: PageSpeed Score */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Zap className="w-5 h-5 fill-emerald-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-extrabold text-slate-900">99 / 100</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">Score</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">Google PageSpeed</p>
                </div>
              </div>

              {/* Floating Badge 2: Local Verification */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-float [animation-delay:2s]">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-slate-900 block">Wilson Garden Office</span>
                  <p className="text-[11px] text-slate-500">In-Person Bangalore Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
