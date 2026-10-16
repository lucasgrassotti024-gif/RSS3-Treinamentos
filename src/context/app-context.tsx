"use client";

import React, { createContext, useContext, useEffect, useState, useSyncExternalStore } from "react";
import { Locale, UserDemonstration } from "@/types";
import { translations, TranslationKeys } from "@/lib/i18n";
import { getActiveSessionUser, getServerSessionUser, setActiveSessionUser, subscribeToAuth, getRegisteredUsers } from "@/lib/auth";
import { onFirebaseAuthStateChanged } from "@/lib/firebase/auth";
import { isFirebaseConfigured } from "@/lib/firebase/client";

interface AppContextType {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
  mounted: boolean;
  currentUser: UserDemonstration | null;
  setCurrentUser: (user: UserDemonstration | null) => void;
  t: TranslationKeys;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Listeners externos para sincronização sem setState síncrono em useEffect
function subscribeStorage(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("rss3_storage_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("rss3_storage_change", callback);
  };
}

function getThemeSnapshot(): "light" | "dark" {
  try {
    const val = localStorage.getItem("rss3_theme");
    if (val === "dark" || val === "light") return val;
  } catch {
    // fallback
  }
  return "light";
}

function getServerThemeSnapshot(): "light" | "dark" {
  return "light";
}

function getLocaleSnapshot(): Locale {
  try {
    const val = localStorage.getItem("rss3_locale") as Locale;
    if (val === "pt-BR" || val === "en" || val === "es") return val;
  } catch {
    // fallback
  }
  return "pt-BR";
}

function getServerLocaleSnapshot(): Locale {
  return "pt-BR";
}


export function AppProvider({ children }: { children: React.ReactNode }) {
  // Sincronização externa sem causar mismatch de SSR e sem disparar cascata de renders
  const theme = useSyncExternalStore(subscribeStorage, getThemeSnapshot, getServerThemeSnapshot);
  const locale = useSyncExternalStore(subscribeStorage, getLocaleSnapshot, getServerLocaleSnapshot);
  // Salvaguarda canônica de hidratação do React: false no SSR e no primeiro render do cliente; true após hidratação completa
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Sincronização de usuário autenticado sem cascata de renders
  const currentUser = useSyncExternalStore(subscribeToAuth, getActiveSessionUser, getServerSessionUser);

  const setCurrentUser = (user: UserDemonstration | null) => {
    setActiveSessionUser(user);
  };

  // Observador oficial do Firebase Authentication
  useEffect(() => {
    if (!isFirebaseConfigured) return;

    const unsubscribe = onFirebaseAuthStateChanged((fbUser) => {
      if (fbUser) {
        // Usuário está autenticado no Firebase: sincroniza com os dados do perfil
        const current = getActiveSessionUser();
        // Se a sessão local estiver vazia ou for de outro usuário, inicializa com o FirebaseUser
        if (!current || current.id !== fbUser.uid) {
          const registered = getRegisteredUsers().find((u) => u.email === fbUser.email);
          const userDemonstration: UserDemonstration = {
            id: fbUser.uid,
            name: fbUser.displayName || registered?.name || fbUser.email?.split("@")[0] || "Colaborador RSS3",
            email: fbUser.email || "",
            role: registered?.role || "student",
            roleName: registered?.roleName || {
              "pt-BR": "Operador Industrial",
              en: "Industrial Operator",
              es: "Operador Industrial",
            },
            operationalBase: registered?.operationalBase || "Operação CMPC Guaíba",
            department: registered?.department || "Operações Industriais",
            currentXP: registered?.currentXP || 100,
            level: registered?.level || 1,
            completedCoursesCount: registered?.completedCoursesCount || 0,
            inProgressCoursesCount: registered?.inProgressCoursesCount || 1,
            certificatesCount: registered?.certificatesCount || 0,
          };
          setActiveSessionUser(userDemonstration);
        }
      } else {
        // Se deslogou no Firebase, encerra qualquer sessão
        const current = getActiveSessionUser();
        if (current) {
          setActiveSessionUser(null);
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Sincronizar classe dark no elemento HTML sempre que o tema mudar
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  const setLocale = (newLocale: Locale) => {
    try {
      localStorage.setItem("rss3_locale", newLocale);
      window.dispatchEvent(new Event("rss3_storage_change"));
    } catch {
      // localStorage indisponível
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    try {
      localStorage.setItem("rss3_theme", nextTheme);
      window.dispatchEvent(new Event("rss3_storage_change"));
    } catch {
      // localStorage indisponível
    }
  };

  return (
    <AppContext.Provider
      value={{
        locale,
        setLocale,
        theme,
        toggleTheme,
        mounted,
        currentUser,
        setCurrentUser,
        t: translations[locale],
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
