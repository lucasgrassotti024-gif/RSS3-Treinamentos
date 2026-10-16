"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useApp } from "@/context/app-context";
import { DEMO_MBAS } from "@/lib/mock-data";
import {
  GraduationCap,
  ArrowLeft,
  Settings,
  Award,
  FileText,
  Droplets,
  User,
  ChevronDown,
  BookOpen,
  Clock,
} from "lucide-react";

export default function MbaDetailPage() {
  const params = useParams();
  const mbaId = params?.mbaId as string;
  const { locale } = useApp();

  // Estado para controlar dropdowns de "Conteúdo" abertos
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  const mba = DEMO_MBAS.find((item) => item.id === mbaId);

  if (!mba) {
    notFound();
  }

  const toggleDropdown = (courseId: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  return (
    <div className="flex-1 bg-slate-100/60 dark:bg-slate-950 min-h-screen">
      {/* Header do MBA */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 lg:px-10 py-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/mbas"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar para todos os MBAs
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{mba.category[locale]}</span>
              </div>
              <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white">
                {mba.title[locale]}
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl">
                {mba.description[locale]}
              </p>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0">
              <div className="text-right">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Carga Total</p>
                <p className="text-base font-extrabold text-slate-900 dark:text-white">{mba.totalHours} Horas</p>
              </div>
              <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />
              <div className="text-right">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Cursos</p>
                <p className="text-base font-extrabold text-slate-900 dark:text-white">{mba.courses.length} Etapas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Cursos dentro do MBA (Idêntico ao FM2S das Imagens 1 e 2) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mba.courses.map((item, index) => {
            const isDropdownOpen = !!openDropdowns[item.id];
            // Se for o curso real de hidrojato, podemos direcionar para a rota real de aprendizado
            const courseTargetUrl = item.courseId
              ? `/aprender/${item.courseId}`
              : `#`;

            // Progresso individual do curso do MBA (fictício/inicial 0%)
            const progressPercent = 0;

            return (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
              >
                {/* Banner do Card (Idêntico ao FM2S) */}
                <div className="relative h-48 bg-slate-100 dark:bg-slate-800 flex overflow-hidden">
                  {/* Faixa lateral colorida com ícone (como na Imagem 2 do FM2S com o selo/engrenagem na faixa azul/verde) */}
                  <div
                    className="w-1/3 h-full flex items-center justify-center p-4 relative"
                    style={{ backgroundColor: item.accentColor || "#0284c7" }}
                  >
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-xs shadow-inner">
                      {item.iconType === "gear" && <Settings className="w-8 h-8 text-white" />}
                      {item.iconType === "award" && <Award className="w-8 h-8 text-white" />}
                      {item.iconType === "document" && <FileText className="w-8 h-8 text-white" />}
                      {item.iconType === "droplet" && <Droplets className="w-8 h-8 text-white" />}
                      {(!item.iconType || item.iconType === "user") && <User className="w-8 h-8 text-white" />}
                    </div>
                  </div>

                  {/* Lado Direito do Banner: Título formatado e Logo RSS3 */}
                  <div className="w-2/3 h-full bg-slate-200/60 dark:bg-slate-800/90 p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                        Etapa 0{index + 1}
                      </span>
                      <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug line-clamp-3">
                        {item.title[locale]}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-semibold text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-300/40 dark:border-slate-700/60">
                      <span>{item.workloadHours}h</span>
                      <span className="text-orange-600 dark:text-orange-400 font-bold">
                        RSS3
                      </span>
                    </div>
                  </div>
                </div>

                {/* Área Inferior do Card */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  {/* Título do Curso Centralizado */}
                  <div className="text-center min-h-[44px] flex items-center justify-center">
                    <h4 className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer line-clamp-2">
                      {item.title[locale]}
                    </h4>
                  </div>

                  {/* Barra de Progresso + % */}
                  <div className="mt-4">
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-1.5">
                      <div
                        className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <div className="text-right text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      {progressPercent}%
                    </div>
                  </div>

                  {/* Ações (Acessar + Conteúdo ⌵ OU Conteúdo não liberado) */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    {item.isUnlocked ? (
                      <div className="flex items-center justify-center gap-3 relative">
                        {item.courseId ? (
                          <Link
                            href={courseTargetUrl}
                            className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 py-1.5 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
                          >
                            Acessar
                          </Link>
                        ) : (
                          <button
                            type="button"
                            onClick={() => alert("Este módulo complementar será disponibilizado nas próximas aulas da grade do MBA.")}
                            className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 py-1.5 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors cursor-pointer"
                          >
                            Acessar
                          </button>
                        )}

                        {/* Botão de Conteúdo com Dropdown */}
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => toggleDropdown(item.id)}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 py-1.5 px-3 rounded-lg transition-colors cursor-pointer"
                          >
                            <span>Conteúdo</span>
                            <ChevronDown
                              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                isDropdownOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* Popover do Conteúdo do Curso */}
                          {isDropdownOpen && (
                            <div className="absolute right-0 bottom-full mb-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-3 z-30 animate-in fade-in zoom-in-95 duration-150">
                              <p className="text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                                Ementa & Estrutura:
                              </p>
                              <p className="text-[11px] text-slate-600 dark:text-slate-300 mb-2 leading-relaxed">
                                {item.description?.[locale] || "Conteúdo formatado conforme diretrizes industriais."}
                              </p>
                              <div className="space-y-1 text-[11px] text-slate-500 dark:text-slate-400">
                                <div className="flex items-center gap-1.5">
                                  <BookOpen className="w-3 h-3 text-blue-500" />
                                  <span>{item.modulesCount || 2} Módulos Técnicos</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <Clock className="w-3 h-3 text-emerald-500" />
                                  <span>{item.lessonsCount || 4} Aulas e Avaliações</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* Estado Bloqueado: Botão largo "Conteúdo não liberado" (Como na Imagem 1 do FM2S) */
                      <div className="w-full">
                        <button
                          type="button"
                          disabled
                          className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 text-xs font-bold text-center cursor-not-allowed border border-slate-200 dark:border-slate-700/60"
                        >
                          Conteúdo não liberado
                        </button>
                        {item.unlockedReason && (
                          <p className="text-[10px] text-center text-slate-400 mt-1 line-clamp-1">
                            {item.unlockedReason[locale]}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
