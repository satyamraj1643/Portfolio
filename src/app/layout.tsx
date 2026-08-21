import type { Metadata } from "next";
import "./globals.css";
import { absoluteUrl, getSiteUrl, siteDescription, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  applicationName: siteName,
  title: {
    default: "Satyam Raj | Associate Product Manager",
    template: "%s | Satyam Raj",
  },
  description: siteDescription,
  keywords: [
    "Satyam Raj",
    "Associate Product Manager",
    "AI Product Analyst",
    "Product Manager portfolio",
    "AI products",
    "PRD writing",
    "Product delivery",
    "IIIT Bhagalpur",
  ],
  authors: [{ name: "Satyam Raj", url: getSiteUrl() }],
  creator: "Satyam Raj",
  publisher: "Satyam Raj",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: getSiteUrl(),
    siteName,
    title: "Satyam Raj | Associate Product Manager",
    description: siteDescription,
    firstName: "Satyam",
    lastName: "Raj",
    images: [
      {
        url: absoluteUrl("/screen.png"),
        width: 1200,
        height: 1200,
        alt: "Satyam Raj portfolio illustration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyam Raj | Associate Product Manager",
    description: siteDescription,
    images: [absoluteUrl("/screen.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
