"use client";

import React from "react";
import { FileSpreadsheet, Database, Table2 } from "lucide-react";

interface CourseReferenceTablesProps {
  courseId: string;
}

export function CourseReferenceTables({ courseId }: CourseReferenceTablesProps) {
  const isExcel = courseId.includes("excel");
  const isPowerBi = courseId.includes("power-bi") || courseId.includes("powerbi");

  if (!isExcel && !isPowerBi) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Tabela de Apoio Oficial de Excel */}
      {isExcel && (
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                  Tabela de Apoio da Avaliação — Ordens de Serviço (Manutenção RSS3)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Intervalo oficial A1:F14. Utilize as linhas e colunas abaixo para resolver as questões e cálculos.
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 self-start sm:self-auto">
              13 Ordens • Colunas A a F
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="px-3 py-2.5 text-center font-mono w-12 text-slate-400">#</th>
                  <th className="px-3 py-2.5">A (OS)</th>
                  <th className="px-3 py-2.5">B (Equipe)</th>
                  <th className="px-3 py-2.5">C (Área)</th>
                  <th className="px-3 py-2.5 text-right">D (Horas)</th>
                  <th className="px-3 py-2.5">E (Status)</th>
                  <th className="px-3 py-2.5 text-right">F (Custo R$)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200 font-sans">
                {[
                  { lin: "2", os: "OS-101", equipe: "Mecânica", area: "Caldeira", horas: 8, status: "Concluída", custo: "4.500,00" },
                  { lin: "3", os: "OS-102", equipe: "Elétrica", area: "Secagem", horas: 6, status: "Em Andamento", custo: "7.200,00" },
                  { lin: "4", os: "OS-103", equipe: "Hidrojato", area: "Pátio", horas: 12, status: "Pendente", custo: "3.800,00" },
                  { lin: "5", os: "OS-104", equipe: "Mecânica", area: "Secagem", horas: 10, status: "Concluída", custo: "11.200,00" },
                  { lin: "6", os: "OS-105", equipe: "Elétrica", area: "Caldeira", horas: 4, status: "Pendente", custo: "1.950,00" },
                  { lin: "7", os: "OS-106", equipe: "Hidrojato", area: "Pátio", horas: 16, status: "Em Andamento", custo: "16.400,00" },
                  { lin: "8", os: "OS-107", equipe: "Mecânica", area: "Caldeira", horas: 7, status: "Concluída", custo: "8.900,00" },
                  { lin: "9", os: "OS-108", equipe: "Elétrica", area: "Pátio", horas: 14, status: "Em Andamento", custo: "13.750,00" },
                  { lin: "10", os: "OS-109", equipe: "Hidrojato", area: "Secagem", horas: 9, status: "Concluída", custo: "5.600,00" },
                  { lin: "11", os: "OS-110", equipe: "Mecânica", area: "Pátio", horas: 11, status: "Pendente", custo: "10.200,00" },
                  { lin: "12", os: "OS-111", equipe: "Elétrica", area: "Secagem", horas: 5, status: "Concluída", custo: "3.150,00" },
                  { lin: "13", os: "OS-112", equipe: "Hidrojato", area: "Caldeira", horas: 13, status: "Em Andamento", custo: "17.800,00" },
                  { lin: "14", os: "OS-113", equipe: "Mecânica", area: "Secagem", horas: 15, status: "Pendente", custo: "6.900,00" },
                ].map((r, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-3 py-2 text-center font-mono text-[11px] text-slate-400 dark:text-slate-500 bg-slate-50/50 dark:bg-slate-900/50">{r.lin}</td>
                    <td className="px-3 py-2 font-mono font-bold text-blue-600 dark:text-blue-400">{r.os}</td>
                    <td className="px-3 py-2 font-semibold">{r.equipe}</td>
                    <td className="px-3 py-2 text-slate-600 dark:text-slate-400">{r.area}</td>
                    <td className="px-3 py-2 text-right font-mono font-bold">{r.horas} h</td>
                    <td className="px-3 py-2">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                        r.status === "Concluída"
                          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
                          : r.status === "Em Andamento"
                          ? "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300"
                          : "bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-300"
                      }`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-right font-mono">R$ {r.custo}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-slate-50 dark:bg-slate-800/50 font-bold border-t border-slate-200 dark:border-slate-700 text-[11px]">
                <tr>
                  <td colSpan={4} className="px-3 py-2 text-right uppercase tracking-wider text-slate-500">Total Geral (13 OS):</td>
                  <td className="px-3 py-2 text-right font-mono text-emerald-600 dark:text-emerald-400">138 h</td>
                  <td className="px-3 py-2"></td>
                  <td className="px-3 py-2 text-right font-mono text-emerald-600 dark:text-emerald-400">R$ 109.850,00</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}

      {/* Modelo Star Schema de Apoio Oficial de Power BI */}
      {isPowerBi && (
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                  Modelo Dimensional Star Schema da Prova — Power BI & DAX
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Relacionamento 1:N entre <code className="text-amber-700 dark:text-amber-300 font-bold">dEquip[IdEquip]</code> e <code className="text-amber-700 dark:text-amber-300 font-bold">fOS[IdEquip]</code>.
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 self-start sm:self-auto">
              1:N Star Schema
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Tabela Dimensão: dEquip */}
            <div className="lg:col-span-5 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="px-3.5 py-2 bg-slate-100 dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Table2 className="w-3.5 h-3.5 text-blue-500" />
                  Tabela Dimensão: <code>dEquip</code>
                </span>
                <span className="text-[10px] font-mono bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded">
                  4 registros (Lado 1)
                </span>
              </div>
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 dark:bg-slate-900/80 text-[10px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-3 py-2 font-mono text-amber-600 dark:text-amber-400">IdEquip (PK)</th>
                    <th className="px-3 py-2">NomeEquip</th>
                    <th className="px-3 py-2">Linha</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="px-3 py-2 font-mono font-bold text-amber-600 dark:text-amber-400">B01</td>
                    <td className="px-3 py-2 font-medium">Bomba Principal Caldeira</td>
                    <td className="px-3 py-2 text-slate-500">Linha 1</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="px-3 py-2 font-mono font-bold text-amber-600 dark:text-amber-400">B02</td>
                    <td className="px-3 py-2 font-medium">Bomba Auxiliar Caldeira</td>
                    <td className="px-3 py-2 text-slate-500">Linha 1</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="px-3 py-2 font-mono font-bold text-amber-600 dark:text-amber-400">B03</td>
                    <td className="px-3 py-2 font-medium">Compressor de Ar Industrial</td>
                    <td className="px-3 py-2 text-slate-500">Linha 2</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="px-3 py-2 font-mono font-bold text-amber-600 dark:text-amber-400">B04</td>
                    <td className="px-3 py-2 font-medium">Exaustor de Gases</td>
                    <td className="px-3 py-2 text-slate-500">Linha 2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tabela Fato: fOS */}
            <div className="lg:col-span-7 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="px-3.5 py-2 bg-slate-100 dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Table2 className="w-3.5 h-3.5 text-emerald-500" />
                  Tabela Fato: <code>fOS</code>
                </span>
                <span className="text-[10px] font-mono bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded">
                  6 registros (Lado N)
                </span>
              </div>
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 dark:bg-slate-900/80 text-[10px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-3 py-2">IdOS</th>
                    <th className="px-3 py-2 font-mono text-amber-600 dark:text-amber-400">IdEquip (FK)</th>
                    <th className="px-3 py-2">Data</th>
                    <th className="px-3 py-2 text-right">Horas</th>
                    <th className="px-3 py-2">Tipo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="px-3 py-2 font-mono font-bold text-blue-600 dark:text-blue-400">OS-01</td>
                    <td className="px-3 py-2 font-mono font-bold text-amber-600 dark:text-amber-400">B01</td>
                    <td className="px-3 py-2 text-slate-500">05/01/2026</td>
                    <td className="px-3 py-2 text-right font-mono font-bold">4 h</td>
                    <td className="px-3 py-2">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300">
                        Corretiva
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="px-3 py-2 font-mono font-bold text-blue-600 dark:text-blue-400">OS-02</td>
                    <td className="px-3 py-2 font-mono font-bold text-amber-600 dark:text-amber-400">B02</td>
                    <td className="px-3 py-2 text-slate-500">12/01/2026</td>
                    <td className="px-3 py-2 text-right font-mono font-bold">6 h</td>
                    <td className="px-3 py-2">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
                        Preventiva
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="px-3 py-2 font-mono font-bold text-blue-600 dark:text-blue-400">OS-03</td>
                    <td className="px-3 py-2 font-mono font-bold text-amber-600 dark:text-amber-400">B01</td>
                    <td className="px-3 py-2 text-slate-500">20/01/2026</td>
                    <td className="px-3 py-2 text-right font-mono font-bold">2 h</td>
                    <td className="px-3 py-2">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300">
                        Corretiva
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="px-3 py-2 font-mono font-bold text-blue-600 dark:text-blue-400">OS-04</td>
                    <td className="px-3 py-2 font-mono font-bold text-amber-600 dark:text-amber-400">B03</td>
                    <td className="px-3 py-2 text-slate-500">02/02/2026</td>
                    <td className="px-3 py-2 text-right font-mono font-bold">8 h</td>
                    <td className="px-3 py-2">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300">
                        Corretiva
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="px-3 py-2 font-mono font-bold text-blue-600 dark:text-blue-400">OS-05</td>
                    <td className="px-3 py-2 font-mono font-bold text-amber-600 dark:text-amber-400">B02</td>
                    <td className="px-3 py-2 text-slate-500">14/02/2026</td>
                    <td className="px-3 py-2 text-right font-mono font-bold">3 h</td>
                    <td className="px-3 py-2">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
                        Preventiva
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="px-3 py-2 font-mono font-bold text-blue-600 dark:text-blue-400">OS-06</td>
                    <td className="px-3 py-2 font-mono font-bold text-amber-600 dark:text-amber-400">B01</td>
                    <td className="px-3 py-2 text-slate-500">25/02/2026</td>
                    <td className="px-3 py-2 text-right font-mono font-bold">5 h</td>
                    <td className="px-3 py-2">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
                        Preventiva
                      </span>
                    </td>
                  </tr>
                </tbody>
                <tfoot className="bg-slate-50 dark:bg-slate-800/50 font-bold border-t border-slate-200 dark:border-slate-700 text-[11px]">
                  <tr>
                    <td colSpan={3} className="px-3 py-2 text-right text-slate-500 uppercase tracking-wider">Total de Horas:</td>
                    <td className="px-3 py-2 text-right font-mono text-emerald-600 dark:text-emerald-400">28 h</td>
                    <td className="px-3 py-2 text-[10px] text-slate-400 font-normal">Jan: 12h | Fev: 16h</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
