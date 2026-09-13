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
 *  - El caso multi-marca se cuenta sin jerga interna (nada de "Tenant N" ni
 *    nombres de personas). Maya/Mestizo es demostrativo, no cliente real.
 *  - Solo se enlaza lo que un visitante puede abrir sin cuenta: el hub de
 *    Plica y Ya Sale. Nunca subdominios `app.` ni `ops.`: detrás hay login.
 *  - No se publica el estado de suites que no están en verde; cada cifra
 *    visible sale de una corrida real o de `cv.ts`.
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
      "Consola operativa multi-tenant para usuarios con cuenta. Radares, expedientes, simuladores, planes y checkout viven sobre el mismo motor.",
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
  { value: "269 mil", label: "Carteles" },
  { value: "349 mil", label: "Adjudicaciones" },
  { value: ">1 M", label: "Líneas comparables" },
];

export const plicaCapabilities: PlicaCapability[] = [
  {
    id: "data-pipeline",
    title: "Pipeline de datos",
    description:
      "Ingesta, normalización y organización de los datos en capas, con trazabilidad y filtros de calidad verificables.",
  },
  {
    id: "rag-legal",
    title: "Respuestas legales con citas",
    description:
      "Normas por jerarquía y vigencia, con referencias explícitas. Si no hay cobertura, lo dice en lugar de rellenar.",
  },
  {
    id: "specialists",
    title: "Especialistas del dominio",
    description:
      "Catálogo de especialistas que cualquier acceso puede invocar. Cifras y citas siempre con procedencia.",
  },
  {
    id: "tools",
    title: "Herramientas auditables",
    description:
      "Lectura, simulación, expediente, seguimiento, decisión y exportación. Todas registran su procedencia.",
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
      "Misma autoridad, mismos límites, misma procedencia. ERP para trabajo profundo, Chat para investigación conversacional, MCP para agentes externos.",
  },
  {
    step: 4,
    title: "Decide con evidencia",
    description:
      "Recomendación explícita y auditada, que se reevalúa cuando cambian los hechos. La decisión final la toma una persona; el sistema prepara el terreno.",
  },
];

// ---------------------------------------------------------------------------
// ASISTENTES VIRTUALES
// ---------------------------------------------------------------------------

export const tenantTwo: {
  summary: string;
  /** Mismas cifras que el primer bullet de experiencia en `cv.ts`. */
  evidence: string;
  brands: MultiBuBrand[];
  description: string;
} = {
  summary:
    "Un solo cerebro atiende cinco marcas con enrutamiento, memoria, conocimiento propio y traspaso a humano.",
  evidence:
    "499 migraciones, 43 esquemas PostgreSQL y 295 políticas RLS de aislamiento por organización; 1.136 pruebas automatizadas en verde.",
  description:
    "El cerebro adopta el contexto de cada marca: las más grandes usan conocimiento propio y las más pequeñas conservan guiones completos cuando resulta más seguro. WhatsApp bidireccional con entrega confiable, Messenger dentro de la ventana de Meta, multimedia y cotizaciones con PDF preliminar.",
  brands: [
    {
      name: "SobrePoxi",
      description:
        "Pisos epóxicos industriales y decorativos, resina, mobiliario. Cotizador con validación de precios.",
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
        "Asistencia ligera de viajes dentro del asistente multi-marca. La atención completa de la agencia la lleva Emma.",
    },
    {
      name: "The Green Planet Today",
      description:
        "Reforestación, con guardas anti-alucinación duras sobre cifras citadas textualmente.",
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
      "RAG acotado a la base de conocimiento propia",
      "Bloqueo de precios y de agenda, datos o inscripción sin tutor",
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
    status: "live",
  },
  {
    name: "Ben",
    brand: "Operación interna",
    vertical: "Backoffice",
    description:
      "Asistente de seguimiento y operación, con recuperación automática y un modo de prueba que evita notificar a clientes reales durante pruebas.",
    highlights: [
      "Tool-calling de dos pasadas (LOOKUP / ACTION)",
      "17 tools: conteos, leads, solicitudes urgentes, triage, handoffs y respaldo por correo",
      "Watchdog, anti-loop y aislamiento de estado",
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

/** Cifras del segundo bullet de experiencia en `cv.ts`. */
export const voiceAiSummary =
  "Telefonía real, no solo voz en el navegador. Escribí un cliente AMI propio sobre socket TCP, sin librería, para originar, transferir y redirigir llamadas: dialplan de unas 2.000 líneas, 6 troncales SIP, 7 colas y consola SIP en el navegador.";

export const privateWorkNote =
  "Sistema privado, sin demo pública. Lo recorro en una entrevista técnica.";

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
    short: "Datos verificables",
    description:
      "Ingesta, normalización y materialización analítica con lineage y filtros de calidad. Diez años de SICOP estructurados, listos para consulta.",
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
  // Pruebas: `npx vitest run` del 2026-09-12, 69/69 archivos. El resto sale
  // de `cv.ts`. Lo que solo afirmaba el README (linters, skills, versión del
  // contrato) no se publica sin una corrida que lo sostenga.
  evidence: [
    { label: "Pruebas", value: "751/751 en verde" },
    { label: "Plantillas oficiales", value: "28/28 importables" },
    { label: "Verificaciones de grafo", value: "8" },
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
      "Comercio y arte hecho a mano. También lo atiende el asistente multi-marca.",
  },
  {
    name: "sobrepoxi.com",
    url: "https://sobrepoxi.com/es",
    description:
      "Pisos epóxicos, resina y mobiliario. La marca más desarrollada del asistente multi-marca.",
  },
  {
    name: "aisolutionscr.tech",
    url: "https://aisolutionscr.tech/",
    description:
      "Sitio corporativo de AI Solutions CR y puerta de entrada pública a Plica.",
  },
  {
    name: "Realidad aumentada y virtual",
    description:
      "Proyectos con Unity y Vuforia durante el grado. Carácter multidisciplinario y prototipado rápido.",
  },
];