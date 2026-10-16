"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/app-context";
import { DEMO_COURSES } from "@/lib/mock-data";
import {
  getCourseProgress,
  recordLessonAccess,
  toggleLessonCompletion,
  calculateCourseProgressMetrics,
} from "@/lib/progress";
import { CourseDemonstration, LessonDemonstration } from "@/types";
import { VISUAL_ASSETS_MAP } from "@/components/illustrations/pilot-5s-assets";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Circle,
  FileText,
  Video,
  FileCode,
  ClipboardList,
  Menu,
  X,
  Info,
  Sparkles,
  AlertTriangle,
  HelpCircle,
  CheckSquare,
  BookmarkCheck,
  Award,
  Lock,
  PanelLeftClose,
  PanelLeft,
} from "lucide-react";

interface LearningPlayerClientProps {
  courseId: string;
  lessonId: string;
}

export default function LearningPlayerClient({
  courseId,
  lessonId,
}: LearningPlayerClientProps) {
  const router = useRouter();
  const { locale, t } = useApp();
  const langKey = locale;

  // Sidebar visível no mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Sidebar recolhida no desktop para maximizar a área de estudo
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Estado interativo demonstrativo para checklist da aula (não oficial/local)
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Estado interativo para o Desafio de Tomada de Decisão / Lógica
  const [selectedChallengeOption, setSelectedChallengeOption] = useState<string | null>(null);

  const toggleCheckItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Buscar curso atual
  const course = DEMO_COURSES.find((c) => c.id === courseId) as CourseDemonstration;
  
  // Buscar todas as aulas lineares para navegação anterior/próxima
  const allModules = course?.modules || [];
  const allLessons: (LessonDemonstration & { moduleTitle: string })[] = [];
  allModules.forEach((mod) => {
    mod.lessons.forEach((les) => {
      allLessons.push({
        ...les,
        moduleTitle: mod.title[langKey] || mod.title["pt-BR"],
      });
    });
  });

  const currentIndex = allLessons.findIndex((l) => l.id === lessonId);
  const currentLesson = allLessons[currentIndex];

  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex >= 0 && currentIndex < allLessons.length - 1
      ? allLessons[currentIndex + 1]
      : null;

  // Estado de progresso local reativo
  const [progressRecord, setProgressRecord] = useState(() =>
    getCourseProgress(courseId)
  );

  // Registrar acesso da aula ao carregar ou trocar de aula
  useEffect(() => {
    if (courseId && lessonId) {
      recordLessonAccess(courseId, lessonId);
    }
  }, [courseId, lessonId]);

  // Recalcular métricas
  const metrics = calculateCourseProgressMetrics(course, progressRecord);
  const isCurrentCompleted = progressRecord.completedLessonIds.includes(lessonId);

  // Handler para alternar conclusão
  const handleToggleCompletion = () => {
    toggleLessonCompletion(courseId, lessonId);
    setProgressRecord(getCourseProgress(courseId));
  };

  // Se o curso ou a aula não existirem
  if (!course || !currentLesson) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center mb-4">
          <Info className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {t.learning.lessonNotFound}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mb-6">
          {t.learning.courseNotFound}
        </p>
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.learning.returnToCatalog}
        </Link>
      </div>
    );
  }

  const lessonTitle = currentLesson.title[langKey] || currentLesson.title["pt-BR"];
  const lessonContent = currentLesson.contentDetail;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col text-slate-900 dark:text-slate-100">
      {/* Top Header do Player - Limpo e Direto */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              href={`/catalogo/${courseId}`}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
              title={t.learning.backToCourse}
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="min-w-0 flex items-center gap-2">
              <span className="text-2xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md shrink-0">
                {course.badgeCode || "5S"}
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">•</span>
              <h1 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">
                {lessonTitle}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {/* Indicador de progresso limpo */}
            <div className="hidden sm:flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-medium text-slate-700 dark:text-slate-300">
                {metrics.completedCount}/{metrics.totalLessons}
              </span>
              <div className="w-24 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${metrics.progressPercent}%` }}
                />
              </div>
            </div>

            {/* Botão de Toggle da Sidebar no Desktop */}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={sidebarCollapsed ? t.learning.openSidebar : t.learning.closeSidebar}
            >
              {sidebarCollapsed ? (
                <>
                  <PanelLeft className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{t.learning.tableOfContents}</span>
                </>
              ) : (
                <>
                  <PanelLeftClose className="w-4 h-4" />
                  <span className="hidden xl:inline">{t.learning.closeSidebar}</span>
                </>
              )}
            </button>

            {/* Botão Menu Mobile */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={sidebarOpen ? t.learning.closeSidebar : t.learning.openSidebar}
            >
              {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Container Principal: Sidebar + Conteúdo */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto relative">
        {/* Backdrop para mobile */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/40 z-30 lg:hidden backdrop-blur-xs"
          />
        )}

        {/* Sidebar de Módulos e Aulas - Retrátil tanto no mobile quanto no desktop */}
        <aside
          className={`
            fixed lg:static top-14 bottom-0 left-0 z-30
            bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800/80
            flex flex-col transition-all duration-300 ease-in-out shrink-0
            ${sidebarOpen ? "translate-x-0 w-72 sm:w-80" : "-translate-x-full lg:translate-x-0"}
            ${sidebarCollapsed ? "lg:w-0 lg:border-r-0 lg:overflow-hidden lg:opacity-0" : "lg:w-72 xl:w-80 lg:opacity-100"}
          `}
        >
          {/* Header do Menu com botão de recolher rápido */}
          <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between min-w-[18rem]">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              {t.learning.tableOfContents}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-2xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold">
                {metrics.progressPercent}%
              </span>
              <button
                onClick={() => setSidebarCollapsed(true)}
                className="hidden lg:flex p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title={t.learning.closeSidebar}
              >
                <PanelLeftClose className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Lista com Scroll */}
          <div className="flex-1 overflow-y-auto p-3 space-y-4 min-w-[18rem]">
            {allModules.map((moduleItem, modIdx) => {
              const modTitle = moduleItem.title[langKey] || moduleItem.title["pt-BR"];
              return (
                <div key={moduleItem.id} className="space-y-1">
                  <div className="text-2xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 pt-1 pb-0.5">
                    {modIdx + 1}. {modTitle.replace(/^Módulo \d+\s*—\s*/i, "")}
                  </div>

                  <div className="space-y-0.5">
                    {moduleItem.lessons.map((les) => {
                      const isCurrent = les.id === lessonId;
                      const isDone = progressRecord.completedLessonIds.includes(les.id);
                      const lesTitle = les.title[langKey] || les.title["pt-BR"];

                      return (
                        <button
                          key={les.id}
                          onClick={() => {
                            setSidebarOpen(false);
                            router.push(`/aprender/${courseId}/${les.id}`);
                          }}
                          className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-2.5 ${
                            isCurrent
                              ? "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold border-l-2 border-blue-600 dark:border-blue-400 pl-2"
                              : "hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-300"
                          }`}
                        >
                          <div className="shrink-0">
                            {isDone ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                            ) : isCurrent ? (
                              <div className="w-3.5 h-3.5 rounded-full border-2 border-blue-600 flex items-center justify-center">
                                <div className="w-1 h-1 rounded-full bg-blue-600" />
                              </div>
                            ) : (
                              <Circle className="w-3.5 h-3.5 text-slate-300 dark:text-slate-700" />
                            )}
                          </div>

                          <span className="truncate flex-1">
                            {lesTitle.replace(/^Aula \d+(\.\d+)?:\s*/i, "")}
                          </span>

                          <span className="text-3xs text-slate-400 dark:text-slate-500 shrink-0">
                            {les.durationMinutes}m
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* AVALIAÇÃO / PROVA DO CURSO SEPARADA NO CURRÍCULO */}
            {course.finalAssessment && (
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                <div className="text-3xs font-bold uppercase tracking-wider text-slate-400 px-2 flex items-center justify-between">
                  <span>{t.learning.examBadge}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Nota mínima: {course.finalAssessment.passingScorePercent}%</span>
                </div>

                {course.finalAssessment.isAvailable && course.finalAssessment.questions ? (
                  <Link
                    href={`/aprender/${course.id}/prova`}
                    className="p-2.5 rounded-lg border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/40 hover:bg-blue-100/60 flex items-center gap-2.5 transition-colors group cursor-pointer"
                  >
                    <Award className="w-4 h-4 text-orange-500 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-xs text-blue-900 dark:text-blue-200 truncate group-hover:underline">
                        {course.finalAssessment.title[langKey] || course.finalAssessment.title["pt-BR"]}
                      </div>
                      <div className="text-3xs text-blue-600/80 dark:text-blue-400">
                        {course.finalAssessment.questionsCount} questões • {course.finalAssessment.estimatedMinutes} min
                      </div>
                    </div>
                    <span className="text-2xs font-bold text-blue-600 dark:text-blue-400">Ir</span>
                  </Link>
                ) : (
                  <div className="p-2.5 rounded-lg border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-blue-600 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-xs text-slate-800 dark:text-slate-200 truncate">
                        {course.finalAssessment.title[langKey] || course.finalAssessment.title["pt-BR"]}
                      </div>
                      <div className="text-3xs text-slate-400">
                        {course.finalAssessment.questionsCount} questões • {course.finalAssessment.estimatedMinutes} min
                      </div>
                    </div>
                    <Lock className="w-3 h-3 text-slate-400 shrink-0" />
                  </div>
                )}
              </div>
            )}
          </div>
        </aside>

        {/* Área Central de Conteúdo */}
        <main className="flex-1 min-w-0 flex flex-col p-4 sm:p-6 lg:p-8">
          <div className="max-w-3xl w-full mx-auto flex-1 flex flex-col space-y-6">
            {/* Cabeçalho da Aula - Limpo e Direto */}
            <div className="pb-3 border-b border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2 text-2xs text-slate-400 mb-1">
                <span>{currentLesson.durationMinutes} min de leitura</span>
                {isCurrentCompleted && (
                  <>
                    <span>•</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Concluída
                    </span>
                  </>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {lessonTitle}
              </h2>
            </div>

            {/* Renderizador de Conteúdo por Tipo */}
            <div className="flex-1 space-y-6">
              {/* TIPO: VÍDEO (Player YouTube Integrado ou Placeholder) */}
              {currentLesson.contentType === "video" && (
                <div className="space-y-4">
                  {currentLesson.videoUrl ? (
                    <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-black">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${currentLesson.videoUrl}?rel=0&modestbranding=1`}
                        title={lessonTitle}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-video rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center p-6 text-center text-white relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-80" />
                      <div className="relative z-10 max-w-md flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-blue-600/30 cursor-pointer transition-transform group-hover:scale-105">
                          <Video className="w-8 h-8 ml-0.5" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold mb-2">
                          {t.learning.demoVideoNotice}
                        </h3>
                        <p className="text-xs text-slate-300 leading-relaxed mb-4">
                          {t.learning.demoVideoDesc}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TIPO: PDF */}
              {currentLesson.contentType === "pdf" && (
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                      <FileCode className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {t.learning.demoPdfNotice}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        {t.learning.demoPdfDesc}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                        Procedimento Operacional Padronizado (POP-RSS3-04)
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-400 uppercase">
                      Material Demonstrativo
                    </span>
                  </div>
                </div>
              )}

              {/* TIPO: ATIVIDADE */}
              {currentLesson.contentType === "activity" && (
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/60 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <ClipboardList className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {t.learning.demoActivityNotice}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        {t.learning.demoActivityDesc}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TIPO: TEXTO / DETALHE TÉCNICO (Renderizador Pedagógico Completo) */}
              {lessonContent && (
                <div className="space-y-6">
                  {/* 1. OBJETIVO DE APRENDIZAGEM - Minimalista e elegante */}
                  {lessonContent.objective && (
                    <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border-l-4 border-blue-600 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <span className="font-bold text-blue-900 dark:text-blue-300 mr-1.5">Objetivo:</span>
                      <span>{lessonContent.objective[langKey] || lessonContent.objective["pt-BR"]}</span>
                    </div>
                  )}

                  {/* 2. INTRODUÇÃO CONTEXTUALIZADA - Tipografia direta */}
                  {lessonContent.introduction && (
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                      {lessonContent.introduction[langKey] || lessonContent.introduction["pt-BR"]}
                    </p>
                  )}

                  {/* 2.1. RECURSO VISUAL: DIAGRAMA / MATRIZ EXPLICATIVA */}
                  {lessonContent.visualAsset && lessonContent.visualAsset.componentKey && VISUAL_ASSETS_MAP[lessonContent.visualAsset.componentKey] && (
                    <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-600" />
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                            {lessonContent.visualAsset.title[langKey] || lessonContent.visualAsset.title["pt-BR"]}
                          </h4>
                        </div>
                        <span className="text-3xs uppercase font-semibold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 self-start sm:self-auto">
                          Diagrama Técnico Didático
                        </span>
                      </div>

                      <div className="w-full flex justify-center py-2" role="img" aria-label={lessonContent.visualAsset.alt[langKey] || lessonContent.visualAsset.alt["pt-BR"]}>
                        {React.createElement(VISUAL_ASSETS_MAP[lessonContent.visualAsset.componentKey])}
                      </div>

                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-start gap-2 text-2xs sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic">
                        <Info className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5 not-italic" />
                        <span>
                          {lessonContent.visualAsset.caption[langKey] || lessonContent.visualAsset.caption["pt-BR"]}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 3. SEÇÕES CONCEITUAIS */}
                  {lessonContent.sections?.map((sec, idx) => (
                    <div key={idx} className="space-y-3">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                        <span>{sec.title[langKey] || sec.title["pt-BR"]}</span>
                      </h3>
                      <p className="text-xs sm:text-sm sm:leading-relaxed text-slate-700 dark:text-slate-300 leading-relaxed pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                        {sec.body[langKey] || sec.body["pt-BR"]}
                      </p>
                    </div>
                  ))}

                  {/* 4. TABELA COMPARATIVA OU MATRIZ VISUAL */}
                  {lessonContent.table && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Matriz Conceitual / Padrão Comparativo
                      </h4>
                      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">
                            <tr>
                              {lessonContent.table.headers.map((h, hIdx) => (
                                <th key={hIdx} className="p-3.5 sm:px-4">
                                  {h[langKey] || h["pt-BR"]}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                            {lessonContent.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="p-3.5 sm:px-4 text-slate-600 dark:text-slate-300">
                                    {cell[langKey] || cell["pt-BR"]}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* 5. EXEMPLO INDUSTRIAL FICTÍCIO */}
                  {lessonContent.practicalExample && (
                    <div className="p-6 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 space-y-4">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                        <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <span>{lessonContent.practicalExample.title[langKey] || lessonContent.practicalExample.title["pt-BR"]}</span>
                      </div>
                      <div className="space-y-3 text-xs sm:text-sm">
                        <div className="p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-amber-200/50 dark:border-amber-900/40">
                          <span className="font-bold block text-slate-900 dark:text-white mb-1">Cenário Observado:</span>
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            {lessonContent.practicalExample.scenario[langKey] || lessonContent.practicalExample.scenario["pt-BR"]}
                          </p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-amber-100/50 dark:bg-amber-900/20 border border-amber-200/50 dark:border-amber-900/40">
                          <span className="font-bold block text-amber-900 dark:text-amber-200 mb-1">Análise e Ação Aplicada:</span>
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            {lessonContent.practicalExample.analysis[langKey] || lessonContent.practicalExample.analysis["pt-BR"]}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 6. CHECKLIST DEMONSTRATIVO DE OBSERVAÇÃO */}
                  {lessonContent.checklist && (
                    <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          <CheckSquare className="w-4 h-4 text-blue-600" />
                          <span>{lessonContent.checklist.title[langKey] || lessonContent.checklist.title["pt-BR"]}</span>
                        </h4>
                        <span className="text-2xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-medium">
                          Interativo • Local
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {lessonContent.checklist.items.map((item) => {
                          const isChecked = !!checkedItems[item.id];
                          return (
                            <button
                              key={item.id}
                              onClick={() => toggleCheckItem(item.id)}
                              className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                                isChecked
                                  ? "bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100"
                                  : "bg-slate-50/50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:border-blue-300"
                              }`}
                            >
                              <div className="mt-0.5 shrink-0">
                                {isChecked ? (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                ) : (
                                  <Circle className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                                )}
                              </div>
                              <div className="min-w-0">
                                <div className="font-bold text-xs sm:text-sm">
                                  {item.label[langKey] || item.label["pt-BR"]}
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                                  {item.criterion[langKey] || item.criterion["pt-BR"]}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* 7. ERROS COMUNS OU CUIDADOS RELEVANTES */}
                  {lessonContent.commonMistakes && lessonContent.commonMistakes.length > 0 && (
                    <div className="p-5 rounded-2xl bg-red-50/40 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40 space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-400 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                        <span>Erros Comuns e Cuidados Operacionais</span>
                      </h4>
                      <ul className="space-y-2">
                        {lessonContent.commonMistakes.map((err, eIdx) => (
                          <li key={eIdx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                            <span>{err[langKey] || err["pt-BR"]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 8. RESUMO DOS PONTOS PRINCIPAIS */}
                  {lessonContent.summaryPoints && lessonContent.summaryPoints.length > 0 && (
                    <div className="p-5 rounded-2xl bg-slate-100/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <BookmarkCheck className="w-4 h-4 text-emerald-600" />
                        <span>Resumo e Pontos Principais da Aula</span>
                      </h4>
                      <ul className="space-y-2">
                        {lessonContent.summaryPoints.map((pt, pIdx) => (
                          <li key={pIdx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{pt[langKey] || pt["pt-BR"]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 9. PERGUNTAS PARA REFLEXÃO */}
                  {lessonContent.reflectionQuestions && lessonContent.reflectionQuestions.length > 0 && (
                    <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/40 space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span>Perguntas para Reflexão Individual e Diálogo de Equipe</span>
                      </h4>
                      <p className="text-2xs text-slate-500 dark:text-slate-400">
                        Exercício reflexivo sem nota ou correção automática nesta fase demonstrativa.
                      </p>
                      <div className="space-y-2.5 mt-2">
                        {lessonContent.reflectionQuestions.map((q, qIdx) => (
                          <div
                            key={qIdx}
                            className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium"
                          >
                            {q[langKey] || q["pt-BR"]}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 10. DESAFIO DE TOMADA DE DECISÃO / LÓGICA DE CAMPO */}
              {currentLesson.challenge && (
                <div className="p-6 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 dark:border-amber-500/20 space-y-4">
                  <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Desafio de Lógica & Tomada de Decisão Operacional</span>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                      {currentLesson.challenge.question[langKey] || currentLesson.challenge.question["pt-BR"]}
                    </h3>
                    {currentLesson.challenge.contextScenario && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 italic">
                        Cenário: {currentLesson.challenge.contextScenario[langKey] || currentLesson.challenge.contextScenario["pt-BR"]}
                      </p>
                    )}
                  </div>

                  {/* Opções de Resposta */}
                  <div className="space-y-2.5 pt-2">
                    {currentLesson.challenge.options.map((option) => {
                      const isSelected = selectedChallengeOption === option.id;

                      let btnStyle = "border-slate-200 dark:border-slate-700 hover:border-amber-400 dark:hover:border-amber-500 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200";
                      if (isSelected) {
                        if (option.isCorrect) {
                          btnStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200";
                        } else {
                          btnStyle = "border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200";
                        }
                      }

                      return (
                        <div key={option.id} className="space-y-2">
                          <button
                            type="button"
                            onClick={() => setSelectedChallengeOption(option.id)}
                            className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                          >
                            <span className="shrink-0 w-5 h-5 rounded-full border border-current flex items-center justify-center font-bold text-2xs mt-0.5">
                              {option.id.replace("opt-", "")}
                            </span>
                            <span className="flex-1">
                              {option.text[langKey] || option.text["pt-BR"]}
                            </span>
                          </button>

                          {isSelected && (
                            <div
                              className={`p-3 rounded-lg text-xs leading-relaxed animate-in fade-in duration-200 ${
                                option.isCorrect
                                  ? "bg-emerald-100/70 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700"
                                  : "bg-red-100/70 dark:bg-red-900/40 text-red-900 dark:text-red-300 border border-red-300 dark:border-red-700"
                              }`}
                            >
                              <strong>{option.isCorrect ? "✓ Resposta Correta!" : "✗ Incorreto:"}</strong>{" "}
                              {option.explanation[langKey] || option.explanation["pt-BR"]}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Barra Inferior de Ações e Navegação - Limpa e Discreta */}
            <div className="pt-8 pb-4 border-t border-slate-200/80 dark:border-slate-800/80 mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Botão de Conclusão Demonstrativa */}
              <button
                onClick={handleToggleCompletion}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-xs transition-all ${
                  isCurrentCompleted
                    ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>
                  {isCurrentCompleted
                    ? t.learning.markIncomplete
                    : t.learning.markCompleted}
                </span>
              </button>

              {/* Botões Anterior / Próxima */}
              <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-2.5">
                {prevLesson ? (
                  <Link
                    href={`/aprender/${courseId}/${prevLesson.id}`}
                    className="inline-flex items-center gap-1 px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-600 dark:text-slate-300 text-xs font-medium transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>{t.learning.previousLesson}</span>
                  </Link>
                ) : (
                  <div />
                )}

                {nextLesson && (
                  <Link
                    href={`/aprender/${courseId}/${nextLesson.id}`}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 text-xs font-medium transition-colors shadow-xs"
                  >
                    <span>{t.learning.nextLesson}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
