"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  MapPin,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { portfolioProjects, PortfolioProject } from "@/data/portfolio";
import { siteConfig } from "@/data/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";

type CategoryFilter = "All" | "Web Development" | "Mobile Apps" | "CRM & ERP" | "UI/UX Design" | "E-Commerce";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");

  const categories: CategoryFilter[] = [
    "All",
    "Web Development",
    "Mobile Apps",
    "CRM & ERP",
    "UI/UX Design",
    "E-Commerce",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === selectedCategory);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Portfolio", url: "/portfolio" },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbItems} />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-50/70 via-white to-slate-50 py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-100/70 text-brand-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            Proven Track Record
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Client Success Stories &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-700 to-accent-600">
              Measurable Results
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore how we engineered high-converting websites, cross-platform mobile apps, and custom CRM/ERP software for clinics, industrial manufacturers, and startups across Bangalore.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-brand-600 text-white shadow-md shadow-brand-600/20"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={project.slug}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-w: 768px) 100vw, (max-w: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-white/95 text-slate-900 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 text-white text-xs font-semibold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-300" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block">
                        {project.client}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mt-0.5">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Challenge & Solution Accordion-style Box */}
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-2 text-xs">
                      <div>
                        <strong className="text-slate-800 block text-[11px] uppercase tracking-wide text-rose-700">
                          The Challenge:
                        </strong>
                        <p className="text-slate-600 text-[11px] mt-0.5">{project.challenge}</p>
                      </div>
                      <div className="pt-1 border-t border-slate-200/60">
                        <strong className="text-slate-800 block text-[11px] uppercase tracking-wide text-emerald-700">
                          Our Solution:
                        </strong>
                        <p className="text-slate-600 text-[11px] mt-0.5">{project.solution}</p>
                      </div>
                    </div>

                    {/* Impact Metrics */}
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                        Quantifiable Business Impact:
                      </span>
                      <div className="grid grid-cols-3 gap-2 p-3 bg-brand-50/50 rounded-xl border border-brand-100/60 text-center">
                        {project.impactMetrics.map((metric, idx) => (
                          <div key={idx}>
                            <div className="text-xs sm:text-sm font-black text-brand-700">
                              {metric.value}
                            </div>
                            <div className="text-[9px] sm:text-[10px] text-slate-600 leading-tight mt-0.5 font-medium">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <Button
                    href="/contact"
                    variant="outline"
                    size="sm"
                    className="w-full justify-center border-slate-200 hover:border-brand-500"
                  >
                    <span>Discuss a Similar Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Have a Project in Mind?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let’s Build Something Exceptional for Your Bangalore Business
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Get an itemized proposal with clear deliverables, fixed pricing, and a guaranteed launch date.
          </p>
          <div className="pt-2">
            <Button href="/contact" size="lg" variant="gold">
              <span>Schedule a Free Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
