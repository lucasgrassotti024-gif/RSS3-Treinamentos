"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useApp } from "@/context/app-context";
import { DEMO_COURSES } from "@/lib/mock-data";
import { CourseModality, ContentType } from "@/types";
import {
  subscribeToProgress,
  calculateCourseProgressMetrics,
  getCourseProgressSnapshot,
  getServerCourseProgressSnapshot,
} from "@/lib/progress";
import {
  ArrowLeft,
  Clock,
  BookOpen,
  Award,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  Video,
  FileText,
  FileCode,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles,
  ArrowRight,
  PlayCircle,
  DownloadCloud,
  Check,
  FileDown,
} from "lucide-react";
import FieldGuideModal from "@/components/field-guide-modal";
import {
  isCourseSavedOffline,
  saveCourseForOffline,
  removeCourseFromOffline,
  subscribeToOfflineCourses,
} from "@/lib/offline-manager";

const CONTENT_ICON: Record<ContentType, React.ElementType> = {
  video: Video,
  text: FileText,
  pdf: FileCode,
  activity: CheckCircle2,
};

export default function CourseDetailsClient({ courseId }: { courseId: string }) {
  const { t, locale } = useApp();

  // Busca do curso pelo ID estável
  const course = DEMO_COURSES.find((c) => c.id === courseId);

  // Tratar identificador inválido
  if (!course) {
    notFound();
  }

  // Sincronização limpa com useSyncExternalStore evitando erro de hidratação e cascading setState
  const progress = React.useSyncExternalStore(
    subscribeToProgress,
    () => getCourseProgressSnapshot(courseId),
    () => getServerCourseProgressSnapshot(courseId)
  );

  const metrics = calculateCourseProgressMetrics(course, progress);

  // Estado dos módulos expansíveis
  const initialOpenState = (course.modules || []).reduce<Record<string, boolean>>(
    (acc, m) => ({ ...acc, [m.id]: true }),
    {}
  );
  const [openModules, setOpenModules] = useState<Record<string, boolean>>(initialOpenState);

  const toggleModule = (moduleId: string) => {
    setOpenModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  const handleExpandAll = () => {
    const allOpen = (course.modules || []).reduce<Record<string, boolean>>(
      (acc, m) => ({ ...acc, [m.id]: true }),
      {}
    );
    setOpenModules(allOpen);
  };

  const handleCollapseAll = () => {
    const allClosed = (course.modules || []).reduce<Record<string, boolean>>(
      (acc, m) => ({ ...acc, [m.id]: false }),
      {}
    );
    setOpenModules(allClosed);
  };

  // Estado para controlar abertura do Guia de Bolso / POP de Campo
  const [fieldGuideOpen, setFieldGuideOpen] = useState(false);

  // Sincronização reativa do status offline
  const isSavedOffline = React.useSyncExternalStore(
    subscribeToOfflineCourses,
    () => isCourseSavedOffline(courseId),
    () => false
  );

  const [savingOffline, setSavingOffline] = useState(false);

  const handleToggleOfflineSave = () => {
    setSavingOffline(true);
    setTimeout(() => {
      if (isSavedOffline) {
        removeCourseFromOffline(courseId);
      } else {
        saveCourseForOffline(course);
      }
      setSavingOffline(false);
    }, 400);
  };

  return (
    <div className="flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
      {/* Botão Voltar */}
      <div>
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 text-xs font-semibold text-blue-900 dark:text-blue-400 hover:text-orange-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.courseDetails.backToCatalog}</span>
        </Link>
      </div>

      {/* Banner de Diferenciação Regulatória Obrigatória */}
      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs leading-relaxed flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-xs uppercase tracking-wide">
            {t.courseDetails.regulatoryNoticeTitle}
          </h4>
          <p className="mt-0.5 opacity-90">
            {t.courseDetails.regulatoryNoticeText}
          </p>
        </div>
      </div>

      {/* Cabeçalho do Curso com Capa Temática e Destaque Visual */}
      <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
        {course.coverImage && (
          <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-slate-950">
            <Image
              src={course.coverImage}
              alt={course.title[locale] || "Capa do treinamento"}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-black/40 to-transparent" />
            <div className="absolute top-4 right-4 z-10">
              {course.badgeCode && (
                <span className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-cyan-300 font-extrabold text-xs border border-cyan-500/30 shadow-lg">
                  {course.badgeCode}
                </span>
              )}
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="px-2.5 py-1 rounded-md bg-blue-900 text-white font-bold uppercase tracking-wider text-[11px]">
              {course.schoolName[locale]}
            </span>
            {course.isMandatory ? (
              <span className="px-2.5 py-1 rounded-md bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 font-bold">
                {t.courseDetails.mandatoryBadge}
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {t.courseDetails.optionalBadge}
              </span>
            )}
            {course.badgeCode && (
              <span className="px-2 py-1 rounded-md bg-secondary text-muted-foreground font-mono text-[10px]">
                {course.badgeCode}
              </span>
            )}
          </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {course.title[locale]}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-4xl">
            {course.longDescription ? course.longDescription[locale] : course.description[locale]}
          </p>
        </div>

        {/* Metadados Técnicos em Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border text-xs">
          <div className="space-y-1">
            <span className="text-muted-foreground font-medium block">{t.courseDetails.workload}</span>
            <div className="flex items-center gap-1.5 font-bold text-foreground text-sm">
              <Clock className="w-4 h-4 text-orange-500" />
              <span>{course.workloadHours} {t.common.hours}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-muted-foreground font-medium block">{t.courseDetails.level}</span>
            <div className="flex items-center gap-1.5 font-bold text-foreground text-sm">
              <Layers className="w-4 h-4 text-blue-500" />
              <span>{t.common.levels[course.level]}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-muted-foreground font-medium block">{t.courseDetails.modality}</span>
            <div className="flex items-center gap-1.5 font-bold text-foreground text-sm">
              <BookOpen className="w-4 h-4 text-emerald-500" />
              <span>{t.common.modalities[course.modality as CourseModality]}</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-muted-foreground font-medium block">Certificação</span>
            <div className="flex items-center gap-1.5 font-bold text-foreground text-sm">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Teórica c/ Hash</span>
            </div>
          </div>
        </div>

        {/* Ação Principal e Barra de Acesso Offline */}
        <div className="pt-2 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-border mt-4">
          <div className="flex flex-wrap items-center gap-3">
            {(() => {
              const firstLessonId = course.modules?.[0]?.lessons?.[0]?.id ?? "";
              const targetLessonId = metrics.resumeLessonId || firstLessonId;
              return targetLessonId ? (
                <Link
                  href={`/aprender/${courseId}/${targetLessonId}`}
                  className="px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>{metrics.completedCount > 0 ? "Continuar Treinamento" : "Iniciar Treinamento"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <button
                  disabled
                  className="px-6 py-3 rounded-xl bg-slate-400 text-white font-semibold text-xs cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <span>Entrar</span>
                </button>
              );
            })()}

            {/* Botão de Salvar Curso Offline */}
            <button
              type="button"
              onClick={handleToggleOfflineSave}
              disabled={savingOffline}
              className={`px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border cursor-pointer ${
                isSavedOffline
                  ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-300"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600"
              }`}
              title={isSavedOffline ? "Clique para remover da memória offline" : "Salvar todo o conteúdo deste curso para leitura sem internet"}
            >
              {savingOffline ? (
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : isSavedOffline ? (
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <DownloadCloud className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              )}
              <span>{isSavedOffline ? "Disponível Offline" : "Salvar Offline"}</span>
            </button>

            {/* Botão de Abrir Guia Técnico / POP de Bolso para Campo */}
            <button
              type="button"
              onClick={() => setFieldGuideOpen(true)}
              className="px-4 py-3 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-900/60 text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
              title="Visualizar e exportar o Procedimento Operacional / Guia de Bolso formatado para campo em PDF"
            >
              <FileDown className="w-4 h-4 text-orange-600" />
              <span>Guia de Campo (POP / PDF)</span>
            </button>
          </div>

          <div className="flex flex-col sm:items-end text-xs text-muted-foreground">
            <span>{t.courseDetails.inProgressWarning}</span>
            <span className="font-semibold text-blue-900 dark:text-blue-400">
              {metrics.completedCount} / {metrics.totalLessons} {t.common.lessons} ({metrics.progressPercent}%)
            </span>
          </div>
        </div>
        </div>
      </div>

      {/* Conteúdo Informativo: Objetivos e Pré-requisitos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {course.learningObjectives && (
          <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
            <h3 className="font-bold text-base text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span>{t.courseDetails.learningObjectives}</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              {course.learningObjectives[locale].map((obj, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
          <h3 className="font-bold text-base text-foreground">
            {t.courseDetails.targetAudience} & {t.courseDetails.prerequisites}
          </h3>
          <div className="space-y-3 text-xs text-muted-foreground">
            {course.targetAudience && (
              <div>
                <strong className="text-foreground block mb-0.5">{t.courseDetails.targetAudience}:</strong>
                <p className="leading-relaxed">{course.targetAudience[locale]}</p>
              </div>
            )}
            {course.prerequisites && (
              <div className="pt-2 border-t">
                <strong className="text-foreground block mb-0.5">{t.courseDetails.prerequisites}:</strong>
                <p className="leading-relaxed">{course.prerequisites[locale]}</p>
              </div>
            )}
            {course.mandatoryFor.length > 0 && (
              <div className="pt-2 border-t">
                <strong className="text-foreground block mb-1">Cargos com Exigência Mandatória:</strong>
                <div className="flex flex-wrap gap-1.5">
                  {course.mandatoryFor.map((role) => (
                    <span key={role} className="px-2 py-0.5 rounded bg-secondary text-foreground font-medium text-[11px]">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Currículo Modular Expansível */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-foreground">
              {t.courseDetails.curriculumTitle}
            </h2>
            <p className="text-xs text-muted-foreground">
              {t.courseDetails.curriculumSubtitle}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleExpandAll}
              className="text-xs font-semibold text-blue-900 dark:text-blue-400 hover:underline"
            >
              {t.courseDetails.expandAll}
            </button>
            <span className="text-muted-foreground">•</span>
            <button
              onClick={handleCollapseAll}
              className="text-xs font-semibold text-blue-900 dark:text-blue-400 hover:underline"
            >
              {t.courseDetails.collapseAll}
            </button>
          </div>
        </div>

        {course.modules && course.modules.length > 0 ? (
          <div className="space-y-3">
            {course.modules.map((module) => {
              const isOpen = openModules[module.id];
              return (
                <div
                  key={module.id}
                  className="rounded-xl border border-border bg-card overflow-hidden shadow-xs transition-colors"
                >
                  {/* Cabeçalho do Módulo Acessível */}
                  <button
                    onClick={() => toggleModule(module.id)}
                    aria-expanded={isOpen}
                    className="w-full p-4 text-left flex items-center justify-between hover:bg-secondary/40 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-foreground">
                          {module.title[locale]}
                        </span>
                        <span className="text-[11px] text-muted-foreground font-medium">
                          ({module.lessons.length} {t.common.lessons})
                        </span>
                      </div>
                      {module.description && (
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {module.description[locale]}
                        </p>
                      )}
                    </div>

                    <div className="p-1 rounded-md text-muted-foreground shrink-0 ml-4">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Lista de Aulas do Módulo */}
                  {isOpen && (
                    <div className="border-t border-border divide-y divide-border bg-secondary/10">
                      {module.lessons.map((lesson) => {
                        const Icon = CONTENT_ICON[lesson.contentType] || FileText;
                        const isDone = progress.completedLessonIds.includes(lesson.id);

                        if (lesson.isLocked) {
                          return (
                            <div
                              key={lesson.id}
                              className="p-3.5 sm:px-6 flex items-center justify-between gap-3 text-xs opacity-60 bg-secondary/30"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-md bg-secondary flex items-center justify-center text-muted-foreground shrink-0">
                                  <Lock className="w-3.5 h-3.5 text-amber-500" />
                                </div>
                                <div>
                                  <span className="font-medium text-foreground block">
                                    {lesson.title[locale]}
                                  </span>
                                  <span className="text-[10px] text-muted-foreground">
                                    {t.courseDetails.lessonContentLabel[lesson.contentType]}
                                    {lesson.lockReason && (
                                      <span className="text-amber-600 dark:text-amber-400 ml-1.5 font-medium">
                                        • {lesson.lockReason[locale]}
                                      </span>
                                    )}
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 text-muted-foreground font-mono text-[11px] shrink-0">
                                <span>
                                  {lesson.durationMinutes} {t.courseDetails.minutes}
                                </span>
                              </div>
                            </div>
                          );
                        }

                        return (
                          <Link
                            key={lesson.id}
                            href={`/aprender/${courseId}/${lesson.id}`}
                            className="p-3.5 sm:px-6 flex items-center justify-between gap-3 text-xs hover:bg-secondary/20 transition-colors group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-7 h-7 rounded-md bg-secondary group-hover:bg-blue-100 dark:group-hover:bg-blue-950 flex items-center justify-center text-muted-foreground group-hover:text-blue-600 transition-colors shrink-0">
                                {isDone ? (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                ) : (
                                  <Icon className="w-3.5 h-3.5 text-blue-900 dark:text-blue-400" />
                                )}
                              </div>
                              <div>
                                <span className="font-medium text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors block">
                                  {lesson.title[locale]}
                                </span>
                                <span className="text-[10px] text-muted-foreground flex items-center gap-1.5">
                                  <span>{t.courseDetails.lessonContentLabel[lesson.contentType]}</span>
                                  {isDone && (
                                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                                      • {t.learning.completedStatus}
                                    </span>
                                  )}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 text-muted-foreground font-mono text-[11px] shrink-0">
                              <span>
                                {lesson.durationMinutes} {t.courseDetails.minutes}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Avaliação Final Integrada (Prova do Curso) */}
            {course.finalAssessment && (
              <div className="rounded-xl border-2 border-dashed border-blue-300 dark:border-blue-900/60 bg-blue-50/30 dark:bg-blue-950/20 overflow-hidden shadow-xs">
                <div className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-900 dark:bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Award className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-foreground">
                          {course.finalAssessment.title[locale]}
                        </span>
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300">
                          {t.learning.finalExamBadge}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {t.learning.examStatusUnavailable}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed max-w-2xl">
                        {course.finalAssessment.description[locale]}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-2xs text-muted-foreground mt-2 font-mono">
                        <span>{course.finalAssessment.questionsCount} {t.learning.examMetaQuestions.replace("{count}", "").trim()}</span>
                        <span>•</span>
                        <span>{t.learning.examMetaPassingScore.replace("{score}", course.finalAssessment.passingScorePercent?.toString() || "70")}</span>
                        <span>•</span>
                        <span>{course.finalAssessment.estimatedMinutes} min</span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 sm:self-center">
                    {course.finalAssessment.isAvailable && course.finalAssessment.questions && course.finalAssessment.questions.length > 0 ? (
                      <Link
                        href={`/aprender/${course.id}/prova`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-xs"
                      >
                        <Award className="w-4 h-4 text-orange-300" />
                        <span>Fazer Avaliação</span>
                      </Link>
                    ) : (
                      <div className="px-3.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 text-xs font-semibold select-none flex items-center gap-1.5 opacity-80">
                        <Lock className="w-3.5 h-3.5" />
                        <span>{t.learning.examStatusUnavailable}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="p-8 text-center rounded-xl border bg-card text-muted-foreground text-xs">
            Nenhum módulo detalhado cadastrado nesta versão demonstrativa.
          </div>
        )}
      </div>

      {/* Modal do Guia de Bolso / POP Técnico de Campo */}
      {fieldGuideOpen && (
        <FieldGuideModal
          course={course}
          locale={locale}
          onClose={() => setFieldGuideOpen(false)}
        />
      )}
    </div>
  );
}
