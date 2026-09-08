import CvPrint from "@/components/CvPrint";
import { cvEs, cvEn } from "@/content/cv";
import type { Metadata } from "next";

type Props = { searchParams: Promise<{ lang?: string }> };

/*
 * El título de esta ruta termina embebido como `/Title` del PDF, así que sigue
 * al idioma: un CV en inglés cuyo metadato interno dice "Currículum" es una
 * inconsistencia que algunos ATS leen. Se usa `absolute` para que el template
 * del layout no le agregue el nombre por segunda vez.
 */
export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;

  if (params?.lang === "en") {
    return {
      title: { absolute: `Resume - ${cvEn.name}` },
      description: `Resume of ${cvEn.name}, ${cvEn.headline}.`,
    };
  }

  return {
    title: { absolute: `Currículum - ${cvEs.name}` },
    description: `Currículum de ${cvEs.name}, ${cvEs.headline}.`,
  };
}

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
