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
    default: "Bryam Steven López Miranda | Ingeniero de Software · Agentes de IA en producción",
    template: "%s | Bryam Steven López Miranda",
  },
  description:
    "Ingeniero de Software de Costa Rica. Construyo agentes de IA en producción, de la API a la telefonía: herramientas, RAG, MCP, SaaS multi-tenant y Voice AI con Asterisk y SIP. Disponible remoto para Latinoamérica y España.",
  keywords: [
    "Bryam Steven López Miranda",
    "Ingeniero de Software Costa Rica",
    "Software Engineer Costa Rica",
    "Backend Engineer",
    "Applied AI Engineer",
    "AI Agents Engineer",
    "Voice AI Engineer",
    "Asterisk SIP Retell",
    "RAG MCP TypeScript Next.js PostgreSQL",
    "Multi-tenant SaaS",
    "Desarrollador remoto Latinoamérica España",
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
    title: "Bryam Steven López Miranda | Ingeniero de Software · Agentes de IA en producción",
    description:
      "Agentes de IA en producción, de la API a la telefonía. Disponible remoto para Latinoamérica y España.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryam Steven López Miranda | Ingeniero de Software · Agentes de IA en producción",
    description:
      "Agentes de IA, RAG, MCP, SaaS multi-tenant y Voice AI. Disponible remoto para Latinoamérica y España.",
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
  jobTitle: "Ingeniero de Software - Agentes de IA en producción, de la API a la telefonía",
  alternateName: "Software Engineer - Production AI agents, from the API to the phone line",
  description:
    "Ingeniero de Software de Costa Rica: agentes de IA con herramientas, RAG y MCP, SaaS multi-tenant y Voice AI con Asterisk y SIP. Disponible remoto para Latinoamérica y España.",
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