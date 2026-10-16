"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/app-context";
import { DEMO_COURSES, DEMO_SCHOOLS } from "@/lib/mock-data";
import { CourseModality } from "@/types";
import {
  Search,
  Clock,
  BookOpen,
  Award,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";

type SortOption = "nameAsc" | "nameDesc" | "durationAsc" | "durationDesc" | "recent";

export default function CatalogPage() {
  const { t, locale } = useApp();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSchool, setSelectedSchool] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedModality, setSelectedModality] = useState<string>("all");
  const [selectedObligation, setSelectedObligation] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortOption>("nameAsc");

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

      const matchesSchool = selectedSchool === "all" || course.schoolId === selectedSchool;
      const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
      const matchesModality = selectedModality === "all" || course.modality === selectedModality;
      const matchesObligation =
        selectedObligation === "all" ||
        (selectedObligation === "mandatory" && course.isMandatory) ||
        (selectedObligation === "optional" && !course.isMandatory);

      return matchesSearch && matchesSchool && matchesLevel && matchesModality && matchesObligation;
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
  }, [searchTerm, selectedSchool, selectedLevel, selectedModality, selectedObligation, sortBy, locale]);

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedSchool !== "all" ||
    selectedLevel !== "all" ||
    selectedModality !== "all" ||
    selectedObligation !== "all" ||
    sortBy !== "nameAsc";

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedSchool("all");
    setSelectedLevel("all");
    setSelectedModality("all");
    setSelectedObligation("all");
    setSortBy("nameAsc");
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
              className="px-3 py-2 text-xs rounded-lg border bg-background font-medium text-foreground focus:outline-hidden focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-2.5 py-1.5 text-xs rounded-md border bg-background text-foreground"
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
              className="w-full px-2.5 py-1.5 text-xs rounded-md border bg-background text-foreground"
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
              className="w-full px-2.5 py-1.5 text-xs rounded-md border bg-background text-foreground"
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
              className="w-full px-2.5 py-1.5 text-xs rounded-md border bg-background text-foreground"
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
              className="text-orange-600 dark:text-orange-400 font-semibold hover:underline inline-flex items-center gap-1.5"
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
          {filteredAndSortedCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between group"
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
                  {/* Overlay gradiente escuro para legibilidade perfeita dos badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30 pointer-events-none" />

                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-black/60 backdrop-blur-md uppercase tracking-wider text-slate-100 border border-white/10">
                      {course.schoolName[locale]}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {course.isMandatory && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500 text-white shadow-xs">
                          Obrigatório
                        </span>
                      )}
                      {course.badgeCode && (
                        <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-blue-950/80 text-cyan-300 border border-cyan-500/30">
                          {course.badgeCode}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold opacity-95 relative z-10 text-slate-200">
                    <span className="bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">{t.common.level}: {t.common.levels[course.level]}</span>
                    <span className="bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">{t.common.modalities[course.modality as CourseModality]}</span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-base text-foreground line-clamp-2 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
                    {course.title[locale]}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                    {course.description[locale]}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-orange-500" />
                      <span>{course.workloadHours} {t.common.hours}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                      <span>{course.lessonsCount} {t.common.lessons}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Certificado</span>
                    </div>
                  </div>

                  {course.mandatoryFor.length > 0 && (
                    <div className="pt-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                        Exigido para:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {course.mandatoryFor.map((role) => (
                          <span
                            key={role}
                            className="text-[10px] px-1.5 py-0.5 rounded bg-secondary font-medium text-foreground"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/catalogo/${course.id}`}
                  className="w-full py-2.5 px-4 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <span>Ver Detalhes do Curso</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl border border-dashed border-border bg-card text-muted-foreground space-y-4">
          <BookOpen className="w-10 h-10 text-muted-foreground mx-auto" />
          <div className="space-y-1">
            <h3 className="font-bold text-foreground text-base">{t.catalog.emptyStateTitle}</h3>
            <p className="text-xs max-w-md mx-auto leading-relaxed">{t.catalog.emptyState}</p>
          </div>
          <button
            onClick={handleClearFilters}
            className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold inline-flex items-center gap-1.5 shadow-sm transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.catalog.clearFilters}</span>
          </button>
        </div>
      )}
    </div>
  );
}
