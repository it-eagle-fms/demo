import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const PortfolioPreview: React.FC = () => {
  const previewProjects = portfolioProjects.slice(0, 6);

  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-100" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            align="left"
            className="mb-0 max-w-2xl"
            badge="Real Client Results"
            badgeVariant="brand"
            title="Recent Digital Projects Delivered for"
            highlight="Bangalore Businesses"
            subtitle="Explore how our websites, mobile apps, and custom software drive tangible bottom-line results for clinics, distributors, and startups."
          />
          <div className="mt-6 md:mt-0">
            <Button href="/portfolio" variant="outline" size="md">
              <span>View All 8+ Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Project Image Container with Overlay */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w: 768px) 100vw, (max-w: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-white/95 text-slate-800 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom Location Indicator */}
                  <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <div className="text-xs font-semibold text-brand-600 mb-1">
                    {project.client}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                    {project.summary}
                  </p>

                  {/* Impact Metric Chips */}
                  <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 mb-4">
                    {project.impactMetrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx}>
                        <div className="text-xs font-extrabold text-brand-700">{metric.value}</div>
                        <div className="text-[10px] text-slate-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
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

              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/portfolio#${project.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-50 hover:bg-brand-50 text-slate-700 hover:text-brand-600 font-semibold text-xs rounded-xl border border-slate-200/80 transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
