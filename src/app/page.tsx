import React from "react";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { TechStackRow } from "@/components/home/TechStackRow";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Trust Strip with Animated Counters */}
      <TrustStrip />

      {/* 4. Services Grid (6 Cards) */}
      <ServicesGrid />

      {/* 5. Why Choose Us (6 Differentiators) */}
      <WhyChooseUs />

      {/* 6. Process (5-Step Timeline) */}
      <ProcessTimeline />

      {/* 7. Portfolio Preview (6 Project Cards) */}
      <PortfolioPreview />

      {/* 8. Technologies Logo Row */}
      <TechStackRow />

      {/* 9. Testimonials Carousel (5 Reviews) */}
      <TestimonialsSection />

      {/* 10. Pricing Packages (3 Tiers) */}
      <PricingSection />

      {/* 11. FAQ Accordion (8 Local SEO Questions + FAQPage JSON-LD) */}
      <FAQAccordion />

      {/* 12. Final High-Conversion CTA Banner */}
      <FinalCTA />
    </>
  );
}
