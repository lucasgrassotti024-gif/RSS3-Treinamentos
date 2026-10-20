import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  signOut as firebaseSignOut,
  User as FirebaseUser,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, getFirebaseAuth, isFirebaseConfigured } from "./client";
import { UserDemonstration } from "@/types";

export interface FirebaseAuthResult {
  success: boolean;
  error?: string;
  user?: FirebaseUser;
}

/**
 * Converte um FirebaseUser autenticado em UserDemonstration institucional
 */
export function mapFirebaseUserToDemonstration(
  fbUser: FirebaseUser,
  extra?: { name?: string; operationalBase?: string; department?: string }
): UserDemonstration {
  const displayName = extra?.name?.trim() || fbUser.displayName || fbUser.email?.split("@")[0] || "Colaborador RSS3";
  return {
    id: fbUser.uid,
    name: displayName,
    email: fbUser.email || "",
    role: "student",
    roleName: {
      "pt-BR": "Operador Industrial",
      en: "Industrial Operator",
      es: "Operador Industrial",
    },
    operationalBase: extra?.operationalBase || "Operação CMPC Guaíba",
    department: extra?.department || "Operações Industriais",
    currentXP: 100,
    level: 1,
    completedCoursesCount: 0,
    inProgressCoursesCount: 1,
    certificatesCount: 0,
  };
}

/**
 * Realiza login utilizando Firebase Authentication
 */
export async function firebaseLogin(email: string, password: string): Promise<FirebaseAuthResult> {
  const firebaseAuth = getFirebaseAuth() || auth;
  if (!isFirebaseConfigured || !firebaseAuth) {
    return {
      success: false,
      error: "Firebase Authentication não está configurado com as variáveis de ambiente.",
    };
  }

  try {
    const cred = await signInWithEmailAndPassword(firebaseAuth, email.trim(), password);
    return { success: true, user: cred.user };
  } catch (err: unknown) {
    const error = err as { code?: string; message?: string };
    let message = "Falha na autenticação do Firebase.";

    if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password" || error.code === "auth/invalid-credential") {
      message = "E-mail ou senha incorretos.";
    } else if (error.code === "auth/invalid-email") {
      message = "Formato de e-mail inválido.";
    } else if (error.code === "auth/user-disabled") {
      message = "Conta desativada pelo administrador.";
    } else if (error.code === "auth/too-many-requests") {
      message = "Muitas tentativas sem sucesso. Aguarde alguns minutos antes de tentar novamente.";
    } else if (error.code === "auth/network-request-failed") {
      message = "Falha de conexão com os servidores do Firebase. Verifique sua conexão de rede.";
    } else if (error.code === "auth/operation-not-allowed") {
      message = "O provedor de login com E-mail/senha ainda não foi ativado no Console do Firebase.";
    }

    return { success: false, error: message };
  }
}

/**
 * Cria uma nova conta utilizando Firebase Authentication
 */
export async function firebaseRegister(
  email: string,
  password: string,
  displayName?: string
): Promise<FirebaseAuthResult> {
  const firebaseAuth = getFirebaseAuth() || auth;
  if (!isFirebaseConfigured || !firebaseAuth) {
    return {
      success: false,
      error: "Firebase Authentication não está configurado com as variáveis de ambiente.",
    };
  }

  try {
    const cred = await createUserWithEmailAndPassword(firebaseAuth, email.trim(), password);
    if (displayName && displayName.trim()) {
      try {
        await updateProfile(cred.user, { displayName: displayName.trim() });
      } catch {
        // Atualização de displayName não bloqueia o cadastro
      }
    }
    return { success: true, user: cred.user };
  } catch (err: unknown) {
    const error = err as { code?: string; message?: string };
    let message = "Falha ao registrar conta no Firebase.";

    if (error.code === "auth/email-already-in-use") {
      message = "Este e-mail já está cadastrado no Firebase.";
    } else if (error.code === "auth/weak-password") {
      message = "A senha deve ter no mínimo 6 caracteres.";
    } else if (error.code === "auth/invalid-email") {
      message = "Formato de e-mail inválido.";
    } else if (error.code === "auth/network-request-failed") {
      message = "Falha de conexão com os servidores do Firebase. Verifique sua conexão de rede.";
    } else if (error.code === "auth/operation-not-allowed") {
      message = "O provedor de login com E-mail/senha ainda não foi ativado no Console do Firebase.";
    }

    return { success: false, error: message };
  }
}

/**
 * Envia e-mail de recuperação de senha pelo Firebase Authentication
 */
export async function firebaseSendPasswordReset(email: string): Promise<{ success: boolean; error?: string }> {
  const firebaseAuth = getFirebaseAuth() || auth;
  if (!isFirebaseConfigured || !firebaseAuth) {
    return {
      success: false,
      error: "Firebase Authentication não está configurado com as variáveis de ambiente.",
    };
  }

  try {
    await sendPasswordResetEmail(firebaseAuth, email.trim());
    return { success: true };
  } catch (err: unknown) {
    const error = err as { code?: string; message?: string };
    let message = "Não foi possível enviar o e-mail de recuperação.";

    if (error.code === "auth/user-not-found") {
      message = "E-mail não localizado.";
    } else if (error.code === "auth/invalid-email") {
      message = "Formato de e-mail inválido.";
    }

    return { success: false, error: message };
  }
}

/**
 * Realiza logout do Firebase
 */
export async function firebaseLogout(): Promise<void> {
  const firebaseAuth = getFirebaseAuth() || auth;
  if (isFirebaseConfigured && firebaseAuth) {
    await firebaseSignOut(firebaseAuth);
  }
}

/**
 * Observa alterações de autenticação no Firebase
 */
export function onFirebaseAuthStateChanged(callback: (user: FirebaseUser | null) => void): () => void {
  if (!isFirebaseConfigured || !auth) {
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
}
