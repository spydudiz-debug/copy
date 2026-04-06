import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { CANONICAL_SITE_ORIGIN } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_SITE_ORIGIN),
  title: "SCOP — Best IPTV Provider",
  description:
    "Premium IPTV subscription with no buffering, HD & 4K streaming, and global datacenters. Trusted by 5,000+ customers.",
  icons: {
    icon: "/images/scoop-media-logo.png",
    apple: "/images/scoop-media-logo.png",
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
