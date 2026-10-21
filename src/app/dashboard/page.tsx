"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/app-context";
import { DEMO_COURSES } from "@/lib/mock-data";
import {
  getStoredProgress,
  getServerProgressSnapshot,
  subscribeToProgress,
  calculateCourseProgressMetrics,
  getStoredCertificates,
  getServerCertificatesSnapshot,
  subscribeToCertificates,
  issueCourseCertificate,
} from "@/lib/progress";
import { CertificateDemonstration } from "@/types";
import CertificateModal from "@/components/certificate-modal";
import { FM2SCourseCard } from "@/components/fm2s-course-card";
import {
  Trophy,
  Flame,
  BookOpen,
  Award,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  PlayCircle,
  FileCheck,
  Calendar,
  Copy,
  Check,
} from "lucide-react";

export default function DashboardPage() {
  const { t, locale, currentUser } = useApp();

  const user = currentUser || {
    name: "Visitante",
    roleName: { "pt-BR": "Não autenticado", "en": "Guest", "es": "Invitado" },
    operationalBase: "Acesso Geral",
    department: "Treinamentos Abertos",
    currentXP: 0,
    level: 1,
    completedCoursesCount: 0,
    inProgressCoursesCount: 0,
    certificatesCount: 0,
  };

  // Sincronização determinística com SSR sem disparar re-render em cascata e sem risco de hidratação
  const progressStore = React.useSyncExternalStore(
    subscribeToProgress,
    getStoredProgress,
    getServerProgressSnapshot
  );
  const certificates = React.useSyncExternalStore(
    subscribeToCertificates,
    getStoredCertificates,
    getServerCertificatesSnapshot
  );
  const [selectedCert, setSelectedCert] = useState<CertificateDemonstration | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  // Encontrar o curso com interação mais recente ou usar o primeiro curso da lista
  let featuredCourse = DEMO_COURSES[0];
  let featuredProgress = progressStore[featuredCourse.id] || {
    courseId: featuredCourse.id,
    completedLessonIds: [],
    lastAccessedLessonId: "",
    lastAccessedAt: "",
  };

  // Se houver algum curso com lastAccessedAt mais recente no store
  const storedKeys = Object.keys(progressStore);
  if (storedKeys.length > 0) {
    const sorted = [...storedKeys].sort((a, b) => {
      const dateA = new Date(progressStore[a].lastAccessedAt || 0).getTime();
      const dateB = new Date(progressStore[b].lastAccessedAt || 0).getTime();
      return dateB - dateA;
    });

    const mostRecentCourseId = sorted[0];
    const match = DEMO_COURSES.find((c) => c.id === mostRecentCourseId);
    if (match) {
      featuredCourse = match;
      featuredProgress = progressStore[mostRecentCourseId];
    }
  }

  // Métricas dinâmicas em tempo real calculadas do estado real do colaborador
  const { inProgressCount, completedCount, dynamicXP } = React.useMemo(() => {
    let inProg = 0;
    let comp = 0;
    let earnedXP = 0;

    DEMO_COURSES.forEach((c) => {
      const p = progressStore[c.id];
      const m = calculateCourseProgressMetrics(c, p);
      if (m.isFullyCompleted) {
        comp++;
        earnedXP += 300;
      } else if (m.completedCount > 0 || p?.lastAccessedLessonId) {
        inProg++;
        earnedXP += m.completedCount * 30;
      }
    });

    const certBonus = certificates.length * 250;
    return {
      inProgressCount: inProg,
      completedCount: comp,
      dynamicXP: (currentUser?.currentXP || 100) + earnedXP + certBonus,
    };
  }, [progressStore, certificates, currentUser]);

  const metrics = calculateCourseProgressMetrics(featuredCourse, featuredProgress);

  return (
    <div className="flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
      {/* Banner de Boas-vindas do Colaborador */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white shadow-md relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold">
            <Trophy className="w-3.5 h-3.5" />
            <span>{t.dashboard.statsLevel} {user.level} • {dynamicXP} XP</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {t.dashboard.welcome.replace("{name}", user.name)}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            {t.dashboard.subtitle.replace("{base}", user.operationalBase).replace("{dept}", user.department)}
          </p>
        </div>

        <div className="flex items-center gap-3 relative z-10">
          <Link
            href="/catalogo"
            className="px-4 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explorar Mais Cursos</span>
          </Link>
        </div>
      </div>

      {/* Cards de Métricas e Conquistas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl border border-border bg-card shadow-xs space-y-1">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-semibold">{t.dashboard.statsXP}</span>
            <Flame className="w-4 h-4 text-orange-500" />
          </div>
          <div className="text-2xl font-black text-foreground">{dynamicXP}</div>
          <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Pontuação acumulada</p>
        </div>

        <div className="p-5 rounded-xl border border-border bg-card shadow-xs space-y-1">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-semibold">{t.dashboard.statsInProgress}</span>
            <PlayCircle className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl font-black text-foreground">{inProgressCount}</div>
          <p className="text-[11px] text-muted-foreground">Treinamentos ativos</p>
        </div>

        <div className="p-5 rounded-xl border border-border bg-card shadow-xs space-y-1">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-semibold">{t.dashboard.statsCompleted}</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-black text-foreground">{completedCount}</div>
          <p className="text-[11px] text-muted-foreground">Cursos finalizados</p>
        </div>

        <div className="p-5 rounded-xl border border-border bg-card shadow-xs space-y-1">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-semibold">{t.dashboard.statsCertificates}</span>
            <Award className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-black text-foreground">{certificates.length}</div>
          <p className="text-[11px] text-muted-foreground">Emitidos e auditáveis</p>
        </div>
      </div>

      {/* Curso em Andamento - Retomada Rápida Conectada ao Progresso Local */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
          <PlayCircle className="w-5 h-5 text-orange-500" />
          <span>{t.dashboard.sectionInProgress}</span>
        </h2>

        <div className="p-6 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-900 text-white">
                {featuredCourse.schoolName[locale]}
              </span>
              <span className="text-xs font-semibold text-muted-foreground">
                Código: {featuredCourse.badgeCode || featuredCourse.slug}
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-foreground">
              {featuredCourse.title[locale]}
            </h3>
            <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 max-w-md overflow-hidden">
              <div
                className="bg-orange-500 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${metrics.progressPercent}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground font-medium">
              {metrics.progressPercent}% concluído • {metrics.completedCount} de {metrics.totalLessons} aulas concluídas
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {metrics.resumeLessonId ? (
              <Link
                href={`/aprender/${featuredCourse.id}/${metrics.resumeLessonId}`}
                className="px-5 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-xs"
              >
                <span>{t.dashboard.resumeCourse}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <Link
                href={`/catalogo/${featuredCourse.id}`}
                className="px-5 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-xs"
              >
                <span>Ver Detalhes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Matriz Obrigatória e Recomendações */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Treinamentos Obrigatórios */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-blue-900 dark:text-blue-400" />
            <span>{t.dashboard.sectionMandatory}</span>
          </h2>

          <div className="space-y-3">
            {DEMO_COURSES.filter((c) => c.isMandatory).slice(0, 3).map((course) => (
              <div
                key={course.id}
                className="p-4 rounded-xl border border-border bg-card hover:border-blue-900/40 transition-colors flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400">
                      NR Obrigatória
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {course.workloadHours}h • {course.badgeCode || "RSS3"}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-foreground line-clamp-1">
                    {course.title[locale]}
                  </h4>
                </div>
                <Link
                  href={`/catalogo/${course.id}`}
                  className="px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity shrink-0"
                >
                  Acessar
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Certificados Emitidos com Nome do Usuário e Visualizador Oficial */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-emerald-600" />
            <span>Certificados Oficiais Emitidos</span>
          </h2>

          <div className="p-5 rounded-xl border border-border bg-card space-y-4 shadow-xs">
            <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
              <strong>Aviso de Conformidade Regulatória:</strong> Os certificados teóricos atestam a conclusão da ementa EAD. Habilitações operacionais de alto risco (ex: NR-35/NR-33) exigem a homologação prática em campo com instrutor credenciado e ASO vigente.
            </div>

            <div className="space-y-2.5">
              {certificates.length > 0 ? (
                certificates.map((cert) => {
                  const issuedDate = new Date(cert.issuedAt);
                  const validUntil = new Date(new Date(cert.issuedAt).setFullYear(issuedDate.getFullYear() + 2));
                  const isCopied = copiedCode === cert.validationCode;

                  return (
                    <div
                      key={cert.id}
                      className="p-4 rounded-xl border border-border bg-secondary/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs hover:border-emerald-500/50 transition-colors"
                    >
                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/70 px-2 py-0.5 rounded">
                            {cert.userName}
                          </span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-[11px] text-muted-foreground">
                            Emitido: {issuedDate.toLocaleDateString("pt-BR")}
                          </span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                            Reciclagem até: {validUntil.toLocaleDateString("pt-BR")}
                          </span>
                        </div>
                        <div className="font-bold text-sm text-foreground truncate">
                          {cert.courseTitle["pt-BR"]}
                        </div>
                        <div className="text-[11px] text-muted-foreground font-mono flex items-center gap-2">
                          <span>Código: {cert.validationCode}</span>
                          <button
                            type="button"
                            onClick={() => handleCopyCode(cert.validationCode)}
                            className="inline-flex items-center gap-1 text-[10px] text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                            title="Copiar código para validação"
                          >
                            {isCopied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                            <span>{isCopied ? "Copiado!" : "Copiar"}</span>
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => setSelectedCert(cert)}
                          className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>Abrir Certificado</span>
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : metrics.isFullyCompleted ? (
                <div className="p-5 text-center space-y-3 border border-emerald-500/30 rounded-xl bg-emerald-50/20 dark:bg-emerald-950/20">
                  <p className="text-xs font-bold text-foreground">
                    Você concluiu 100% das aulas deste treinamento!
                  </p>
                  <button
                    onClick={() => {
                      const newCert = issueCourseCertificate(featuredCourse);
                      setSelectedCert(newCert);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                  >
                    <Award className="w-4 h-4" />
                    <span>Emitir Certificado com meu Nome (+250 XP)</span>
                  </button>
                </div>
              ) : (
                <div className="p-6 text-center text-xs text-muted-foreground border border-dashed rounded-lg">
                  Nenhum certificado emitido até o momento. Conclua todas as aulas ou passe no exame técnico do curso para emitir seu certificado com seu nome.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

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
