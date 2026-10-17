"use client";

import React, { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/app-context";
import { DEMO_COURSES, DEMO_SCHOOLS } from "@/lib/mock-data";
import { COURSE_TAXONOMY_TYPES, CourseTaxonomyType } from "@/lib/course-types";
import {
  subscribeToFavorites,
  getStoredFavorites,
  getServerFavoritesSnapshot,
  toggleFavoriteCourse,
} from "@/lib/favorites";
import {
  Search,
  Clock,
  BookOpen,
  Award,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  SlidersHorizontal,
  Star,
  Layers,
  Wrench,
  TrendingUp,
  CheckCircle2,
  ShieldAlert,
  LayoutGrid,
} from "lucide-react";

type SortOption = "nameAsc" | "nameDesc" | "durationAsc" | "durationDesc" | "recent";

export default function CatalogPage() {
  const { t, locale } = useApp();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<CourseTaxonomyType>("all");
  const [selectedSchool, setSelectedSchool] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedModality, setSelectedModality] = useState<string>("all");
  const [selectedObligation, setSelectedObligation] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortOption>("nameAsc");

  // Favoritos reativos
  const favorites = useSyncExternalStore(
    subscribeToFavorites,
    getStoredFavorites,
    getServerFavoritesSnapshot
  );

  // Filtragem e ordenação derivadas dos dados
  const filteredAndSortedCourses = useMemo(() => {
    const filtered = DEMO_COURSES.filter((course) => {
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        term === "" ||
        course.title[locale].toLowerCase().includes(term) ||
        course.description[locale].toLowerCase().includes(term) ||
        (course.badgeCode && course.badgeCode.toLowerCase().includes(term)) ||
        (course.targetAudience && course.targetAudience[locale].toLowerCase().includes(term));

      // Filtro por tipo/taxonomia
      const matchesType =
        selectedType === "all" ||
        (course.categories && course.categories.includes(selectedType as any));

      const matchesSchool = selectedSchool === "all" || course.schoolId === selectedSchool;
      const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
      const matchesModality = selectedModality === "all" || course.modality === selectedModality;
      const matchesObligation =
        selectedObligation === "all" ||
        (selectedObligation === "mandatory" && course.isMandatory) ||
        (selectedObligation === "optional" && !course.isMandatory);

      return matchesSearch && matchesType && matchesSchool && matchesLevel && matchesModality && matchesObligation;
    });

    return filtered.sort((a, b) => {
      if (sortBy === "nameAsc") {
        return a.title[locale].localeCompare(b.title[locale]);
      }
      if (sortBy === "nameDesc") {
        return b.title[locale].localeCompare(a.title[locale]);
      }
      if (sortBy === "durationAsc") {
        return a.workloadHours - b.workloadHours;
      }
      if (sortBy === "durationDesc") {
        return b.workloadHours - a.workloadHours;
      }
      if (sortBy === "recent") {
        return new Date(b.updatedAtDate).getTime() - new Date(a.updatedAtDate).getTime();
      }
      return 0;
    });
  }, [searchTerm, selectedType, selectedSchool, selectedLevel, selectedModality, selectedObligation, sortBy, locale]);

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedType !== "all" ||
    selectedSchool !== "all" ||
    selectedLevel !== "all" ||
    selectedModality !== "all" ||
    selectedObligation !== "all" ||
    sortBy !== "nameAsc";

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedType("all");
    setSelectedSchool("all");
    setSelectedLevel("all");
    setSelectedModality("all");
    setSelectedObligation("all");
    setSortBy("nameAsc");
  };

  const currentTypeMeta = COURSE_TAXONOMY_TYPES.find((ct) => ct.id === selectedType);

  // Renderizar ícone do tipo
  const renderTypeIcon = (icon: string) => {
    switch (icon) {
      case "ShieldAlert":
        return <ShieldAlert className="w-4 h-4" />;
      case "Wrench":
        return <Wrench className="w-4 h-4" />;
      case "TrendingUp":
        return <TrendingUp className="w-4 h-4" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-4 h-4" />;
      default:
        return <LayoutGrid className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
      {/* Cabeçalho */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-900 dark:text-blue-300 text-xs font-bold">
          <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
          <span>Matriz Técnica RSS3 Soluções Industriais</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          {t.catalog.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {t.catalog.subtitle}
        </p>
      </div>

      {/* SELETOR DE TIPOS / CATEGORIAS EM ABAS MODERNAS */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Filtrar por Área de Conhecimento
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {filteredAndSortedCourses.length} cursos encontrados
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {COURSE_TAXONOMY_TYPES.map((typeDef) => {
            const isSelected = selectedType === typeDef.id;
            const count = typeDef.id === "all"
              ? DEMO_COURSES.length
              : DEMO_COURSES.filter((c) => c.categories && c.categories.includes(typeDef.id as any)).length;

            return (
              <button
                key={typeDef.id}
                onClick={() => setSelectedType(typeDef.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                    : "bg-card border border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {renderTypeIcon(typeDef.iconName)}
                <span>{typeDef.label[locale]}</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                  isSelected
                    ? "bg-white/20 text-white dark:bg-slate-900/20 dark:text-slate-900"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Descrição contextual da categoria ativa */}
        {currentTypeMeta && (
          <p className="text-xs text-muted-foreground italic px-1">
            {currentTypeMeta.description[locale]}
          </p>
        )}
      </div>

      {/* Painel Completo de Filtros e Busca */}
      <div className="p-5 rounded-2xl border border-border bg-card shadow-xs space-y-4">
        {/* Linha 1: Busca e Ordenação */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.catalog.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-lg border bg-background focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <label htmlFor="sort-select" className="text-xs font-semibold text-muted-foreground whitespace-nowrap">
              {t.catalog.sortBy}:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-3 py-2 text-xs rounded-lg border bg-background font-medium text-foreground focus:outline-hidden focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="nameAsc">{t.catalog.sortOptions.nameAsc}</option>
              <option value="nameDesc">{t.catalog.sortOptions.nameDesc}</option>
              <option value="durationAsc">{t.catalog.sortOptions.durationAsc}</option>
              <option value="durationDesc">{t.catalog.sortOptions.durationDesc}</option>
              <option value="recent">{t.catalog.sortOptions.recent}</option>
            </select>
          </div>
        </div>

        {/* Linha 2: Dropdowns de Filtros Refinados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-2 border-t">
          {/* Escola */}
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-muted-foreground flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3 text-orange-500" />
              <span>{t.catalog.filterBySchool}</span>
            </label>
            <select
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs rounded-md border bg-background text-foreground cursor-pointer"
            >
              <option value="all">{t.catalog.allSchools}</option>
              {DEMO_SCHOOLS.map((school) => (
                <option key={school.id} value={school.id}>
                  {school.name[locale]}
                </option>
              ))}
            </select>
          </div>

          {/* Nível */}
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-muted-foreground">
              {t.catalog.filterByLevel}
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs rounded-md border bg-background text-foreground cursor-pointer"
            >
              <option value="all">{t.catalog.allLevels}</option>
              <option value="basic">{t.common.levels.basic}</option>
              <option value="intermediate">{t.common.levels.intermediate}</option>
              <option value="advanced">{t.common.levels.advanced}</option>
            </select>
          </div>

          {/* Modalidade */}
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-muted-foreground">
              {t.catalog.filterByModality}
            </label>
            <select
              value={selectedModality}
              onChange={(e) => setSelectedModality(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs rounded-md border bg-background text-foreground cursor-pointer"
            >
              <option value="all">{t.catalog.allModalities}</option>
              <option value="online">{t.common.modalities.online}</option>
              <option value="hybrid">{t.common.modalities.hybrid}</option>
              <option value="presential">{t.common.modalities.presential}</option>
            </select>
          </div>

          {/* Obrigatoriedade */}
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-muted-foreground">
              {t.catalog.filterByObligation}
            </label>
            <select
              value={selectedObligation}
              onChange={(e) => setSelectedObligation(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs rounded-md border bg-background text-foreground cursor-pointer"
            >
              <option value="all">{t.catalog.allMandatory}</option>
              <option value="mandatory">{t.catalog.onlyMandatory}</option>
              <option value="optional">{t.catalog.onlyOptional}</option>
            </select>
          </div>
        </div>

        {/* Barra de Status e Limpeza */}
        <div className="text-xs text-muted-foreground font-medium flex items-center justify-between pt-2 border-t">
          <span>
            {t.catalog.showingResults
              .replace("{count}", filteredAndSortedCourses.length.toString())
              .replace("{total}", DEMO_COURSES.length.toString())}
          </span>
          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="text-orange-600 dark:text-orange-400 font-semibold hover:underline inline-flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t.catalog.clearFilters}</span>
            </button>
          )}
        </div>
      </div>

      {/* Grid de Cards de Cursos */}
      {filteredAndSortedCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedCourses.map((course) => {
            const isFav = favorites.includes(course.id);
            return (
              <div
                key={course.id}
                className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between group relative"
              >
                <div>
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
                    {/* Overlay escuro em degradê para legibilidade das tags */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-900/30 pointer-events-none" />

                    <div className="flex justify-between items-start relative z-10">
                      <div className="flex flex-wrap items-center gap-1.5 max-w-[75%]">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-white">
                          {course.schoolName[locale]}
                        </span>
                        {course.isMandatory && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-orange-600 text-white shadow-xs">
                            {t.catalog.onlyMandatory}
                          </span>
                        )}
                      </div>

                      {/* Botão de Favoritar */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleFavoriteCourse(course.id);
                        }}
                        title={isFav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                        className={`p-2 rounded-xl backdrop-blur-md transition-all active:scale-90 cursor-pointer ${
                          isFav
                            ? "bg-amber-500 text-white shadow-xs"
                            : "bg-black/50 text-white/70 hover:text-white hover:bg-black/70"
                        }`}
                      >
                        <Star className={`w-4 h-4 ${isFav ? "fill-white" : ""}`} />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 relative z-10">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white/20 backdrop-blur-md">
                        {t.common.levels[course.level]}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white/20 backdrop-blur-md">
                        {t.common.modalities[course.modality]}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    <div>
                      {/* Tags de Categoria do Curso */}
                      {course.categories && course.categories.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {course.categories.map((catKey) => {
                            const catDef = COURSE_TAXONOMY_TYPES.find((ct) => ct.id === catKey);
                            if (!catDef) return null;
                            return (
                              <span
                                key={catKey}
                                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${catDef.badgeBg} ${catDef.badgeText}`}
                              >
                                {catDef.label[locale]}
                              </span>
                            );
                          })}
                        </div>
                      )}

                      <h3 className="font-bold text-base text-foreground line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {course.title[locale]}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {course.description[locale]}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-3 border-y text-center">
                      <div>
                        <div className="flex items-center justify-center gap-1 text-muted-foreground mb-0.5">
                          <Clock className="w-3.5 h-3.5 text-blue-500" />
                          <span className="text-[11px] font-medium">{t.common.hours}</span>
                        </div>
                        <span className="text-xs font-bold text-foreground">{course.workloadHours}h</span>
                      </div>
                      <div>
                        <div className="flex items-center justify-center gap-1 text-muted-foreground mb-0.5">
                          <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-[11px] font-medium">{t.common.modules}</span>
                        </div>
                        <span className="text-xs font-bold text-foreground">{course.modulesCount}</span>
                      </div>
                      <div>
                        <div className="flex items-center justify-center gap-1 text-muted-foreground mb-0.5">
                          <Award className="w-3.5 h-3.5 text-orange-500" />
                          <span className="text-[11px] font-medium">{t.common.lessons}</span>
                        </div>
                        <span className="text-xs font-bold text-foreground">{course.lessonsCount}</span>
                      </div>
                    </div>

                    {course.mandatoryFor && course.mandatoryFor.length > 0 && (
                      <div className="text-[11px] text-muted-foreground line-clamp-1">
                        <span className="font-semibold text-foreground">Função: </span>
                        {course.mandatoryFor.join(", ")}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/catalogo/${course.id}`}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground text-xs font-bold transition-all"
                  >
                    <span>{t.common.details}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl border border-dashed border-border bg-card space-y-4">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto text-muted-foreground">
            <Search className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-foreground">
              {t.catalog.emptyStateTitle}
            </h3>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">
              {t.catalog.emptyState}
            </p>
          </div>
          <button
            onClick={handleClearFilters}
            className="px-4 py-2 text-xs font-bold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all cursor-pointer"
          >
            {t.catalog.clearFilters}
          </button>
        </div>
      )}
    </div>
  );
}
