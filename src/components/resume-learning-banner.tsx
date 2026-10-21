"use client";

import React, { useSyncExternalStore } from "react";
import Link from "next/link";
import { DEMO_COURSES } from "@/lib/mock-data";
import {
  getStoredProgress,
  subscribeToProgress,
  getServerProgressSnapshot,
  calculateCourseProgressMetrics,
} from "@/lib/progress";
import { PlayCircle, ArrowRight, Sparkles } from "lucide-react";

interface ResumeLearningBannerProps {
  locale: "pt-BR" | "en" | "es";
}

export function ResumeLearningBanner({ locale }: ResumeLearningBannerProps) {
  const progressStore = useSyncExternalStore(
    subscribeToProgress,
    getStoredProgress,
    getServerProgressSnapshot
  );

  // Encontra o curso acessado mais recentemente que não esteja 100% concluído
  const activeCourseData = React.useMemo(() => {
    let bestCourse = null;
    let bestTimestamp = "";
    let bestMetrics = null;

    for (const course of DEMO_COURSES) {
      const record = progressStore[course.id];
      if (!record || !record.lastAccessedAt) continue;

      const metrics = calculateCourseProgressMetrics(course, record);
      // Se já está 100% concluído, prioriza cursos ainda em andamento
      if (metrics.isFullyCompleted) continue;

      if (!bestTimestamp || new Date(record.lastAccessedAt) > new Date(bestTimestamp)) {
        bestTimestamp = record.lastAccessedAt;
        bestCourse = course;
        bestMetrics = metrics;
      }
    }

    if (!bestCourse || !bestMetrics) return null;

    const record = progressStore[bestCourse.id];
    const resumeLessonId =
      record.lastAccessedLessonId ||
      bestCourse.modules?.[0]?.lessons?.[0]?.id ||
      "";

    return {
      course: bestCourse,
      metrics: bestMetrics,
      resumeLessonId,
    };
  }, [progressStore]);

  if (!activeCourseData) {
    return null;
  }

  const { course, metrics, resumeLessonId } = activeCourseData;
  const targetUrl = resumeLessonId
    ? `/aprender/${course.id}/${resumeLessonId}`
    : `/catalogo/${course.id}`;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-slate-900 border border-blue-800/50 p-4 sm:p-5 shadow-sm mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
            <PlayCircle className="w-6 h-6 text-orange-400" />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Continuar de Onde Parou
              </span>
              <span className="text-xs font-semibold text-slate-400">
                {metrics.progressPercent}% Concluído
              </span>
            </div>

            <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
              {course.title[locale]}
            </h3>
          </div>
        </div>

        <Link
          href={targetUrl}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-bold transition-all shadow-md shrink-0 cursor-pointer self-start sm:self-auto group"
        >
          <span>Retomar Treinamento</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Barra de Progresso Fina no Rodapé do Banner */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-blue-500 transition-all duration-300"
          style={{ width: `${metrics.progressPercent}%` }}
        />
      </div>
    </div>
  );
}
