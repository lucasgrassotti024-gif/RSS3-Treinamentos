import { CourseDemonstration, LessonDemonstration } from "@/types";

const OFFLINE_COURSES_KEY = "rss3_offline_courses_v1";
const OFFLINE_EVENT_NAME = "rss3_offline_storage_change";

export interface OfflinePackageMeta {
  courseId: string;
  courseTitle: string;
  badgeCode?: string;
  workloadHours: number;
  totalLessons: number;
  savedAt: string;
  sizeBytesApprox: number;
}

/**
 * Retorna os IDs dos cursos salvos offline
 */
export function getOfflineCourseIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(OFFLINE_COURSES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Object.keys(parsed);
  } catch {
    return [];
  }
}

/**
 * Verifica se um curso específico está salvo para consulta offline
 */
export function isCourseSavedOffline(courseId: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const ids = getOfflineCourseIds();
    return ids.includes(courseId);
  } catch {
    return false;
  }
}

/**
 * Salva um curso completo na memória local para acesso offline
 */
export function saveCourseForOffline(course: CourseDemonstration): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem(OFFLINE_COURSES_KEY);
    const store = raw ? JSON.parse(raw) : {};

    const allLessons = (course.modules || []).flatMap((m) => m.lessons);

    store[course.id] = {
      meta: {
        courseId: course.id,
        courseTitle: course.title["pt-BR"] || course.title.en,
        badgeCode: course.badgeCode || "RSS3",
        workloadHours: course.workloadHours,
        totalLessons: allLessons.length,
        savedAt: new Date().toISOString(),
        sizeBytesApprox: JSON.stringify(course).length,
      } as OfflinePackageMeta,
      courseData: course,
    };

    localStorage.setItem(OFFLINE_COURSES_KEY, JSON.stringify(store));
    window.dispatchEvent(new Event(OFFLINE_EVENT_NAME));
    return true;
  } catch (err) {
    console.error("Falha ao salvar curso offline:", err);
    return false;
  }
}

/**
 * Remove um curso da memória offline
 */
export function removeCourseFromOffline(courseId: string): void {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(OFFLINE_COURSES_KEY);
    if (!raw) return;
    const store = JSON.parse(raw);
    delete store[courseId];
    localStorage.setItem(OFFLINE_COURSES_KEY, JSON.stringify(store));
    window.dispatchEvent(new Event(OFFLINE_EVENT_NAME));
  } catch {
    // Silencioso
  }
}

/**
 * Lista todos os metadados dos cursos salvos offline
 */
export function getSavedOfflinePackages(): OfflinePackageMeta[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(OFFLINE_COURSES_KEY);
    if (!raw) return [];
    const store = JSON.parse(raw);
    return Object.values(store).map((item: any) => item.meta);
  } catch {
    return [];
  }
}

/**
 * Inscreve-se nas alterações do armazenamento offline
 */
export function subscribeToOfflineCourses(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(OFFLINE_EVENT_NAME, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(OFFLINE_EVENT_NAME, callback);
    window.removeEventListener("storage", callback);
  };
}

/**
 * Dispara a impressão/geração de PDF nativa formatada do Procedimento Operacional / Guia de Campo
 */
export function triggerPrintableFieldGuide(): void {
  if (typeof window !== "undefined") {
    window.print();
  }
}
