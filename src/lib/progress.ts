import { CourseDemonstration, UserProgressStore, CourseProgressRecord, CertificateDemonstration } from "@/types";
import { awardUserXP, getActiveSessionUser, incrementUserStats } from "./auth";

const PROGRESS_STORAGE_KEY = "rss3_demo_progress_v1";
const PROGRESS_EVENT_NAME = "rss3_demo_progress_change";
const CERTIFICATES_STORAGE_KEY = "rss3_demo_certificates_v1";
const CERTIFICATES_EVENT_NAME = "rss3_demo_certificates_change";

let cachedRaw: string | null = null;
let cachedStore: UserProgressStore = {};
const EMPTY_STORE: UserProgressStore = {};

let cachedCertsRaw: string | null = null;
let cachedCerts: CertificateDemonstration[] = [];
const EMPTY_CERTS: CertificateDemonstration[] = [];

/**
 * Lê os certificados demonstrativos emitidos
 */
export function getStoredCertificates(): CertificateDemonstration[] {
  if (typeof window === "undefined") return EMPTY_CERTS;
  try {
    const raw = localStorage.getItem(CERTIFICATES_STORAGE_KEY);
    if (!raw) return EMPTY_CERTS;
    if (raw === cachedCertsRaw) return cachedCerts;
    cachedCertsRaw = raw;
    cachedCerts = JSON.parse(raw) as CertificateDemonstration[];
    return cachedCerts;
  } catch {
    return EMPTY_CERTS;
  }
}

export function getServerCertificatesSnapshot(): CertificateDemonstration[] {
  return EMPTY_CERTS;
}

/**
 * Inscreve-se nas alterações de certificados
 */
export function subscribeToCertificates(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(CERTIFICATES_EVENT_NAME, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CERTIFICATES_EVENT_NAME, callback);
    window.removeEventListener("storage", callback);
  };
}

/**
 * Salva a lista de certificados emitidos
 */
export function saveStoredCertificates(certs: CertificateDemonstration[]): void {
  if (typeof window === "undefined") return;
  try {
    cachedCertsRaw = JSON.stringify(certs);
    cachedCerts = certs;
    localStorage.setItem(CERTIFICATES_STORAGE_KEY, cachedCertsRaw);
    window.dispatchEvent(new Event(CERTIFICATES_EVENT_NAME));
  } catch {
    // Silencioso
  }
}

/**
 * Emite formalmente um certificado para o curso concluído
 */
export function issueCourseCertificate(
  course: CourseDemonstration,
  scorePercent?: number
): CertificateDemonstration {
  const currentCerts = getStoredCertificates();
  const existing = currentCerts.find((c) => c.courseId === course.id);
  if (existing) return existing;

  const sessionUser = getActiveSessionUser();
  const userName = sessionUser?.name || "Colaborador RSS3";
  const userRole = sessionUser?.roleName?.["pt-BR"] || "Operador Industrial";
  const operationalBase = sessionUser?.operationalBase || "Operação CMPC Guaíba";
  const department = sessionUser?.department || "Operações Industriais";

  // Gera código canônico com formato RSS3-XXXX-XXXX-XXXX-XXXX
  const randomHex = () => Math.random().toString(36).substring(2, 6).toUpperCase();
  const validationCode = `RSS3-${course.badgeCode || "CERT"}-${randomHex()}-${randomHex()}-${randomHex()}`;

  const newCert: CertificateDemonstration = {
    id: `cert-${course.id}-${Date.now()}`,
    courseId: course.id,
    courseTitle: course.title,
    schoolName: course.schoolName,
    workloadHours: course.workloadHours,
    userName,
    userRole,
    operationalBase,
    department,
    validationCode,
    issuedAt: new Date().toISOString(),
    scorePercent: scorePercent || 100,
  };

  const updatedCerts = [newCert, ...currentCerts];
  saveStoredCertificates(updatedCerts);

  // Conceder XP por concluir o curso e emitir certificado (+250 XP bônus)
  awardUserXP(250);
  incrementUserStats({ completedCoursesIncrement: 1, certificatesIncrement: 1 });

  return newCert;
}

/**
 * Lê o progresso demonstrativo do localStorage com fallback seguro e cache de referência
 */
export function getStoredProgress(): UserProgressStore {
  if (typeof window === "undefined") return EMPTY_STORE;
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return EMPTY_STORE;
    if (raw === cachedRaw) {
      return cachedStore;
    }
    cachedRaw = raw;
    cachedStore = JSON.parse(raw) as UserProgressStore;
    return cachedStore;
  } catch {
    return EMPTY_STORE;
  }
}

export function getServerProgressSnapshot(): UserProgressStore {
  return EMPTY_STORE;
}

/**
 * Inscreve-se nas alterações de progresso demonstrativo
 */
export function subscribeToProgress(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(PROGRESS_EVENT_NAME, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(PROGRESS_EVENT_NAME, callback);
    window.removeEventListener("storage", callback);
  };
}

/**
 * Salva o progresso demonstrativo no localStorage e notifica os ouvintes
 */
export function saveStoredProgress(store: UserProgressStore): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(store));
    window.dispatchEvent(new Event(PROGRESS_EVENT_NAME));
  } catch {
    // Falha silenciosa em caso de restrição de storage
  }
}

const COURSE_PROGRESS_CACHE: Record<string, CourseProgressRecord> = {};

export function getCourseProgressSnapshot(courseId: string): CourseProgressRecord {
  if (typeof window === "undefined") {
    return {
      courseId,
      completedLessonIds: [],
      lastAccessedLessonId: "",
      lastAccessedAt: "",
    };
  }
  const store = getStoredProgress();
  const found = store[courseId];
  if (!found) {
    if (!COURSE_PROGRESS_CACHE[courseId]) {
      COURSE_PROGRESS_CACHE[courseId] = {
        courseId,
        completedLessonIds: [],
        lastAccessedLessonId: "",
        lastAccessedAt: "",
      };
    }
    return COURSE_PROGRESS_CACHE[courseId];
  }
  return found;
}

export function getServerCourseProgressSnapshot(courseId: string): CourseProgressRecord {
  if (!COURSE_PROGRESS_CACHE[courseId]) {
    COURSE_PROGRESS_CACHE[courseId] = {
      courseId,
      completedLessonIds: [],
      lastAccessedLessonId: "",
      lastAccessedAt: "",
    };
  }
  return COURSE_PROGRESS_CACHE[courseId];
}

/**
 * Obtém ou inicializa o registro de um curso específico (alias compatível com chamadas existentes)
 */
export function getCourseProgress(courseId: string): CourseProgressRecord {
  return getCourseProgressSnapshot(courseId);
}

/**
 * Registra o acesso a uma aula e atualiza o timestamp de retomada
 */
export function recordLessonAccess(courseId: string, lessonId: string): void {
  const store = getStoredProgress();
  const current = store[courseId] || {
    courseId,
    completedLessonIds: [],
    lastAccessedLessonId: lessonId,
    lastAccessedAt: new Date().toISOString(),
  };

  current.lastAccessedLessonId = lessonId;
  current.lastAccessedAt = new Date().toISOString();
  store[courseId] = current;
  saveStoredProgress(store);
}

/**
 * Marca explicitamente uma aula como concluída (sem desmarcar caso já esteja concluída)
 */
export function markLessonCompleted(courseId: string, lessonId: string): void {
  const store = getStoredProgress();
  const current = store[courseId] || {
    courseId,
    completedLessonIds: [],
    lastAccessedLessonId: lessonId,
    lastAccessedAt: new Date().toISOString(),
  };

  const isCompleted = current.completedLessonIds.includes(lessonId);
  if (!isCompleted) {
    current.completedLessonIds.push(lessonId);
    // Ganha 50 XP por concluir uma aula
    awardUserXP(50);
  }

  current.lastAccessedLessonId = lessonId;
  current.lastAccessedAt = new Date().toISOString();
  store[courseId] = current;
  saveStoredProgress(store);
}

/**
 * Alterna (marca/desmarca) a conclusão de uma aula
 */
export function toggleLessonCompletion(courseId: string, lessonId: string): boolean {
  const store = getStoredProgress();
  const current = store[courseId] || {
    courseId,
    completedLessonIds: [],
    lastAccessedLessonId: lessonId,
    lastAccessedAt: new Date().toISOString(),
  };

  const isCompleted = current.completedLessonIds.includes(lessonId);
  if (isCompleted) {
    current.completedLessonIds = current.completedLessonIds.filter((id) => id !== lessonId);
    // Remove 50 XP se desmarcou
    awardUserXP(-50);
  } else {
    current.completedLessonIds.push(lessonId);
    // Ganha 50 XP por concluir uma aula
    awardUserXP(50);
  }

  current.lastAccessedLessonId = lessonId;
  current.lastAccessedAt = new Date().toISOString();
  store[courseId] = current;
  saveStoredProgress(store);

  return !isCompleted;
}

/**
 * Calcula métricas reais derivadas do currículo do curso
 */
export function calculateCourseProgressMetrics(
  course: CourseDemonstration,
  progress?: CourseProgressRecord | null
): {
  totalLessons: number;
  completedCount: number;
  progressPercent: number;
  isFullyCompleted: boolean;
  resumeLessonId: string;
} {
  const allLessons = (course?.modules || []).flatMap((m) => m.lessons || []);
  const totalLessons = allLessons.length;

  if (totalLessons === 0) {
    return {
      totalLessons: 0,
      completedCount: 0,
      progressPercent: 0,
      isFullyCompleted: false,
      resumeLessonId: "",
    };
  }

  // Filtrar apenas IDs válidos pertencentes a este curso
  const completedIds = Array.isArray(progress?.completedLessonIds) ? progress.completedLessonIds : [];
  const validCompletedIds = completedIds.filter((id) =>
    allLessons.some((l) => l.id === id)
  );

  const completedCount = validCompletedIds.length;
  const progressPercent = Math.min(100, Math.round((completedCount / totalLessons) * 100));
  const isFullyCompleted = completedCount === totalLessons && totalLessons > 0;

  // Determinar aula de retomada: última acessada ou primeira não concluída ou primeira aula
  let resumeLessonId = progress?.lastAccessedLessonId;
  if (!resumeLessonId || !allLessons.some((l) => l.id === resumeLessonId)) {
    const firstIncomplete = allLessons.find((l) => !validCompletedIds.includes(l.id));
    resumeLessonId = firstIncomplete ? firstIncomplete.id : allLessons[0]?.id || "";
  }

  return {
    totalLessons,
    completedCount,
    progressPercent,
    isFullyCompleted,
    resumeLessonId,
  };
}
