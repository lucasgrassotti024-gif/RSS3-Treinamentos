import { Locale } from "@/types";

export type CourseTaxonomyType =
  | "all"
  | "nr-regulamentar"
  | "conhecimento-operacional"
  | "gestao-produtividade"
  | "qualidade-processos";

export interface CourseTypeDefinition {
  id: CourseTaxonomyType;
  label: Record<Locale, string>;
  description: Record<Locale, string>;
  iconName: string;
  badgeBg: string;
  badgeText: string;
  borderAccent: string;
}

export const COURSE_TAXONOMY_TYPES: CourseTypeDefinition[] = [
  {
    id: "all",
    label: {
      "pt-BR": "Todos os Cursos",
      en: "All Courses",
      es: "Todos los Cursos",
    },
    description: {
      "pt-BR": "Visão geral completa de todos os treinamentos industriais disponíveis.",
      en: "Complete catalog view of all available industrial training programs.",
      es: "Vista completa de todas las capacitaciones industriales disponibles.",
    },
    iconName: "LayoutGrid",
    badgeBg: "bg-slate-100 dark:bg-slate-800",
    badgeText: "text-slate-700 dark:text-slate-300",
    borderAccent: "border-slate-300 dark:border-slate-700",
  },
  {
    id: "nr-regulamentar",
    label: {
      "pt-BR": "Normas Regulamentadoras (NRs)",
      en: "Regulatory Standards (NRs)",
      es: "Normas Reguladoras (NRs)",
    },
    description: {
      "pt-BR": "Conformidade legal obrigatória: NR-06, NR-35, NR-10, NR-11 e NR-09.",
      en: "Mandatory regulatory compliance: NR-06, NR-35, NR-10, NR-11, and NR-09.",
      es: "Conformidad regulatoria: NR-06, NR-35, NR-10, NR-11 y NR-09.",
    },
    iconName: "ShieldAlert",
    badgeBg: "bg-blue-50 dark:bg-blue-950/60",
    badgeText: "text-blue-700 dark:text-blue-300",
    borderAccent: "border-blue-500",
  },
  {
    id: "conhecimento-operacional",
    label: {
      "pt-BR": "Conhecimento Operacional & Campo",
      en: "Field & Operational Craft Skills",
      es: "Conocimiento Operacional y de Campo",
    },
    description: {
      "pt-BR": "Técnicas de canteiro e frentes pesadas: Hidrojato, Hidrovácuo, Pintura, Andaimes e Rigging.",
      en: "Field craft excellence: Hydroblasting, Vacuum Trucks, Surface Prep, Scaffolding, and Rigging.",
      es: "Especialidades de terreno: Hidrojet, Camión Combinado, Tratamiento de Superficies y Andamios.",
    },
    iconName: "Wrench",
    badgeBg: "bg-orange-50 dark:bg-orange-950/60",
    badgeText: "text-orange-700 dark:text-orange-400",
    borderAccent: "border-orange-500",
  },
  {
    id: "gestao-produtividade",
    label: {
      "pt-BR": "Gestão, Liderança & Produtividade",
      en: "Management, Leadership & Productivity",
      es: "Gestión, Liderazgo y Productividad",
    },
    description: {
      "pt-BR": "Habilidades gerenciais e ferramentas de escritório: Gestão de Projetos, Gestão de Pessoas, Excel 365, Word e Power BI.",
      en: "Project controls, talent management, and digital tooling: Project Management, People Leadership, Excel 365, Word, and Power BI.",
      es: "Habilidades directivas y software de control: Proyectos, Personas, Excel 365, Word y Power BI.",
    },
    iconName: "TrendingUp",
    badgeBg: "bg-emerald-50 dark:bg-emerald-950/60",
    badgeText: "text-emerald-700 dark:text-emerald-400",
    borderAccent: "border-emerald-500",
  },
  {
    id: "qualidade-processos",
    label: {
      "pt-BR": "Qualidade Industrial & Processos (QA/QC)",
      en: "Industrial Quality & Systems (QA/QC)",
      es: "Calidad Industrial y Procesos (QA/QC)",
    },
    description: {
      "pt-BR": "Inspeção e excelência de processo: Gestão da Qualidade, Ciclo PDCA, Pintura Anticorrosiva e Auditorias Técnicas.",
      en: "Inspection and operational rigor: Quality Management, PDCA cycles, Coating QA/QC, and Technical Audits.",
      es: "Aseguramiento y control técnico: Calidad Total, Ciclo PDCA, Pintura y Ensayos de Recubrimiento.",
    },
    iconName: "CheckCircle2",
    badgeBg: "bg-amber-50 dark:bg-amber-950/60",
    badgeText: "text-amber-700 dark:text-amber-400",
    borderAccent: "border-amber-500",
  },
];
