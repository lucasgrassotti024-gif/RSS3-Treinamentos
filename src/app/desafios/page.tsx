"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/app-context";
import { getAllCourseExamTracks, UnifiedCourseExamTrack } from "@/lib/all-courses-exams";
import {
  Trophy,
  Flame,
  Search,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  HelpCircle,
  GraduationCap,
  Clock,
  Video,
  PlayCircle,
  Lightbulb,
  Check,
} from "lucide-react";
import { CourseReferenceTables } from "@/components/course-reference-tables";

export default function DesafiosPage() {
  const { locale } = useApp();
  const allTracks = getAllCourseExamTracks();
  const [selectedTrack, setSelectedTrack] = useState<UnifiedCourseExamTrack | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showTipsForQuestion, setShowTipsForQuestion] = useState<Record<string, boolean>>({});

  const filteredTracks =
    selectedCategory === "all"
      ? allTracks
      : allTracks.filter((t) => t.category === selectedCategory);

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (submitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const toggleTips = (questionId: string) => {
    setShowTipsForQuestion((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const calculateScore = (track: UnifiedCourseExamTrack) => {
    let correct = 0;
    track.questions.forEach((q) => {
      const selected = userAnswers[q.id];
      const correctOpt = q.options.find((o) => o.isCorrect);
      if (selected && correctOpt && selected === correctOpt.id) {
        correct++;
      }
    });
    return {
      correct,
      total: track.questions.length,
      percent: Math.round((correct / (track.questions.length || 1)) * 100),
    };
  };

  const handleResetChallenge = () => {
    setUserAnswers({});
    setSubmitted(false);
    setShowTipsForQuestion({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex-1 bg-slate-50 dark:bg-slate-950 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Cabeçalho da Página */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-blue-900/40">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
              <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
              <span>
                {locale === "en"
                  ? "Field Challenges & Course Exams"
                  : locale === "es"
                  ? "Desafíos de Campo y Evaluaciones de Cursos"
                  : "Desafios de Campo & Provas por Curso"}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {locale === "en"
                ? "Official Exams & Diagnostic Challenges (All 21 Courses)"
                : locale === "es"
                ? "Pruebas Oficiales y Desafíos de Diagnóstico (Todos los 21 Cursos)"
                : "Provas & Desafios Práticos por Curso (Todos os 21 Cursos)"}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {locale === "en"
                ? "Every RSS3 course features its complete exam and practical cases here. Read real field scenarios, research externally via recommended channels and Google terms, and validate your competence."
                : locale === "es"
                ? "Cada curso de RSS3 tiene aquí su examen completo y casos prácticos. Lee escenarios reales de campo, investiga afuera con canales recomendados y términos de búsqueda, y valida tu competencia."
                : "Cada um dos cursos da RSS3 possui sua prova completa e desafios práticos aqui. Leia as histórias e situações reais de campo, pesquise fora se precisar com nossos canais recomendados e termos de busca, e teste seu conhecimento real."}
            </p>
          </div>
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-10 pointer-events-none">
            <Trophy className="w-80 h-80 text-blue-400" />
          </div>
        </div>

        {/* Visão de Execução de um Desafio */}
        {selectedTrack ? (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            {/* Barra Superior de Navegação / Voltar para os Cards */}
            <div className="flex items-center justify-between bg-white dark:bg-slate-900 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <button
                onClick={() => {
                  setSelectedTrack(null);
                  handleResetChallenge();
                }}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 transition-all cursor-pointer shadow-xs border border-slate-300/70 dark:border-slate-700"
              >
                <ArrowLeft className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>
                  {locale === "en"
                    ? "Back to All Course Cards"
                    : locale === "es"
                    ? "Volver a Todos los Cursos"
                    : "← Voltar para a Página de Cursos (Cards)"}
                </span>
              </button>

              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span>Modo Prova & Desafio:</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">{selectedTrack.title[locale]}</span>
              </div>
            </div>

            {/* Topo do Desafio */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-600 text-white">
                    {selectedTrack.badgeCode}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {selectedTrack.title[locale]}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  {selectedTrack.summary[locale]}
                </p>
              </div>

              <div className="flex items-center gap-3 self-start sm:self-auto shrink-0">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                  {selectedTrack.difficulty}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedTrack.workloadMinutes} min
                </span>
              </div>
            </div>

            {/* Guia de Estudo: Canais e Pesquisa para este Curso */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900/10 via-slate-900/5 to-blue-900/10 border border-blue-200/80 dark:border-blue-900/50 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold text-blue-950 dark:text-blue-200">
                  <PlayCircle className="w-5 h-5 text-red-600" />
                  <span>Onde Estudar e Pesquisar para este Tema (Canais & Termos)</span>
                </div>
                <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  {selectedTrack.channels.length} canais indicados
                </span>
              </div>

              {/* Grid de Canais */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {selectedTrack.channels.map((ch, chIdx) => (
                  <a
                    key={chIdx}
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-400 dark:hover:border-red-500 transition-all flex items-start justify-between gap-2 group shadow-xs"
                  >
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400">
                        {ch.name}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                        {ch.focus}
                      </p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-500 shrink-0 mt-0.5" />
                  </a>
                ))}
              </div>

              {/* Termos de Busca Recomendados no Google / YouTube */}
              <div className="pt-2 border-t border-blue-200/50 dark:border-blue-900/40 text-xs text-slate-700 dark:text-slate-300">
                <p className="font-semibold flex items-center gap-1.5 mb-1 text-slate-800 dark:text-slate-200">
                  <Search className="w-3.5 h-3.5 text-blue-500" />
                  <span>Termos exatos para pesquisar no Google / YouTube se tiver dúvidas:</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedTrack.searchTerms.map((term, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-[11px] text-slate-800 dark:text-slate-200"
                    >
                      &quot;{term}&quot;
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tabelas de Apoio Oficial (para cursos que requerem análise de dados: Excel, Power BI) */}
            <CourseReferenceTables courseId={selectedTrack.courseId} />

            {/* Questões em Formato de História / Situação Prática */}
            <div className="space-y-6">
              {selectedTrack.questions.map((q, idx) => {
                const selectedOptId = userAnswers[q.id];

                return (
                  <div
                    key={q.id}
                    className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
                  >
                    {/* Cabeçalho da Questão */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md">
                          Questão {idx + 1} de {selectedTrack.questions.length}
                        </span>

                        <span className="text-xs text-slate-400 font-mono">
                          ID: {q.id}
                        </span>
                      </div>

                      {/* Enunciado Prático / História */}
                      <div className="p-5 rounded-xl bg-slate-50/80 dark:bg-slate-950/70 border border-slate-200/70 dark:border-slate-800/80 text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans whitespace-pre-line">
                        {q.question[locale]}
                      </div>
                    </div>

                    {/* Alternativas */}
                    <div className="space-y-3 pt-1">
                      {q.options.map((opt) => {
                        const isSelected = selectedOptId === opt.id;
                        let optionStyle =
                          "border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 bg-white dark:bg-slate-900";

                        if (submitted) {
                          if (opt.isCorrect) {
                            optionStyle = "border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/20";
                          } else if (isSelected && !opt.isCorrect) {
                            optionStyle = "border-red-500 bg-red-50/40 dark:bg-red-950/20";
                          } else {
                            optionStyle = "opacity-60 border-slate-200 dark:border-slate-800";
                          }
                        } else if (isSelected) {
                          optionStyle = "border-blue-600 bg-blue-50/30 dark:bg-blue-950/20 shadow-xs";
                        }

                        return (
                          <div
                            key={opt.id}
                            onClick={() => handleSelectOption(q.id, opt.id)}
                            className={`p-4 rounded-xl border text-sm transition-all cursor-pointer ${optionStyle}`}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                                  isSelected
                                    ? "border-blue-600 bg-blue-600 text-white"
                                    : "border-slate-300 dark:border-slate-700"
                                }`}
                              >
                                {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                              </div>
                              <span className="flex-1 text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                                {opt.text[locale]}
                              </span>
                            </div>

                            {/* Justificativa simples e didática */}
                            {submitted && (opt.isCorrect || isSelected) && (
                              <div
                                className={`mt-3 pt-3 border-t text-xs leading-relaxed ${
                                  opt.isCorrect
                                    ? "text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                                    : "text-red-800 dark:text-red-300 border-red-200 dark:border-red-800"
                                }`}
                              >
                                <span className="font-bold">
                                  {opt.isCorrect ? "Por que está correto: " : "Por que não é o ideal: "}
                                </span>
                                {opt.explanation[locale]}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Barra de Envio e Resultados */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              {!submitted ? (
                <>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => {
                        setSelectedTrack(null);
                        handleResetChallenge();
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Voltar para os Cards</span>
                    </button>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Respondidas:{" "}
                      <span className="font-bold text-slate-900 dark:text-slate-100">
                        {Object.keys(userAnswers).length} de {selectedTrack.questions.length}
                      </span>
                    </div>
                  </div>
                  <button
                    disabled={Object.keys(userAnswers).length < selectedTrack.questions.length}
                    onClick={() => setSubmitted(true)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white shadow-sm transition-all cursor-pointer"
                  >
                    Ver Resultado & Análise Técnica
                  </button>
                </>
              ) : (
                <>
                  {(() => {
                    const score = calculateScore(selectedTrack);
                    const passed = score.percent >= selectedTrack.passingScore;
                    return (
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2
                            className={`w-5 h-5 ${
                              passed ? "text-emerald-500" : "text-amber-500"
                            }`}
                          />
                          <span className="text-base font-bold text-slate-900 dark:text-slate-100">
                            Pontuação: {score.percent}% ({score.correct} de {score.total} corretas) — Nota de corte: {selectedTrack.passingScore}%
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {passed
                            ? "Sensacional! Você atingiu o critério de aprovação teórica da RSS3 Treinamentos."
                            : "Diagnóstico finalizado. Revise os canais recomendados e estude os tópicos para tentar novamente!"}
                        </p>
                      </div>
                    );
                  })()}
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={handleResetChallenge}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Refazer Prova</span>
                    </button>
                    <Link
                      href={`/catalogo/${selectedTrack.courseId}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow transition-all cursor-pointer"
                    >
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Ir ao Curso</span>
                    </Link>
                    <button
                      onClick={() => {
                        setSelectedTrack(null);
                        handleResetChallenge();
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                    >
                      Ver Todos os Cursos
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          /* Lista de Cards de Desafios — Estilo Idêntico aos Cursos do Catálogo */
          <div className="space-y-6">
            {/* Filtros em Pílulas */}
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
              {[
                { id: "all", label: `Todos os Cursos (${allTracks.length})` },
                { id: "seguranca", label: "Segurança & NRs" },
                { id: "mecanica", label: "Mecânica, PCM & Hidrojato" },
                { id: "aplicativos", label: "Excel, Power BI & Word" },
                { id: "gestao", label: "Gestão, Projetos & Pessoas" },
                { id: "pericia", label: "Perícia & Legal" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid com Cards com Proporção e Estilo Idênticos aos Cursos da RSS3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredTracks.map((track) => (
                <div
                  key={track.courseId}
                  onClick={() => setSelectedTrack(track)}
                  className="group flex flex-col h-full rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/90 hover:border-blue-500/60 dark:hover:border-blue-400/60 hover:shadow-md transition-all duration-200 overflow-hidden relative cursor-pointer"
                >
                  {/* Capa com Proporção 16:9 idêntica ao catálogo */}
                  <div className="relative aspect-16/9 w-full bg-slate-950 overflow-hidden">
                    {track.coverImage ? (
                      <Image
                        src={track.coverImage}
                        alt={track.title[locale]}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-r ${track.thumbnailGradient}`} />
                    )}

                    {/* Gradiente inferior */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

                    {/* Badge do Código / Sigla */}
                    <div className="absolute top-2 left-2 flex items-center gap-1 z-10">
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-white border border-white/10 tracking-wider">
                        {track.badgeCode}
                      </span>
                    </div>

                    {/* Duração & Nível */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[11px] font-medium z-10">
                      <span className="inline-flex items-center gap-1 drop-shadow-sm">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        {track.workloadMinutes} min
                      </span>
                      <span className="px-2 py-0.5 rounded bg-blue-600/80 text-[10px] font-bold uppercase backdrop-blur-xs">
                        {track.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-4 flex flex-col flex-1 justify-between space-y-3">
                    <div className="space-y-1.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        {track.schoolName[locale]}
                      </p>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {track.title[locale]}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {track.summary[locale]}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        {track.questions.length} Desafios Práticos
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                        <span>Encarar</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
