"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/app-context";
import { DEMO_MBAS } from "@/lib/mock-data";
import { GraduationCap, BookOpen, Clock } from "lucide-react";

export default function MbasPage() {
  const { locale } = useApp();

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Header Estilo FM2S */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 lg:px-10 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Formação Executiva & Técnica Avançada</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            MBAs e Programas Integrados
          </h1>
          <p className="text-sm lg:text-base text-slate-600 dark:text-slate-400 mt-1 max-w-3xl">
            Uma formação completa e organizada para o desenvolvimento de competências operacionais de alta criticidade, na sequência ideal para sua carreira.
          </p>
        </div>
      </div>

      {/* Grid de MBAs (Idêntico ao Card do FM2S da Imagem 3) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEMO_MBAS.map((mba) => {
            // Em ambiente demonstrativo / piloto de teste, calculamos progresso inicial
            const progressPercent = 0;

            return (
              <div
                key={mba.id}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group"
              >
                {/* Banner do Topo com Faixa Lateral Vermelha (Estilo FM2S) */}
                <div className="relative h-44 bg-slate-900 dark:bg-slate-950 flex items-center justify-center p-6 overflow-hidden">
                  {/* Faixa Vermelha/Laranja na lateral esquerda superior */}
                  <div
                    className="absolute top-0 left-0 bottom-0 w-2.5"
                    style={{ backgroundColor: mba.accentColor || "#ef4444" }}
                  />

                  {/* Fundo Gradiente Industrial */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 opacity-95" />

                  {/* Detalhes de Background Sutil */}
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-blue-500/10 blur-xl pointer-events-none" />

                  {/* Conteúdo do Banner */}
                  <div className="relative z-10 w-full pl-3 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-white/10 text-white backdrop-blur-xs">
                        {mba.category[locale]}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {mba.totalHours}h
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-white leading-tight drop-shadow-xs">
                        {mba.title[locale]}
                      </h3>
                      {mba.subtitle && (
                        <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                          {mba.subtitle[locale]}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" />
                        {mba.courses.length} Cursos Integrados
                      </span>
                      <span className="text-orange-400 font-bold tracking-wider">
                        RSS3 TREINAMENTOS
                      </span>
                    </div>
                  </div>
                </div>

                {/* Corpo do Card com Descrição e Progresso */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1 mb-2">
                      {mba.title[locale]}
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-4">
                      {mba.description[locale]}
                    </p>
                  </div>

                  {/* Barra de Progresso estilo FM2S */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        Progresso
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white">
                        {progressPercent.toFixed(2).replace(".", ",")}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>

                    {/* Botão Acessar Centralizado (Estilo FM2S) */}
                    <div className="mt-5 text-center">
                      <Link
                        href={`/mbas/${mba.id}`}
                        className="inline-flex items-center justify-center font-bold text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors py-2 px-6 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/40"
                      >
                        Acessar
                      </Link>
                    </div>
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
