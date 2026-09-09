export type CvContact = {
  label: string;
  value: string;
  href?: string;
};

export type CvExperienceItem = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export type CvSkillGroup = {
  category: string;
  items: string[];
};

export type CvProjectItem = {
  title: string;
  description: string;
  /**
   * Version corta para el CV impreso. La web puede permitirse la descripcion
   * larga; el PDF tiene que caber en una pagina y una linea de mas empuja
   * medio curriculum a la segunda.
   */
  cvLine?: string;
  techStack: string[];
  repoLink?: string;
  liveDemo?: string;
  note?: string;
  featured?: boolean;
  privateWork?: boolean;
};

export type CvEducationItem = {
  title: string;
  institution: string;
  period: string;
  certificateLink?: string;
  highlights?: string[];
};

export type CvCertificationItem = {
  title: string;
  provider: string;
  link: string;
};

export type Cv = {
  name: string;
  title: string;
  /** Titular corto y monolingue: alimenta el /Title y el job title que parsea el ATS. */
  headline: string;
  /** Va al campo /Keywords del PDF, que varios parsers de ATS indexan. */
  keywords: string[];
  location: string;
  contact: CvContact[];
  summary: string;
  experience: CvExperienceItem[];
  skills: CvSkillGroup[];
  projects: CvProjectItem[];
  education: CvEducationItem[];
  certifications: CvCertificationItem[];
  languages: string[];
};

/*
 * Toda cifra de este archivo esta verificada contra el repositorio que la
 * sostiene: conteo real de codigo, migraciones, endpoints o corrida de tests.
 * Las de Plica salen de design/entrega-marketing/datos-y-claims.md, que es el
 * documento canonico del proyecto; las anteriores ("23 M registros",
 * "1,27 M lineas") estaban marcadas ahi como obsoletas y prohibidas de citar.
 * Si una cifra cambia en el proyecto, se actualiza aca y se corre
 * `npm run cv:build`. No se inventan numeros.
 */

// ---------------------------------------------------------------------------
// ESPAÑOL
// ---------------------------------------------------------------------------

export const cvEs: Cv = {
  name: "Bryam Steven López Miranda",
  title: "Ingeniero de Software | Agentes de IA en producción, de la API a la telefonía",
  headline: "Ingeniero de Software - Agentes de IA en producción, de la API a la telefonía",
  keywords: [
    "Ingeniero de Software", "Software Engineer", "Backend Engineer", "Full Stack Engineer",
    "Applied AI Engineer", "AI Engineer", "Systems Integration", "Integraciones",
    "TypeScript", "JavaScript", "Python", "Next.js", "React", "Node.js", "Fastify",
    "PostgreSQL", "Supabase", "pgvector", "Drizzle", "SQL", "RLS", "ETL", "pipelines",
    "RAG", "LLM", "AI Agents", "MCP", "LangChain", "LangGraph", "tool use", "evaluación",
    "Voice AI", "Asterisk", "PJSIP", "AMI", "ARI", "SIP", "WebRTC", "Retell", "Telnyx", "LiveKit",
    "n8n", "Celery", "Redis", "Docker", "Linux", "nginx", "REST API", "webhooks",
    "multi-tenant", "SaaS", "seguridad", "HMAC", "OpenTelemetry", "Grafana", "Prometheus",
    "Costa Rica", "remoto", "LATAM",
  ],
  location: "San Carlos, Alajuela, Costa Rica | Disponible remoto en Latinoamérica",
  contact: [
    { label: "Email", value: "bryam.steven.lopez@gmail.com", href: "mailto:bryam.steven.lopez@gmail.com" },
    { label: "Teléfono", value: "+50662633553", href: "https://wa.me/50662633553" },
    { label: "LinkedIn", value: "linkedin.com/in/bryamslm", href: "https://linkedin.com/in/bryamslm" },
    { label: "GitHub", value: "github.com/bryamslm", href: "https://github.com/bryamslm" },
    { label: "Portafolio", value: "portfolio-bryam.vercel.app", href: "https://portfolio-bryam.vercel.app" },
  ],
  // El estado de busqueda no va aca: las tres primeras lineas son el espacio
  // mas caro del CV. Eso pertenece a la carta o a la conversacion.
  summary:
    "Ingeniero en Computación. Construyo y opero sistemas de IA aplicada completos: agentes con herramientas, RAG, memoria y guardas deterministas, apoyados en datos propios y en telefonía real. Trabajo de punta a punta —modelo de datos, backend, integraciones, interfaz y operación en Linux— con TypeScript, Node.js, Python, PostgreSQL y Asterisk/SIP. Lo que construyo está en producción y es verificable desde los enlaces de abajo.",
  experience: [
    {
      role: "Ingeniero de Integración de Sistemas",
      company: "AI Solutions CR",
      period: "Mar 2025 - Actualidad",
      current: true,
      bullets: [
        "Diseñé y desarrollé una plataforma SaaS multi-tenant de IA conversacional para WhatsApp, Messenger, Instagram, web y telefonía: 499 migraciones, 43 esquemas PostgreSQL y 295 políticas RLS de aislamiento por organización, con outbox, idempotencia, feature flags y auditoría; 1.136 pruebas automatizadas en verde.",
        "Integré Voice AI sobre Asterisk 20 escribiendo un cliente AMI propio sobre socket TCP, sin librería, para originar, transferir y redirigir llamadas: dialplan de ~2.000 líneas, 6 troncales SIP (Telnyx, DIDWW, Retell), 7 colas y consola SIP en el navegador, con 244 endpoints y 105 tablas.",
        "Construí Plica Licitaciones CR, motor de inteligencia sobre diez años de compra pública (SICOP, jul 2016-jul 2026): 269 mil carteles, 349 mil adjudicaciones y más de un millón de líneas comparables, con RAG legal sobre pgvector, servidor MCP de 24 herramientas y predictor LightGBM calibrado (AUC 0,698 y ECE 0,025 contra una línea base de 0,508).",
        "Endurecí la seguridad del código propio: cerré una inyección CRLF en el canal AMI y una política RLS que permitía borrar el catálogo con la clave anónima; dejé firmas HMAC, verificación en tiempo constante e idempotencia por restricción en la base.",
        "Construí Colibrí, plataforma de comunicaciones para instituciones públicas: motor de autorización propio sin dependencias, control ARI de Asterisk y 22 verificaciones de gobernanza propias en integración continua.",
      ],
    },
    {
      role: "Desarrollador de Software - Práctica Profesional",
      company: "Vivo Gaming",
      period: "Jul 2024 - Nov 2024",
      bullets: [
        "Desarrollé un framework de observabilidad para servicios Node.js, centralizando métricas, trazas y diagnóstico con OpenTelemetry, Prometheus, Grafana y Elasticsearch.",
        "Documenté la arquitectura y los procedimientos de adopción; el trabajo se convirtió en mi proyecto de graduación de Ingeniería en Computación.",
      ],
    },
  ],
  skills: [
    { category: "IA aplicada", items: ["AI Agents", "LLMs", "RAG", "tool use", "MCP", "LangChain", "LangGraph", "pgvector", "evaluación de agentes", "guardas deterministas", "Retell"] },
    { category: "Backend y full stack", items: ["TypeScript", "JavaScript", "Python", "Node.js", "Fastify", "Next.js", "React", "REST APIs", "webhooks", "arquitectura multi-tenant"] },
    { category: "Datos", items: ["PostgreSQL", "Supabase", "Drizzle", "SQL analítico", "RLS", "pipelines ETL", "LightGBM", "modelos calibrados"] },
    { category: "Voice AI y telefonía", items: ["Asterisk 20", "PJSIP", "AMI", "ARI", "SIP trunks", "WebRTC", "SIP.js", "Kamailio", "RTPengine", "Telnyx", "DIDWW", "LiveKit"] },
    { category: "Seguridad y operación", items: ["RLS", "HMAC", "firma de webhooks", "idempotencia", "outbox", "auditoría", "Docker", "Linux", "nginx", "Celery", "Redis", "OpenTelemetry", "Grafana", "Prometheus"] },
  ],
  projects: [
    {
      title: "Plica Licitaciones CR - Inteligencia para contratación pública",
      description:
        "Inteligencia para contratación pública con datos verificables de SICOP, especialistas, respuestas legales con citas y predicciones calibradas, accesible desde la web, el chat y la integración para herramientas.",
      cvLine:
        "el mismo motor de datos operado desde la web, el chat y MCP, con citas verbatim.",
      techStack: ["TypeScript", "Next.js", "PostgreSQL", "pgvector", "Python", "LightGBM", "MCP"],
      liveDemo: "https://plica.aisolutionscr.tech",
    },
    {
      title: "Voice AI / Voice Ops",
      description:
        "Operación de llamadas entrantes y salientes, campañas, transferencias, consola SIP en navegador, grabaciones y analítica.",
      cvLine:
        "consola de agente, campañas salientes, transferencias asistidas, grabaciones y analítica.",
      techStack: ["Asterisk 20", "PJSIP", "AMI", "SIP", "JsSIP", "Retell", "LiveKit"],
      privateWork: true,
    },
    {
      title: "Ya Sale - carta digital y pedidos para restaurantes",
      description:
        "Producto del que soy socio al 50% y autor íntegro del desarrollo: carta por QR, pedidos por mesa, cocina en tiempo real, cobro y lealtad, con roles por restaurante.",
      cvLine:
        "50% del producto, 100% del desarrollo; carta QR, cocina en vivo y cobro con ONVO Pay.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase Realtime", "ONVO Pay"],
      liveDemo: "https://yasale.app/",
    },
    {
      title: "Colibrí - Comunicaciones para instituciones públicas",
      description:
        "Contact center, comunicación interna y motor de agentes de voz para instituciones del Estado y empresas grandes, con autorización por capacidades y telefonía Asterisk real.",
      cvLine:
        "autorización por capacidades y telefonía Asterisk para instituciones del Estado.",
      techStack: ["TypeScript", "Fastify", "Drizzle", "PostgreSQL", "Asterisk ARI", "SIP.js", "Redis"],
      privateWork: true,
    },
    {
      title: "Retell Flowkit",
      description:
        "Motor local consumido mediante skills para generar, corregir, auditar y validar Retell Conversation Flows.",
      cvLine:
        "8 verificaciones de grafo; 751/751 pruebas y 28/28 plantillas oficiales.",
      techStack: ["TypeScript", "Ajv", "Vitest", "CLI", "skills"],
      privateWork: true,
    },
    {
      title: "Traza - Coaching con decisiones auditables",
      description:
        "SaaS multi-tenant que convierte la metodología de un entrenador en decisiones de entrenamiento y nutrición que él mismo revisa, con niveles graduales de autonomía y motor de IA intercambiable.",
      cvLine:
        "aislamiento por organización con RLS forzada incluso sobre el dueño del esquema; el CI bloquea el merge si falla un test de fuga entre tenants.",
      techStack: ["TypeScript", "Next.js", "Drizzle", "PostgreSQL", "arquitectura hexagonal"],
      privateWork: true,
    },
  ],
  education: [
    {
      title: "Bachillerato Universitario en Ingeniería en Computación",
      institution: "Tecnológico de Costa Rica (TEC)",
      period: "2020 - 2024",
      certificateLink:
        "https://drive.google.com/file/d/1e2hkG0mGfKou1ZxyGHVl9OqMGzIEi7Lh/view?usp=sharing",
      highlights: [
        "Proyecto de graduación: framework de observabilidad para servicios Node.js.",
      ],
    },
  ],
  certifications: [
    { title: "Algoritmos y Estructuras de Datos en JavaScript", provider: "freeCodeCamp", link: "https://www.freecodecamp.org/certification/fcca570a962-24c8-4ef2-b78d-1b6f9d132ae5/javascript-algorithms-and-data-structures" },
    { title: "Desarrollo de Aplicaciones Móviles", provider: "Google Actívate", link: "https://drive.google.com/file/d/193pBjwhEPTvY_HpJ4o6O2-20DBliAE_E/view" },
    { title: "Curso Profesional de C++", provider: "Azul School", link: "https://drive.google.com/file/d/1LMRwRtSY1cauPF1GVTrNigCcwjr8HUo/view?usp=sharing" },
  ],
  languages: ["Español (nativo)", "Inglés (lectura técnica; conversación básica)"],
};

// ---------------------------------------------------------------------------
// INGLÉS
// ---------------------------------------------------------------------------

export const cvEn: Cv = {
  name: "Bryam Steven López Miranda",
  title: "Software Engineer | Production AI agents, from the API to the phone line",
  headline: "Software Engineer - Production AI agents, from the API to the phone line",
  keywords: [
    "Software Engineer", "Backend Engineer", "Full Stack Engineer",
    "Applied AI Engineer", "AI Engineer", "Systems Integration Engineer",
    "TypeScript", "JavaScript", "Python", "Next.js", "React", "Node.js", "Fastify",
    "PostgreSQL", "Supabase", "pgvector", "Drizzle", "SQL", "RLS", "ETL", "pipelines",
    "RAG", "LLM", "AI Agents", "MCP", "LangChain", "LangGraph", "tool use", "evaluation",
    "Voice AI", "Asterisk", "PJSIP", "AMI", "ARI", "SIP", "WebRTC", "Retell", "Telnyx", "LiveKit",
    "n8n", "Celery", "Redis", "Docker", "Linux", "nginx", "REST API", "webhooks",
    "multi-tenant", "SaaS", "security", "HMAC", "OpenTelemetry", "Grafana", "Prometheus",
    "Costa Rica", "remote", "LATAM",
  ],
  location: "San Carlos, Alajuela, Costa Rica | Open to remote work in Latin America",
  contact: [
    { label: "Email", value: "bryam.steven.lopez@gmail.com", href: "mailto:bryam.steven.lopez@gmail.com" },
    { label: "Phone", value: "+50662633553", href: "https://wa.me/50662633553" },
    { label: "LinkedIn", value: "linkedin.com/in/bryamslm", href: "https://linkedin.com/in/bryamslm" },
    { label: "GitHub", value: "github.com/bryamslm", href: "https://github.com/bryamslm" },
    { label: "Portfolio", value: "portfolio-bryam.vercel.app", href: "https://portfolio-bryam.vercel.app" },
  ],
  summary:
    "Computer Engineer. I build and run complete applied-AI systems: tool-using agents with RAG, memory and deterministic guards, backed by my own data platforms and by real telephony. I work end to end —data model, backend, integrations, interface and Linux operations— with TypeScript, Node.js, Python, PostgreSQL and Asterisk/SIP. What I build runs in production and is verifiable through the links below.",
  experience: [
    {
      role: "Systems Integration Engineer",
      company: "AI Solutions CR",
      period: "Mar 2025 - Present",
      current: true,
      bullets: [
        "Designed and built a multi-tenant conversational AI SaaS for WhatsApp, Messenger, Instagram, web and telephony: 499 migrations, 43 PostgreSQL schemas and 295 RLS policies enforcing per-organization isolation, with outbox, idempotency, feature flags and auditing; 1,136 automated tests green.",
        "Integrated Voice AI on Asterisk 20 by writing my own AMI client over a raw TCP socket, no library, to originate, transfer and redirect calls: a ~2,000-line dialplan, 6 SIP trunks (Telnyx, DIDWW, Retell), 7 queues and an in-browser SIP console, across 244 endpoints and 105 tables.",
        "Built Plica Licitaciones CR, a procurement-intelligence engine over ten years of Costa Rican public spend (SICOP, Jul 2016-Jul 2026): 269k tenders, 349k awards and over one million comparable lines, with legal RAG on pgvector, a 24-tool MCP server and a calibrated LightGBM predictor (AUC 0.698, ECE 0.025 against a 0.508 baseline).",
        "Hardened the security of my own code: closed a CRLF injection in the AMI channel and an RLS policy that allowed deleting the catalog with the anonymous key; left HMAC signatures, constant-time verification and database-level idempotency constraints in place.",
        "Built Colibrí, a communications platform for public institutions: a dependency-free authorization engine, Asterisk ARI control and 22 custom governance checks in continuous integration.",
      ],
    },
    {
      role: "Software Developer - Professional Internship",
      company: "Vivo Gaming",
      period: "Jul 2024 - Nov 2024",
      bullets: [
        "Developed an observability framework for Node.js services, centralizing metrics, traces and diagnostics with OpenTelemetry, Prometheus, Grafana and Elasticsearch.",
        "Documented the architecture and adoption procedures; the work became my Computer Engineering graduation project.",
      ],
    },
  ],
  skills: [
    { category: "Applied AI", items: ["AI Agents", "LLMs", "RAG", "tool use", "MCP", "LangChain", "LangGraph", "pgvector", "agent evaluation", "deterministic guards", "Retell"] },
    { category: "Backend and full stack", items: ["TypeScript", "JavaScript", "Python", "Node.js", "Fastify", "Next.js", "React", "REST APIs", "webhooks", "multi-tenant architecture"] },
    { category: "Data", items: ["PostgreSQL", "Supabase", "Drizzle", "analytical SQL", "RLS", "ETL pipelines", "LightGBM", "calibrated models"] },
    { category: "Voice AI and telephony", items: ["Asterisk 20", "PJSIP", "AMI", "ARI", "SIP trunks", "WebRTC", "SIP.js", "Kamailio", "RTPengine", "Telnyx", "DIDWW", "LiveKit"] },
    { category: "Security and operations", items: ["RLS", "HMAC", "webhook signing", "idempotency", "outbox", "auditing", "Docker", "Linux", "nginx", "Celery", "Redis", "OpenTelemetry", "Grafana", "Prometheus"] },
  ],
  projects: [
    {
      title: "Plica Licitaciones CR - Public procurement intelligence",
      description:
        "Public-procurement intelligence with verifiable SICOP data, specialists, cited legal answers and calibrated predictions, accessible from the web, chat and tool integration.",
      cvLine:
        "the same data engine driven from web, chat and MCP, with verbatim citations.",
      techStack: ["TypeScript", "Next.js", "PostgreSQL", "pgvector", "Python", "LightGBM", "MCP"],
      liveDemo: "https://plica.aisolutionscr.tech",
    },
    {
      title: "Voice AI / Voice Ops",
      description:
        "Inbound and outbound calls, campaigns, transfers, browser SIP console, recordings and operational analytics.",
      cvLine:
        "agent console, outbound campaigns, warm transfers, recordings and analytics.",
      techStack: ["Asterisk 20", "PJSIP", "AMI", "SIP", "JsSIP", "Retell", "LiveKit"],
      privateWork: true,
    },
    {
      title: "Ya Sale - digital menu and restaurant ordering",
      description:
        "A product I co-own (50%) and built end to end myself: QR menus, table ordering, real-time kitchen, payments and loyalty, with per-restaurant roles.",
      cvLine:
        "50% of the product, 100% of the build; QR menus, real-time kitchen and ONVO Pay checkout.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase Realtime", "ONVO Pay"],
      liveDemo: "https://yasale.app/",
    },
    {
      title: "Colibrí - Communications for public institutions",
      description:
        "Contact center, internal communications and a voice-agent engine for state institutions and large companies, with capability-based authorization and real Asterisk telephony.",
      cvLine:
        "capability-based authorization and Asterisk telephony for state institutions.",
      techStack: ["TypeScript", "Fastify", "Drizzle", "PostgreSQL", "Asterisk ARI", "SIP.js", "Redis"],
      privateWork: true,
    },
    {
      title: "Retell Flowkit",
      description:
        "Local engine consumed through skills to generate, repair, audit and validate Retell Conversation Flows.",
      cvLine:
        "8 graph checks; 751/751 tests and 28/28 official templates.",
      techStack: ["TypeScript", "Ajv", "Vitest", "CLI", "skills"],
      privateWork: true,
    },
    {
      title: "Traza - Coaching with auditable decisions",
      description:
        "Multi-tenant SaaS that turns a trainer's methodology into training and nutrition decisions they review themselves, with graduated autonomy levels and a swappable AI engine.",
      cvLine:
        "per-organization isolation with RLS forced even on the schema owner; CI blocks the merge if a cross-tenant leak test fails.",
      techStack: ["TypeScript", "Next.js", "Drizzle", "PostgreSQL", "hexagonal architecture"],
      privateWork: true,
    },
  ],
  education: [
    {
      title: "Bachelor's Degree in Computer Engineering",
      institution: "Costa Rica Institute of Technology (TEC)",
      period: "2020 - 2024",
      certificateLink:
        "https://drive.google.com/file/d/1e2hkG0mGfKou1ZxyGHVl9OqMGzIEi7Lh/view?usp=sharing",
      highlights: [
        "Graduation project: observability framework for Node.js services.",
      ],
    },
  ],
  certifications: [
    { title: "JavaScript Algorithms and Data Structures", provider: "freeCodeCamp", link: "https://www.freecodecamp.org/certification/fcca570a962-24c8-4ef2-b78d-1b6f9d132ae5/javascript-algorithms-and-data-structures" },
    { title: "Mobile Application Development", provider: "Google Activate", link: "https://drive.google.com/file/d/193pBjwhEPTvY_HpJ4o6O2-20DBliAE_E/view" },
    { title: "Professional C++ Course", provider: "Azul School", link: "https://drive.google.com/file/d/1LMRwRtSY1cauPF1GVTrNigCcwjr8HUo/view?usp=sharing" },
  ],
  languages: ["Spanish (native)", "English (technical reading; basic conversation)"],
};

// ---------------------------------------------------------------------------
// VARIANTE BACKEND / INTEGRACIONES
// ---------------------------------------------------------------------------

/*
 * Mismo contenido, otro enfasis. En el feed de 50 vacantes que se analizo, la
 * mayoria pide backend, full stack, APIs e integraciones; solo cuatro
 * mencionan voz. La variante por defecto lidera con la telefonia porque es lo
 * que vuelve memorable el perfil; esta lidera con backend porque es lo que
 * hace que un filtro lo encuentre. No se cambia ninguna cifra ni se agrega
 * nada que la version principal no afirme: solo cambian el titular, el
 * resumen y el orden en que se presentan las mismas capacidades.
 */
function withBackendEmphasis(cv: Cv, overrides: Pick<Cv, "title" | "headline" | "summary">): Cv {
  const order = ["Backend y full stack", "Backend and full stack", "Datos", "Data"];
  return {
    ...cv,
    ...overrides,
    // Backend y datos primero; IA aplicada y telefonia siguen presentes, mas abajo.
    skills: [...cv.skills].sort(
      (a, b) => Number(order.includes(b.category)) - Number(order.includes(a.category)),
    ),
  };
}

export const cvEsBackend: Cv = withBackendEmphasis(cvEs, {
  title: "Ingeniero de Software Backend | Integraciones, datos y agentes de IA en producción",
  headline: "Ingeniero de Software Backend - Integraciones, datos y agentes de IA en producción",
  summary:
    "Ingeniero en Computación con foco en backend, integraciones y datos. Diseño APIs y esquemas PostgreSQL multi-tenant con aislamiento por RLS, idempotencia, outbox y auditoría; conecto sistemas de terceros por webhooks firmados; y llevo lo que construyo hasta producción en Linux. Trabajo con TypeScript, Node.js, Fastify, Next.js y Python, y aplico lo mismo a agentes de IA con herramientas y RAG, incluida la telefonía. Lo que construyo está en producción y es verificable desde los enlaces de abajo.",
});

export const cvEnBackend: Cv = withBackendEmphasis(cvEn, {
  title: "Backend Software Engineer | Integrations, data and production AI agents",
  headline: "Backend Software Engineer - Integrations, data and production AI agents",
  summary:
    "Computer Engineer focused on backend, integrations and data. I design APIs and multi-tenant PostgreSQL schemas with RLS isolation, idempotency, outbox and auditing; I connect third-party systems through signed webhooks; and I take what I build all the way to production on Linux. I work with TypeScript, Node.js, Fastify, Next.js and Python, and apply the same discipline to tool-using AI agents with RAG, telephony included. What I build runs in production and is verifiable through the links below.",
});
