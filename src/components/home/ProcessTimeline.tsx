import React from "react";
import {
  Compass,
  Layout,
  Cpu,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <Compass className="w-6 h-6 text-brand-600" />,
      title: "Discovery & Strategy",
      duration: "Day 1 - 2",
      description:
        "We meet at our Wilson Garden office or over video call to analyze your target customers, competitors in Bangalore, high-volume local keywords, and core business goals.",
    },
    {
      number: "02",
      icon: <Layout className="w-6 h-6 text-accent-600" />,
      title: "UI/UX & Wireframing",
      duration: "Day 3 - 5",
      description:
        "We craft pixel-perfect, interactive Figma prototypes of all desktop and mobile screens. You test and click through your design on your phone before coding begins.",
    },
    {
      number: "03",
      icon: <Cpu className="w-6 h-6 text-emerald-600" />,
      title: "Full-Stack Development",
      duration: "Day 6 - 10",
      description:
        "Our engineers translate approved designs into ultra-fast Next.js, Tailwind, and Node.js code, hooking up forms, WhatsApp alerts, and payment gateways seamlessly.",
    },
    {
      number: "04",
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      title: "Testing & Speed Auditing",
      duration: "Day 11 - 12",
      description:
        "Rigorous verification across 360px mobile to 4K desktop screens, form honeypot spam checks, accessibility compliance, and Google PageSpeed 95+ score tuning.",
    },
    {
      number: "05",
      icon: <Rocket className="w-6 h-6 text-purple-600" />,
      title: "Launch & Growth Support",
      duration: "Day 13 - 14",
      description:
        "Domain pointing, SSL activation, Google Search Console submission, Google Business Profile linking, and 1-year complimentary warranty with recorded CMS training.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="process">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-brand-600/10 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-500/20 text-brand-300 border border-brand-500/30 mb-4">
            Structured Execution
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Our 5-Step Proven Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-accent-300 to-amber-300">
              Workflow
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
            Transparent milestones, weekly working demos, and zero surprises. Here is how we take your project from initial idea to live revenue generation.
          </p>
        </div>

        {/* 5-Step Desktop Timeline / Mobile Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative flex flex-col justify-between hover:border-brand-500/80 hover:bg-slate-800 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-600 group-hover:text-brand-400 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                    {step.duration}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
