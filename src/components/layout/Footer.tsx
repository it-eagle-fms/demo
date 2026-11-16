import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { servicesData } from "@/data/services";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* Col 1: About & Local Authority */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-500 to-accent-500 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/eagle-emblem.png"
                  alt="Eagle Tech Emblem"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                  EAGLE <span className="text-brand-400">TECH</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase mt-1">
                  Wilson Garden • Bangalore
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Wilson Garden’s trusted technology partner. We engineer fast, high-converting websites, mobile apps, CRM, and ERP systems that generate qualified inbound leads for Bangalore businesses.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>GST Registered: 29AABCE1234F1Z5</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                <span>Local Bangalore Engineering Team</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500 transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-xs font-bold">in</span>
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500 transition-colors"
                aria-label="Facebook"
              >
                <span className="text-xs font-bold">fb</span>
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500 transition-colors"
                aria-label="Instagram"
              >
                <span className="text-xs font-bold">ig</span>
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500 transition-colors"
                aria-label="Twitter / X"
              >
                <span className="text-xs font-bold">X</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              IT Services in Bangalore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-brand-400 transition-colors" />
                    <span>{svc.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/services"
                  className="text-xs font-semibold text-brand-400 hover:underline flex items-center gap-1"
                >
                  <span>Explore All Services & Pricing</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Legal */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Company & Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-brand-400 transition-colors">
                  About Our Bangalore Team
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-400 hover:text-brand-400 transition-colors">
                  Client Case Studies & Results
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-brand-400 transition-colors">
                  Tech, SEO & Business Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-brand-400 transition-colors">
                  Contact & Free Consultation
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-brand-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-brand-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>

            {/* Local Areas Served Strip */}
            <div className="mt-6 p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-400">
              <span className="font-semibold text-slate-300 block mb-1">Serving Key Bangalore Areas:</span>
              <span>Wilson Garden, Lalbagh, Shanthi Nagar, Jayanagar, Koramangala, Richmond Town, HSR Layout.</span>
            </div>
          </div>

          {/* Col 4: Full NAP + Google Map Embed */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Visit Wilson Garden Office
            </h3>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <strong className="text-white block">{siteConfig.legalName}</strong>
                  <span>{siteConfig.contact.address.street},</span>
                  <br />
                  <span>{siteConfig.contact.address.area}, {siteConfig.contact.address.city} - {siteConfig.contact.address.postalCode}</span>
                  <p className="text-[11px] text-amber-400 mt-0.5">
                    Landmark: {siteConfig.contact.address.landmark}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <Clock className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>{siteConfig.contact.openingHours.days}: {siteConfig.contact.openingHours.hours}</span>
              </div>
            </div>

            {/* Responsive Google Map Card Embed */}
            <div className="rounded-xl overflow-hidden border border-slate-800 shadow-md h-32 relative bg-slate-900">
              <iframe
                title="Eagle Tech Wilson Garden Office Map"
                src={siteConfig.contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
              <a
                href="https://maps.google.com/?q=Wilson+Garden+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-1 right-1 bg-slate-950/90 text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1 hover:bg-brand-600 transition-colors"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & NAP Disclaimer */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <div>
            <p>
              © {currentYear} {siteConfig.legalName}. All rights reserved. Registered IT Services Agency in Bangalore, Karnataka.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
