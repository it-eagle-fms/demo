"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("eagle_cookie_consent");
    if (!consent) {
      // Delay showing banner by 1.5s for clean initial page render
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("eagle_cookie_consent", "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("eagle_cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie preferences"
      className="fixed bottom-5 left-5 right-5 sm:right-auto sm:max-w-md z-50 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 shadow-xl shadow-slate-900/10 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 bg-brand-50 text-brand-600 rounded-xl flex-shrink-0 mt-0.5">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="text-xs text-slate-700 leading-relaxed">
            We use essential cookies and anonymous analytics to improve your browsing experience and measure site performance. Read our{" "}
            <Link href="/privacy-policy" className="text-brand-600 underline font-semibold">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex items-center gap-2 mt-3">
            <button
              onClick={acceptCookies}
              className="px-4 py-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs font-semibold transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={declineCookies}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-medium transition-colors"
            >
              Essential Only
            </button>
          </div>
        </div>
        <button
          onClick={declineCookies}
          className="text-slate-400 hover:text-slate-600 p-1 -mr-1 -mt-1"
          aria-label="Close cookie banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
