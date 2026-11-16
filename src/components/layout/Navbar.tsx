"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  ArrowRight,
  Code2,
  Palette,
  TrendingUp,
  Smartphone,
  Users,
  Layers,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";

const serviceIcons: Record<string, React.ReactNode> = {
  "/services/web-development": <Code2 className="w-4 h-4 text-brand-600" />,
  "/services/web-design": <Palette className="w-4 h-4 text-accent-600" />,
  "/services/seo": <TrendingUp className="w-4 h-4 text-emerald-600" />,
  "/services/mobile-app-development": <Smartphone className="w-4 h-4 text-purple-600" />,
  "/services/crm": <Users className="w-4 h-4 text-blue-600" />,
  "/services/erp": <Layers className="w-4 h-4 text-amber-600" />,
};

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const services = siteConfig.navItems.find((item) => item.label === "Services")?.children || [];

  return (
    <>
      {/* Top micro-bar for local Bangalore credibility */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden sm:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Wilson Garden, Bangalore Tech Hub
            </span>
            <span className="text-slate-400">|</span>
            <span>Serving Bangalore MSMEs, Clinics & Startups</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-brand-400" />
              <span>{siteConfig.contact.displayPhone}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80"
            : "bg-white py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-accent-600 flex items-center justify-center shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform overflow-hidden relative">
              <Image
                src="/images/eagle-emblem.png"
                alt="Eagle Tech Logo Emblem"
                width={40}
                height={40}
                className="object-cover w-full h-full p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors leading-none">
                EAGLE <span className="text-brand-600 font-black">TECH</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-600 tracking-wider uppercase mt-1">
                Wilson Garden • Bangalore
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/" ? "text-brand-600 bg-brand-50/80 font-semibold" : "text-slate-700 hover:text-brand-600 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/about" ? "text-brand-600 bg-brand-50/80 font-semibold" : "text-slate-700 hover:text-brand-600 hover:bg-slate-50"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                  pathname.startsWith("/services")
                    ? "text-brand-600 bg-brand-50/80 font-semibold"
                    : "text-slate-700 hover:text-brand-600 hover:bg-slate-50"
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-brand-600" : ""}`} />
              </Link>

              {/* Flyout Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-card border border-slate-200/80 p-2.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1 mb-1">
                    IT Services in Bangalore
                  </div>
                  <div className="space-y-1">
                    {services.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors flex-shrink-0 mt-0.5">
                          {serviceIcons[sub.href] || <Code2 className="w-4 h-4 text-brand-600" />}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-800 group-hover:text-brand-600 transition-colors">
                            {sub.label}
                          </div>
                          {sub.description && (
                            <p className="text-[11px] text-slate-600 line-clamp-1 mt-0.5">
                              {sub.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-1">
                    <Link
                      href="/services"
                      className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center justify-between"
                    >
                      <span>View All 6 Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/portfolio" ? "text-brand-600 bg-brand-50/80 font-semibold" : "text-slate-700 hover:text-brand-600 hover:bg-slate-50"
              }`}
            >
              Portfolio
            </Link>

            <Link
              href="/blog"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname.startsWith("/blog") ? "text-brand-600 bg-brand-50/80 font-semibold" : "text-slate-700 hover:text-brand-600 hover:bg-slate-50"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/contact" ? "text-brand-600 bg-brand-50/80 font-semibold" : "text-slate-700 hover:text-brand-600 hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-600 px-3 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-600" />
              <span>{siteConfig.contact.displayPhone}</span>
            </a>
            <Button href="/contact" size="md" variant="primary">
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="p-2 rounded-lg text-brand-600 bg-brand-50 hover:bg-brand-100 transition-colors"
              aria-label="Call Eagle Tech"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-brand-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] z-50 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white h-full max-h-[calc(100vh-65px)] overflow-y-auto p-6 flex flex-col justify-between shadow-2xl border-t border-slate-100">
            <div className="space-y-4">
              <div className="space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-600 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-600 transition-colors"
                >
                  About Us
                </Link>

                {/* Mobile Services Accordion */}
                <div className="py-1">
                  <div className="px-3 py-2 text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Our Services
                  </div>
                  <div className="pl-2 space-y-1">
                    {services.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                        <span>{sub.label}</span>
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="block px-3 py-2 text-xs font-bold text-brand-600 hover:underline"
                    >
                      View All Services Overview →
                    </Link>
                  </div>
                </div>

                <Link
                  href="/portfolio"
                  className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-600 transition-colors"
                >
                  Client Portfolio
                </Link>
                <Link
                  href="/blog"
                  className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-600 transition-colors"
                >
                  Tech & SEO Blog
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-brand-600 transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              {/* Local Contact Info in Drawer */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2 text-xs text-slate-600">
                <p className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Office in Wilson Garden, Bangalore
                </p>
                <p>{siteConfig.contact.address.street}, {siteConfig.contact.address.area}</p>
                <p className="text-slate-700">Mon - Sat: 9:00 AM – 7:00 PM</p>
              </div>
            </div>

            <div className="pt-6 space-y-3 pb-8">
              <Button href="/contact" size="lg" variant="primary" className="w-full">
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-600" />
                  <span>Call Direct</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs rounded-xl transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
