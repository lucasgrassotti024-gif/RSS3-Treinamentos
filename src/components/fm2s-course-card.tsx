"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CourseDemonstration } from "@/types";
import {
  FileText,
  Award,
  Settings,
  Shield,
  Droplets,
  User,
  ChevronDown,
  BookOpen,
  Clock,
  Star,
  CheckCircle2,
  Flame,
  Zap,
  HardHat,
  Paintbrush,
  Layers,
  Wrench,
  BarChart3,
  FileSpreadsheet,
  Cpu,
  Truck,
  Scale,
  Compass,
  Briefcase,
  Users,
  CheckSquare,
} from "lucide-react";
import { toggleFavoriteCourse } from "@/lib/favorites";
import { getCourseProgress, calculateCourseProgressMetrics } from "@/lib/progress";

interface FM2SCourseCardProps {
  course: CourseDemonstration;
  locale: "pt-BR" | "en" | "es";
  isFav?: boolean;
  stepNumber?: number | string;
  actionUrl?: string;
  actionLabel?: string;
  onActionClick?: () => void;
  showFavoriteButton?: boolean;
}

export interface CourseVisualTheme {
  color: string;
  gradient: string;
  tagBg: string;
  tagText: string;
  themeLabel: string;
  icon: React.ReactNode;
}

/**
 * Retorna identidade visual exclusiva e temática para cada um dos 21 cursos do LMS
 */
export function getCourseVisualTheme(courseId: string): CourseVisualTheme {
  const id = courseId.toLowerCase();

  // 1. NR-20: Inflamáveis, Gases e Combustíveis (Símbolo de Fogo / Chamas)
  if (id.includes("nr20") || id.includes("inflamaveis")) {
    return {
      color: "#ea580c", // Laranja Fogo
      gradient: "from-orange-600 to-amber-700",
      tagBg: "bg-orange-950/80 text-orange-200 border-orange-500/40",
      tagText: "text-orange-400",
      themeLabel: "Inflamáveis & Fogo",
      icon: <Flame className="w-8 h-8 text-white animate-pulse" />,
    };
  }

  // 2. NR-10: Segurança em Eletricidade (Raio / Alta Tensão)
  if (id.includes("nr10") || id.includes("eletric")) {
    return {
      color: "#eab308", // Amarelo Elétrico
      gradient: "from-amber-500 to-yellow-600",
      tagBg: "bg-amber-950/80 text-amber-200 border-amber-500/40",
      tagText: "text-amber-400",
      themeLabel: "Risco Elétrico",
      icon: <Zap className="w-8 h-8 text-white fill-white" />,
    };
  }

  // 3. Montagem e Inspeção de Andaimes (Estrutura Modular / Níveis)
  if (id.includes("andaime")) {
    return {
      color: "#0284c7", // Azul Andaime
      gradient: "from-sky-600 to-cyan-700",
      tagBg: "bg-sky-950/80 text-sky-200 border-sky-500/40",
      tagText: "text-sky-400",
      themeLabel: "Acesso & Andaimes",
      icon: <Layers className="w-8 h-8 text-white" />,
    };
  }

  // 4. NR-35: Trabalho em Altura & Queda (Capacete / Arnês / Proteção)
  if (id.includes("nr35") || id.includes("altura")) {
    return {
      color: "#0891b2", // Ciano Profundo
      gradient: "from-cyan-600 to-blue-700",
      tagBg: "bg-cyan-950/80 text-cyan-200 border-cyan-500/40",
      tagText: "text-cyan-400",
      themeLabel: "Trabalho em Altura",
      icon: <HardHat className="w-8 h-8 text-white" />,
    };
  }

  // 5. Hidrojateamento de Alta Pressão (Gotas d'Água / Ultra Pressão)
  if (id.includes("hidrojato")) {
    return {
      color: "#06b6d4", // Azul Água Alta Pressão
      gradient: "from-cyan-500 to-teal-700",
      tagBg: "bg-teal-950/80 text-teal-200 border-teal-500/40",
      tagText: "text-teal-400",
      themeLabel: "Ultra Alta Pressão",
      icon: <Droplets className="w-8 h-8 text-white fill-white/80" />,
    };
  }

  // 6. Pintura Industrial e Tratamento de Superfície (Pincel / Rolo Industrial)
  if (id.includes("pintura")) {
    return {
      color: "#ec4899", // Rosa / Magenta Industrial
      gradient: "from-pink-600 to-rose-700",
      tagBg: "bg-pink-950/80 text-pink-200 border-pink-500/40",
      tagText: "text-pink-400",
      themeLabel: "Tratamento & Pintura",
      icon: <Paintbrush className="w-8 h-8 text-white" />,
    };
  }

  // 7. NR-12: Segurança em Máquinas e Equipamentos (Engrenagens / Proteções)
  if (id.includes("nr12") || id.includes("maquinas")) {
    return {
      color: "#dc2626", // Vermelho Alerta Máquinas
      gradient: "from-red-600 to-rose-800",
      tagBg: "bg-red-950/80 text-red-200 border-red-500/40",
      tagText: "text-red-400",
      themeLabel: "Proteção de Máquinas",
      icon: <Settings className="w-8 h-8 text-white animate-spin-slow" />,
    };
  }

  // 8. NR-11: Movimentação, Içamento e Cargas (Guindastes / Empilhadeiras)
  if (id.includes("nr11") || id.includes("movimentacao") || id.includes("materiais")) {
    return {
      color: "#d97706", // Âmbar Guindaste
      gradient: "from-amber-600 to-orange-700",
      tagBg: "bg-amber-950/80 text-amber-200 border-amber-500/40",
      tagText: "text-amber-400",
      themeLabel: "Içamento & Cargas",
      icon: <Truck className="w-8 h-8 text-white" />,
    };
  }

  // 9. NR-06: EPIs e Proteção Individual (Escudo de Proteção)
  if (id.includes("nr-6") || id.includes("nr6") || id.includes("epi")) {
    return {
      color: "#2563eb", // Azul Segurança
      gradient: "from-blue-600 to-indigo-700",
      tagBg: "bg-blue-950/80 text-blue-200 border-blue-500/40",
      tagText: "text-blue-400",
      themeLabel: "EPIs & Segurança",
      icon: <Shield className="w-8 h-8 text-white" />,
    };
  }

  // 10. NR-09: Avaliação e Controle de Riscos Ambientais
  if (id.includes("nr-09") || id.includes("nr9") || id.includes("exposicoes")) {
    return {
      color: "#059669", // Verde Ambiental
      gradient: "from-emerald-600 to-green-800",
      tagBg: "bg-emerald-950/80 text-emerald-200 border-emerald-500/40",
      tagText: "text-emerald-400",
      themeLabel: "Riscos Ambientais",
      icon: <Shield className="w-8 h-8 text-white" />,
    };
  }

  // 11. Perícia Judicial Trabalhista (Balança da Justiça / Conformidade Legal)
  if (id.includes("pericia")) {
    return {
      color: "#0f766e", // Verde Petróleo Jurídico
      gradient: "from-teal-700 to-slate-900",
      tagBg: "bg-teal-950/80 text-teal-200 border-teal-500/40",
      tagText: "text-teal-400",
      themeLabel: "Perícia & Legal",
      icon: <Scale className="w-8 h-8 text-white" />,
    };
  }

  // 12. Power BI & Indicadores Industriais (Gráficos / Dashboards)
  if (id.includes("power-bi") || id.includes("powerbi")) {
    return {
      color: "#f59e0b", // Amarelo Power BI
      gradient: "from-amber-500 to-amber-700",
      tagBg: "bg-amber-950/80 text-amber-200 border-amber-500/40",
      tagText: "text-amber-400",
      themeLabel: "Power BI & DAX",
      icon: <BarChart3 className="w-8 h-8 text-white" />,
    };
  }

  // 13. Excel & Produtividade Operacional (Planilhas / Fórmulas)
  if (id.includes("excel")) {
    return {
      color: "#10b981", // Verde Excel
      gradient: "from-emerald-600 to-teal-800",
      tagBg: "bg-emerald-950/80 text-emerald-200 border-emerald-500/40",
      tagText: "text-emerald-400",
      themeLabel: "Excel Operacional",
      icon: <FileSpreadsheet className="w-8 h-8 text-white" />,
    };
  }

  // 14. Word Corporativo & Documentação Técnica (Documento Formal)
  if (id.includes("word")) {
    return {
      color: "#2563eb", // Azul Word
      gradient: "from-blue-600 to-blue-800",
      tagBg: "bg-blue-950/80 text-blue-200 border-blue-500/40",
      tagText: "text-blue-400",
      themeLabel: "Word & Relatórios",
      icon: <FileText className="w-8 h-8 text-white" />,
    };
  }

  // 15. PCM: Planejamento e Controle da Manutenção (Engrenagem / Programação)
  if (id.includes("pcm")) {
    return {
      color: "#0284c7", // Azul Confiabilidade
      gradient: "from-sky-600 to-blue-800",
      tagBg: "bg-sky-950/80 text-sky-200 border-sky-500/40",
      tagText: "text-sky-400",
      themeLabel: "PCM & Confiabilidade",
      icon: <Settings className="w-8 h-8 text-white" />,
    };
  }

  // 16. Manutenção Mecânica & Eletromecânica (Chave Inglesa / Ferramenta)
  if (id.includes("manutencao")) {
    return {
      color: "#6366f1", // Índigo Manutenção
      gradient: "from-indigo-600 to-slate-800",
      tagBg: "bg-indigo-950/80 text-indigo-200 border-indigo-500/40",
      tagText: "text-indigo-400",
      themeLabel: "Mecânica Industrial",
      icon: <Wrench className="w-8 h-8 text-white" />,
    };
  }

  // 17. Geometria Espacial e Caldeiraria (Bússola / Compasso / Traçagem)
  if (id.includes("geometria")) {
    return {
      color: "#8b5cf6", // Roxo Geometria
      gradient: "from-purple-600 to-indigo-800",
      tagBg: "bg-purple-950/80 text-purple-200 border-purple-500/40",
      tagText: "text-purple-400",
      themeLabel: "Caldeiraria & Cálculo",
      icon: <Compass className="w-8 h-8 text-white" />,
    };
  }

  // 18. Gestão Estratégica de Pessoas & Liderança (Equipe / Pessoas)
  if (id.includes("pessoas")) {
    return {
      color: "#ec4899", // Rosa Liderança
      gradient: "from-pink-600 to-rose-700",
      tagBg: "bg-pink-950/80 text-pink-200 border-pink-500/40",
      tagText: "text-pink-400",
      themeLabel: "Liderança de Pessoas",
      icon: <Users className="w-8 h-8 text-white" />,
    };
  }

  // 19. Gestão de Projetos Industriais (Pasta Executiva / Prazos)
  if (id.includes("projetos")) {
    return {
      color: "#0284c7", // Azul Projetos
      gradient: "from-sky-600 to-slate-800",
      tagBg: "bg-sky-950/80 text-sky-200 border-sky-500/40",
      tagText: "text-sky-400",
      themeLabel: "Gestão de Projetos",
      icon: <Briefcase className="w-8 h-8 text-white" />,
    };
  }

  // 20. Gestão da Qualidade & SGQ (Check / Certificação)
  if (id.includes("qualidade")) {
    return {
      color: "#10b981", // Verde Qualidade
      gradient: "from-emerald-600 to-teal-800",
      tagBg: "bg-emerald-950/80 text-emerald-200 border-emerald-500/40",
      tagText: "text-emerald-400",
      themeLabel: "Qualidade & SGQ",
      icon: <CheckSquare className="w-8 h-8 text-white" />,
    };
  }

  // 21. Fundamentos de Administração & Gestão Industrial
  if (id.includes("administracao")) {
    return {
      color: "#8b5cf6", // Roxo Gestão
      gradient: "from-purple-600 to-slate-800",
      tagBg: "bg-purple-950/80 text-purple-200 border-purple-500/40",
      tagText: "text-purple-400",
      themeLabel: "Administração",
      icon: <Award className="w-8 h-8 text-white" />,
    };
  }

  // Padrão Geral RSS3
  return {
    color: "#f97316",
    gradient: "from-orange-600 to-blue-900",
    tagBg: "bg-orange-950/80 text-orange-200 border-orange-500/40",
    tagText: "text-orange-400",
    themeLabel: "Capacitação RSS3",
    icon: <Award className="w-8 h-8 text-white" />,
  };
}

export function FM2SCourseCard({
  course,
  locale,
  isFav = false,
  stepNumber,
  actionUrl,
  actionLabel = "Acessar",
  onActionClick,
  showFavoriteButton = true,
}: FM2SCourseCardProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const theme = getCourseVisualTheme(course.id);

  // Calcula progresso dinâmico do usuário no curso
  const userProgress = getCourseProgress(course.id);
  const metrics = calculateCourseProgressMetrics(course, userProgress);
  const progressPercent = metrics.progressPercent;

  const targetLink = actionUrl || `/catalogo/${course.id}`;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col h-full group">
      {/* Banner do Card no Estilo FM2S */}
      <div className="relative h-44 sm:h-48 bg-slate-100 dark:bg-slate-800 flex overflow-hidden shrink-0">
        {/* Faixa lateral colorida com ícone circular temático */}
        <div
          className="w-1/3 h-full flex items-center justify-center p-3 sm:p-4 relative"
          style={{ backgroundColor: theme.color }}
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-xs shadow-inner transition-transform group-hover:scale-110 duration-200">
            {theme.icon}
          </div>
        </div>

        {/* Lado Direito do Banner: Etapa/Código, Tag Temática, Título formatado e Marca RSS3 */}
        <div className="w-2/3 h-full bg-slate-200/60 dark:bg-slate-800/90 p-3.5 sm:p-4 flex flex-col justify-between">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between gap-1">
              {/* Tag Temática Exclusiva */}
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-sm border uppercase tracking-wider block bg-black/40 dark:bg-black/60 text-white border-white/10 backdrop-blur-xs line-clamp-1">
                {stepNumber ? `ETAPA ${stepNumber}` : theme.themeLabel}
              </span>

              {showFavoriteButton && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavoriteCourse(course.id);
                  }}
                  title={isFav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                  className="p-1 rounded text-slate-400 hover:text-amber-500 transition-colors shrink-0"
                >
                  <Star className={`w-3.5 h-3.5 ${isFav ? "fill-amber-500 text-amber-500" : ""}`} />
                </button>
              )}
            </div>

            <h3 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug line-clamp-3">
              {course.title[locale]}
            </h3>
          </div>

          <div className="flex items-center justify-between text-[10px] font-semibold text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-300/40 dark:border-slate-700/60">
            <span>{course.workloadHours}h</span>
            <span
              className="font-bold tracking-wider"
              style={{ color: theme.color }}
            >
              {course.badgeCode || "RSS3"}
            </span>
          </div>
        </div>
      </div>

      {/* Área Inferior do Card */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        {/* Título do Curso Centralizado */}
        <div>
          <h4 className="text-center font-bold text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-2 leading-snug">
            {course.title[locale]}
          </h4>

          {/* Barra de Progresso com porcentagem à direita */}
          <div className="mt-4 space-y-1">
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${progressPercent}%`,
                  backgroundColor: theme.color,
                }}
              />
            </div>
            <div className="flex justify-end">
              <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                {progressPercent}%
              </span>
            </div>
          </div>
        </div>

        {/* Botões de Ação na Base: "Acessar" e "Conteúdo v" */}
        <div className="pt-2 flex items-center justify-center gap-3 relative">
          {onActionClick ? (
            <button
              type="button"
              onClick={onActionClick}
              className="text-xs font-bold transition-colors px-2 py-1 cursor-pointer"
              style={{ color: theme.color }}
            >
              {actionLabel}
            </button>
          ) : (
            <Link
              href={targetLink}
              className="text-xs font-bold transition-colors px-2 py-1"
              style={{ color: theme.color }}
            >
              {actionLabel}
            </Link>
          )}

          {/* Botão Conteúdo / Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors border border-slate-200/80 dark:border-slate-700/80 cursor-pointer"
            >
              <span>Conteúdo</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Popover com Ementa e Módulos */}
            {dropdownOpen && (
              <div className="absolute right-0 bottom-full mb-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-3.5 z-30 animate-in fade-in zoom-in-95 duration-150 text-left">
                <p className="text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                  Ementa & Conteúdo:
                </p>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 mb-2 leading-relaxed line-clamp-3">
                  {course.description[locale]}
                </p>
                <div className="space-y-1.5 text-[11px] text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3 text-blue-500" />
                    <span>{course.modulesCount || 2} Módulos Técnicos</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-emerald-500" />
                    <span>{course.lessonsCount || 4} Aulas Estruturadas</span>
                  </div>
                  {progressPercent === 100 && (
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Curso Concluído</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
