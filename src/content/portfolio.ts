/**
 * Capa de contenido del portafolio (no-CV).
 *
 * Esta capa concentra el copy editorial y los datos estructurados de cada
 * sección narrativa de la página (Plica, Asistentes, Voice AI, Retell Flowkit,
 * Proyectos secundarios). El CV vive en `cv.ts` y se imprime aparte.
 *
 * Reglas no negociables (heredadas del brief):
 *  - Plica es producto listo: motor + paridad ERP/web ↔ Plica Chat ↔ MCP.
 *    No se publica el semáforo interno del mapa, ni gaps de specs.
 *  - Retell Flowkit es un motor local consumido mediante skills. Nunca arnés.
 *  - Tenant 2 — AI Solutions Mauricio es el caso emblemático multi-BU.
 *    Don Mauricio es dueño/CEO, no cliente externo. Maya/Mestizo es
 *    demostrativo, no cliente real.
 *  - Voice AI: suite `voice-ai` último estado conocido 691 pass / 28 fail.
 *    No declarar verde sin volver a ejecutar.
 *  - Sin cifras absolutas de AUC de modelos predictivos sin baseline.
 *  - Sin datos financieros del antiguo empleador.
 */

export type Surface = "erp" | "chat" | "mcp";

export type PlicaSurface = {
  id: Surface;
  name: string;
  tagline: string;
  description: string;
};

export type PlicaCapability = {
  id: string;
  title: string;
  description: string;
};

export type PlicaFlowStep = {
  step: number;
  title: string;
  description: string;
};

export type PlicaMetric = {
  value: string;
  label: string;
  footnote?: string;
};

export type Assistant = {
  name: string;
  brand: string;
  vertical: string;
  description: string;
  highlights: string[];
  link?: string;
  /** "demonstrative" deja claro que no es cliente real (Maya/Mestizo). */
  status?: "live" | "live-with-caveats" | "demonstrative";
};

export type MultiBuBrand = {
  name: string;
  description: string;
};

export type VoiceAiLayer = {
  title: string;
  items: string[];
};

export type SecondaryProject = {
  name: string;
  url?: string;
  description: string;
};

// ---------------------------------------------------------------------------
// PLICA
// ---------------------------------------------------------------------------

export const plicaSurfaces: PlicaSurface[] = [
  {
    id: "erp",
    name: "ERP / Web tradicional",
    tagline: "Navegación por pantallas",
    description:
      "Consola operativa multi-tenant en app.aisolutionscr.tech. Radares, expedientes, simuladores, planes y checkout viven sobre el mismo motor.",
  },
  {
    id: "chat",
    name: "Plica Chat",
    tagline: "Arnés conversacional",
    description:
      "Orquestador que invoca especialistas y herramientas sobre el motor. Mantiene contexto, memoria, guardas y procedencia en cada turno.",
  },
  {
    id: "mcp",
    name: "MCP",
    tagline: "Acceso para agentes externos",
    description:
      "Conector Model Context Protocol probado contra Claude, ZCode y ChatGPT. Mismas herramientas, mismas guardas, misma autoridad que Plica Chat y ERP.",
  },
];

export const plicaMetrics: PlicaMetric[] = [
  { value: "10 años", label: "Datos SICOP procesados" },
  { value: "120", label: "Periodos cubiertos" },
  { value: ">23 M", label: "Registros analizados" },
  { value: ">1,27 M", label: "Líneas analíticas en marts" },
];

export const plicaCapabilities: PlicaCapability[] = [
  {
    id: "data-pipeline",
    title: "Pipeline Bronze / Silver / marts",
    description:
      "Ingesta, normalización y materialización analítica con lineage y filtros de calidad verificables.",
  },
  {
    id: "rag-legal",
    title: "RAG legal verbatim",
    description:
      "Jerarquía normativa, vigencia y citas. Respuesta explícita cuando no hay cobertura, sin rellenar.",
  },
  {
    id: "specialists",
    title: "Especialistas con guardas",
    description:
      "Catálogo cerrado de especialistas que cualquier superficie invoca. Cifras y citas siempre con procedencia.",
  },
  {
    id: "tools",
    title: "Herramientas auditables",
    description:
      "Tools de lectura, simulación, expediente, watcher, decisión y exportación. La doctrina motor-vs-skin se mide en el build.",
  },
  {
    id: "mcp",
    title: "MCP con paridad",
    description:
      "El conector MCP hereda metodología, scopes y guardas del motor. La capacidad es del motor o no es de nadie.",
  },
  {
    id: "research",
    title: "Investigación con evidencia",
    description:
      "Investigación web read-only autónoma, con límites explícitos y citas trazables. La decisión final la toma una persona.",
  },
];

export const plicaFlow: PlicaFlowStep[] = [
  {
    step: 1,
    title: "Captura la cédula",
    description:
      "El visitante escribe la cédula jurídica en el hub. El motor prepara un preview con datos reales del SICOP.",
  },
  {
    step: 2,
    title: "Construye el preview",
    description:
      "Participaciones, victorias, familias, ticket típico y situación tributaria verificada en vivo, con fecha de consulta y disclaimer de fuente.",
  },
  {
    step: 3,
    title: "Opera desde tres superficies",
    description:
      "Misma autoridad, mismas guardas, misma procedencia. ERP para trabajo profundo, Chat para investigación conversacional, MCP para agentes externos.",
  },
  {
    step: 4,
    title: "Decide con evidencia",
    description:
      "GO / NO-GO explícito, auditado, con score stale cuando cambian los hechos. La decisión la toma una persona; el motor prepara el terreno.",
  },
];

// ---------------------------------------------------------------------------
// ASISTENTES VIRTUALES
// ---------------------------------------------------------------------------

export const tenantTwo: {
  summary: string;
  brands: MultiBuBrand[];
  description: string;
} = {
  summary:
    "Tenant 2 — AI Solutions Mauricio: un único cerebro que atiende cinco marcas con routing, memoria, RAG scoped y handoff.",
  description:
    "Caso multi-BU emblemático. Identidad histórica del cerebro: Aldana. El cerebro adopta el contexto de cada marca; las BUs grandes (SobrePoxi, AI Solutions) usan RAG scoped, las más pequeñas conservan playbooks completos cuando resulta más seguro. WhatsApp bidireccional con entrega E2E, Messenger entregando dentro de la ventana de Meta, multimedia y cotizaciones con PDF preliminar.",
  brands: [
    {
      name: "SobrePoxi",
      description:
        "Pisos epóxicos industriales y decorativos, resina, mobiliario. Cotizador con guardas de precio canónico.",
    },
    {
      name: "AI Solutions Costa Rica",
      description:
        "Agentes IA, automatización y software B2B. Identidad técnica, agenda con Google Meet.",
    },
    {
      name: "HandMade Art",
      description:
        "Arte y decoración hecha a mano. Multi-BU router, catálogo ligero.",
    },
    {
      name: "Just CR Travel (mini)",
      description:
        "Asistencia ligera de viajes dentro del cerebro multi-BU. El JCT pleno es Emma.",
    },
    {
      name: "The Green Planet Today",
      description:
        "Reforestación dentro del Tenant 2; guardas anti-alucinación duras sobre cifras verbatim.",
    },
  ],
};

export const assistants: Assistant[] = [
  {
    name: "Emma",
    brand: "Just Costa Rica Travel",
    vertical: "Turismo B2C",
    description:
      "Agencia de viajes: propuestas, leads multilingüe (ocho idiomas), continuidad entre chat y voz.",
    highlights: [
      "Memoria de cuatro capas y sticky language",
      "Tools de agenda, cotización, evidencia de pago y derivación a humano",
      "Voz con Retell + Asterisk para llamadas entrantes y campañas",
    ],
    status: "live-with-caveats",
  },
  {
    name: "Charlotte",
    brand: "Runway Models CR",
    vertical: "Academia / Agencia",
    description:
      "Atención a academia y agencia con RAG selectivo y once guardas deterministas, incluida la política reforzada para interacción con menores.",
    highlights: [
      "RAG scoped sobre kb_runway",
      "PRICE-GATE y bloqueos de agenda/datos/inscripción sin tutor",
      "Handoff con redacción asistida y cadencia humana",
    ],
    status: "live",
  },
  {
    name: "Cata",
    brand: "Cautiva Restaurante",
    vertical: "Restaurante",
    description:
      "Mesera virtual con carta QR, KDS, pedidos, reservaciones y pagos. Mismo cerebro por web, WhatsApp y voz.",
    highlights: [
      "Carta por mesa, carrito con alergias y upsell",
      "Reserva con RPC voz/web",
      "Pagos ONVO con webhook PSP",
    ],
    link: "https://app.aisolutionscr.tech/m/cautiva-restaurante",
    status: "live",
  },
  {
    name: "Ben",
    brand: "Operación interna",
    vertical: "Backoffice",
    description:
      "Asistente de seguimiento y operación con outbox supervisado, self-heal y test-redirect para no notificar a clientes reales durante pruebas.",
    highlights: [
      "Tool-calling de dos pasadas (LOOKUP / ACTION)",
      "17 tools: conteos, leads, SR urgentes, triage, handoffs, fallback email",
      "Watchdog, anti-loop y aislamiento de root state",
    ],
    status: "live",
  },
  {
    name: "Maya",
    brand: "Mestizo",
    vertical: "Restaurante (demostrativo)",
    description:
      "Tenant demostrativo creado para probar independencia y replicabilidad del cerebro. Carta QR, menú, pedidos, reservaciones y configuración propia.",
    highlights: [
      "Migración DB propia, organización y workflows aislados",
      "i18n ES/EN con overlays",
      "Auditoría adversarial 19/19 e i18n 8/8",
    ],
    status: "demonstrative",
  },
];

// ---------------------------------------------------------------------------
// VOICE AI
// ---------------------------------------------------------------------------

export const voiceAiNote =
  "Último estado conocido de la suite voice-ai: 691 pruebas aprobadas y 28 fallidas. No declaro la suite verde sin volver a ejecutar y clasificar los fallos.";

export const voiceAiLayers: VoiceAiLayer[] = [
  {
    title: "Telefonía y señalización",
    items: [
      "Asterisk 20",
      "PJSIP y AMI",
      "SIP trunks",
      "Kamailio y RTPengine",
    ],
  },
  {
    title: "Proveedores y transporte",
    items: [
      "Retell",
      "Telnyx",
      "DIDWW",
      "LiveKit y Gemini Realtime",
    ],
  },
  {
    title: "Operación",
    items: [
      "Llamadas entrantes y salientes",
      "Campañas, clasificación y pacing",
      "Transferencia a humanos",
      "Consola SIP en navegador",
      "Grabaciones, transcripción y analítica",
      "Continuidad chat ↔ voz",
    ],
  },
];

// ---------------------------------------------------------------------------
// PLICA — diagrama interactivo (solo contenido público)
// ---------------------------------------------------------------------------

export type DiagramRing = "core" | "surface" | "capability";

export type DiagramNode = {
  id: string;
  ring: DiagramRing;
  label: string;
  short: string;
  description: string;
  /** Qué superficies o componentes invocan esta capacidad, en lenguaje público. */
  invokedBy: string[];
  /** Posición angular en grados, usada por el layout concéntrico. */
  angle: number;
};

/**
 * Anillos concéntricos del visual público de Plica:
 *   - core: el motor canónico
 *   - surface: las tres superficies operables (ERP/web, Plica Chat, MCP)
 *   - capability: capacidades que cualquier superficie invoca
 *
 * Solo copy público. Sin nombres de archivos, líneas, IDs internos,
 * comandos, gates ni estados de bug (el brief prohíbe exponer el semáforo
 * interno del mapa).
 */
export const plicaDiagramNodes: DiagramNode[] = [
  {
    id: "core",
    ring: "core",
    label: "Motor canónico",
    short: "Una sola autoridad",
    description:
      "El motor concentra los datos, las políticas, los especialistas, las herramientas y las guardas. Cualquier superficie que opera contra Plica pasa por aquí: cambia la interfaz, no cambia la autoridad.",
    invokedBy: ["ERP/web", "Plica Chat", "MCP"],
    angle: 0,
  },
  {
    id: "erp",
    ring: "surface",
    label: "ERP / Web",
    short: "Navegación por pantallas",
    description:
      "Consola operativa multi-tenant para trabajo profundo: radares, expedientes, simuladores, planes y checkout. Misma autoridad y mismas guardas que el resto de superficies.",
    invokedBy: ["Equipo humano", "Onboarding autenticado"],
    angle: 90,
  },
  {
    id: "chat",
    ring: "surface",
    label: "Plica Chat",
    short: "Arnés conversacional",
    description:
      "Orquestador conversacional que invoca especialistas y herramientas sobre el motor. Mantiene contexto, memoria, guardas deterministas y procedencia en cada turno.",
    invokedBy: ["Investigación del usuario", "Análisis por turno"],
    angle: 210,
  },
  {
    id: "mcp",
    ring: "surface",
    label: "MCP",
    short: "Para agentes externos",
    description:
      "Conector Model Context Protocol con OAuth, scopes y plan-aware. Claude, ZCode y ChatGPT usan el mismo motor con las mismas guardas que el chat y el ERP.",
    invokedBy: ["Agentes externos", "Integraciones programáticas"],
    angle: 330,
  },
  {
    id: "data",
    ring: "capability",
    label: "Pipeline de datos",
    short: "Bronze · Silver · marts",
    description:
      "Ingesta, normalización y materialización analítica con lineage y filtros de calidad. Diez años y 120 periodos de SICOP estructurados, listos para consulta.",
    invokedBy: ["Investigación", "Expedientes", "Simulador"],
    angle: 18,
  },
  {
    id: "rag",
    ring: "capability",
    label: "RAG legal",
    short: "Verbatim con jerarquía",
    description:
      "Recuperación legal con jerarquía normativa, vigencia y citas explícitas. Responde con cobertura; cuando no la hay, lo dice en vez de rellenar.",
    invokedBy: ["Chat", "Expedientes", "Investigación"],
    angle: 90,
  },
  {
    id: "specialists",
    ring: "capability",
    label: "Especialistas",
    short: "Catálogo cerrado",
    description:
      "Catálogo cerrado de especialistas del dominio. Cualquier superficie los invoca; cifras y citas siempre con procedencia trazable.",
    invokedBy: ["Chat", "MCP", "ERP"],
    angle: 162,
  },
  {
    id: "tools",
    ring: "capability",
    label: "Herramientas",
    short: "Auditables",
    description:
      "Tools de lectura, simulación, expediente, watcher, decisión y exportación. La paridad se mide en el build: lo que una superficie anuncia, otra puede ejecutar.",
    invokedBy: ["Chat", "MCP", "ERP"],
    angle: 234,
  },
  {
    id: "research",
    ring: "capability",
    label: "Investigación",
    short: "Web pública con evidencia",
    description:
      "Investigación web read-only autónoma con límites explícitos y citas. La decisión comercial final la toma una persona; el motor prepara el terreno.",
    invokedBy: ["Chat", "MCP"],
    angle: 306,
  },
];

/** Etiquetas de cada anillo para la leyenda visible. */
export const plicaDiagramRings: Record<DiagramRing, string> = {
  core: "Motor",
  surface: "Superficies",
  capability: "Capacidades",
};

// ---------------------------------------------------------------------------
// RETELL FLOWKIT
// ---------------------------------------------------------------------------

export const retellFlowkit = {
  description:
    "Retell Flowkit es un motor local consumido mediante skills por Claude Code, Codex y otros agentes para generar, corregir, auditar y validar Retell Conversation Flows.",
  posture:
    "Es un advisor de alta confianza, no una jaula. Errores bloqueantes reflejan condiciones que el dashboard rechaza; warnings son heurísticas que el agente puede justificar y override.",
  evidence: [
    { label: "Contrato", value: "v1.4.0 semver" },
    { label: "Pruebas", value: "751 aprobadas en 69 archivos" },
    { label: "Typecheck", value: "tsc --noEmit verde" },
    { label: "Validadores", value: "19+ linters (phases A–H)" },
    { label: "Round-trip", value: "28/28 exports oficiales dashboard_importable: true" },
    { label: "Skills", value: "9 capacidades invocables" },
  ],
  modes: [
    "create",
    "patch",
    "fix",
    "add-function",
    "audit",
  ],
  capabilities: [
    "Generar Conversation Flows a partir de prompt-spec o Design IR",
    "Corregir y parchear flows existentes con autofix determinista",
    "Auditar estructura, grafo, configuración y contratos",
    "Añadir funciones y validar antes de importar",
    "Generar documentación, reimportar y actualizar",
    "Round-trip preservado entre representaciones",
    "Clasificación de evidencia: oficial, observado, inferido, desconocido",
  ],
};

// ---------------------------------------------------------------------------
// PROYECTOS SECUNDARIOS
// ---------------------------------------------------------------------------

export const secondaryProjects: SecondaryProject[] = [
  {
    name: "thegreenplanettoday.org",
    url: "https://www.thegreenplanettoday.org/en",
    description:
      "Organización de reforestación. Respalda experiencia web multilenguaje y comunicación.",
  },
  {
    name: "handmadeart.store",
    url: "https://handmadeart.store/es",
    description:
      "Comercio y arte hecho a mano. También vive como unidad de negocio dentro del Tenant 2.",
  },
  {
    name: "sobrepoxi.com",
    url: "https://sobrepoxi.com/es",
    description:
      "Pisos epóxicos, resina y mobiliario. La BU más desarrollada del Tenant 2 multi-BU.",
  },
  {
    name: "aisolutionscr.tech",
    url: "https://aisolutionscr.tech/",
    description:
      "Sitio corporativo de AI Solutions. Hub del producto Plica y consola SaaS autenticada.",
  },
  {
    name: "Realidad aumentada y virtual",
    description:
      "Proyectos con Unity y Vuforia durante el grado. Carácter multidisciplinario y prototipado rápido.",
  },
];