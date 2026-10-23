"use client";

import React, { useRef } from "react";
import { CourseDemonstration, Locale } from "@/types";
import {
  X,
  Printer,
  ShieldCheck,
  BookOpen,
  FileText,
  Clock,
  CheckSquare,
  AlertTriangle,
  HardHat,
  Droplets,
  Layers,
  Wrench,
  Table as TableIcon,
} from "lucide-react";

interface FieldGuideModalProps {
  course: CourseDemonstration;
  locale: Locale;
  onClose: () => void;
}

export default function FieldGuideModal({
  course,
  locale,
  onClose,
}: FieldGuideModalProps) {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const title = course.title[locale] || course.title["pt-BR"];
  const allModules = course.modules || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white print:static print:inset-auto">
      {/* Botões de Ação Superiores (Ocultos ao Imprimir) */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 print:hidden">
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold shadow-lg transition-colors cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>Salvar Guia em PDF / Imprimir</span>
        </button>
        <button
          onClick={onClose}
          className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-lg transition-colors cursor-pointer"
          title="Fechar"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Documento de Apostila / Guia de Bolso Formatado para Campo e Impressão */}
      <div
        ref={printRef}
        className="w-full max-w-4xl bg-white text-slate-900 rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto print:border-none print:shadow-none print:max-w-none print:w-full print:rounded-none print:my-0"
      >
        {/* Faixa Superior Institucional */}
        <div className="h-3 bg-gradient-to-r from-blue-900 via-blue-600 to-orange-500 print:h-2" />

        <div className="p-6 sm:p-10 space-y-8">
          {/* Cabeçalho do Procedimento Operacional / Guia de Campo */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b-2 border-slate-900 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center font-black text-xl shrink-0 print:border print:border-slate-800">
                RSS3
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-600">
                  GUIA TÉCNICO OPERACIONAL DE CAMPO • POP DE SEGURANÇA
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  {title}
                </h1>
                <p className="text-xs text-slate-600 font-medium">
                  RSS3 Soluções Industriais LTDA. • Operações Industriais Críticas
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right shrink-0 bg-slate-50 print:bg-transparent p-3 rounded-xl border border-slate-200 print:border-none text-2xs space-y-1">
              <div>
                Código: <strong className="font-mono text-slate-900">{course.badgeCode || "RSS3-POP"}</strong>
              </div>
              <div>
                Carga Teórica: <strong>{course.workloadHours}h</strong>
              </div>
              <div>
                Revisão: <strong>{course.updatedAtDate || "2026.1"}</strong>
              </div>
              <div className="text-emerald-700 font-bold flex items-center sm:justify-end gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Uso Autorizado em Campo</span>
              </div>
            </div>
          </div>

          {/* Aviso Importante de Segurança */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs leading-relaxed space-y-1 print:border-slate-400">
            <div className="font-bold flex items-center gap-1.5 text-amber-900">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Diretrizes de Campo & Conformidade Operacional</span>
            </div>
            <p className="text-[11px] text-slate-700">
              Este guia serve como material de consulta rápida e instrução de trabalho (POP) para o colaborador durante a execução dos serviços industriais. Não substitui o cumprimento rigoroso da Permissão de Trabalho (PT), Análise Preliminar de Risco (APR), uso de EPIs e ASO vigente.
            </p>
          </div>

          {/* Ementa e Conteúdo Técnico das Aulas */}
          <div className="space-y-6">
            <h2 className="text-base font-extrabold text-blue-950 uppercase tracking-wider flex items-center gap-2 border-b pb-2">
              <BookOpen className="w-4 h-4 text-orange-500" />
              <span>Módulos Técnicos e Diretrizes Práticas</span>
            </h2>

            {allModules.map((module, modIdx) => (
              <div key={module.id} className="space-y-4 pt-2">
                <div className="bg-slate-100 p-2.5 rounded-lg border border-slate-200 flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                    {module.title[locale] || module.title["pt-BR"]}
                  </h3>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase">
                    Módulo {modIdx + 1}
                  </span>
                </div>

                <div className="space-y-4 pl-2 sm:pl-4 border-l-2 border-slate-200">
                  {module.lessons.map((lesson, lesIdx) => {
                    const detail = lesson.contentDetail;

                    return (
                      <div
                        key={lesson.id}
                        className="space-y-2 pb-3 border-b border-slate-100 last:border-b-0 break-inside-avoid"
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <h4 className="text-xs font-bold text-slate-900">
                            {lesIdx + 1}. {lesson.title[locale] || lesson.title["pt-BR"]}
                          </h4>
                          <span className="text-[10px] text-slate-500 font-mono shrink-0">
                            {lesson.durationMinutes} min
                          </span>
                        </div>

                        {detail?.objective && (
                          <p className="text-[11px] text-slate-700 leading-relaxed italic bg-slate-50 p-2 rounded border border-slate-100">
                            <strong>Objetivo Operacional:</strong> {detail.objective[locale] || detail.objective["pt-BR"]}
                          </p>
                        )}

                        {detail?.sections && detail.sections.length > 0 && (
                          <div className="space-y-2 pt-1">
                            {detail.sections.map((sec, sIdx) => (
                              <div key={sIdx} className="text-[11px] space-y-1">
                                <span className="font-bold text-slate-800">
                                  • {sec.title[locale] || sec.title["pt-BR"]}:
                                </span>
                                <p className="text-slate-600 pl-3 leading-relaxed whitespace-pre-line">
                                  {sec.body[locale] || sec.body["pt-BR"]}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {detail?.summaryPoints && detail.summaryPoints.length > 0 && (
                          <div className="space-y-1 pt-1">
                            <span className="text-[11px] font-bold text-slate-800">
                              Pontos de Atenção Obrigatória:
                            </span>
                            <ul className="list-disc list-inside text-[11px] text-slate-600 pl-2 space-y-0.5">
                              {detail.summaryPoints.map((pt, pIdx) => (
                                <li key={pIdx}>{pt[locale] || pt["pt-BR"]}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Tabela de Referência Rápida se houver */}
                        {detail?.table && (
                          <div className="mt-2 overflow-x-auto">
                            <table className="w-full text-left text-[10px] border border-slate-200 rounded">
                              <thead className="bg-slate-100 font-bold text-slate-800">
                                <tr>
                                  {detail.table.headers.map((h, hIdx) => (
                                    <th key={hIdx} className="p-1.5 border-b border-slate-200">
                                      {h[locale] || h["pt-BR"]}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {detail.table.rows.map((row, rIdx) => (
                                  <tr key={rIdx} className="border-b border-slate-100 last:border-b-0">
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} className="p-1.5 text-slate-700">
                                        {cell[locale] || cell["pt-BR"]}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Rodapé Institucional com Assinatura e QR de Auditoria */}
          <div className="pt-6 border-t-2 border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-2xs text-slate-500">
            <div>
              <p className="font-bold text-slate-800">
                RSS3 Treinamentos • Sistema Integrado de Gestão e Segurança
              </p>
              <p>Documento técnico liberado para consulta off-line e treinamento em frente de serviço.</p>
            </div>
            <div className="text-right font-mono font-bold text-slate-800 shrink-0">
              REV. 2026-CMPC-RSS3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
