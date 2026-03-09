import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

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
  title: "Dra. Roberta Cantagalli - Tricologia & Saúde Capilar Integrativa",
  description:
    "Especialista em tricologia clínica e saúde capilar integrativa. Avaliação personalizada, tratamentos avançados para queda de cabelo, fortalecimento dos fios e acompanhamento pré/pós-transplante capilar. Ciência, cuidado e confiança para a saúde dos seus cabelos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="luxury">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
