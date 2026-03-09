import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { GaTracking } from "@/components/analytics/ga-tracking";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drarobertacantagalli.com.br";
const ogImage = "/opengraph-image.jpg";
const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-NRZZSDFLEH";
const title = "Dra. Roberta Cantagalli - Tricologia & Saúde Capilar Integrativa";
const description =
  "Especialista em tricologia clínica e saúde capilar integrativa. Avaliação personalizada, tratamentos avançados para queda de cabelo, fortalecimento dos fios e acompanhamento pré/pós-transplante capilar. Ciência, cuidado e confiança para a saúde dos seus cabelos.";
const phoneNumber = "+55 11 95580-3300";

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Physician", "MedicalClinic"],
  name: "Dra. Roberta Cantagalli",
  description,
  url: siteUrl,
  image: `${siteUrl}${ogImage}`,
  telephone: phoneNumber,
  medicalSpecialty: "Tricology",
  areaServed: "BR",
};

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Dra. Roberta Cantagalli",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: ogImage,
        alt: "Dra. Roberta Cantagalli - Tricologia e Saúde Capilar Integrativa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="luxury">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <script
          type="application/ld+json"
          // JSON-LD helps search engines understand the clinic entity.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
        <GaTracking gaId={gaId} />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
