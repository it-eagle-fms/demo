import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass, PhoneCall } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-16 px-4">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-card text-center space-y-6">
        <div className="w-20 h-20 bg-brand-50 rounded-3xl flex items-center justify-center mx-auto text-brand-600 font-black text-3xl shadow-inner">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let&apos;s get you back on track.
          </p>
        </div>

        <div className="space-y-2.5 pt-2">
          <Button href="/" variant="primary" size="md" className="w-full justify-center">
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Button>

          <Button href="/services" variant="outline" size="md" className="w-full justify-center">
            <Compass className="w-4 h-4" />
            <span>Explore IT Services</span>
          </Button>
        </div>

        <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
          <span>Need immediate assistance? Call our Wilson Garden office at </span>
          <a href={`tel:${siteConfig.contact.phone}`} className="font-bold text-brand-600 hover:underline block mt-1">
            {siteConfig.contact.displayPhone}
          </a>
        </div>
      </div>
    </div>
  );
}
