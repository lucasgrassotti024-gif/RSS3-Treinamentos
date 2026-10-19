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
  markLessonCompleted,
  calculateCourseProgressMetrics,
  issueCourseCertificate,
  getCertificateForCourse,
  getLessonNotes,
  saveLessonNote,
} from "@/lib/progress";
import CertificateModal from "@/components/certificate-modal";
import { CourseDemonstration, LessonDemonstration, CertificateDemonstration, LessonAttachment } from "@/types";
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
  GraduationCap,
  ExternalLink,
  ShieldCheck,
  Maximize2,
  Minimize2,
  StickyNote,
  Paperclip,
  Download,
  BookOpen,
  Save,
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

  // Modal de Certificado
  const [certificateModalOpen, setCertificateModalOpen] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState<CertificateDemonstration | null>(null);

  // Modo Foco Total / Teatro
  const [focusMode, setFocusMode] = useState(false);

  // Aba ativa na aula: 'conteudo' | 'anotacoes' | 'materiais'
  const [activeTab, setActiveTab] = useState<"conteudo" | "anotacoes" | "materiais">("conteudo");

  // Anotações pessoais do aluno nesta aula
  const [noteText, setNoteText] = useState("");
  const [noteSaved, setNoteSaved] = useState(false);

  useEffect(() => {
    if (courseId && lessonId) {
      setNoteText(getLessonNotes(courseId, lessonId));
      setNoteSaved(false);
    }
  }, [courseId, lessonId]);

  const handleSaveNote = () => {
    saveLessonNote(courseId, lessonId, noteText);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2500);
  };

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
  const allLessons: (LessonDemonstration & { moduleTitle: string; isVirtualFinal?: boolean })[] = [];
  allModules.forEach((mod) => {
    mod.lessons.forEach((les) => {
      allLessons.push({
        ...les,
        moduleTitle: mod.title[langKey] || mod.title["pt-BR"],
      });
    });
  });

  // Adicionar etapa virtual final de Conclusão e Certificado
  const finalVirtualLesson: LessonDemonstration & { moduleTitle: string; isVirtualFinal?: boolean } = {
    id: "conclusao-e-certificado",
    order: 9999,
    title: {
      "pt-BR": "Conclusão do Treinamento & Certificado",
      en: "Course Completion & Certificate",
      es: "Conclusión de la Capacitación y Certificado",
    },
    durationMinutes: 5,
    contentType: "activity",
    moduleTitle: "Encerramento e Certificação",
    isVirtualFinal: true,
  };
  allLessons.push(finalVirtualLesson);

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
    if (courseId && lessonId && lessonId !== "conclusao-e-certificado") {
      recordLessonAccess(courseId, lessonId);
    }
  }, [courseId, lessonId]);

  // Recalcular métricas
  const metrics = calculateCourseProgressMetrics(course, progressRecord);
  const isCurrentCompleted = progressRecord.completedLessonIds.includes(lessonId);

  // Total de aulas reais (sem a virtual final)
  const realLessons = allLessons.filter((l) => !l.isVirtualFinal);
  const allRealLessonsCompleted = realLessons.length > 0 && realLessons.every((l) => progressRecord.completedLessonIds.includes(l.id));
  
  // Condição da Prova Final: se o curso possui avaliação final com questões, exige examPassed e nota >= 70%
  const hasAssessment = Boolean(course?.finalAssessment && course.finalAssessment.isAvailable && course.finalAssessment.questions && course.finalAssessment.questions.length > 0);
  const isExamPassed = hasAssessment ? Boolean(progressRecord.examPassed && (progressRecord.examScore || 0) >= 70) : true;
  const canIssueCertificate = allRealLessonsCompleted && isExamPassed;

  // Handler para concluir a aula atual e avançar imediatamente para a próxima
  const handleCompleteAndAdvance = () => {
    if (lessonId !== "conclusao-e-certificado") {
      markLessonCompleted(courseId, lessonId);
      setProgressRecord(getCourseProgress(courseId));
    }

    if (nextLesson) {
      router.push(`/aprender/${courseId}/${nextLesson.id}`);
    } else {
      router.push(`/catalogo/${courseId}`);
    }
  };

  // Handler para alternar conclusão
  const handleToggleCompletion = () => {
    toggleLessonCompletion(courseId, lessonId);
    setProgressRecord(getCourseProgress(courseId));
  };

  // Handler para emissão de certificado
  const handleOpenCertificate = () => {
    const existing = getCertificateForCourse(courseId);
    if (existing) {
      setActiveCertificate(existing);
      setCertificateModalOpen(true);
    } else if (canIssueCertificate) {
      const issued = issueCourseCertificate(course, progressRecord.examScore || 100);
      setActiveCertificate(issued);
      setCertificateModalOpen(true);
    }
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

            {/* Botão Modo Foco / Modo Teatro */}
            <button
              onClick={() => {
                const nextFocus = !focusMode;
                setFocusMode(nextFocus);
                if (nextFocus) {
                  setSidebarCollapsed(true);
                }
              }}
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                focusMode
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
              title={focusMode ? "Sair do Modo Foco" : "Ativar Modo Foco (Oculta distrações)"}
            >
              {focusMode ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5" />
                  <span className="hidden xl:inline">Sair do Foco</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span className="hidden xl:inline">Modo Foco</span>
                </>
              )}
            </button>

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

        {/* Sidebar de Módulos e Aulas - Retrátil no mobile e minimizável no desktop */}
        <aside
          className={`
            fixed lg:static top-14 bottom-0 left-0 z-30
            bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800/80
            flex flex-col transition-all duration-300 ease-in-out shrink-0
            ${sidebarOpen ? "translate-x-0 w-72 sm:w-80" : "-translate-x-full lg:translate-x-0"}
            ${sidebarCollapsed ? "lg:w-16" : "lg:w-72 xl:w-80"}
          `}
        >
          {sidebarCollapsed ? (
            /* Modo Minimizado (Apenas Desktop) - Mostra números das aulas e botão para reabrir */
            <div className="hidden lg:flex flex-col h-full w-16 items-center py-3 select-none">
              {/* Botão de abrir/expandir sidebar */}
              <button
                type="button"
                onClick={() => setSidebarCollapsed(false)}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/40 border border-blue-200 dark:border-blue-900 transition-colors shadow-2xs group mb-3 shrink-0"
                title={t.learning.expandSidebar}
                aria-label={t.learning.expandSidebar}
              >
                <PanelLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>

              {/* Divisor */}
              <div className="w-8 h-px bg-slate-200 dark:bg-slate-800 mb-2 shrink-0" />

              {/* Lista dos números das aulas com status */}
              <div className="flex-1 overflow-y-auto w-full px-2 space-y-2 py-1 scrollbar-none flex flex-col items-center">
                {allModules.map((moduleItem, modIdx) => (
                  <div key={moduleItem.id} className="w-full flex flex-col items-center gap-1.5">
                    {/* Indicador sutil de módulo quando há múltiplos módulos */}
                    {allModules.length > 1 && (
                      <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase">
                        M{modIdx + 1}
                      </span>
                    )}

                    {moduleItem.lessons.map((les, lesIdx) => {
                      const isCurrent = les.id === lessonId;
                      const isDone = progressRecord.completedLessonIds.includes(les.id);
                      const lesTitle = les.title[langKey] || les.title["pt-BR"];
                      const lessonNumber = `${modIdx + 1}.${lesIdx + 1}`;

                      return (
                        <button
                          key={les.id}
                          type="button"
                          onClick={() => {
                            setSidebarOpen(false);
                            router.push(`/aprender/${courseId}/${les.id}`);
                          }}
                          className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold transition-all relative group ${
                            isCurrent
                              ? "bg-blue-600 text-white shadow-sm ring-2 ring-blue-400 dark:ring-blue-500"
                              : isDone
                              ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/80 hover:bg-emerald-100 dark:hover:bg-emerald-900/60"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
                          }`}
                          title={`${lessonNumber} — ${lesTitle}`}
                        >
                          <span>{lesIdx + 1}</span>

                          {/* Marcador de concluído */}
                          {isDone && !isCurrent && (
                            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))}

                {/* Ícone da prova final na barra minimizada */}
                {course.finalAssessment && (
                  <div className="pt-2 w-full flex flex-col items-center border-t border-slate-200 dark:border-slate-800 mt-1">
                    {course.finalAssessment.isAvailable && course.finalAssessment.questions ? (
                      <Link
                        href={`/aprender/${course.id}/prova`}
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isExamPassed
                            ? "bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400"
                            : "bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400 hover:bg-orange-100"
                        }`}
                        title={course.finalAssessment.title[langKey] || course.finalAssessment.title["pt-BR"]}
                      >
                        <Award className="w-4 h-4" />
                      </Link>
                    ) : (
                      <div
                        className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center cursor-not-allowed opacity-60"
                        title={course.finalAssessment.title[langKey] || course.finalAssessment.title["pt-BR"]}
                      >
                        <Lock className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                )}

                {/* Ícone da etapa final / Certificado na barra minimizada */}
                <div className="pt-2 w-full flex flex-col items-center border-t border-slate-200 dark:border-slate-800 mt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setSidebarOpen(false);
                      router.push(`/aprender/${courseId}/conclusao-e-certificado`);
                    }}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors cursor-pointer ${
                      lessonId === "conclusao-e-certificado"
                        ? "bg-blue-600 text-white shadow-sm ring-2 ring-blue-400 dark:ring-blue-500"
                        : canIssueCertificate
                        ? "bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-slate-200"
                    }`}
                    title="Conclusão do Treinamento & Certificado"
                  >
                    <GraduationCap className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Modo Expandido Completo */
            <>
              {/* Header do Menu com botão de minimizar */}
              <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between min-w-[18rem]">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                  {t.learning.tableOfContents}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-2xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold">
                    {metrics.progressPercent}%
                  </span>
                  <button
                    type="button"
                    onClick={() => setSidebarCollapsed(true)}
                    className="hidden lg:flex p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title={t.learning.minimizeSidebar}
                    aria-label={t.learning.minimizeSidebar}
                  >
                    <PanelLeftClose className="w-4 h-4" />
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
                              type="button"
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
                      <span className={isExamPassed ? "text-emerald-600 font-semibold" : "text-amber-600 font-semibold"}>
                        {isExamPassed ? `Aprovado (${progressRecord.examScore}%)` : `Mínimo: ${course.finalAssessment.passingScorePercent}%`}
                      </span>
                    </div>

                    {course.finalAssessment.isAvailable && course.finalAssessment.questions ? (
                      <Link
                        href={`/aprender/${course.id}/prova`}
                        className={`p-2.5 rounded-lg border flex items-center gap-2.5 transition-colors group cursor-pointer ${
                          isExamPassed
                            ? "border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/30 hover:bg-emerald-100/50"
                            : "border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/40 hover:bg-blue-100/60"
                        }`}
                      >
                        <Award className={`w-4 h-4 shrink-0 ${isExamPassed ? "text-emerald-600" : "text-orange-500"}`} />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-xs text-blue-900 dark:text-blue-200 truncate group-hover:underline">
                            {course.finalAssessment.title[langKey] || course.finalAssessment.title["pt-BR"]}
                          </div>
                          <div className="text-3xs text-blue-600/80 dark:text-blue-400">
                            {course.finalAssessment.questionsCount} questões • {course.finalAssessment.estimatedMinutes} min
                          </div>
                        </div>
                        <span className="text-2xs font-bold text-blue-600 dark:text-blue-400">
                          {isExamPassed ? "Refazer" : "Fazer"}
                        </span>
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

                {/* ETAPA FINAL: CONCLUSÃO E CERTIFICADO NO CURRÍCULO */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                  <div className="text-3xs font-bold uppercase tracking-wider text-slate-400 px-2 flex items-center justify-between">
                    <span>Certificação</span>
                    {canIssueCertificate ? (
                      <span className="text-emerald-600 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Liberado
                      </span>
                    ) : (
                      <span className="text-amber-600 font-semibold flex items-center gap-1">
                        <Lock className="w-3 h-3" /> Requisitos
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSidebarOpen(false);
                      router.push(`/aprender/${courseId}/conclusao-e-certificado`);
                    }}
                    className={`w-full text-left p-2.5 rounded-lg border flex items-center gap-2.5 transition-colors group cursor-pointer ${
                      lessonId === "conclusao-e-certificado"
                        ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                        : canIssueCertificate
                        ? "border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/30 hover:bg-emerald-100/60 text-emerald-900 dark:text-emerald-200"
                        : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:bg-slate-100/50"
                    }`}
                  >
                    <GraduationCap className={`w-4 h-4 shrink-0 ${
                      lessonId === "conclusao-e-certificado" ? "text-white" : canIssueCertificate ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className={`font-semibold text-xs truncate ${
                        lessonId === "conclusao-e-certificado" ? "text-white" : ""
                      }`}>
                        Conclusão & Certificado
                      </div>
                      <div className={`text-3xs ${
                        lessonId === "conclusao-e-certificado" ? "text-blue-100" : "text-slate-500 dark:text-slate-400"
                      }`}>
                        {canIssueCertificate ? "Certificado pronto para emissão" : "Conclua aulas e prova (≥70%)"}
                      </div>
                    </div>
                    {canIssueCertificate ? (
                      <CheckCircle2 className={`w-3.5 h-3.5 ${lessonId === "conclusao-e-certificado" ? "text-white" : "text-emerald-600"}`} />
                    ) : (
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </button>
                </div>
              </div>
            </>
          )}
        </aside>

        {/* Área Central de Conteúdo */}
        <main className="flex-1 min-w-0 flex flex-col p-4 sm:p-6 lg:p-8">
          {lessonId === "conclusao-e-certificado" ? (
            /* TELA ESPECIAL FINAL: CONCLUSÃO DO CURSO E EMISSÃO DE CERTIFICADO */
            <div className="max-w-3xl w-full mx-auto flex-1 flex flex-col space-y-6">
              {/* Header de Conclusão */}
              <div className="pb-4 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-2xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">
                    Etapa Final
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Conclusão do Treinamento & Certificação
                  </h2>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>

              {/* Status e Checklist de Pré-Requisitos */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Requisitos para Conclusão e Certificado
                  </h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    canIssueCertificate
                      ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                      : "bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800"
                  }`}>
                    {canIssueCertificate ? "Requisitos Atendidos" : "Pendências Identificadas"}
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Requisito 1: Todas as Aulas */}
                  <div className={`p-4 rounded-xl border flex items-center justify-between gap-4 ${
                    allRealLessonsCompleted
                      ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-100"
                      : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                  }`}>
                    <div className="flex items-center gap-3">
                      {allRealLessonsCompleted ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                      <div>
                        <div className="font-bold text-xs sm:text-sm">
                          100% das Aulas Teóricas Concluídas
                        </div>
                        <div className="text-2xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {progressRecord.completedLessonIds.length} de {realLessons.length} aulas finalizadas
                        </div>
                      </div>
                    </div>
                    {!allRealLessonsCompleted && (
                      <span className="text-2xs font-semibold text-amber-600 dark:text-amber-400">
                        Pendente
                      </span>
                    )}
                  </div>

                  {/* Requisito 2: Prova Final (se aplicável) */}
                  {hasAssessment && (
                    <div className={`p-4 rounded-xl border flex items-center justify-between gap-4 ${
                      isExamPassed
                        ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-100"
                        : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                    }`}>
                      <div className="flex items-center gap-3">
                        {isExamPassed ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-400 shrink-0" />
                        )}
                        <div>
                          <div className="font-bold text-xs sm:text-sm">
                            Avaliação Teórica Final (Aproveitamento ≥ 70%)
                          </div>
                          <div className="text-2xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {progressRecord.examScore !== undefined
                              ? `Sua nota atual: ${progressRecord.examScore}% (Mínimo: 70%)`
                              : "Prova ainda não realizada"}
                          </div>
                        </div>
                      </div>
                      <Link
                        href={`/aprender/${course.id}/prova`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-2xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors shrink-0"
                      >
                        <span>{isExamPassed ? "Refazer Prova" : "Fazer Avaliação"}</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Card de Desfecho: Liberado vs Bloqueado */}
                {canIssueCertificate ? (
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-300 dark:border-emerald-800/80 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                          Parabéns! Você completou com sucesso este treinamento.
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                          Seu certificado oficial de conclusão do conteúdo teórico da RSS3 está pronto para emissão e validação com o seu nome cadastrado.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="button"
                        onClick={handleOpenCertificate}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
                      >
                        <ShieldCheck className="w-4 h-4" />
                        <span>Emitir / Visualizar Certificado</span>
                      </button>

                      <Link
                        href={`/catalogo/${courseId}`}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs sm:text-sm font-semibold transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Terminar e Voltar ao Catálogo</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 space-y-3">
                    <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-xs uppercase tracking-wider">
                      <Lock className="w-4 h-4 text-amber-600" />
                      <span>Certificado Bloqueado</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      Para desbloquear o seu certificado de conclusão, você precisa concluir todas as aulas do curso e obter nota igual ou superior a 70% na avaliação final teórica.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2">
                      {!allRealLessonsCompleted && realLessons[0] && (
                        <Link
                          href={`/aprender/${courseId}/${realLessons.find((l) => !progressRecord.completedLessonIds.includes(l.id))?.id || realLessons[0].id}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
                        >
                          <span>Continuar Aulas Pendentes</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                      {hasAssessment && !isExamPassed && (
                        <Link
                          href={`/aprender/${course.id}/prova`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold transition-colors"
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>Fazer Prova Final</span>
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Botão de Terminar o Curso */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
                <Link
                  href={`/aprender/${courseId}/${prevLesson ? prevLesson.id : ""}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Aula Anterior</span>
                </Link>

                <Link
                  href={`/catalogo/${courseId}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  <span>Terminar Curso</span>
                  <CheckCircle2 className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className={`w-full mx-auto flex-1 flex flex-col space-y-6 transition-all ${focusMode ? "max-w-4xl" : "max-w-3xl"}`}>
              {/* Cabeçalho da Aula - Limpo e Direto */}
              <div className="pb-3 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center justify-between gap-4">
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

                  {focusMode && (
                    <span className="text-2xs font-semibold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                      Modo Foco Ativo
                    </span>
                  )}
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {lessonTitle}
                </h2>

                {/* Abas Superiores de Estudo: Conteúdo da Aula | Caderno de Anotações | Materiais Complementares */}
                <div className="flex items-center gap-2 pt-4 border-b border-slate-100 dark:border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => setActiveTab("conteudo")}
                    className={`inline-flex items-center gap-1.5 pb-2.5 px-3 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                      activeTab === "conteudo"
                        ? "border-blue-600 text-blue-600 dark:text-blue-400"
                        : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Conteúdo da Aula</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("anotacoes")}
                    className={`inline-flex items-center gap-1.5 pb-2.5 px-3 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                      activeTab === "anotacoes"
                        ? "border-blue-600 text-blue-600 dark:text-blue-400"
                        : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                    }`}
                  >
                    <StickyNote className="w-3.5 h-3.5 text-amber-500" />
                    <span>Caderno de Anotações</span>
                    {noteText && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("materiais")}
                    className={`inline-flex items-center gap-1.5 pb-2.5 px-3 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                      activeTab === "materiais"
                        ? "border-blue-600 text-blue-600 dark:text-blue-400"
                        : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                    }`}
                  >
                    <Paperclip className="w-3.5 h-3.5 text-blue-500" />
                    <span>Materiais de Apoio</span>
                  </button>
                </div>
              </div>

              {/* ABA 2: CADERNO DE ANOTAÇÕES */}
              {activeTab === "anotacoes" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 flex items-start gap-3">
                    <StickyNote className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        Caderno Digital do Aluno
                      </h4>
                      <p className="text-2xs sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        Suas anotações são salvas automaticamente vinculadas a esta aula para consultas e revisões durante o trabalho de campo.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <textarea
                      value={noteText}
                      onChange={(e) => setNoteText(e.target.value)}
                      placeholder="Escreva aqui seus pontos de atenção, dúvidas, procedimentos de campo ou termos importantes desta aula..."
                      rows={10}
                      className="w-full p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm leading-relaxed text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
                    />

                    <div className="flex items-center justify-between">
                      <span className="text-2xs text-slate-400">
                        {noteSaved ? (
                          <span className="text-emerald-600 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Anotação salva com sucesso!
                          </span>
                        ) : (
                          "Clique em salvar para guardar suas anotações"
                        )}
                      </span>

                      <button
                        type="button"
                        onClick={handleSaveNote}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-xs cursor-pointer"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>Salvar Anotação</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ABA 3: MATERIAIS DE APOIO E DOWNLOADS */}
              {activeTab === "materiais" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/50 flex items-start gap-3">
                    <Paperclip className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        Documentos, Procedimentos e Materiais Complementares
                      </h4>
                      <p className="text-2xs sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        Arquivos técnicos, modelos de checklist e documentações regulatórias de apoio para download.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Lista de Recursos Didáticos Padrão */}
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                            Procedimento Operacional Padrão (POP-RSS3)
                          </div>
                          <div className="text-2xs text-slate-400">
                            PDF Oficial • Ementa e Diretrizes Técnicas • 1.8 MB
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-blue-600" />
                        <span>Baixar / Imprimir</span>
                      </button>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                          <CheckSquare className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                            Checklist de Inspeção e Segurança Operacional
                          </div>
                          <div className="text-2xs text-slate-400">
                            Documento Demonstrativo de Auditoria • 850 KB
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Baixar / Imprimir</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ABA 1: CONTEÚDO PRINCIPAL DA AULA */}
              {activeTab === "conteudo" && (
                <>

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
            </>
          )}

            {/* Barra Inferior de Ações e Navegação - Botão Único de Concluir */}
            <div className="pt-8 pb-6 border-t border-slate-200/80 dark:border-slate-800/80 mt-10 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleCompleteAndAdvance}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>
                  {nextLesson
                    ? (t.learning.completeAndNextLesson || "Concluir")
                    : (t.learning.finishCourse || "Concluir Treinamento")}
                </span>
                <ChevronRight className="w-4 h-4 ml-0.5 text-white/80" />
              </button>
            </div>
          </div>
          )}
        </main>
      </div>

      {/* Modal de Certificado */}
      {certificateModalOpen && (
        <CertificateModal
          certificate={activeCertificate}
          onClose={() => setCertificateModalOpen(false)}
        />
      )}
    </div>
  );
}
