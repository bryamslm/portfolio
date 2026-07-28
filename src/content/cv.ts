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
  title: "Ingeniero de IA Aplicada y Sistemas | Applied AI Engineer",
  location: "San Carlos, Alajuela, Costa Rica | Disponible remoto en Latinoamérica",
  contact: [
    { label: "Email", value: "bryam.steven.lopez@gmail.com", href: "mailto:bryam.steven.lopez@gmail.com" },
    { label: "Teléfono", value: "+50662633553", href: "https://wa.me/50662633553" },
    { label: "LinkedIn", value: "linkedin.com/in/bryamslm", href: "https://linkedin.com/in/bryamslm" },
    { label: "GitHub", value: "github.com/bryamslm", href: "https://github.com/bryamslm" },
    { label: "Portafolio", value: "portfolio-bryam.vercel.app", href: "https://portfolio-bryam.vercel.app" },
  ],
  summary:
    "Ingeniero en Computación especializado en IA aplicada y sistemas. Construyo agentes con herramientas, RAG, memoria, guardas deterministas, automatización, datos y comunicaciones por voz. Experiencia desarrollando productos completos con TypeScript, Next.js, Node.js, PostgreSQL, Supabase, Python, n8n, Asterisk, SIP y Retell. Busco integrarme a un equipo estable en IA aplicada, integraciones, Voice AI o ingeniería de producto.",
  experience: [
    {
      role: "Ingeniero de IA Aplicada y Sistemas",
      company: "Profesional independiente",
      period: "Jul 2026 - Actualidad",
      current: true,
      bullets: [
        "Desarrollo Plica/Licita, una plataforma de inteligencia para contratación pública basada en diez años y 120 periodos de SICOP; procesa más de 23 millones de registros y 1,27 millones de líneas analíticas.",
        "Plica opera como producto listo sobre un mismo motor, con paridad funcional entre ERP/web, Plica Chat y MCP para acceder a herramientas, especialistas y backend.",
        "Desarrollé Retell Flowkit, un motor local consumido mediante skills para generar, corregir, auditar y validar Conversation Flows: 751/751 pruebas aprobadas, más de 19 validadores y round-trip de 28/28 plantillas oficiales.",
        "Mantengo y evoluciono sistemas multi-tenant, automatización y Voice AI con TypeScript, Next.js, PostgreSQL, Supabase, n8n, Asterisk, SIP y Retell.",
      ],
    },
    {
      role: "Ingeniero de Integración de Sistemas",
      company: "AI Solutions CR",
      period: "Mar 2025 - Mar 2026",
      bullets: [
        "Diseñé y desarrollé una plataforma SaaS multi-tenant de IA conversacional para WhatsApp, Messenger, Instagram, web y telefonía.",
        "Construí asistentes como Aldana, Emma, Charlotte, Cata y Ben con memoria, RAG, herramientas, guardas, fallbacks y configuración independiente; el tenant 2 enruta un mismo cerebro entre cinco marcas.",
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
      title: "Plica/Licita - Inteligencia para contratación pública",
      description:
        "Motor listo de inteligencia para SICOP con datos, especialistas, RAG legal y modelos, operable con paridad funcional desde ERP/web, Plica Chat y MCP.",
      techStack: ["TypeScript", "Next.js", "PostgreSQL", "Supabase", "Python", "RAG", "MCP"],
      liveDemo: "https://plica.aisolutionscr.tech",
    },
    {
      title: "Voice AI / Voice Ops",
      description:
        "Operación de llamadas entrantes y salientes, campañas, transferencias, consola SIP en navegador, grabaciones y analítica.",
      techStack: ["Asterisk 20", "PJSIP", "AMI", "SIP", "Kamailio", "Retell", "LiveKit"],
      liveDemo: "https://ops.aisolutionscr.tech/",
    },
    {
      title: "Retell Flowkit",
      description:
        "Motor local consumido mediante skills para generar, corregir, auditar y validar Retell Conversation Flows; 751/751 pruebas y 28/28 plantillas oficiales verificadas.",
      techStack: ["TypeScript", "skills", "LLMs", "validadores", "testing", "Codex"],
      privateWork: true,
    },
    {
      title: "SaaS multi-tenant de IA conversacional",
      description:
        "Agentes por chat y voz con aislamiento por organización, memoria, RAG, herramientas, guardas, handoff humano, auditoría y recuperación ante fallos.",
      techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "n8n"],
      liveDemo: "https://app.aisolutionscr.tech/es/",
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
  title: "Applied AI and Systems Engineer",
  location: "San Carlos, Alajuela, Costa Rica | Open to remote work in Latin America",
  contact: [
    { label: "Email", value: "bryam.steven.lopez@gmail.com", href: "mailto:bryam.steven.lopez@gmail.com" },
    { label: "Phone", value: "+50662633553", href: "https://wa.me/50662633553" },
    { label: "LinkedIn", value: "linkedin.com/in/bryamslm", href: "https://linkedin.com/in/bryamslm" },
    { label: "GitHub", value: "github.com/bryamslm", href: "https://github.com/bryamslm" },
    { label: "Portfolio", value: "portfolio-bryam.vercel.app", href: "https://portfolio-bryam.vercel.app" },
  ],
  summary:
    "Computer Engineer specializing in applied AI and systems. I build tool-using agents, RAG, memory, deterministic guards, automation, data pipelines and voice communications. Experience delivering complete products with TypeScript, Next.js, Node.js, PostgreSQL, Supabase, Python, n8n, Asterisk, SIP and Retell. Seeking a stable role in applied AI, integrations, Voice AI or product engineering.",
  experience: [
    {
      role: "Applied AI and Systems Engineer",
      company: "Independent",
      period: "Jul 2026 - Present",
      current: true,
      bullets: [
        "Develop Plica/Licita, a public-procurement intelligence platform based on ten years and 120 SICOP periods; it processes more than 23 million records and 1.27 million analytical lines.",
        "Plica operates as a production-ready product on one engine, with functional parity across ERP/web, Plica Chat and MCP for tools, specialists and backend capabilities.",
        "Built Retell Flowkit, a local engine consumed through skills to generate, repair, audit and validate Conversation Flows: 751/751 passing tests, more than 19 validators and verified round trips for 28/28 official templates.",
        "Maintain and evolve multi-tenant, automation and Voice AI systems using TypeScript, Next.js, PostgreSQL, Supabase, n8n, Asterisk, SIP and Retell.",
      ],
    },
    {
      role: "Systems Integration Engineer",
      company: "AI Solutions CR",
      period: "Mar 2025 - Mar 2026",
      bullets: [
        "Designed and developed a multi-tenant conversational AI SaaS for WhatsApp, Messenger, Instagram, web and telephony.",
        "Built assistants such as Aldana, Emma, Charlotte, Cata and Ben with memory, RAG, tools, guards, fallbacks and per-organization configuration; tenant 2 routes one brain across five brands.",
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
      title: "Plica/Licita - Public procurement intelligence",
      description:
        "Production-ready SICOP intelligence engine with data, specialists, legal RAG and evaluated models, available with functional parity across ERP/web, Plica Chat and MCP.",
      techStack: ["TypeScript", "Next.js", "PostgreSQL", "Supabase", "Python", "RAG", "MCP"],
      liveDemo: "https://plica.aisolutionscr.tech",
    },
    {
      title: "Voice AI / Voice Ops",
      description:
        "Inbound and outbound calls, campaigns, transfers, browser SIP console, recordings and operational analytics.",
      techStack: ["Asterisk 20", "PJSIP", "AMI", "SIP", "Kamailio", "Retell", "LiveKit"],
      liveDemo: "https://ops.aisolutionscr.tech/",
    },
    {
      title: "Retell Flowkit",
      description:
        "Local engine consumed through skills to generate, repair, audit and validate Retell Conversation Flows; 751/751 tests and 28/28 official templates verified.",
      techStack: ["TypeScript", "skills", "LLMs", "validators", "testing", "Codex"],
      privateWork: true,
    },
    {
      title: "Multi-tenant conversational AI SaaS",
      description:
        "Chat and voice agents with organization isolation, memory, RAG, tools, guards, human handoff, auditing and failure recovery.",
      techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "n8n"],
      liveDemo: "https://app.aisolutionscr.tech/es/",
    },
  ],
  education: [
    {
      title: "Bachelor's Degree in Computer Engineering",
      institution: "Tecnológico de Costa Rica (TEC)",
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
