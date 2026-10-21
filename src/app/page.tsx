"use client";

import React, { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/app-context";
import { DEMO_COURSES, DEMO_SCHOOLS } from "@/lib/mock-data";
import { COURSE_TAXONOMY_TYPES, CourseTaxonomyType } from "@/lib/course-types";
import {
  subscribeToProgress,
  getStoredProgress,
  getServerProgressSnapshot,
  calculateCourseProgressMetrics,
} from "@/lib/progress";
import {
  subscribeToFavorites,
  getStoredFavorites,
  getServerFavoritesSnapshot,
  toggleFavoriteCourse,
} from "@/lib/favorites";
import {
  ArrowRight,
  Clock,
  BookOpen,
  Award,
  PlayCircle,
  Sparkles,
  Star,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Flame,
  LayoutGrid,
  ChevronRight,
  Bookmark,
} from "lucide-react";
import { FM2SCourseCard } from "@/components/fm2s-course-card";

export default function HomePage() {
  const { locale, currentUser, t } = useApp();
  const [selectedHomeTab, setSelectedHomeTab] = useState<CourseTaxonomyType>("all");

  // Progresso em tempo real sincronizado de forma segura com SSR
  const progressStore = useSyncExternalStore(
    subscribeToProgress,
    getStoredProgress,
    getServerProgressSnapshot
  );

  // Favoritos reativos
  const favorites = useSyncExternalStore(
    subscribeToFavorites,
    getStoredFavorites,
    getServerFavoritesSnapshot
  );

  // Classificação dos cursos do usuário
  const userCoursesState = useMemo(() => {
    const inProgressList: { course: typeof DEMO_COURSES[0]; metrics: ReturnType<typeof calculateCourseProgressMetrics> }[] = [];
    const completedList: typeof DEMO_COURSES = [];
    const favoritedList: typeof DEMO_COURSES = [];

    DEMO_COURSES.forEach((course) => {
      const pRecord = progressStore[course.id];
      const metrics = calculateCourseProgressMetrics(course, pRecord);

      if (metrics.isFullyCompleted) {
        completedList.push(course);
      } else if (metrics.completedCount > 0 || (pRecord && pRecord.lastAccessedLessonId)) {
        inProgressList.push({ course, metrics });
      }

      if (favorites.includes(course.id)) {
        favoritedList.push(course);
      }
    });

    return {
      inProgress: inProgressList,
      completed: completedList,
      favorited: favoritedList,
    };
  }, [progressStore, favorites]);

  // Filtro da vitrine de cursos na Home
  const showcaseCourses = useMemo(() => {
    if (selectedHomeTab === "all") return DEMO_COURSES;
    return DEMO_COURSES.filter(
      (c) => c.categories && c.categories.includes(selectedHomeTab as any)
    );
  }, [selectedHomeTab]);

  // Primeiro curso em andamento para destaque rápido de continuidade
  const primaryInProgress = userCoursesState.inProgress[0] || null;

  return (
    <div className="flex flex-col flex-1 p-6 sm:p-8 lg:p-10 space-y-10 max-w-7xl mx-auto w-full">
      {/* 1. HERO DO ALUNO: Boas-Vindas & Retomada Imediata */}
      <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-orange-500/10 via-blue-500/5 to-transparent pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-900/60 text-orange-700 dark:text-orange-400 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>Ambiente Oficial de Capacitação RSS3</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {currentUser
                ? `Bem-vindo de volta, ${currentUser.name.split(" ")[0]}!`
                : "Plataforma de Treinamentos Técnicos RSS3"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {currentUser
                ? userCoursesState.inProgress.length > 0
                  ? `Você tem ${userCoursesState.inProgress.length} treinamento(s) em andamento. Continue seu progresso para emitir seus certificados.`
                  : "Explore o catálogo, monte sua lista de favoritos e inicie novas qualificações técnicas e regulamentares."
                : "Capacitação contínua em hidrojateamento, pintura, montagem de andaimes, NRs e ferramentas de produtividade industrial."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {primaryInProgress ? (
              <Link
                href={`/aprender/${primaryInProgress.course.id}/${primaryInProgress.metrics.resumeLessonId}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-orange-500/25 active:scale-95 cursor-pointer"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Continuar {primaryInProgress.course.title[locale].split(" ")[0]}...</span>
              </Link>
            ) : (
              <Link
                href="/catalogo"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explorar Cursos</span>
              </Link>
            )}

            <Link
              href="/catalogo"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-card hover:bg-muted text-foreground text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>Ver Catálogo Completo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. SEÇÃO: CURSOS EM ANDAMENTO (Aparece em destaque se houver) */}
      {userCoursesState.inProgress.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Continuar Estudando
                </h2>
                <p className="text-xs text-muted-foreground">
                  Seus treinamentos iniciados aguardando conclusão
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
              {userCoursesState.inProgress.length} em andamento
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userCoursesState.inProgress.map(({ course, metrics }) => {
              const targetLesson = metrics.resumeLessonId || course.modules?.[0]?.lessons?.[0]?.id || "";
              const isFav = favorites.includes(course.id);

              return (
                <FM2SCourseCard
                  key={course.id}
                  course={course}
                  locale={locale}
                  isFav={isFav}
                  actionUrl={targetLesson ? `/aprender/${course.id}/${targetLesson}` : `/catalogo/${course.id}`}
                  actionLabel="Continuar"
                  showFavoriteButton={true}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* 3. SEÇÃO: MEUS FAVORITOS */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Meus Treinamentos Favoritos
              </h2>
              <p className="text-xs text-muted-foreground">
                Cursos que você salvou para estudar ou consultar
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-muted-foreground">
            {userCoursesState.favorited.length} salvo(s)
          </span>
        </div>

        {userCoursesState.favorited.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {userCoursesState.favorited.map((course) => {
              const pRecord = progressStore[course.id];
              const metrics = calculateCourseProgressMetrics(course, pRecord);
              const targetLesson = metrics.resumeLessonId || course.modules?.[0]?.lessons?.[0]?.id || "";

              return (
                <FM2SCourseCard
                  key={course.id}
                  course={course}
                  locale={locale}
                  isFav={true}
                  actionUrl={targetLesson ? `/aprender/${course.id}/${targetLesson}` : `/catalogo/${course.id}`}
                  actionLabel={metrics.completedCount > 0 ? "Continuar" : "Acessar"}
                  showFavoriteButton={true}
                />
              );
            })}
          </div>
        ) : (
          <div className="p-8 text-center rounded-2xl border border-dashed border-border bg-card/50 space-y-2">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mx-auto text-muted-foreground">
              <Bookmark className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold text-foreground">
              Você ainda não favoritou nenhum curso
            </p>
            <p className="text-xs text-muted-foreground max-w-md mx-auto">
              Clique no ícone de estrela nos cards de qualquer treinamento para adicioná-lo à sua lista de acesso rápido.
            </p>
          </div>
        )}
      </div>

      {/* 4. SEÇÃO: EXPLORAR POR ÁREAS DE CONHECIMENTO & NRs */}
      <div className="space-y-4 pt-4 border-t">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
              GRADE DE ESPECIALIZAÇÃO RSS3
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
              Explorar Treinamentos
            </h2>
          </div>
          <Link
            href="/catalogo"
            className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-orange-500 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Ir para o Catálogo com Filtros Avançados</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Abas de Tipos de Cursos */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          {COURSE_TAXONOMY_TYPES.map((typeDef) => {
            const isSelected = selectedHomeTab === typeDef.id;
            return (
              <button
                key={typeDef.id}
                onClick={() => setSelectedHomeTab(typeDef.id)}
                className={`px-3.5 py-2 rounded-xl font-semibold transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {typeDef.label[locale]}
              </button>
            );
          })}
        </div>

        {/* Grid de Cursos Filtrados da Home - 3 por fileira em telas grandes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-1">
          {showcaseCourses.map((course) => {
            const isFav = favorites.includes(course.id);

            return (
              <FM2SCourseCard
                key={course.id}
                course={course}
                locale={locale}
                isFav={isFav}
                actionUrl={`/catalogo/${course.id}`}
                actionLabel="Acessar"
                showFavoriteButton={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
