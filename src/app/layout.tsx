import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aethongroup.com"),
  title: "THE AETHON GROUP | Growth, Engineered.",
  description:
    "THE AETHON GROUP helps ambitious brands scale through strategy, AI systems, media buying, creative execution, and precision growth operations. Premium Growth Intelligence Company.",
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
  authors: [{ name: "THE AETHON GROUP" }],
  icons: {
    icon: "/aethon-logo.png",
  },
  openGraph: {
    title: "THE AETHON GROUP | Growth, Engineered.",
    description:
      "We Build Growth Engines That Compound. Strategy, AI systems, media buying, creative execution, and precision growth operations.",
    url: "https://aethongroup.com",
    siteName: "THE AETHON GROUP",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1344,
        height: 768,
        alt: "THE AETHON GROUP - Growth, Engineered.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "THE AETHON GROUP | Growth, Engineered.",
    description:
      "We Build Growth Engines That Compound. Premium Growth Intelligence for ambitious brands.",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-matte-black text-ivory`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
