"use client";

import React, { useMemo, useState, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/app-context";
import { DEMO_COURSES } from "@/lib/mock-data";
import { COURSE_TAXONOMY_TYPES, CourseTaxonomyType, CourseTypeDefinition } from "@/lib/course-types";
import {
  subscribeToFavorites,
  getStoredFavorites,
  getServerFavoritesSnapshot,
  toggleFavoriteCourse,
} from "@/lib/favorites";
import { CourseDemonstration } from "@/types";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
  Layers,
  Wrench,
  TrendingUp,
  CheckCircle2,
  ShieldAlert,
  LayoutGrid,
  ShieldCheck,
  RotateCcw,
  Compass,
  ArrowRight,
} from "lucide-react";
import { FM2SCourseCard } from "@/components/fm2s-course-card";


// Componente de carrossel de fileira de cursos
interface CourseRowProps {
  categoryDef: CourseTypeDefinition;
  courses: CourseDemonstration[];
  favorites: string[];
  locale: "pt-BR" | "en" | "es";
}

function CourseRow({ categoryDef, courses, favorites, locale }: CourseRowProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    // O container mostra 3 cards por vez. Rola exatamente a largura de um card + gap (~360px)
    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (courses.length === 0) return null;

  return (
    <section className="space-y-3 relative group/row">
      {/* Título da Fileira + Contador + Botões de Navegação */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 min-w-0">
          <span
            className={`w-2.5 h-6 rounded-full shrink-0 ${
              categoryDef.id === "nr-regulamentar"
                ? "bg-blue-600"
                : categoryDef.id === "conhecimento-operacional"
                ? "bg-orange-500"
                : categoryDef.id === "gestao-produtividade"
                ? "bg-emerald-500"
                : "bg-amber-500"
            }`}
          />
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white truncate">
            {categoryDef.label[locale]}
          </h2>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            {courses.length}
          </span>
        </div>

        {/* Setas de rolagem para o lado */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Rolar para esquerda"
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Rolar para direita"
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shadow-xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Carrossel Horizontal: Exatamente 3 cards visíveis por fileira em desktop (w-[calc((100%-2rem)/3)]) */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-none pb-2 pt-1 -mx-1 px-1 snap-x snap-mandatory"
      >
        {courses.map((course) => {
          const isFav = favorites.includes(course.id);
          return (
            <div
              key={`${categoryDef.id}-${course.id}`}
              className="w-[85vw] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)] shrink-0 snap-start"
            >
              <CompactCourseCard course={course} isFav={isFav} locale={locale} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Card no Padrão Oficial FM2S / MBAs da RSS3
interface CompactCardProps {
  course: CourseDemonstration;
  isFav: boolean;
  locale: "pt-BR" | "en" | "es";
}

function CompactCourseCard({ course, isFav, locale }: CompactCardProps) {
  return (
    <FM2SCourseCard
      course={course}
      isFav={isFav}
      locale={locale}
      actionUrl={`/catalogo/${course.id}`}
      actionLabel="Acessar"
    />
  );
}

export default function CatalogPage() {
  const { t, locale } = useApp();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<CourseTaxonomyType>("all");

  // Favoritos reativos
  const favorites = useSyncExternalStore(
    subscribeToFavorites,
    getStoredFavorites,
    getServerFavoritesSnapshot
  );

  // Categorias canônicas (excluindo 'all' para agrupar em fileiras)
  const categoryRows = useMemo(() => {
    return COURSE_TAXONOMY_TYPES.filter((t) => t.id !== "all");
  }, []);

  // Filtragem dos cursos por busca e filtro de categoria no topo
  const filteredCourses = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return DEMO_COURSES.filter((course) => {
      const matchesSearch =
        term === "" ||
        course.title[locale].toLowerCase().includes(term) ||
        (course.badgeCode && course.badgeCode.toLowerCase().includes(term));

      const matchesType =
        selectedTypeFilter === "all" ||
        (course.categories && course.categories.includes(selectedTypeFilter as any));

      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedTypeFilter, locale]);

  // Função para pegar ícone da categoria
  const renderTypeIcon = (icon: string) => {
    switch (icon) {
      case "ShieldAlert":
        return <ShieldAlert className="w-3.5 h-3.5" />;
      case "Wrench":
        return <Wrench className="w-3.5 h-3.5" />;
      case "TrendingUp":
        return <TrendingUp className="w-3.5 h-3.5" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-3.5 h-3.5" />;
      default:
        return <LayoutGrid className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="flex-1 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
      {/* Cabeçalho */}
      <div className="space-y-1.5">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-900 dark:text-blue-300 text-xs font-bold">
          <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
          <span>Vitrine Corporativa • RSS3 Soluções Industriais</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {t.catalog.title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Navegue pelas fileiras temáticas de cursos industriais ou busque por código e norma.
        </p>
      </div>

      {/* Barra de Filtro Rápido e Pesquisa */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
        {/* Pílulas de filtro de tipo rápido */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {COURSE_TAXONOMY_TYPES.map((typeDef) => {
            const isSelected = selectedTypeFilter === typeDef.id;
            return (
              <button
                key={typeDef.id}
                onClick={() => setSelectedTypeFilter(typeDef.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs"
                    : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {renderTypeIcon(typeDef.iconName)}
                <span>{typeDef.label[locale]}</span>
              </button>
            );
          })}
        </div>

        {/* Campo de Busca Rápida */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por nome ou sigla (ex: NR-10)..."
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* RENDERIZAÇÃO EM FILEIRAS POR TIPO (3 CARDS POR FILEIRA COM SCROLL HORIZONTAL) */}
      {selectedTypeFilter === "all" && searchTerm === "" ? (
        <div className="space-y-12">


          {/* FILEIRAS DE CURSOS INDIVIDUAIS */}
          {categoryRows.map((catDef) => {
            const coursesInCat = DEMO_COURSES.filter(
              (c) => c.categories && c.categories.includes(catDef.id as any)
            );
            return (
              <CourseRow
                key={catDef.id}
                categoryDef={catDef}
                courses={coursesInCat}
                favorites={favorites}
                locale={locale}
              />
            );
          })}
        </div>
      ) : (
        /* Caso o usuário tenha filtrado por busca ou clicado em uma categoria específica */
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {filteredCourses.length} cursos encontrados
            </span>
            {(selectedTypeFilter !== "all" || searchTerm !== "") && (
              <button
                onClick={() => {
                  setSelectedTypeFilter("all");
                  setSearchTerm("");
                }}
                className="text-xs font-semibold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Restaurar todas as fileiras</span>
              </button>
            )}
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCourses.map((course) => (
                <CompactCourseCard
                  key={course.id}
                  course={course}
                  isFav={favorites.includes(course.id)}
                  locale={locale}
                />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 space-y-3">
              <Search className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Nenhum treinamento encontrado com esse critério.
              </p>
              <button
                onClick={() => {
                  setSelectedTypeFilter("all");
                  setSearchTerm("");
                }}
                className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Limpar busca e filtros
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
