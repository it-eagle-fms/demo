"use client";

import React, { useEffect, useState } from "react";
import { Award, FolderCheck, Smile, Clock } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export const TrustStrip: React.FC = () => {
  const stats = [
    {
      icon: <Award className="w-6 h-6 text-brand-600" />,
      number: 12,
      suffix: "+",
      label: "Years Experience",
      sublabel: "Pioneering Tech in Bangalore",
    },
    {
      icon: <FolderCheck className="w-6 h-6 text-accent-600" />,
      number: 250,
      suffix: "+",
      label: "Projects Delivered",
      sublabel: "Web, Mobile, CRM & ERP",
    },
    {
      icon: <Smile className="w-6 h-6 text-emerald-600" />,
      number: 99,
      suffix: "%",
      label: "Happy Clients",
      sublabel: "Local SMBs & Clinics",
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      number: 24,
      suffix: "/7",
      label: "Support Promise",
      sublabel: "Direct Bangalore Engineers",
    },
  ];

  return (
    <section className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-brand-200 transition-colors"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 flex-shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-bold text-slate-800 mt-0.5">{stat.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
