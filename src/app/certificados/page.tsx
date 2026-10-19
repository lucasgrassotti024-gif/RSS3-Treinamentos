"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/app-context";
import { getStoredCertificates } from "@/lib/progress";
import { CertificateDemonstration } from "@/types";
import {
  Award,
  ShieldCheck,
  Search,
  ExternalLink,
  Printer,
  Clock,
  Building2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import CertificateModal from "@/components/certificate-modal";

export default function CertificadosPage() {
  const { currentUser, t } = useApp();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCert, setSelectedCert] = useState<CertificateDemonstration | null>(null);

  // Buscar certificados emitidos
  const [certificates] = useState<CertificateDemonstration[]>(() =>
    getStoredCertificates()
  );

  const filteredCerts = certificates.filter((c) => {
    const title = c.courseTitle["pt-BR"] || "";
    const code = c.validationCode || "";
    const user = c.userName || "";
    const term = searchTerm.toLowerCase();
    return (
      title.toLowerCase().includes(term) ||
      code.toLowerCase().includes(term) ||
      user.toLowerCase().includes(term)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      {/* Header Visual da Galeria */}
      <section className="bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950 text-white py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden border-b border-blue-900/60">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/60 border border-blue-700/60 text-blue-200 text-xs font-semibold backdrop-blur-xs">
              <Award className="w-4 h-4 text-orange-400" />
              <span>Conquistas e Habilitações Teóricas</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Galeria de Certificados
            </h1>

            <p className="text-sm sm:text-base text-blue-200/90 leading-relaxed">
              Consulte, visualize e imprima seus certificados de conclusão emitidos pela <strong>RSS3 Treinamentos</strong> com autenticação canônica auditável.
            </p>
          </div>

          {/* Atalho para Validador Público */}
          <Link
            href="/validar"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-colors backdrop-blur shrink-0 self-start md:self-auto"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Validador Público de Certificados</span>
            <ArrowRight className="w-4 h-4 text-white/70" />
          </Link>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex-1 space-y-6">
        {/* Aviso de Conformidade Regulatória (AGENTS.md) */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong>Aviso de Conformidade Regulatória:</strong> Os certificados emitidos no portal atestam a conclusão e aproveitamento na ementa teórica EAD. Habilitações operacionais formais para frentes regulamentadas (ex: NR-35, NR-33, NR-10) demandam homologação prática presencial em campo com instrutor credenciado e ASO vigente.
          </div>
        </div>

        {/* Barra de Filtro e Busca */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por curso, código ou nome..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
            />
          </div>

          <div className="text-xs text-slate-500 self-end sm:self-auto font-medium">
            Total emitido: <strong className="text-slate-900 dark:text-white font-bold">{filteredCerts.length}</strong> certificado(s)
          </div>
        </div>

        {/* Grid de Certificados */}
        {filteredCerts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group hover:border-blue-500/50"
              >
                {/* Faixa decorativa superior */}
                <div className="h-2.5 bg-gradient-to-r from-blue-900 via-blue-600 to-orange-500" />

                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-2xs font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300">
                        {cert.schoolName["pt-BR"]}
                      </span>
                      <span className="text-3xs font-mono text-slate-400 truncate max-w-[150px]">
                        {cert.validationCode}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {cert.courseTitle["pt-BR"]}
                    </h3>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      <div className="font-semibold text-slate-900 dark:text-white truncate">
                        {cert.userName}
                      </div>
                      <div className="text-2xs text-slate-500 flex items-center gap-1.5 truncate">
                        <Building2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{cert.operationalBase}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-orange-500" />
                        {cert.workloadHours} horas
                      </span>
                      <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Aproveitamento: {cert.scorePercent || 100}%
                      </span>
                    </div>
                  </div>

                  {/* Ações do Card */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>Visualizar / PDF</span>
                    </button>

                    <Link
                      href={`/validar?codigo=${encodeURIComponent(cert.validationCode)}`}
                      className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                      title="Validar Código Publicamente"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Estado Vazio */
          <div className="p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-4 max-w-lg mx-auto shadow-xs">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
              <GraduationCap className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {searchTerm ? "Nenhum certificado correspondente" : "Nenhum certificado emitido ainda"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {searchTerm
                  ? "Tente buscar por outro termo ou limpe o campo de busca."
                  : "Conclua 100% das aulas de um curso e atinja mais de 70% na avaliação final para emitir seu primeiro certificado oficial."}
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/catalogo"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
              >
                <span>Ver Cursos Disponíveis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* Modal de Certificado */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </div>
  );
}
