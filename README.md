# portfolio

Portafolio y CV de Bryam Steven López Miranda — Next.js 15, React 19, Tailwind 3.

**En vivo:** [portfolio-bryam.vercel.app](https://portfolio-bryam.vercel.app)

## El CV tiene una sola fuente

`src/content/cv.ts` es la única fuente de verdad. De ahí salen:

| Salida | Cómo |
|---|---|
| Secciones del sitio | `About.tsx`, `Experience.tsx` importan `cvEs` |
| CV imprimible en el navegador | ruta `/cv/print?lang=es\|en` |
| `public/documents/CV_Bryam_Lopez_{ES,EN}.pdf` y `.txt` | `npm run cv:build` |
| `public/documents/CV_Bryam_Lopez_{ES,EN}_Backend.pdf` y `.txt` | `npm run cv:build` |

### Dos variantes, un solo contenido

La variante principal lidera con agentes de IA y telefonía: es lo que vuelve
memorable el perfil. La `_Backend` lidera con backend, integraciones y datos:
es lo que buscan la mayoría de los filtros. **No cambia ninguna cifra ni afirma
nada distinto** — cambian el titular, el resumen y el orden de las mismas
capacidades. Se manda la principal a puestos de AI Platform y Voice AI, y la
`_Backend` a full stack y backend.

Antes el PDF vivía en un script fuera del repo con el CV hardcodeado, y las tres
copias ya habían derivado entre sí. Para actualizar el CV se edita `cv.ts` y se
corre:

```bash
npm run cv:build
```

Requiere `reportlab` (`pip install reportlab`) y Node 22+ para el
`--experimental-strip-types` que lee el `.ts`.

`CV_Bryam_Lopez.pdf` se mantiene como alias del español: esa URL ya viaja en
postulaciones enviadas y romperla dejaría enlaces muertos en formularios que ya
están en manos de reclutadores.

## Decisiones de formato que existen por el ATS

`scripts/generate_cv_docs.py` documenta el porqué de cada una. En resumen: una
columna, sin tablas ni imágenes, contacto como texto corrido fuera de
header/footer, tamaño Letter, titular monolingüe por versión, Educación y
Certificaciones como encabezados separados, y `/Title`, `/Subject`, `/Keywords`
y `/Lang` con contenido real.

Para comprobar que un PDF sigue siendo parseable:

```bash
python -c "import fitz; d=fitz.open('public/documents/CV_Bryam_Lopez_ES.pdf'); print(d.page_count, len(d[0].get_text()), d.metadata)"
```

## Desarrollo

```bash
npm install
npm run dev
```

## Qué no se commitea

`.gitignore` excluye el material privado de búsqueda de empleo y prospección
(bitácoras, listas de postulaciones, datos de contacto de terceros). El repo es
público: ese material nunca entra acá.
