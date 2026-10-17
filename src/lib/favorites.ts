/**
 * Sistema de Favoritos de Cursos da RSS3 Treinamentos
 * Sincronizado reativamente com localStorage sem causar re-render cascata ou SSR mismatch.
 */

const FAVORITES_STORAGE_KEY = "rss3_demo_favorites_v1";
const FAVORITES_EVENT_NAME = "rss3_demo_favorites_change";

let cachedRaw: string | null = null;
let cachedFavorites: string[] = [];
const EMPTY_FAVORITES: string[] = [];

export function getStoredFavorites(): string[] {
  if (typeof window === "undefined") return EMPTY_FAVORITES;
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!raw) return EMPTY_FAVORITES;
    if (raw === cachedRaw) return cachedFavorites;
    cachedRaw = raw;
    cachedFavorites = JSON.parse(raw) as string[];
    return cachedFavorites;
  } catch {
    return EMPTY_FAVORITES;
  }
}

export function getServerFavoritesSnapshot(): string[] {
  return EMPTY_FAVORITES;
}

export function subscribeToFavorites(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(FAVORITES_EVENT_NAME, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(FAVORITES_EVENT_NAME, callback);
    window.removeEventListener("storage", callback);
  };
}

export function toggleFavoriteCourse(courseId: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const current = getStoredFavorites();
    const isFavorited = current.includes(courseId);
    const updated = isFavorited
      ? current.filter((id) => id !== courseId)
      : [...current, courseId];

    cachedRaw = JSON.stringify(updated);
    cachedFavorites = updated;
    localStorage.setItem(FAVORITES_STORAGE_KEY, cachedRaw);
    window.dispatchEvent(new Event(FAVORITES_EVENT_NAME));
    return !isFavorited;
  } catch {
    return false;
  }
}

export function isCourseFavorited(courseId: string): boolean {
  const current = getStoredFavorites();
  return current.includes(courseId);
}
