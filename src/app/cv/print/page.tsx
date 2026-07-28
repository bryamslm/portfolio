import CvPrint from "@/components/CvPrint";
import { cvEs, cvEn } from "@/content/cv";
import type { Metadata } from "next";

type Props = { searchParams: Promise<{ lang?: string }> };

export const metadata: Metadata = {
  title: "Currículum - Bryam Steven López Miranda",
  description: "Currículum de Bryam Steven López Miranda, Ingeniero de IA Aplicada y Sistemas.",
};

export default async function CvPrintPage({ searchParams }: Props) {
  const params = await searchParams;
  const lang: "es" | "en" = params?.lang === "en" ? "en" : "es";
  const cv = lang === "en" ? cvEn : cvEs;

  return (
    <main className="min-h-screen bg-zinc-100 py-10 print:bg-white print:py-0">
      <CvPrint cv={cv} lang={lang} />
    </main>
  );
}
