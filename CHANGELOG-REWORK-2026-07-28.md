# Rework del portafolio — 2026-07-28

Trabajo ejecutado siguiendo el brief
`private/BASE-CONOCIMIENTO-BRYAM-2026/PROMPT-GLM-ACTUALIZAR-PORTAFOLIO.md`
y la base de conocimiento consolidada. Sin deploy; cambios locales.

## Identidad aplicada

- Nombre completo: **Bryam Steven López Miranda** en `<title>`, `<h1>`,
  navbar, footer, metadata, OpenGraph y JSON-LD `Person`.
- Título: **Ingeniero de IA Aplicada y Sistemas · Applied AI Engineer**.
- Ubicación: San Carlos, Alajuela, Costa Rica · disponible remoto en
  Latinoamérica.
- Idioma principal: español. Inglés declarado como lectura técnica y
  conversación básica.

## Arquitectura de contenido final

1. Hero (`Hero.tsx`) — propuesta, disponibilidad, CTA.
2. Plica (`Plica.tsx` + `PlicaDiagram.tsx`) — caso principal con métricas,
   visual SVG del motor + tres superficies + capacidades, recorrido de
   usuario y decisiones antifumo.
3. Asistentes (`Assistants.tsx`) — Tenant 2 multi-BU destacado como caso
   emblemático, más la familia de asistentes (Emma, Charlotte, Cata, Ben,
   Maya).
4. Voice AI (`VoiceAi.tsx`) — tres capas (telefonía, proveedores, operación).
5. Retell Flowkit (`RetellFlowkit.tsx`) — postura advisor + evidencia
   verificable + modos + capacidades-skill.
6. Experiencia (`Experience.tsx`) — tres bloques (independiente, AI
   Solutions, Vivo Gaming).
7. Capacidades (`Skills.tsx`) — cinco grupos desde `cv.ts`.
8. Proyectos (`Projects.tsx`) — cuatro proyectos principales + sitios
   secundarios.
9. Educación (`Education.tsx`) — grado + certificaciones + idiomas.
10. Contacto (en `Footer.tsx`) — email, WhatsApp, LinkedIn, GitHub, CV.

## SEO y datos estructurados

- `metadata.title` y `template` con el nombre completo.
- `metadata.description` reescrito en clave "ingeniero de IA aplicada y
  sistemas" (no "full-stack / IA conversacional").
- `metadata.openGraph` y `metadata.twitter` consistentes.
- `metadata.keywords` ajustado a la identidad objetivo (incluye
  "Bryam Steven López Miranda", "Applied AI Engineer Costa Rica", etc.).
- JSON-LD `Person` inyectado en `<head>` desde `layout.tsx`.
- Nuevas rutas `app/robots.ts` y `app/sitemap.ts`.
- `metadataBase` anclado a `https://portfolio-bryam.vercel.app`.

## Capa de contenido tipada

- `src/content/portfolio.ts` (nuevo): tipos `PlicaSurface`,
  `PlicaCapability`, `PlicaFlowStep`, `PlicaMetric`, `Assistant`,
  `MultiBuBrand`, `VoiceAiLayer`, `SecondaryProject`. Concentra el copy
  editorial de cada sección narrativa (no toca el CV).
- `src/content/cv.ts` se mantiene como fuente de verdad del CV (versión
  española + inglesa). `CvPrint.tsx` y `app/cv/print/page.tsx` no
  cambiaron: `/cv/print?lang=es` sigue funcionando y entrega el mismo
  contenido.

## Visual de Plica

- `PlicaDiagram.tsx` con SVG inline accesible (`<title>`, `<desc>`, viewBox
  responsive). Conserva la relación motor→3 superficies→capacidades sin
  exponer rutas internas ni secretos del `diagrama.html` privado. Sin
  animaciones: respeta `prefers-reduced-motion`.

### Iteración 2026-07-28 — diagrama interactivo

El visual pasó de SVG estático a un componente interactivo cliente.

- **Layout concéntrico**: motor al centro, 3 superficies (ERP/web,
  Plica Chat, MCP) en el primer anillo, 5 capacidades (Pipeline de
  datos, RAG legal, Especialistas, Herramientas, Investigación) en el
  anillo exterior. Las líneas de conexión motor→superficies son
  continuas y las motor→capacidades son punteadas para distinguir
  capas.
- **Interacción**:
  - Drag con pointer events (setPointerCapture) sobre el lienzo.
  - Zoom con Ctrl/⌘ + scroll, además de botones `+/−/reset` con
    indicador de porcentaje.
  - Click o Enter/Space sobre un nodo abre un drawer lateral.
  - Escape cierra el drawer; click sobre el backdrop también.
  - Bloqueo de scroll del body mientras el drawer está abierto.
- **Drawer accesible**: `role="dialog"`, `aria-modal="true"`,
  `aria-labelledby`, descripción y lista de "Lo invocan" con
  superficies/componentes que usan esa capacidad.
- **Accesibilidad del SVG**: cada nodo es un `<g>` con `role="button"`,
  `tabIndex={0}`, `aria-label` con la descripción corta. Foco
  secuencial con teclado.
- **Tema**: tokens `text-light-secondary` / `dark-secondary` y
  `text-light-text` / `dark-text` del `tailwind.config.ts` existente.
  Sin nuevos colores. La línea delgada coral del motor aparece al
  seleccionar.
- **Sin secretos**: el contenido de los nodos viene de
  `plicaDiagramNodes` en `content/portfolio.ts`. Cero referencias a
  archivos internos, IDs (`quotaGate`, `FR-077`), comandos, gates,
  estados de bug o evidencia con `archivo:línea`.
- **Sin regresión**: el resto del portafolio (Hero, Asistentes, Voice
  AI, Retell Flowkit, Experience, Skills, Projects, Education,
  Footer) no cambió.

## Reglas del brief respetadas

- **Plica se vende como producto listo**: copy público habla de motor con
  paridad ERP/web ↔ Plica Chat ↔ MCP, sin semáforo interno, sin gaps de
  specs ni listas de pendientes.
- **Retell Flowkit nunca llamado arnés**. La única mención de "arnés" en
  código es un comentario del módulo `portfolio.ts` que documenta la regla
  ("Nunca arnés") y la copia de `Plica Chat` como arnés conversacional de
  Plica (que sí es correcto).
- **Tenant 2 — AI Solutions Mauricio** destacado como caso multi-BU con
  identidad histórica Aldana y cinco marcas (SobrePoxi, AI Solutions,
  HandMade Art, Just CR Travel mini, The Green Planet Today). Don Mauricio
  no se presenta como cliente externo (es dueño/CEO de AI Solutions).
- **Maya / Mestizo** etiquetada explícitamente como demostrativa, no
  cliente real.
- **Voice AI**: caveat "último estado conocido 691 pass / 28 fail"; nada
  se declara verde.
- **Cifras de Plica**: 10 años, 120 periodos, >23 M registros, >1,27 M
  líneas analíticas.
- **Sin AUC absoluto** de modelos predictivos sin baseline; el copy solo
  habla de la compuerta de calibración y de "próximamente" antes de pasar.
- **Sin datos financieros** del antiguo empleador. **Sin clientes
  inventados, testimonios ni revenue fabricado**.
- **CV público**: el archivo `public/documents/CV_Bryam_Lopez_ES.txt` y
  los PDFs quedan como están — el usuario pidió no tocar el archivo CV
  público, y el contenido ya estaba alineado con la versión actual de
  `cv.ts`.

## Componentes

### Nuevos
- `src/components/Hero.tsx`
- `src/components/Plica.tsx`
- `src/components/PlicaDiagram.tsx`
- `src/components/Assistants.tsx`
- `src/components/VoiceAi.tsx`
- `src/components/RetellFlowkit.tsx`
- `src/content/portfolio.ts`

### Reescritos
- `src/app/layout.tsx` — metadata + JSON-LD `Person` + font variables
  (Geist, Geist Mono, Newsreader intactos).
- `src/app/page.tsx` — composición nueva con la jerarquía del brief.
- `src/components/Navbar.tsx` — enlaces a las nuevas secciones
  (Plica, Asistentes, Voice AI, Retell Flowkit, Experiencia,
  Capacidades, Proyectos, Contacto, CV).
- `src/components/Footer.tsx` — nombre completo, navegación, datos de
  contacto y CV en ES/EN.
- `src/components/Experience.tsx` — id `experiencia` para matchear
  navbar; copy sin cambios.
- `src/components/Skills.tsx` — id `capacidades`; mapa de iconos
  reducido a lo que existe realmente en la nueva capa de skills
  (sin categorías huecas).
- `src/components/Projects.tsx` — encabezado "Proyectos secundarios"
  para reflejar peso relativo; galería de sitios secundarios desde
  `portfolio.ts`.
- `src/components/Education.tsx` — id `educacion`; bloque de idiomas
  añadido.

### Eliminados
- `src/components/Profile.tsx` — reemplazado por `Hero.tsx`. Contenía
  "Bryam López" y "Full-Stack · IA Conversacional & Voz" — exactamente
  las strings que el brief prohíbe.
- `src/components/Tenants.tsx` — reemplazado por `Assistants.tsx`. El
  viejo era una lista secundaria con taxonomía inconsistente; el nuevo
  coloca al Tenant 2 multi-BU como caso emblemático y separa a Maya/
  Mestizo como demostrativo.

## Nuevas rutas SEO

- `src/app/sitemap.ts` — `/`, `/cv/print?lang=es`, `/cv/print?lang=en`.
- `src/app/robots.ts` — permite `/`, bloquea `/api/`, apunta al sitemap.

## Validación ejecutada (2026-07-28)

- `npm run lint` → ✔ No ESLint warnings or errors.
- `npx tsc --noEmit` → exit 0 (sin errores de tipos).
- `npm run build` → ✓ Compiled successfully · 8 rutas generadas (incluye
  `robots.txt` y `sitemap.xml`).
- Búsqueda de strings antiguas en `src/`:
  - `Bryam López` → 0 ocurrencias.
  - `Full-Stack · IA Conversacional` → 0 ocurrencias.
  - `Retell Flowkit.*arnés` → 0 ocurrencias (la única mención de "arnés"
    está en `portfolio.ts` y es un comentario documentando la regla).
  - `Jul 2026` correcto en CV ES y CV EN (`cv.ts`).

## Accesibilidad

- `prefers-reduced-motion` respetado en Hero (animación de chevron
  desactivada) y globalmente vía `globals.css` (`scroll-behavior: auto`).
- Foco visible con outline coral sobre todos los elementos
  (`globals.css`, `:focus-visible`).
- `aria-label` en iconos sociales, botón de tema y botones de scroll.
- SVG del Plica con `role="img"`, `<title>` y `<desc>` para lectores de
  pantalla.
- Contraste verificado en tokens ya existentes: coral oscuro sobre
  papel claro y coral brillante sobre negro cálido (AA, declarado en
  `tailwind.config.ts`).

## Responsive

- Hero, Plica, Asistentes, Voice AI, Retell Flowkit, Experience,
  Skills, Projects, Education, Footer reorganizan grids en móvil
  (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` donde corresponde).
- Navbar colapsa a menú móvil por debajo de `lg`; el breakpoint cambia
  de `md` a `lg` para acomodar 8 enlaces sin overflow.
- SVG de Plica usa `viewBox` y `w-full h-auto`, escala bien en
  cualquier ancho.

## Gaps conocidos / fuera de alcance

- **PDF público del CV**: no regenerado. El usuario pidió no tocar el
  archivo público y no tengo herramientas locales de PDF en el
  sandbox. El `.txt` público está alineado con la versión actual.
- **Visual interactivo (3 anillos + tooltip)**: cerrado el 2026-07-28. El
  público ya tiene drag/zoom/drawer/leyenda con 9 nodos y teclado
  accesible. No replica los 112 nodos internos ni el semáforo de
  estado del privado.
- **No deployado** (regla del brief).
- **Sin captura visual** (sandbox sin navegador).

## Notas para próximo rework

- Si en el futuro se quiere ampliar el visual con un tooltip inline al
  hover (además del drawer), es viable respetando
  `prefers-reduced-motion` y con `aria-describedby` por nodo.
- El JSON-LD `Person` actual está en `<head>` desde un componente
  server-rendered; para abrirlo a `CreativeWork`/`SoftwareApplication`
  por proyecto, se puede mover a una función generadora en
  `lib/jsonLd.ts` y llamarla desde cada página cuando exista.
- El CV público (`public/documents/`) podría regenerarse desde `cv.ts`
  con un script CLI; queda como tarea pendiente si se quiere mantener
  sincronía automática.