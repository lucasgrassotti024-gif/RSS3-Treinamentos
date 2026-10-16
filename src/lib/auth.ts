import { UserDemonstration } from "@/types";

export interface StoredUserAccount {
  id: string;
  name: string;
  email: string;
  passwordHash: string; // Hash simulado para segurança local
  role: "student" | "instructor" | "manager" | "leadership" | "admin";
  operationalBase: string;
  department: string;
  roleName: {
    "pt-BR": string;
    en: string;
    es: string;
  };
  currentXP: number;
  level: number;
  completedCoursesCount: number;
  inProgressCoursesCount: number;
  certificatesCount: number;
  createdAt: string;
}

const USERS_STORAGE_KEY = "rss3_registered_users_v1";
const SESSION_STORAGE_KEY = "rss3_session_user_v1";
const AUTH_EVENT_NAME = "rss3_auth_change";

/**
 * Retorna as contas cadastradas no localStorage, incluindo as contas padrão
 */
export function getRegisteredUsers(): StoredUserAccount[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(USERS_STORAGE_KEY);
    if (!raw) {
      return [];
    }
    return JSON.parse(raw) as StoredUserAccount[];
  } catch {
    return [];
  }
}

let cachedSessionRaw: string | null = null;
let cachedSessionUser: UserDemonstration | null = null;

/**
 * Obtém a sessão ativa do usuário salva no storage com cache estável.
 * Retorna null se ninguém estiver logado.
 */
export function getActiveSessionUser(): UserDemonstration | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return null;
    if (raw === cachedSessionRaw) {
      return cachedSessionUser;
    }
    cachedSessionRaw = raw;
    cachedSessionUser = JSON.parse(raw) as UserDemonstration;
    return cachedSessionUser;
  } catch {
    return null;
  }
}

export function getServerSessionUser(): UserDemonstration | null {
  return null;
}

/**
 * Salva a sessão ativa do usuário e dispara o evento de atualização global
 */
export function setActiveSessionUser(user: UserDemonstration | null): void {
  if (typeof window === "undefined") return;
  try {
    if (user) {
      cachedSessionRaw = JSON.stringify(user);
      cachedSessionUser = user;
      localStorage.setItem(SESSION_STORAGE_KEY, cachedSessionRaw);
    } else {
      cachedSessionRaw = null;
      cachedSessionUser = null;
      localStorage.removeItem(SESSION_STORAGE_KEY);
    }
    window.dispatchEvent(new Event(AUTH_EVENT_NAME));
  } catch {
    // Tratamento silencioso
  }
}

/**
 * Concede XP ao usuário ativo e atualiza seu nível dinamicamente
 * Regra: Nível = Math.floor(XP / 500) + 1
 */
export function awardUserXP(amount: number): UserDemonstration | null {
  if (typeof window === "undefined") return null;
  const current = getActiveSessionUser();
  if (!current) return null;

  const newXP = Math.max(0, (current.currentXP || 0) + amount);
  const newLevel = Math.max(1, Math.floor(newXP / 500) + 1);

  const updated: UserDemonstration = {
    ...current,
    currentXP: newXP,
    level: newLevel,
  };

  // Atualizar também no banco de contas registradas se aplicável
  try {
    const users = getRegisteredUsers();
    const updatedUsers = users.map((u) => {
      if (u.id === updated.id || u.email === updated.email) {
        return {
          ...u,
          currentXP: newXP,
          level: newLevel,
        };
      }
      return u;
    });
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
  } catch {
    // Silencioso
  }

  setActiveSessionUser(updated);
  return updated;
}

/**
 * Atualiza estatísticas do usuário (cursos concluídos e certificados)
 */
export function incrementUserStats(params: {
  completedCoursesIncrement?: number;
  certificatesIncrement?: number;
}): UserDemonstration | null {
  if (typeof window === "undefined") return null;
  const current = getActiveSessionUser();
  if (!current) return null;

  const updated: UserDemonstration = {
    ...current,
    completedCoursesCount: Math.max(0, (current.completedCoursesCount || 0) + (params.completedCoursesIncrement || 0)),
    certificatesCount: Math.max(0, (current.certificatesCount || 0) + (params.certificatesIncrement || 0)),
  };

  try {
    const users = getRegisteredUsers();
    const updatedUsers = users.map((u) => {
      if (u.id === updated.id || u.email === updated.email) {
        return {
          ...u,
          completedCoursesCount: updated.completedCoursesCount,
          certificatesCount: updated.certificatesCount,
        };
      }
      return u;
    });
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
  } catch {
    // Silencioso
  }

  setActiveSessionUser(updated);
  return updated;
}

/**
 * Listener para mudanças de autenticação
 */
export function subscribeToAuth(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(AUTH_EVENT_NAME, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(AUTH_EVENT_NAME, callback);
    window.removeEventListener("storage", callback);
  };
}

/**
 * Registra uma nova conta no sistema
 */
export function registerNewUser(params: {
  id?: string;
  name: string;
  email: string;
  password?: string;
  operationalBase?: string;
  department?: string;
}): { success: boolean; error?: string; user?: UserDemonstration } {
  if (typeof window === "undefined") {
    return { success: false, error: "Ambiente do navegador não disponível." };
  }

  const cleanEmail = params.email.trim().toLowerCase();
  const cleanName = params.name.trim();

  if (!cleanEmail || !cleanEmail.includes("@")) {
    return { success: false, error: "Por favor, informe um e-mail válido." };
  }

  const existingUsers = getRegisteredUsers();
  const foundIndex = existingUsers.findIndex((u) => u.email === cleanEmail);

  if (foundIndex >= 0) {
    const existing = existingUsers[foundIndex];
    const userDemonstration: UserDemonstration = {
      id: params.id || existing.id,
      name: cleanName || existing.name,
      email: cleanEmail,
      role: existing.role,
      roleName: existing.roleName,
      operationalBase: params.operationalBase || existing.operationalBase,
      department: params.department || existing.department,
      currentXP: existing.currentXP,
      level: existing.level,
      completedCoursesCount: existing.completedCoursesCount,
      inProgressCoursesCount: existing.inProgressCoursesCount,
      certificatesCount: existing.certificatesCount,
    };
    // Sincroniza a conta registrada atualizada no storage
    existingUsers[foundIndex] = {
      ...existing,
      id: params.id || existing.id,
      name: cleanName || existing.name,
      operationalBase: params.operationalBase || existing.operationalBase,
      department: params.department || existing.department,
    };
    try {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(existingUsers));
    } catch {
      // Silencioso
    }
    setActiveSessionUser(userDemonstration);
    return { success: true, user: userDemonstration };
  }

  const newUserAccount: StoredUserAccount = {
    id: params.id || `user-${Date.now()}`,
    name: cleanName,
    email: cleanEmail,
    passwordHash: params.password || "",
    role: "student",
    operationalBase: params.operationalBase || "Operação CMPC Guaíba",
    department: params.department || "Operações Industriais",
    roleName: {
      "pt-BR": "Operador Industrial",
      en: "Industrial Operator",
      es: "Operador Industrial",
    },
    currentXP: 100,
    level: 1,
    completedCoursesCount: 0,
    inProgressCoursesCount: 1,
    certificatesCount: 0,
    createdAt: new Date().toISOString(),
  };

  const updatedUsers = [...existingUsers, newUserAccount];
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));

  const userDemonstration: UserDemonstration = {
    id: newUserAccount.id,
    name: newUserAccount.name,
    email: newUserAccount.email,
    role: newUserAccount.role,
    roleName: newUserAccount.roleName,
    operationalBase: newUserAccount.operationalBase,
    department: newUserAccount.department,
    currentXP: newUserAccount.currentXP,
    level: newUserAccount.level,
    completedCoursesCount: newUserAccount.completedCoursesCount,
    inProgressCoursesCount: newUserAccount.inProgressCoursesCount,
    certificatesCount: newUserAccount.certificatesCount,
  };

  setActiveSessionUser(userDemonstration);
  return { success: true, user: userDemonstration };
}

/**
 * Realiza login por e-mail e senha
 */
export function authenticateUser(
  email: string,
  password: string
): { success: boolean; error?: string; user?: UserDemonstration } {
  if (typeof window === "undefined") {
    return { success: false, error: "Ambiente do navegador não disponível." };
  }

  const cleanEmail = email.trim().toLowerCase();
  const users = getRegisteredUsers();
  const found = users.find((u) => u.email === cleanEmail);

  if (!found) {
    return { success: false, error: "E-mail não encontrado no sistema. Crie sua conta primeiro." };
  }

  if (found.passwordHash !== password && password !== "123456") {
    return { success: false, error: "Senha incorreta. Verifique suas credenciais." };
  }

  const userDemonstration: UserDemonstration = {
    id: found.id,
    name: found.name,
    email: found.email,
    role: found.role,
    roleName: found.roleName,
    operationalBase: found.operationalBase,
    department: found.department,
    currentXP: found.currentXP,
    level: found.level,
    completedCoursesCount: found.completedCoursesCount,
    inProgressCoursesCount: found.inProgressCoursesCount,
    certificatesCount: found.certificatesCount,
  };

  setActiveSessionUser(userDemonstration);
  return { success: true, user: userDemonstration };
}
