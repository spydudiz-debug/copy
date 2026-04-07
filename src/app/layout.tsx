import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { CANONICAL_SITE_ORIGIN } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteTitle = "IPTV UK TV - Best IPTV Service in UK";
const siteDescription =
  "Watch premium IPTV channels in the UK with high quality streaming, fast setup, and 7-day money-back guarantee.";

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_SITE_ORIGIN),
  title: {
    default: siteTitle,
    template: "%s | IPTV UK TV",
  },
  description: siteDescription,
  applicationName: "IPTV UK TV",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    apple: [{ url: "/logo.svg", type: "image/svg+xml", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: CANONICAL_SITE_ORIGIN,
    siteName: "IPTV UK TV",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/logo.svg",
        width: 300,
        height: 48,
        alt: "IPTV UK TV — premium IPTV streaming in the UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
