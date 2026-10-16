"use client";

import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/app-context";
import { DEMO_COURSES } from "@/lib/mock-data";
import {
  subscribeToProgress,
  getStoredProgress,
  getServerProgressSnapshot,
  calculateCourseProgressMetrics,
} from "@/lib/progress";
import {
  ArrowRight,
  Clock,
  BookOpen,
  Award,
  PlayCircle,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const { locale, currentUser } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Progresso em tempo real sincronizado de forma segura com SSR
  const progressStore = useSyncExternalStore(
    subscribeToProgress,
    getStoredProgress,
    getServerProgressSnapshot
  );

  // Catálogo de cursos ativos
  const courseList = DEMO_COURSES;
  const hidrojatoCourse = DEMO_COURSES.find((c) => c.id === "c-hidrojato-seguranca");
  
  const filteredCourses = courseList.filter((course) => {
    if (selectedCategory === "all") return true;
    return course.schoolId === selectedCategory;
  });

  // Métricas do curso de hidrojateamento
  const hjProgress = hidrojatoCourse ? progressStore[hidrojatoCourse.id] || {
    courseId: hidrojatoCourse.id,
    completedLessonIds: [],
    lastAccessedLessonId: "",
    lastAccessedAt: "",
  } : null;

  const metrics = (hidrojatoCourse && hjProgress)
    ? calculateCourseProgressMetrics(hidrojatoCourse, hjProgress)
    : { totalLessons: 4, completedCount: 0, progressPercent: 0, isFullyCompleted: false, resumeLessonId: "les-hj-1-1" };

  const hasStarted = metrics.completedCount > 0 || (hjProgress && hjProgress.lastAccessedLessonId !== "");
  const nextLessonId = metrics.resumeLessonId || (hidrojatoCourse?.modules?.[0]?.lessons?.[0]?.id ?? "les-hj-1-1");

  return (
    <div className="flex flex-col flex-1 p-6 sm:p-8 lg:p-10 space-y-8 max-w-7xl">
      {/* 1. Faixa Compacta de Boas-Vindas & Retomada Rápida */}
      <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5 relative overflow-hidden">
        {/* Detalhe de iluminação sutil */}
        <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-orange-500/5 via-cyan-500/5 to-transparent pointer-events-none" />

        <div className="space-y-1.5 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-900/60 text-orange-700 dark:text-orange-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Capacitação Operacional Ativa</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {currentUser ? `Olá, ${currentUser.name.split(" ")[0]}!` : "Bem-vindo à RSS3 Treinamentos"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl">
            {currentUser
              ? hasStarted
                ? `Você está cursando Segurança em Hidrojateamento (${metrics.completedCount} de ${metrics.totalLessons} aulas concluídas).`
                : "Seu treinamento de Hidrojateamento de Alta Pressão está pronto para início."
              : "Acesse sua conta ou cadastre-se para registrar seu progresso operacional e emitir certificados."}
          </p>
        </div>

        <div className="flex items-center gap-3 relative z-10 shrink-0">
          <Link
            href={`/aprender/c-hidrojato-seguranca/${nextLessonId}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-orange-500/20 active:scale-95"
          >
            <PlayCircle className="w-4 h-4" />
            <span>{hasStarted ? "Continuar de Onde Parou" : "Iniciar Treinamento"}</span>
          </Link>
          {currentUser ? (
            <Link
              href="/dashboard"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>Ver Painel</span>
            </Link>
          ) : (
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>Entrar / Cadastrar</span>
            </Link>
          )}
        </div>
      </div>

      {/* 2. Cabeçalho de Navegação e Categorias */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
              CATÁLOGO CORPORATIVO
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
              Escolas de Aprendizagem
            </h1>
          </div>
          <Link
            href="/catalogo"
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-orange-500 inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <span>Ver catálogo completo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 -mt-2">
          Estrutura modular de especialização técnica e operacional para os padrões RSS3 e clientes industriais.
        </p>

        {/* Filtros em Pílula (Pills) para navegação fluida */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none text-xs">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 ${
              selectedCategory === "all"
                ? "bg-blue-900 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            Todos os Cursos
          </button>
          <button
            onClick={() => setSelectedCategory("hidrojato")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
              selectedCategory === "hidrojato"
                ? "bg-cyan-700 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            <span>Hidrojateamento</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-black/20">1</span>
          </button>
          <button
            onClick={() => setSelectedCategory("pintura-industrial")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
              selectedCategory === "pintura-industrial"
                ? "bg-orange-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            <span>Pintura Industrial</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-black/20">1</span>
          </button>
          <button
            onClick={() => setSelectedCategory("andaimes-acesso")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
              selectedCategory === "andaimes-acesso"
                ? "bg-amber-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            <span>Montagem de Andaimes</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-black/20">1</span>
          </button>
        </div>
      </div>

      {/* 3. Grid de Cursos (Card Real Enriquecido de Todos os Cursos Ativos) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-1">
        {filteredCourses.map((course) => {
          const courseProgress = progressStore[course.id] || {
            courseId: course.id,
            completedLessonIds: [],
            lastAccessedLessonId: "",
            lastAccessedAt: "",
          };
          const courseMetrics = calculateCourseProgressMetrics(course, courseProgress);
          const firstLessonId = course.modules?.[0]?.lessons?.[0]?.id ?? "";
          const targetLessonId = courseMetrics.resumeLessonId || firstLessonId;
          const courseStarted = courseMetrics.completedCount > 0 || !!courseProgress.lastAccessedLessonId;

          return (
            <div
              key={course.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Topo com imagem de capa temática do curso e badges operacionais */}
                <div className={`h-40 bg-gradient-to-r ${course.thumbnailGradient} p-4 flex flex-col justify-between text-white relative overflow-hidden`}>
                  {course.coverImage && (
                    <Image
                      src={course.coverImage}
                      alt={course.title[locale] || "Capa do curso"}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                  {/* Overlay gradiente para contraste e legibilidade perfeita */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30 pointer-events-none" />

                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black/60 backdrop-blur-md uppercase tracking-wider border border-white/10 text-slate-100">
                      {course.schoolName[locale]}
                    </span>
                    {course.badgeCode && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-orange-500 text-white shadow-xs">
                        {course.badgeCode}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold opacity-95 relative z-10 text-slate-200">
                    <span className="inline-flex items-center gap-1 bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                      {course.level === "advanced" ? "Avançado" : course.level}
                    </span>
                    <span className="bg-black/50 px-2 py-0.5 rounded text-[10px] backdrop-blur-xs">
                      Híbrido
                    </span>
                  </div>
                </div>

                {/* Barra de Progresso Real se iniciado */}
                {courseStarted && (
                  <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 text-2xs font-semibold">
                    <div className="flex-1 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${courseMetrics.progressPercent}%` }}
                      />
                    </div>
                    <span className="text-slate-600 dark:text-slate-300 shrink-0">
                      {courseMetrics.progressPercent}% concluído
                    </span>
                  </div>
                )}

                {/* Conteúdo do Card */}
                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                    {course.title[locale]}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {course.description[locale]}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-1.5" title="Carga horária total">
                      <Clock className="w-3.5 h-3.5 text-orange-500" />
                      <span>{course.workloadHours}h</span>
                    </div>
                    <div className="flex items-center gap-1.5" title="Quantidade de lições">
                      <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                      <span>{course.lessonsCount} aulas</span>
                    </div>
                    <div className="flex items-center gap-1.5" title="Emissão de certificado ao concluir">
                      <Award className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Certificado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="p-5 pt-0 space-y-2">
                <Link
                  href={`/aprender/${course.id}/${targetLessonId}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs active:scale-95"
                >
                  <PlayCircle className="w-3.5 h-3.5" />
                  <span>Entrar</span>
                </Link>

                <Link
                  href={`/catalogo/${course.id}`}
                  className="w-full py-2 px-3 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Ver Detalhes do Curso</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
