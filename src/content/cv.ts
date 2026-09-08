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

// ---------------------------------------------------------------------------
// ESPAÑOL
// ---------------------------------------------------------------------------

export const cvEs: Cv = {
  name: "Bryam Steven López Miranda",
  title: "Ingeniero de Software | IA Aplicada, Integraciones y Voice AI",
  headline: "Ingeniero de Software - IA Aplicada, Integraciones y Voice AI",
  keywords: [
    "Ingeniero de Software", "Software Engineer", "Backend Engineer", "Full Stack",
    "Applied AI Engineer", "AI Engineer", "Systems Integration", "Integraciones",
    "TypeScript", "JavaScript", "Python", "Next.js", "React", "Node.js",
    "PostgreSQL", "Supabase", "pgvector", "RAG", "LLM", "AI Agents", "MCP",
    "Voice AI", "Asterisk", "PJSIP", "SIP", "AMI", "Retell", "Telnyx", "LiveKit",
    "n8n", "Docker", "Linux", "nginx", "REST API", "multi-tenant", "SaaS",
    "OpenTelemetry", "Grafana", "Prometheus", "Costa Rica", "remoto", "LATAM",
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
  // mas caro del CV y "equipo estable" se lee como reproche al empleador actual.
  // Eso pertenece a la carta de presentacion o a la conversacion.
  summary:
    "Ingeniero en Computación especializado en IA aplicada, sistemas e ingeniería de producto. Construyo agentes con herramientas, RAG, memoria, guardas deterministas, automatización, datos, comunicaciones por voz y productos web orientados al usuario. Entrego productos completos con TypeScript, Next.js, Node.js, PostgreSQL, Supabase, Python, n8n, Asterisk, SIP y Retell, desde el modelo de datos hasta la operación en Linux.",
  experience: [
    {
      role: "Ingeniero de Integración de Sistemas",
      company: "AI Solutions CR",
      period: "Mar 2025 - Actualidad",
      current: true,
      bullets: [
        "Diseñé y desarrollé una plataforma SaaS multi-tenant de IA conversacional para WhatsApp, Messenger, Instagram, web y telefonía.",
        "Construí Plica Licitaciones CR, motor de inteligencia sobre diez años de compra pública (SICOP, jul 2016-jul 2026): 269 mil carteles, 349 mil adjudicaciones y más de un millón de líneas comparables, con RAG legal sobre pgvector y un servidor MCP de 24 herramientas.",
        "Construí asistentes con memoria, RAG, herramientas, guardas, fallbacks y configuración independiente por organización; un mismo cerebro enruta cinco marcas dentro de un tenant.",
        "Integré Voice AI con Asterisk 20, PJSIP, AMI, SIP trunks, Retell, Telnyx y DIDWW para llamadas entrantes, campañas salientes y transferencias.",
        "Implementé RLS, feature flags, idempotencia, auditoría, outbox, notificaciones y recuperación ante fallos sobre Linux, PostgreSQL y Supabase self-hosted.",
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
    { category: "IA aplicada", items: ["AI Agents", "LLMs", "RAG", "tool use", "MCP", "prompt engineering", "guardas deterministas", "Retell"] },
    { category: "Ingeniería de software", items: ["TypeScript", "JavaScript", "Python", "Next.js", "React", "Node.js", "REST APIs", "software multi-tenant"] },
    { category: "Datos", items: ["PostgreSQL", "Supabase", "pgvector", "pipelines de datos", "RLS", "modelos predictivos"] },
    { category: "Voice AI y telefonía", items: ["Asterisk 20", "PJSIP", "AMI", "SIP trunks", "Kamailio", "RTPengine", "Retell", "Telnyx", "DIDWW", "LiveKit"] },
    { category: "Automatización e infraestructura", items: ["n8n", "Linux", "Docker", "PM2", "nginx", "Vercel", "OpenTelemetry", "Grafana", "Prometheus"] },
  ],
  projects: [
    {
      title: "Plica Licitaciones CR - Inteligencia para contratación pública",
      description:
        "Inteligencia para contratación pública con datos verificables de SICOP, especialistas, respuestas legales con citas y predicciones honestas, accesible desde la web, el chat y la integración para herramientas.",
      cvLine:
        "inteligencia para contratación pública con datos verificables de SICOP, especialistas, respuestas legales con citas y predicciones honestas.",
      techStack: ["TypeScript", "Next.js", "PostgreSQL", "Supabase", "Python", "RAG", "MCP"],
      liveDemo: "https://plica.aisolutionscr.tech",
    },
    {
      title: "Voice AI / Voice Ops",
      description:
        "Operación de llamadas entrantes y salientes, campañas, transferencias, consola SIP en navegador, grabaciones y analítica.",
      cvLine:
        "llamadas entrantes y salientes, campañas, transferencias, consola SIP en navegador, grabaciones y analítica.",
      techStack: ["Asterisk 20", "PJSIP", "AMI", "SIP", "Kamailio", "Retell", "LiveKit"],
      liveDemo: "https://ops.aisolutionscr.tech/",
    },
    {
      title: "Retell Flowkit",
      description:
        "Motor local consumido mediante skills para generar, corregir, auditar y validar Retell Conversation Flows; 751/751 pruebas y 28/28 plantillas oficiales verificadas.",
      cvLine:
        "motor local para generar, corregir, auditar y validar Retell Conversation Flows; 751/751 pruebas y 28/28 plantillas oficiales verificadas.",
      techStack: ["TypeScript", "skills", "LLMs", "validadores", "testing", "Codex"],
      privateWork: true,
    },
    {
      title: "SaaS multi-tenant de IA conversacional",
      description:
        "Agentes por chat y voz con aislamiento por organización, memoria, RAG, herramientas, guardas, handoff humano, auditoría y recuperación ante fallos.",
      cvLine:
        "agentes por chat y voz con aislamiento por organización, memoria, RAG, herramientas, guardas, handoff humano, auditoría y recuperación ante fallos.",
      techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "n8n"],
      liveDemo: "https://app.aisolutionscr.tech/es/",
    },
    {
      title: "Ya Sale - carta digital y pedidos para restaurantes",
      description:
        "Producto desarrollado en conjunto con TicaCode. Como desarrollador técnico construí una experiencia web para que restaurantes operen su carta por QR: el cliente escanea, arma el pedido y cocina lo recibe identificado por mesa; incluye actualización de menú, disponibilidad de platos, estados de cocina y solicitudes de atención o cuenta.",
      cvLine:
        "carta QR y pedidos con cliente, mesa y cocina conectados; menú y disponibilidad actualizables, estados de cocina y solicitudes de atención o cuenta. Desarrollado con TicaCode.",
      techStack: ["TypeScript", "Next.js", "Product Engineering", "QR ordering", "real-time operations"],
      liveDemo: "https://yasale.app/",
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
  title: "Software Engineer | Applied AI, Integrations and Voice AI",
  headline: "Software Engineer - Applied AI, Integrations and Voice AI",
  keywords: [
    "Software Engineer", "Backend Engineer", "Full Stack Engineer",
    "Applied AI Engineer", "AI Engineer", "Systems Integration Engineer",
    "TypeScript", "JavaScript", "Python", "Next.js", "React", "Node.js",
    "PostgreSQL", "Supabase", "pgvector", "RAG", "LLM", "AI Agents", "MCP",
    "Voice AI", "Asterisk", "PJSIP", "SIP", "AMI", "Retell", "Telnyx", "LiveKit",
    "n8n", "Docker", "Linux", "nginx", "REST API", "multi-tenant", "SaaS",
    "OpenTelemetry", "Grafana", "Prometheus", "Costa Rica", "remote", "LATAM",
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
    "Computer Engineer specializing in applied AI, systems and product engineering. I build tool-using agents, RAG, memory, deterministic guards, automation, data pipelines, voice communications and user-facing web products. I deliver complete products with TypeScript, Next.js, Node.js, PostgreSQL, Supabase, Python, n8n, Asterisk, SIP and Retell, from the data model through to running them on Linux.",
  experience: [
    {
      role: "Systems Integration Engineer",
      company: "AI Solutions CR",
      period: "Mar 2025 - Present",
      current: true,
      bullets: [
        "Designed and developed a multi-tenant conversational AI SaaS for WhatsApp, Messenger, Instagram, web and telephony.",
        "Built Plica Licitaciones CR, a procurement-intelligence engine over ten years of Costa Rican public spend (SICOP, Jul 2016-Jul 2026): 269k tenders, 349k awards and over one million comparable lines, with legal RAG on pgvector and a 24-tool MCP server.",
        "Built assistants with memory, RAG, tools, guards, fallbacks and per-organization configuration; one brain routes five brands within a single tenant.",
        "Integrated Voice AI with Asterisk 20, PJSIP, AMI, SIP trunks, Retell, Telnyx and DIDWW for inbound calls, outbound campaigns and transfers.",
        "Implemented RLS, feature flags, idempotency, auditing, outbox, notifications and failure recovery on Linux, PostgreSQL and self-hosted Supabase.",
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
    { category: "Applied AI", items: ["AI Agents", "LLMs", "RAG", "tool use", "MCP", "prompt engineering", "deterministic guards", "Retell"] },
    { category: "Software engineering", items: ["TypeScript", "JavaScript", "Python", "Next.js", "React", "Node.js", "REST APIs", "multi-tenant systems"] },
    { category: "Data", items: ["PostgreSQL", "Supabase", "pgvector", "data pipelines", "RLS", "predictive models"] },
    { category: "Voice AI and telephony", items: ["Asterisk 20", "PJSIP", "AMI", "SIP trunks", "Kamailio", "RTPengine", "Retell", "Telnyx", "DIDWW", "LiveKit"] },
    { category: "Automation and infrastructure", items: ["n8n", "Linux", "Docker", "PM2", "nginx", "Vercel", "OpenTelemetry", "Grafana", "Prometheus"] },
  ],
  projects: [
    {
      title: "Plica Licitaciones CR - Public procurement intelligence",
      description:
        "Public-procurement intelligence with verifiable SICOP data, specialists, cited legal answers and honest predictions, accessible from the web, chat and tool integration.",
      cvLine:
        "public-procurement intelligence with verifiable SICOP data, specialists, cited legal answers and honest predictions.",
      techStack: ["TypeScript", "Next.js", "PostgreSQL", "Supabase", "Python", "RAG", "MCP"],
      liveDemo: "https://plica.aisolutionscr.tech",
    },
    {
      title: "Voice AI / Voice Ops",
      description:
        "Inbound and outbound calls, campaigns, transfers, browser SIP console, recordings and operational analytics.",
      cvLine:
        "inbound and outbound calls, campaigns, transfers, browser SIP console, recordings and operational analytics.",
      techStack: ["Asterisk 20", "PJSIP", "AMI", "SIP", "Kamailio", "Retell", "LiveKit"],
      liveDemo: "https://ops.aisolutionscr.tech/",
    },
    {
      title: "Retell Flowkit",
      description:
        "Local engine consumed through skills to generate, repair, audit and validate Retell Conversation Flows; 751/751 tests and 28/28 official templates verified.",
      cvLine:
        "local engine to generate, fix, audit and validate Retell Conversation Flows; 751/751 tests and 28/28 official templates verified.",
      techStack: ["TypeScript", "skills", "LLMs", "validators", "testing", "Codex"],
      privateWork: true,
    },
    {
      title: "Multi-tenant conversational AI SaaS",
      description:
        "Chat and voice agents with organization isolation, memory, RAG, tools, guards, human handoff, auditing and failure recovery.",
      cvLine:
        "chat and voice agents with organization isolation, memory, RAG, tools, guards, human handoff, auditing and failure recovery.",
      techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "n8n"],
      liveDemo: "https://app.aisolutionscr.tech/es/",
    },
    {
      title: "Ya Sale - digital menu and restaurant ordering",
      description:
        "Product developed jointly with TicaCode. As the technical developer, I built a web experience for restaurants to run QR menus: diners scan, assemble an order and the kitchen receives it identified by table; it includes menu updates, item availability, kitchen statuses and requests for service or the bill.",
      cvLine:
        "QR menu and ordering with diner, table and kitchen connected; updatable menus and availability, kitchen statuses and service or bill requests. Built with TicaCode.",
      techStack: ["TypeScript", "Next.js", "Product Engineering", "QR ordering", "real-time operations"],
      liveDemo: "https://yasale.app/",
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
