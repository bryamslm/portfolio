/*
 * Exporta src/content/cv.ts a JSON para que el generador de PDF/TXT consuma
 * exactamente el mismo contenido que renderiza el sitio. Antes el generador
 * tenia el CV hardcodeado en Python y las tres copias (web, PDF, TXT) ya
 * habian derivado entre si.
 *
 * Se ejecuta con: node --experimental-strip-types scripts/export-cv.mts
 */
import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { cvEs, cvEn, cvEsBackend, cvEnBackend } from "../src/content/cv.ts";

const here = dirname(fileURLToPath(import.meta.url));
const target = resolve(here, "cv.build.json");

writeFileSync(target, JSON.stringify({ es: cvEs, en: cvEn, es_backend: cvEsBackend, en_backend: cvEnBackend }, null, 2), "utf8");
console.log(`cv.build.json escrito: ${target}`);
