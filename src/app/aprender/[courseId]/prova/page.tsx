"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useApp } from "@/context/app-context";
import { DEMO_COURSES } from "@/lib/mock-data";
import { issueCourseCertificate, recordExamResult } from "@/lib/progress";
import { CertificateDemonstration } from "@/types";
import CertificateModal from "@/components/certificate-modal";
import { CourseReferenceTables } from "@/components/course-reference-tables";
import {
  Award,
  ArrowLeft,
  AlertTriangle,
  RotateCcw,
  FileCheck2,
  Clock,
  Timer,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

export default function CourseExamPage() {
  const params = useParams();
  const courseId = params?.courseId as string;
  const { locale } = useApp();

  const course = DEMO_COURSES.find((c) => c.id === courseId);
  const exam = course?.finalAssessment;

  // Estado para armazenar respostas selecionadas: { "q-1": "q1-a", ... }
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [issuedCert, setIssuedCert] = useState<CertificateDemonstration | null>(null);

  // Temporizador da avaliação (ex: 30 minutos regressivos)
  const estimatedSeconds = (exam?.estimatedMinutes || 25) * 60;
  const [secondsLeft, setSecondsLeft] = useState(estimatedSeconds);

  React.useEffect(() => {
    if (submitted) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [submitted]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  if (!course || !exam || !exam.questions || exam.questions.length === 0) {
    notFound();
  }

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (submitted) return; // Não altera após envio
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  // Cálculo da nota
  const totalQuestions = exam.questions.length;
  let correctCount = 0;

  exam.questions.forEach((q) => {
    const selectedOptionId = userAnswers[q.id];
    const correctOpt = q.options.find((o) => o.isCorrect);
    if (selectedOptionId && correctOpt && selectedOptionId === correctOpt.id) {
      correctCount++;
    }
  });

  const scorePercent = Math.round((correctCount / totalQuestions) * 100);
  const passingScore = exam.passingScorePercent || 70;
  const isApproved = scorePercent >= passingScore;
  const allAnswered = Object.keys(userAnswers).length === totalQuestions;

  const handleReset = () => {
    setUserAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Topo / Voltar */}
        <div className="flex items-center justify-between">
          <Link
            href={`/catalogo/${course.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para Detalhes do Curso</span>
          </Link>

          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300">
            {course.schoolName[locale]}
          </span>
        </div>

        {/* Header da Prova */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1.5">
                <FileCheck2 className="w-4 h-4" />
                <span>Exame Oficial de Conclusão Teórica</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                {exam.title[locale]}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
                {exam.description[locale]}
              </p>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0">
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Questões</p>
                <p className="text-lg font-black text-slate-900 dark:text-white">{totalQuestions}</p>
              </div>
              <div className="h-7 w-px bg-slate-200 dark:bg-slate-700" />
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Nota de Corte</p>
                <p className="text-lg font-black text-emerald-600 dark:text-emerald-400">{passingScore}%</p>
              </div>
              <div className="h-7 w-px bg-slate-200 dark:bg-slate-700" />
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Tempo Restante</p>
                <p className={`text-lg font-black font-mono ${secondsLeft < 300 ? "text-red-600 animate-pulse" : "text-blue-600 dark:text-blue-400"}`}>
                  {formatTimer(secondsLeft)}
                </p>
              </div>
            </div>
          </div>

          {/* Banner de Resultado pós-envio */}
          {submitted && (
            <div
              className={`mt-6 p-6 rounded-2xl border ${
                isApproved
                  ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100"
                  : "bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-800 text-red-900 dark:text-red-100"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${
                      isApproved ? "bg-emerald-600 text-white" : "bg-red-600 text-white"
                    }`}
                  >
                    {isApproved ? <Award className="w-7 h-7" /> : <AlertTriangle className="w-7 h-7" />}
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold">
                      {isApproved
                        ? "Parabéns! Você foi APROVADO na Avaliação Técnica!"
                        : "Nota Insuficiente para Certificação Teórica"}
                    </h2>
                    <p className="text-xs sm:text-sm mt-0.5 opacity-90 leading-relaxed">
                      {isApproved
                        ? `Você acertou ${correctCount} de ${totalQuestions} questões (${scorePercent}% de aproveitamento), superando a nota de corte de ${passingScore}%. Seu Certificado Oficial RSS3 foi emitido e você recebeu +250 XP!`
                        : `Você atingiu ${scorePercent}% de aproveitamento (${correctCount}/${totalQuestions} acertos). A nota mínima para aprovação é ${passingScore}%. Analise as fundamentações técnicas abaixo e revise os módulos correspondentes antes de uma nova tentativa.`}
                    </p>

                    {/* Recomendação de Estudo Personalizada */}
                    {!isApproved && (
                      <div className="mt-3 p-3 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-red-200 dark:border-red-900/40 text-xs text-red-950 dark:text-red-200 space-y-1">
                        <div className="font-bold flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-red-600" />
                          <span>Direcionamento Pedagógico para Revisão:</span>
                        </div>
                        <p className="text-2xs opacity-80 leading-relaxed">
                          Recomendamos rever com especial atenção as aulas do curso que tratam dos procedimentos operacionais e critérios regulamentares destacados em vermelho abaixo.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 flex-wrap">
                  {isApproved && (
                    <>
                      {issuedCert && (
                        <button
                          onClick={() => setIssuedCert(issuedCert)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors shadow-xs cursor-pointer"
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>Ver Certificado Agora</span>
                        </button>
                      )}
                      <Link
                        href="/dashboard"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors shadow-xs"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>Ir para o Dashboard</span>
                      </Link>
                    </>
                  )}
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-current text-xs font-bold hover:bg-slate-50 transition-colors cursor-pointer shadow-xs"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Tentar Novamente</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tabelas de Referência Oficiais (Excel, Power BI) */}
        <CourseReferenceTables courseId={courseId} />

        {/* Lista de Questões */}
        <div className="space-y-6">
          {exam.questions.map((question, qIdx) => {
            const selectedOptId = userAnswers[question.id];
            const correctOpt = question.options.find((o) => o.isCorrect);

            return (
              <div
                key={question.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs space-y-4"
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {qIdx + 1}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {question.question[locale]}
                  </h3>
                </div>

                {/* Opções de Resposta */}
                <div className="space-y-2.5 pt-2">
                  {question.options.map((opt) => {
                    const isSelected = selectedOptId === opt.id;

                    let btnStyle =
                      "border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200";

                    if (isSelected && !submitted) {
                      btnStyle =
                        "border-blue-600 bg-blue-50/70 dark:bg-blue-950/60 text-blue-900 dark:text-blue-200 font-semibold";
                    }

                    if (submitted) {
                      if (opt.isCorrect) {
                        btnStyle =
                          "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold";
                      } else if (isSelected && !opt.isCorrect) {
                        btnStyle =
                          "border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200 font-semibold";
                      } else {
                        btnStyle =
                          "opacity-50 border-slate-200 dark:border-slate-800 text-slate-400";
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        disabled={submitted}
                        onClick={() => handleSelectOption(question.id, opt.id)}
                        className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                      >
                        <div className="shrink-0 w-5 h-5 rounded-full border border-current flex items-center justify-center font-bold text-2xs mt-0.5">
                          {isSelected ? (
                            <div className="w-2.5 h-2.5 rounded-full bg-current" />
                          ) : null}
                        </div>
                        <span className="flex-1 leading-relaxed">
                          {opt.text[locale]}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Justificativa Técnica pós-envio */}
                {submitted && correctOpt && (
                  <div
                    className={`p-3.5 rounded-xl text-xs leading-relaxed animate-in fade-in duration-200 ${
                      selectedOptId === correctOpt.id
                        ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60"
                        : "bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60"
                    }`}
                  >
                    <strong>
                      {selectedOptId === correctOpt.id ? "✓ Resposta Correta:" : "Fundamentação Técnica:"}
                    </strong>{" "}
                    {correctOpt.explanation[locale]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Rodapé de Envio da Prova */}
        {!submitted ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm sticky bottom-4 z-20">
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">
                Progresso do Preenchimento: {Object.keys(userAnswers).length} de {totalQuestions} questões respondidas
              </p>
              <p className="text-2xs text-slate-500 dark:text-slate-400 mt-0.5">
                Revise suas respostas com atenção antes de finalizar o exame.
              </p>
            </div>

            <button
              type="button"
              disabled={!allAnswered}
              onClick={() => {
                setSubmitted(true);
                recordExamResult(course.id, scorePercent, isApproved);
                if (isApproved && course) {
                  const cert = issueCourseCertificate(course, scorePercent);
                  setIssuedCert(cert);
                }
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md ${
                allAnswered
                  ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer hover:shadow-lg"
                  : "bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
              }`}
            >
              {allAnswered ? "Finalizar e Corrigir Avaliação" : "Responda Todas as Questões"}
            </button>
          </div>
        ) : (
          <div className="text-center pt-4 pb-10">
            <Link
              href={`/catalogo/${course.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retornar ao Catálogo do Curso</span>
            </Link>
          </div>
        )}
        {/* Modal de Certificado */}
        {issuedCert && (
          <CertificateModal
            certificate={issuedCert}
            onClose={() => setIssuedCert(null)}
          />
        )}
      </div>
    </div>
  );
}
