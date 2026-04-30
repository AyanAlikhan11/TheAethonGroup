import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import CustomCursor from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aethongrid.com"),
  title: "THE AETHON GRID | Growth, Engineered.",
  description:
    "THE AETHON GRID helps ambitious brands scale through strategy, AI systems, media buying, creative execution, and precision growth operations. Premium Growth Intelligence Company.",
  keywords: [
    "growth intelligence company",
    "premium growth agency",
    "AI marketing company",
    "startup growth partner",
    "brand scaling systems",
    "growth engineering",
    "paid media agency",
    "AI automation marketing",
    "conversion optimization",
    "D2C growth partner",
    "SaaS growth agency",
  ],
  authors: [{ name: "THE AETHON GRID" }],
  icons: {
    icon: "/logo2.png",
  },
  openGraph: {
    title: "THE AETHON GRID | Growth, Engineered.",
    description:
      "We Build Growth Engines That Compound. Strategy, AI systems, media buying, creative execution, and precision growth operations.",
    url: "https://aethongrid.com",
    siteName: "THE AETHON GRID",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1344,
        height: 768,
        alt: "THE AETHON GRID - Growth, Engineered.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "THE AETHON GRID | Growth, Engineered.",
    description:
      "We Build Growth Engines That Compound. Premium Growth Intelligence for ambitious brands.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-aethon-text`}
      >
        <CustomCursor />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
