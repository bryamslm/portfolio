import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../components/ThemeProvider"; // 👈 Importar ThemeProvider
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bryam López | Full Stack Developer",
  description: "Professional portfolio showcasing projects and skills in web development and observability.",
  keywords: ["Bryam López", "Full Stack Developer", "Node.js", "OpenTelemetry", "Next.js", "Observability"],
  authors: [{ name: "Bryam López" }],
  openGraph: {
    title: "Bryam López | Full Stack Developer",
    description: "Professional portfolio showcasing projects and skills.",
    url: "https://portfolio-bryam.vercel.app",
    siteName: "Bryam López Portfolio",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
