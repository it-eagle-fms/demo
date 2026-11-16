import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site-config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTAs } from "@/components/layout/FloatingCTAs";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Website Development Company in Wilson Garden, Bangalore | Eagle Vision Tech",
    template: "%s | Eagle Vision Tech",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "Website Development Company in Wilson Garden, Bangalore | Eagle Vision Tech",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Eagle Vision Tech - Website Development & IT Solutions Wilson Garden Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Wilson Garden, Bangalore | Eagle Vision Tech",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@eagletechin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/eagle-emblem.png",
    shortcut: "/images/eagle-emblem.png",
    apple: "/images/eagle-emblem.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTAs />
        <CookieConsent />
      </body>
    </html>
  );
}
