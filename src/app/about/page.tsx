import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  Users,
  Target,
  ShieldCheck,
  HeartHandshake,
  Clock,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | IT & Web Development Company in Wilson Garden, Bangalore",
  description:
    "Learn about Eagle Vision Tech, an established full-stack IT services agency in Wilson Garden, Bangalore. Our story, engineering values, and dedication to local MSMEs.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Eagle Vision Tech | IT & Web Development Wilson Garden Bangalore",
    description:
      "Meet the engineers and designers behind Wilson Garden's premier digital technology partner.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ];

  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-600" />,
      title: "Radical Transparency",
      description:
        "No technical jargon, no artificial markups, and no proprietary lock-ins. You receive full access to your source code, hosting credentials, and design files from day one.",
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-600" />,
      title: "Results-First Engineering",
      description:
        "We measure our success by your commercial metrics: inbound phone inquiries, search rankings on Google, faster warehouse dispatches, and lower cart abandonment.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent-600" />,
      title: "Local Bangalore Accountability",
      description:
        "Our office is right here in Wilson Garden. When you have questions or want to review prototypes, we meet in person over South Indian filter coffee.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-amber-500" />,
      title: "Long-Term Partnership",
      description:
        "We don't vanish after launching your website. We provide 365 days of continuous server monitoring, security patching, and strategic guidance as your business grows.",
    },
  ];

  const team = [
    {
      name: "Sanjay Kumar",
      role: "Founder & Principal Solutions Architect",
      experience: "14+ Years in Full-Stack & ERP",
      bio: "Ex-enterprise tech lead passionate about bringing silicon-valley grade architectures to Bangalore's thriving SMB community.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    },
    {
      name: "Priyanka Nair",
      role: "Lead UI/UX & Design Systems Architect",
      experience: "9+ Years in Digital Products",
      bio: "Specializes in high-conversion web interfaces, accessibility compliance, and thumb-friendly mobile applications in Figma.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
    },
    {
      name: "Karthik R.",
      role: "Head of Mobile & Cloud Engineering",
      experience: "8+ Years in Flutter & React Native",
      bio: "Cross-platform mobile architect engineering smooth 60fps applications and scalable PostgreSQL/Node.js backends.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    },
    {
      name: "Divya Balaji",
      role: "Senior Local SEO & Growth Specialist",
      experience: "7+ Years in Search Ranking",
      bio: "Dedicated to placing Bangalore businesses into Google's top 3 Map Pack via technical schema and localized content silos.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-50/70 via-white to-slate-50 py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-100/70 text-brand-800">
              <Users className="w-3.5 h-3.5 text-brand-600" />
              Our Story & People
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Wilson Garden’s Dedicated{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-700 to-accent-600">
                Technology Partner
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Founded with a single core mission: to give Bangalore’s small & medium businesses, medical clinics, and growing retailers access to enterprise-grade web development and automation at honest, affordable rates.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission & Narrative */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                Why Eagle Was Born
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Bridging the Gap Between Clunky Agencies and Flaky Freelancers
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                For years, business owners in Wilson Garden, Lalbagh, and across South Bangalore faced an agonizing dilemma: pay exorbitant multi-lakh retainers to massive multinational agencies who treated them like an afterthought, or hire remote freelancers who frequently missed deadlines and vanished mid-project.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong>Eagle Vision Tech was created to be the alternative:</strong> an agile, senior-led engineering team physically located in Wilson Garden that combines high-performance modern tech (Next.js 14, Flutter, PostgreSQL) with personal, in-person accountability and fixed transparent pricing.
              </p>

              <div className="pt-2 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">
                    Over 250+ custom websites, mobile apps, and ERP systems deployed since inception.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">
                    Proudly serving local Bangalore businesses with zero offshore subcontracting.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">
                    100% intellectual property ownership transferred to you upon final invoice.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl relative bg-slate-900">
                <Image
                  src="/images/process-infographic.png"
                  alt="Eagle Vision Tech Engineering Process in Bangalore"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <span className="text-xs font-bold text-slate-900 block">Wilson Garden Tech Hub</span>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Conveniently situated near Lalbagh East Gate & Subbaiah Circle Road.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Guiding Principles"
            badgeVariant="gold"
            title="The Values That Guide Every Single"
            highlight="Line of Code We Write"
            subtitle="We don’t cut corners or hide behind tech jargon. We build reliable software that creates compounding commercial value for our partners."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Engineering Team */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Experienced Builders"
            badgeVariant="brand"
            title="Meet the Engineers & Strategists Behind"
            highlight="Your Next Digital Win"
            subtitle="Hands-on practitioners who love coding, clean user interfaces, and solving real operational bottlenecks for Indian companies."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:border-brand-300 transition-all group"
              >
                <div className="relative h-60 w-full overflow-hidden bg-slate-200">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 text-white text-[11px] font-semibold bg-slate-900/80 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                    {member.experience}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-brand-600 mb-2">
                    {member.role}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Culture & Location Callout */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-3">
            Open Door Culture
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Come Visit Us in Wilson Garden, Bangalore
          </h2>
          <p className="text-sm md:text-base text-slate-300 mt-4 leading-relaxed">
            We love sitting down with founders and business heads to whiteboard ideas, architect new software, or simply audit existing slow websites. Drop by our office anytime from Monday to Saturday.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button href="/contact" variant="primary" size="lg">
              <span>Book an In-Person Meeting</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              href={`tel:${siteConfig.contact.phone}`}
              variant="outline"
              size="lg"
              className="text-white border-slate-700 hover:bg-slate-800"
            >
              <PhoneCall className="w-4 h-4 text-brand-400" />
              <span>Call Us Direct</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
