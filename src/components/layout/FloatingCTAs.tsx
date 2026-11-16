"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export const FloatingCTAs: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cleanWhatsapp = siteConfig.contact.whatsapp.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanWhatsapp}?text=Hi%20Eagle%20Tech,%20I'm%20looking%20for%20IT%20services%20(website,%20mobile%20app,%20CRM/ERP)%20in%20Bangalore.`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center shadow-md transition-all hover:-translate-y-0.5 active:scale-95 backdrop-blur-sm"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Mobile-only Direct Call Floating Pill */}
      <a
        href={`tel:${siteConfig.contact.phone}`}
        className="pointer-events-auto sm:hidden flex items-center gap-2 px-4 py-2.5 bg-brand-600 text-white rounded-full font-bold text-xs shadow-lg shadow-brand-600/30 active:scale-95 transition-transform"
        aria-label="Direct Phone Call to Eagle Tech"
      >
        <Phone className="w-3.5 h-3.5 animate-bounce" />
        <span>Call Now</span>
      </a>

      {/* Floating WhatsApp Bubble with Pulse Badge */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center gap-2.5 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat with Eagle Tech on WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white" />
        </span>

        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="font-bold text-xs hidden md:inline-block pr-1 tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
