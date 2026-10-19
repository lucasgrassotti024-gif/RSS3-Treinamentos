import { Locale } from "@/types";

export interface LearningPath {
  id: string;
  slug: string;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  roleTarget: Record<Locale, string>;
  description: Record<Locale, string>;
  courseIds: string[];
  estimatedTotalHours: number;
  badgeCode: string;
  gradient: string;
}

export const DEMO_LEARNING_PATHS: LearningPath[] = [
  {
    id: "trilha-seguranca-cmpc",
    slug: "seguranca-e-conformidade-industrial",
    title: {
      "pt-BR": "Trilha de Segurança e Conformidade CMPC",
      en: "CMPC Safety & Industrial Compliance Path",
      es: "Ruta de Seguridad y Cumplimiento CMPC",
    },
    subtitle: {
      "pt-BR": "Habilitação fundamental para acesso e operações de alto risco",
      en: "Core qualification for site access and high-risk operations",
      es: "Habilitación fundamental para acceso y operaciones críticas",
    },
    roleTarget: {
      "pt-BR": "Todos os Operadores, Mecânicos e Técnicos de Campo",
      en: "All Field Operators, Mechanics, and Technicians",
      es: "Todos los Operadores, Mecánicos y Técnicos de Terreno",
    },
    description: {
      "pt-BR": "Formação mandatória contendo as principais normas regulamentadoras aplicadas às frentes de parada e rotina na CMPC.",
      en: "Mandatory qualification covering key regulatory standards applied to plant shutdowns and routine maintenance.",
      es: "Formación obligatoria con las principales normas aplicadas en paradas de planta.",
    },
    courseIds: ["rss3-nr06-epi", "rss3-nr35-altura", "rss3-nr10-eletrica", "rss3-nr11-cargas"],
    estimatedTotalHours: 32,
    badgeCode: "SST-CMPC",
    gradient: "from-blue-900 via-blue-800 to-indigo-900",
  },
  {
    id: "trilha-hidrojato-hidrovacuo",
    slug: "operacoes-pesadas-hidrojato-e-vacuo",
    title: {
      "pt-BR": "Trilha de Alta Pressão & Sucção a Vácuo",
      en: "High-Pressure Hydroblasting & Vacuum Path",
      es: "Ruta de Hidrojet y Succión al Vacío",
    },
    subtitle: {
      "pt-BR": "Técnicas avançadas para desobstrução, limpeza e hidrovácuo",
      en: "Advanced techniques for industrial cleaning and vacuum operations",
      es: "Técnicas avanzadas para desobstrucción y limpieza pesada",
    },
    roleTarget: {
      "pt-BR": "Operadores de Hidrojato e Motoristas Operadores de Caminhão Vácuo",
      en: "Hydroblasting Operators & Vacuum Truck Drivers",
      es: "Operadores de Hidrojet y Choferes de Camión Vacío",
    },
    description: {
      "pt-BR": "Capacitação completa em segurança de ultrarressão, acoplamento, contenção de vazamentos e normas NR-35 e NR-06.",
      en: "Comprehensive safety and operations training on ultra-high pressure pumps, couplings, and PPE.",
      es: "Capacitación completa en ultracavitación, presión y uso seguro de equipos pesados.",
    },
    courseIds: ["rss3-hidrojato", "rss3-nr06-epi", "rss3-nr35-altura"],
    estimatedTotalHours: 36,
    badgeCode: "HP-VAC",
    gradient: "from-slate-900 via-blue-950 to-orange-950",
  },
  {
    id: "trilha-manutencao-pcm",
    slug: "planejamento-e-manutencao-industrial",
    title: {
      "pt-BR": "Trilha de PCM & Confiabilidade Industrial",
      en: "PCM & Industrial Reliability Path",
      es: "Ruta de PCM y Confiabilidad Industrial",
    },
    subtitle: {
      "pt-BR": "Planejamento, controle de manutenção e análise de indicadores",
      en: "Maintenance planning, control, and operational KPI analysis",
      es: "Planificación, control de mantenimiento e indicadores",
    },
    roleTarget: {
      "pt-BR": "Planejadores, Engenheiros, Supervisores e Analistas de Manutenção",
      en: "Planners, Engineers, Supervisors, and Maintenance Analysts",
      es: "Planificadores, Ingenieros, Supervisores y Analistas",
    },
    description: {
      "pt-BR": "Integração prática de rotinas de manutenção preditiva/preventiva, indicadores de MTBF/MTTR e ferramentas Excel & Power BI.",
      en: "Hands-on integration of maintenance schedules, MTBF/MTTR metrics, Excel, and Power BI dashboards.",
      es: "Integración práctica de rutinas de mantenimiento, indicadores y tableros analíticos.",
    },
    courseIds: ["rss3-manutencao-industrial", "rss3-pcm-planejamento", "rss3-excel-365", "rss3-power-bi"],
    estimatedTotalHours: 54,
    badgeCode: "PCM-RSS3",
    gradient: "from-blue-950 via-slate-900 to-emerald-950",
  },
];
