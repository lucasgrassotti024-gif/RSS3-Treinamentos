"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getCertificateByValidationCode } from "@/lib/progress";
import { CertificateDemonstration } from "@/types";
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Building2,
  Award,
  ArrowRight,
  ExternalLink,
  Lock,
  Printer,
} from "lucide-react";
import CertificateModal from "@/components/certificate-modal";

export default function ValidarCertificadoPage() {
  const searchParams = useSearchParams();
  const initialCode = searchParams.get("codigo") || searchParams.get("code") || "";

  const [inputCode, setInputCode] = useState(initialCode);
  const [searchedCode, setSearchedCode] = useState(initialCode);
  const [result, setResult] = useState<CertificateDemonstration | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const executeSearch = (codeToSearch: string) => {
    const formatted = codeToSearch.trim().toUpperCase();
    setSearchedCode(formatted);
    if (!formatted) {
      setResult(null);
      setHasSearched(false);
      return;
    }
    const cert = getCertificateByValidationCode(formatted);
    setResult(cert);
    setHasSearched(true);
  };

  useEffect(() => {
    if (initialCode) {
      executeSearch(initialCode);
    }
  }, [initialCode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeSearch(inputCode);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      {/* Header Visual */}
      <section className="bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950 text-white py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden border-b border-blue-900/60">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-800/60 border border-blue-700/60 text-blue-200 text-xs font-semibold backdrop-blur-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Portal de Autenticidade e Conformidade Operacional</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Validação Pública de Certificados
          </h1>

          <p className="text-sm sm:text-base text-blue-200/90 max-w-2xl mx-auto leading-relaxed">
            Consulte a autenticidade de certificações teóricas emitidas pela <strong>RSS3 Treinamentos</strong> para comprovação de domínio técnico e conformidade regulatória.
          </p>

          {/* Campo de Busca por Código */}
          <form
            onSubmit={handleSubmit}
            className="pt-4 max-w-2xl mx-auto flex flex-col sm:flex-row gap-2"
          >
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                placeholder="Ex: RSS3-5S-A1B2-C3D4-E5F6"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 dark:bg-slate-900/80 border border-blue-400/30 text-white placeholder-blue-200/50 text-sm sm:text-base font-mono font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 backdrop-blur"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm sm:text-base transition-colors shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <ShieldCheck className="w-5 h-5" />
              <span>Verificar Código</span>
            </button>
          </form>
        </div>
      </section>

      {/* Área de Resultados */}
      <main className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 flex-1">
        {hasSearched ? (
          result ? (
            /* CERTIFICADO ENCONTRADO E VÁLIDO */
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
              {/* Card de Status Positivo */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-emerald-500/40 shadow-xl space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-2xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-md">
                        Documento Oficial Válido
                      </span>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
                        Certificado Registrado e Autêntico
                      </h2>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-xs text-slate-400 block font-medium">Código Canônico</span>
                    <span className="text-sm font-mono font-bold text-blue-600 dark:text-blue-400">
                      {result.validationCode}
                    </span>
                  </div>
                </div>

                {/* Dados Públicos do Certificado (Sem expor dados privados sensíveis conforme AGENTS.md) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
                    <span className="text-2xs font-bold uppercase tracking-wider text-slate-400">
                      Colaborador Certificado
                    </span>
                    <p className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">
                      {result.userName}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {result.userRole}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
                    <span className="text-2xs font-bold uppercase tracking-wider text-slate-400">
                      Treinamento Concluído
                    </span>
                    <p className="text-base sm:text-lg font-extrabold text-blue-600 dark:text-blue-400 mt-0.5">
                      {result.courseTitle["pt-BR"]}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {result.schoolName["pt-BR"]}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
                    <span className="text-2xs font-bold uppercase tracking-wider text-slate-400">
                      Carga Horária & Aproveitamento
                    </span>
                    <div className="flex items-center gap-3 text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-orange-500" />
                        {result.workloadHours} Horas
                      </span>
                      <span>•</span>
                      <span className="text-emerald-600 dark:text-emerald-400">
                        {result.scorePercent || 100}% de Nota
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
                    <span className="text-2xs font-bold uppercase tracking-wider text-slate-400">
                      Emissão & Base Operacional
                    </span>
                    <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1 space-y-0.5">
                      <p>
                        Data: {new Date(result.issuedAt).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                      <p className="text-slate-500 flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        {result.operationalBase} ({result.department})
                      </p>
                    </div>
                  </div>
                </div>

                {/* Conformidade Regulatória (AGENTS.md) */}
                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200 text-xs leading-relaxed">
                  <strong>Aviso de Conformidade Regulatória (NRs):</strong> Este registro certifica formalmente a conclusão da grade teórica na plataforma RSS3 Treinamentos. Para atividades operacionais de alto risco (ex: NR-35, NR-33, NR-10), a liberação para campo requer a respectiva validação prática presencial e ASO vigente.
                </div>

                {/* Botões de Ação */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                  >
                    <Award className="w-4 h-4" />
                    <span>Visualizar Certificado Completo</span>
                  </button>

                  <Link
                    href={`/catalogo/${result.courseId}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <span>Ver Detalhes do Curso</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            /* CERTIFICADO NÃO ENCONTRADO */
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-red-300 dark:border-red-900/60 shadow-lg text-center space-y-4 max-w-xl mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Certificado Não Localizado
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Nenhum certificado ativo foi encontrado com o código{" "}
                <span className="font-mono font-bold text-red-600 dark:text-red-400">{searchedCode}</span>.
                Certifique-se de que o código digitado está correto e completo.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setInputCode("");
                    setHasSearched(false);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Tentar Outro Código
                </button>
              </div>
            </div>
          )
        ) : (
          /* ESTADO INICIAL: ORIENTAÇÕES DE AUDITORIA */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Localize o Código
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                O código de autenticação está impresso no rodapé do certificado no padrão <code className="text-blue-600 font-mono">RSS3-XXXX-XXXX-XXXX</code>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Validação Criptográfica
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Nossos registros são validados contra os dados do colaborador no ato da conclusão com integridade e prevenção contra adulterações.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Auditoria de Clientes (CMPC)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Fiscais, técnicos de SST e líderes de contrato podem verificar a qualificação teórica em segundos de qualquer smartphone.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Modal de Certificado */}
      {modalOpen && result && (
        <CertificateModal
          certificate={result}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
