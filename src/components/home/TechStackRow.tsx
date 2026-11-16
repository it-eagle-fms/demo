import React from "react";
import {
  Code,
  Layers,
  Database,
  Cloud,
  Terminal,
  Smartphone,
  Cpu,
  Globe,
  Flame,
  FileCode,
  Shield,
  Workflow,
} from "lucide-react";

export const TechStackRow: React.FC = () => {
  const technologies = [
    { name: "Next.js 14", icon: <Globe className="w-4 h-4 text-slate-900" />, type: "Frontend" },
    { name: "React 18", icon: <Code className="w-4 h-4 text-blue-500" />, type: "UI Library" },
    { name: "TypeScript", icon: <FileCode className="w-4 h-4 text-blue-600" />, type: "Language" },
    { name: "Tailwind CSS", icon: <Layers className="w-4 h-4 text-cyan-500" />, type: "Styling" },
    { name: "Node.js", icon: <Terminal className="w-4 h-4 text-emerald-600" />, type: "Backend" },
    { name: "Flutter", icon: <Smartphone className="w-4 h-4 text-sky-500" />, type: "Mobile Apps" },
    { name: "WordPress", icon: <Cpu className="w-4 h-4 text-blue-700" />, type: "CMS" },
    { name: "Laravel", icon: <Flame className="w-4 h-4 text-red-500" />, type: "PHP Framework" },
    { name: "PostgreSQL", icon: <Database className="w-4 h-4 text-indigo-500" />, type: "Database" },
    { name: "Python", icon: <Workflow className="w-4 h-4 text-amber-500" />, type: "AI & Backend" },
    { name: "AWS Cloud", icon: <Cloud className="w-4 h-4 text-amber-600" />, type: "Infrastructure" },
    { name: "Docker", icon: <Shield className="w-4 h-4 text-blue-500" />, type: "DevOps" },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
          Battle-Tested Modern Technologies
        </p>
        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-8 max-w-xl mx-auto">
          Built with World-Class Engineering Standards
        </h3>

        {/* Tech Badges Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 hover:bg-white hover:shadow-sm transition-all duration-200 group"
            >
              <div className="w-6 h-6 rounded-md bg-white shadow-xs border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-slate-800 block leading-tight">
                  {tech.name}
                </span>
                <span className="text-[10px] text-slate-600 block">
                  {tech.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
