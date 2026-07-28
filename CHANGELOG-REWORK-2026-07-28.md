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

---

# Iteración 2026-07-28 (B) — Expediente técnico oscuro

Segundo rework sobre el mismo día, ejecutando el brief
`PROMPT-GLM-REWORK-OSCURO.md`. Radical: paleta coral y serif eliminadas,
modo oscuro por defecto, navegación reducida a 5 destinos, agrupación
de tres sistemas en una sola sección y eliminación de la experiencia
ficticia "Profesional independiente".

## Decisiones visuales

- **Paleta**: se eliminó por completo el coral (`#F76F53` y familia) y el
  serif Newsreader. Nueva paleta "expediente técnico oscuro":
  - Dark (default): background `#0D0F14`, surface `#151922`, elevated
    `#2B2F3A`, text `#F3F5F8`, soft `#C7CBD3`, muted `#8F96A3`, border
    `#2B2F3A`, accent `#5A7BFF`, accent-soft `#8EA3FF`.
  - Light: background `#F7F8FA`, surface `#FFFFFF`, elevated `#E6E8EC`,
    text `#0D0F14`, soft `#434955`, muted `#6F7683`, border `#DDE1E8`,
    accent `#3F62E8`, accent-soft `#5A7BFF`.
- **Tipografía**: `font-sans` y `font-serif` ahora **ambas** resuelven a
  Geist Sans. Se quitó la importación de Newsreader en `layout.tsx`.
  Display: `clamp(3rem, 7vw, 6.5rem)`.
- **Modo oscuro por defecto**: `html.dark` en `layout.tsx` +
  `next-themes` con `defaultTheme="dark"`. Toggle accesible mantiene
  `enableSystem`.
- **Acento `#5A7BFF`** en enlaces y estados activos (tabs, hover, CTA
  primario).
- **Movimiento**: 160–240 ms, solo `opacity` y `transform`, con easing
  `cubic-bezier(0.22,1,0.36,1)`.
- **Layout**: `max-w-editorial` (760 px) para texto largo,
  `max-w-layout` (1200 px) para grids. Composición asimétrica en
  Sistemas (1 principal full-width + 2 secundarios).

## Contenido eliminado, agrupado o movido

- **Eliminado**: experiencia ficticia "Profesional independiente" /
  "Independent Professional". Reemplazada por un primer ítem de
  timeline "Disponible para un equipo estable" + "Actualidad".
- **Agrupado bajo "Trabajo" (`#sistemas`)**: Asistentes conversacionales
  + Voice AI + Retell Flowkit pasaron de tres secciones independientes
  a una sola composición editorial asimétrica con estructura
  problema / sistema / evidencia / estado por entrada.
- **Movido**: Capacidades, Formación y Proyectos complementarios se
  consolidaron en una sola sección "Sobre mí" (`#sobre-mi`) con
  progressive disclosure (accordions para certificaciones y proyectos
  secundarios).
- **Reducción de navegación**: el navbar pasó de 9 destinos a **5**
  (Trabajo / Plica / Experiencia / Sobre mí / Contacto). El botón de CV
  es una acción independiente con `download`.
- **Hero**: sin chips de tecnología, alineado a la izquierda. CTAs en
  orden: Ver Plica (primario azul) → Descargar CV ATS (outline, con
  `download`) → Contactar (texto + flecha).

## Botón de CV — descarga directa del PDF

- `Navbar.tsx`, `Hero.tsx` y `Footer.tsx`: el botón de CV ahora apunta a
  `/documents/CV_Bryam_Lopez_ES.pdf` con atributo
  `download="CV_Bryam_Lopez_ES.pdf"` (descarga directa en vez de ir a la
  página de impresión).
- Se conserva `/cv/print?lang=es` y `/cv/print?lang=en` como
  alternativa imprimible (enlace "CV imprimible" en el footer).

## Bug de secciones vacías con navegación por ancla — corregido

- **Síntoma**: al navegar directamente a `/#sistemas` (o cualquier
  ancla) las secciones aparecían vacías porque Framer Motion las dejaba
  en `opacity:0` mientras esperaba `whileInView`, y el IntersectionObserver
  no disparaba al llegar por hash.
- **Solución**: hook `src/utils/reveal.ts` (`useReveal`) que devuelve
  `initial: {opacity:1, y:0}` (visible) en SSR y cuando
  `prefers-reduced-motion` está activo; solo anima la entrada cuando el
  componente está montado en cliente **y** el movimiento está permitido.
  El contenido es visible por defecto; JS solo mejora la entrada.

## Archivos modificados

### Tokens y config
- `src/app/globals.css` — tokens dark/light reescritos (`--background`,
  `--surface`, `--elevated`, `--text`, `--text-soft`, `--text-muted`,
  `--border`, `--accent`, `--accent-soft`).
- `tailwind.config.ts` — colores light/dark por token, `fontFamily.sans`
  y `serif` → Geist Sans, `fontSize.display`, `maxWidth.editorial` /
  `layout`, `transitionTimingFunction.out-soft`.
- `src/app/layout.tsx` — quitada importación de Newsreader;
  `html.dark`; metadata y JSON-LD `Person` conservados.

### Componentes nuevos
- `src/components/Systems.tsx` — reemplaza `Assistants.tsx` +
  `VoiceAi.tsx` + `RetellFlowkit.tsx`. Composición asimétrica editorial,
  progressive disclosure. `id="sistemas"`.
- `src/components/About.tsx` — reemplaza `Skills.tsx` + `Projects.tsx` +
  `Education.tsx`. Capacidades por área (sin pills), formación + idiomas,
  accordion de certificaciones y proyectos secundarios. `id="sobre-mi"`.
- `src/utils/reveal.ts` — hook `useReveal` (fix de secciones vacías).
- `src/components/ThemeProvider.tsx` — `defaultTheme="dark"`.

### Componentes reescritos
- `src/components/Navbar.tsx` — 5 destinos + acción CV independiente.
- `src/components/Hero.tsx` — sin chips, CTAs ordenados, CV con
  `download`.
- `src/components/Plica.tsx` — tabs (Tres superficies / Capacidades del
  motor), progressive disclosure, métricas en grid sin bordes, tabs con
  acento azul en estado activo.
- `src/components/Experience.tsx` — timeline compacto con `border-l`,
  primer ítem "Disponible para un equipo estable".
- `src/components/Footer.tsx` — contacto primario (Correo, LinkedIn, CV
  descarga) + secundario (GitHub, WhatsApp) + CV imprimible.
- `src/app/page.tsx` — orden: Navbar, Hero, Plica, Systems, Experience,
  About, Footer.

### Contenido corregido
- `src/content/cv.ts` (ES + EN):
  - Eliminada experiencia "Profesional independiente" / "Independent".
  - AI Solutions CR: `period: "Mar 2025 - Jul 2026"`, `current: true`,
    con bullets de Plica fusionados en AI Solutions.
  - Sin experiencia ficticia; queda AI Solutions + Vivo Gaming.

### Eliminados (reemplazados por consolidación)
- `src/components/Assistants.tsx`, `src/components/VoiceAi.tsx`,
  `src/components/RetellFlowkit.tsx` → `Systems.tsx`.
- `src/components/Skills.tsx`, `src/components/Projects.tsx`,
  `src/components/Education.tsx` → `About.tsx`.

## Reglas del brief respetadas (verificación)

- "Profesional independiente" / "Independent" → **0 ocurrencias** en
  `src/` (verificado por scraper del DOM: `profesionalIndependiente:
  false`).
- AI Solutions "Mar 2025 - Jul 2026" en `cv.ts` ES (línea 80) y EN
  (línea 178), `current: true`.
- Retell Flowkit **nunca "arnés"** en contenido visible (regex
  `Retell\s*Flowkit[^.]*arnés` → `false`). La única mención de "arnés"
  es el comentario `portfolio.ts:11` ("Nunca arnés") y el tagline de
  **Plica Chat** como "Arnés conversacional" (correcto: Plica Chat sí es
  un arnés conversacional; Flowkit es un motor local).
- Plica Chat tagline = "Arnés conversacional" en
  `portfolio.ts:90` y nodo del diagrama `portfolio.ts:379`.

## Validación ejecutada (2026-07-28, iteración B)

- `npm run lint` (vía pnpm) → ✔ No ESLint warnings or errors.
- `npx tsc --noEmit` → exit 0.
- `CI=true pnpm build` → ✓ Compiled successfully. Ruta `/` = 148 kB /
  250 kB First Load JS. 8 rutas generadas (`/`, `/_not-found`,
  `/cv/print`, `/robots.txt`, `/sitemap.xml`).
- `CV_Bryam_Lopez_ES.pdf` responde **HTTP 200** desde
  `/documents/`.
- `/cv/print?lang=es` responde **HTTP 200**.
- Theme toggle presente y funcional; light bg medido en runtime =
  `rgb(247, 248, 250)` = `#F7F8FA` ✓; dark bg = `#0D0F14` ✓.

## Comprobación responsive (Playwright headless)

Capturas tomadas en **390×844** (móvil) y **1440×900** (escritorio),
servidor de producción local en `:3100`.

- **Scroll horizontal**: `false` en móvil y en escritorio.
- **Navegación por ancla `/#sistemas`**: sección visible y con contenido
  real (altura 2654 px), no vacía. Bug corregido.
- **Plica tabs** (`Tres superficies` / `Capacidades del motor`):
  presentes e interactivos, con acento azul en estado activo.
- **Plica métricas**: grid `grid-cols-2` en móvil, `md:grid-cols-4` en
  escritorio (verificado vía DOM: 4 columnas de 282.75 px a 1440 px).
- **Timeline**: `border-left: 1px solid rgb(43,47,58)` = `#2B2F3A`
  (dark-border) ✓; dots renderizados.
- **Tap targets**: enlaces primarios del footer (Correo, LinkedIn, CV)
  = 89 px de alto (≥ 44 px ✓). Enlaces secundarios (GitHub, WhatsApp,
  CV imprimible) son texto secundario, no controles principales.
- **Composición asimétrica de Sistemas** verificada en escritorio: 1
  artículo principal (Asistentes) full-width arriba + 2 secundarios
  (Voice AI, Retell Flowkit) lado a lado abajo.
- **Errores de consola**: solo `/_vercel/insights` y
  `/_vercel/speed-insights` (telemetría de Vercel inyectada en
  producción; 404 esperado en local, no es un bug del código).
- **Light theme**: verificado — fondo `#F7F8FA`, texto oscuro, CTAs con
  acento azul.

## Asuntos pendientes reales

- **No deployado** (regla del brief: "No hagas push ni deploy salvo
  autorización explícita").
- **PDF del CV público**: ya existe y responde 200
  (`CV_Bryam_Lopez_ES.pdf`); no fue regenerado en esta iteración porque
  el contenido de `cv.ts` ya estaba alineado.
- **Accesibilidad WCAG AA auditada por tokens y contraste en
  runtime**, no con axe/Lighthouse automatizado — queda como verificación
  opcional con herramienta dedicada si se desea certificación formal.
- **Enlaces secundarios del footer** (GitHub/WhatsApp/CV imprimible)
  miden ~16–20 px de alto como texto plano; si se quiere cumplir 44×44
  px estricto en TODO control touch, conviene envolverlos en
  `inline-flex min-h-[44px]` (los primarios ya cumplen). No es
  bloqueante para el brief (son enlaces textuales, no botones).