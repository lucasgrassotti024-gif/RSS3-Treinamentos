"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { CertificateDemonstration } from "@/types";
import {
  X,
  Printer,
  ShieldCheck,
  CheckCircle2,
  Clock,
  QrCode,
} from "lucide-react";

interface CertificateModalProps {
  certificate: CertificateDemonstration | null;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  const printRef = useRef<HTMLDivElement>(null);

  if (!certificate) return null;

  const handlePrint = () => {
    window.print();
  };

  const formattedDate = new Date(certificate.issuedAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white">
      {/* Botões Flutuantes de Ação (Ocultos na impressão) */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 print:hidden">
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-lg transition-colors cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>Imprimir / Salvar PDF</span>
        </button>
        <button
          onClick={onClose}
          className="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Cartão do Certificado */}
      <div
        ref={printRef}
        className="w-full max-w-4xl bg-white text-slate-900 rounded-3xl border-8 border-double border-slate-200 shadow-2xl overflow-hidden relative print:border-4 print:shadow-none print:max-w-none print:w-full print:rounded-none my-auto"
      >
        {/* Marca d'água permanente de Ambiente Demonstrativo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5 z-0">
          <span className="text-6xl sm:text-7xl font-black uppercase transform -rotate-25 tracking-widest text-slate-900 whitespace-nowrap">
            DOCUMENTO DEMONSTRATIVO — SEM VALIDADE LEGAL
          </span>
        </div>

        {/* Faixa Superior Institucional */}
        <div className="h-4 bg-gradient-to-r from-blue-900 via-blue-600 to-orange-500" />

        <div className="p-8 sm:p-12 relative z-10 flex flex-col justify-between min-h-[580px]">
          {/* Header do Certificado */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-200 pb-6 gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center font-black text-xl shadow-md">
                RSS3
              </div>
              <div>
                <h3 className="font-extrabold text-base tracking-tight text-slate-900">
                  RSS3 Soluções Industriais LTDA.
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Portal Corporativo de Treinamentos Técnicos e Segurança Operacional
                </p>
              </div>
            </div>

            <div className="text-center sm:text-right">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-2xs font-bold border border-blue-200">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>REGISTRO ELETRÔNICO OFICIAL</span>
              </span>
              <p className="text-3xs font-mono text-slate-400 mt-1">
                {certificate.validationCode}
              </p>
            </div>
          </div>

          {/* Corpo do Certificado */}
          <div className="my-8 text-center space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold tracking-widest uppercase text-blue-600">
                Certificado de Conclusão Teórica
              </span>
              <h1 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
                CERTIFICAMOS QUE
              </h1>
            </div>

            {/* Nome em Destaque */}
            <div className="py-2 border-b-2 border-slate-900 max-w-lg mx-auto">
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-wide">
                {certificate.userName}
              </p>
              <p className="text-xs text-slate-500 font-medium mt-1">
                {certificate.userRole} • {certificate.department} — {certificate.operationalBase}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
              concluiu com êxito todos os módulos e avaliações do curso de aperfeiçoamento profissional:
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-xl mx-auto shadow-inner">
              <h2 className="text-lg sm:text-xl font-bold text-blue-950">
                {certificate.courseTitle["pt-BR"]}
              </h2>
              <div className="flex items-center justify-center gap-4 text-xs font-semibold text-slate-600 mt-2">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-orange-500" />
                  Carga Horária: {certificate.workloadHours} Horas
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Aproveitamento: {certificate.scorePercent || 100}%
                </span>
              </div>
            </div>

            {/* Aviso Obrigatório de Conformidade Regulatória e Validade de Reciclagem (AGENTS.md) */}
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-3xs sm:text-2xs text-left max-w-2xl mx-auto leading-relaxed space-y-1">
              <div>
                <strong>Aviso de Conformidade Regulatória (NRs):</strong> Este certificado comprova a conclusão da etapa teórica e domínio dos procedimentos operacionais da disciplina. Habilitações operacionais formais para trabalho de alto risco (ex: NR-35, NR-33, NR-10) exigem complementação prática presencial validada por instrutor credenciado e ASO vigente.
              </div>
              <div className="text-[11px] font-semibold text-amber-800 pt-1 border-t border-amber-200/80 flex items-center justify-between">
                <span>Prazo Recomendado de Reciclagem Periódica: <strong>Bienal (24 Meses)</strong></span>
                <span>Validade Teórica Sugerida: <strong>{new Date(new Date(certificate.issuedAt).setFullYear(new Date(certificate.issuedAt).getFullYear() + 2)).toLocaleDateString("pt-BR")}</strong></span>
              </div>
            </div>
          </div>

          {/* Rodapé de Validação e Assinaturas */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <p className="text-xs font-bold text-slate-800">
                Emitido em: {formattedDate}
              </p>
              <p className="text-2xs text-slate-500 mt-0.5">
                Código Canônico: <span className="font-mono font-bold text-slate-800">{certificate.validationCode}</span>
              </p>
              <p className="text-3xs text-slate-400 mt-1">
                Autenticado via SHA-256 canônico • RSS3 Treinamentos
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="w-40 border-b border-slate-800 mb-1"></div>
                <p className="text-2xs font-bold text-slate-800">Coordenação Pedagógica</p>
                <p className="text-3xs text-slate-500">RSS3 Treinamentos</p>
              </div>

              <Link
                href={`/validar?codigo=${encodeURIComponent(certificate.validationCode)}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Auditar no Validador Oficial"
                className="w-16 h-16 rounded-xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center text-slate-500 p-1 shrink-0 hover:bg-blue-50 hover:border-blue-300 transition-colors group cursor-pointer"
              >
                <QrCode className="w-8 h-8 text-slate-700 group-hover:text-blue-600" />
                <span className="text-[8px] font-mono font-bold group-hover:text-blue-600">VALIDAÇÃO</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Faixa Inferior */}
        <div className="h-2 bg-slate-900" />
      </div>
    </div>
  );
}
