"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-100" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Client Feedback"
          badgeVariant="gold"
          title="What Bangalore Business Owners Say About"
          highlight="Eagle Vision Tech"
          subtitle="Don't take our word for it. Read how our websites, local SEO, and custom software transformed businesses across Wilson Garden, Jayanagar, and South Bangalore."
        />

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card p-8 sm:p-12 relative overflow-hidden">
            {/* Background Quote Watermark */}
            <Quote className="absolute top-6 right-6 w-24 h-24 text-slate-100 -z-0 pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between">
              {/* Star Rating & Impact Metric */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-2">5.0 / 5.0</span>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  ⚡ Result: {current.metrics}
                </span>
              </div>

              {/* Review Quote Text */}
              <blockquote className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-8 italic">
                &ldquo;{current.content}&rdquo;
              </blockquote>

              {/* Author Info + Carousel Controls */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-200 flex-shrink-0">
                    <Image
                      src={current.avatar}
                      alt={current.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{current.name}</h4>
                    <p className="text-xs text-slate-600 font-medium">
                      {current.role}, <span className="text-brand-700">{current.company}</span>
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{current.location}</span>
                      <span>•</span>
                      <span className="text-brand-600 font-medium">{current.service}</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full border border-slate-200 hover:border-brand-500 hover:text-brand-600 flex items-center justify-center transition-colors focus:outline-none"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full border border-slate-200 hover:border-brand-500 hover:text-brand-600 flex items-center justify-center transition-colors focus:outline-none"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? "w-8 bg-brand-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
