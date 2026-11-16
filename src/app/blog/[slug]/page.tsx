import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  CheckCircle,
  HelpCircle,
  PhoneCall,
} from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blog";
import { siteConfig } from "@/data/site-config";
import { ArticleJsonLd, BreadcrumbsJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.url}/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.coverImage],
    },
  };
}

export default function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <ArticleJsonLd post={post} />
      <BreadcrumbsJsonLd items={breadcrumbItems} />

      {/* Article Header & Hero */}
      <article className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-600 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all articles</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
            <span className="font-bold text-brand-600 bg-brand-50 px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
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

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Author Strip */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-10">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200 flex-shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-sm font-bold text-slate-900 block">{post.author.name}</span>
              <span className="text-xs text-slate-500">{post.author.role} • Eagle Vision Tech Wilson Garden</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-72 sm:h-96 md:h-[420px] w-full rounded-3xl overflow-hidden shadow-card mb-12">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Main Layout: Table of Contents & Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Table of Contents Floating Card */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-24 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Table of Contents
                </span>
                <nav className="space-y-2 text-xs">
                  {post.tableOfContents.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.id}`}
                      className="block text-slate-600 hover:text-brand-600 transition-colors py-1 pl-2 border-l-2 border-transparent hover:border-brand-600"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>

                <div className="pt-4 border-t border-slate-200/80">
                  <span className="text-xs font-semibold text-slate-700 block mb-2">Need Help with this?</span>
                  <Button href="/contact" size="sm" variant="primary" className="w-full text-xs">
                    <span>Ask Our Tech Team</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Article Content Sections */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-10">
              {post.content.map((sec, idx) => (
                <section key={idx} id={sec.sectionId} className="space-y-4 scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                    {sec.heading}
                  </h2>

                  {sec.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {para}
                    </p>
                  ))}

                  {/* Optional Callout Box */}
                  {sec.callout && (
                    <div className="p-5 bg-brand-50/70 border-l-4 border-brand-600 rounded-r-2xl space-y-1 my-4">
                      <strong className="text-xs font-bold uppercase tracking-wider text-brand-900 block">
                        💡 {sec.callout.title}
                      </strong>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {sec.callout.text}
                      </p>
                    </div>
                  )}

                  {/* Optional Checklists */}
                  {sec.bulletPoints && (
                    <ul className="space-y-2.5 my-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                      {sec.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* In-Article Local CTA Banner */}
              <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 my-8">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Bangalore Business Advisory
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Ready to Implement These Growth Strategies?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Book a free 30-minute discovery consultation with Eagle Vision Tech in Wilson Garden, Bangalore. We will review your current website, keywords, and sales pipeline.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button href="/contact" size="md" variant="gold">
                    <span>Schedule Free Strategy Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-brand-400" />
                    <span>{siteConfig.contact.displayPhone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-1">
              Keep Reading
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              Related Engineering & Strategy Guides
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((rel) => (
              <div
                key={rel.slug}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-brand-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-brand-600 uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 hover:text-brand-600 transition-colors mt-1 mb-2">
                    <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">{rel.excerpt}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{rel.readingTime}</span>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="text-xs font-bold text-brand-600 hover:underline flex items-center gap-1"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
