import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { WhatsAppFloat } from "@/components/shared/whatsapp-float";
import { JsonLd } from "@/components/shared/json-ld";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/json-ld";
import { site } from "@/lib/site";
import { Analytics } from '@vercel/analytics/next';

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Pijat Refleksi Profesional di Jakarta Timur`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  applicationName: site.name,
  category: "Health & Wellness",
  alternates: {
    canonical: "/",
    languages: { "id-ID": "/" },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Pijat Refleksi Profesional di Jakarta Timur`,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1440,
        height: 720,
        alt: "Mutiara Refleksi — Pusat Pijat Refleksi Jakarta Timur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Pijat Refleksi Profesional Jakarta Timur`,
    description: site.description,
    images: [site.ogImage],
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
    icon: [{ url: "/branding/logo-kecil.png", type: "image/png" }],
    apple: [{ url: "/branding/logo-kecil.png" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#14532d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${playfair.variable} font-sans min-h-screen flex flex-col`}>
        <JsonLd data={localBusinessJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Navbar />
        <main className="flex-1" id="konten-utama">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  );
}
