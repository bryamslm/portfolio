import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "../components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Serif editorial: solo para la primera línea del titular del hero.
// El contraste de dos familias en un mismo titular es lo que separa un hero
// cinematográfico de un hero de plantilla.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = "https://portfolio-bryam.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bryam Steven López Miranda | Ingeniero de IA Aplicada y Sistemas",
    template: "%s | Bryam Steven López Miranda",
  },
  description:
    "Ingeniero en Computación de Costa Rica especializado en IA aplicada y sistemas. Construyo agentes con herramientas, RAG, MCP, productos multi-tenant y Voice AI con Asterisk, SIP y Retell.",
  keywords: [
    "Bryam Steven López Miranda",
    "Ingeniero de IA Aplicada",
    "Applied AI Engineer Costa Rica",
    "AI Systems Engineer",
    "Voice AI Engineer",
    "Asterisk SIP Retell",
    "RAG MCP TypeScript Next.js PostgreSQL",
    "Multi-tenant SaaS",
  ],
  authors: [{ name: "Bryam Steven López Miranda" }],
  creator: "Bryam Steven López Miranda",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: SITE_URL,
    siteName: "Bryam Steven López Miranda — Portfolio",
    title: "Bryam Steven López Miranda | Ingeniero de IA Aplicada y Sistemas",
    description:
      "Construyo sistemas completos de IA aplicada: producto, agentes, datos, automatización y voz.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryam Steven López Miranda | Ingeniero de IA Aplicada y Sistemas",
    description:
      "Agentes de IA, RAG, MCP, multi-tenant y Voice AI. Disponible para equipo estable en Costa Rica o Latinoamérica.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bryam Steven López Miranda",
  jobTitle: "Ingeniero de IA Aplicada y Sistemas",
  alternateName: "Applied AI Engineer",
  description:
    "Ingeniero en Computación de Costa Rica especializado en IA aplicada y sistemas: agentes con herramientas, RAG, MCP, productos multi-tenant y Voice AI con Asterisk, SIP y Retell.",
  url: SITE_URL,
  email: "mailto:bryam.steven.lopez@gmail.com",
  telephone: "+50662633553",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Carlos",
    addressRegion: "Alajuela",
    addressCountry: "CR",
  },
  knowsLanguage: ["es-CR", "en"],
  sameAs: [
    "https://linkedin.com/in/bryamslm",
    "https://github.com/bryamslm",
    "https://wa.me/50662633553",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Tecnológico de Costa Rica",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}