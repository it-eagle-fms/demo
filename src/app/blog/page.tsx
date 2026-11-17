import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { blogPosts } from "@/data/blog";



import { siteConfig } from "@/data/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Tech, SEO & Business Blog | Wilson Garden, Bangalore",
  description:
    "Actionable insights on website development, local SEO ranking in Bangalore, custom CRM automation, and high-performance Next.js engineering.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Tech, SEO & Business Blog | Eagle Vision Tech",
    description:
      "Expert guides for Bangalore founders and business owners looking to scale their online presence.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogIndexPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ];

  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-50/70 via-white to-slate-50 py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-brand-100/70 text-brand-800 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-brand-600" />
            Engineering & Growth Insights
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Practical Tech & SEO Guides for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-700 to-accent-600">
              Bangalore Businesses
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Written by our in-house engineering and search marketing team in Wilson Garden. No fluff or generic theories—only field-tested blueprints to grow your local revenue.
          </p>
        </div>
      </section>

      {/* Featured Post Card */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-4 block">
            ⭐ Featured Strategic Guide
          </span>

          <div className="bg-slate-50 rounded-3xl border border-slate-200/90 overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative h-72 sm:h-96 w-full">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="lg:col-span-5 p-8 lg:p-10 space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
                  {featuredPost.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredPost.readingTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug hover:text-brand-600 transition-colors">
                <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="pt-2">
                <Button href={`/blog/${featuredPost.slug}`} variant="primary" size="md">
                  <span>Read Complete Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Posts Grid */}
      <section className="py-20 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900">Latest Engineering & Business Articles</h3>
            <p className="text-sm text-slate-500 mt-1">Deep dives into modern frameworks, sales automation, and local marketing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-white/95 text-slate-900 px-3 py-1 rounded-full shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">{post.author.name}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-brand-600 group-hover:text-brand-700 flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
