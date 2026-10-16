"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/app-context";
import { authenticateUser, registerNewUser } from "@/lib/auth";
import { firebaseLogin, firebaseRegister } from "@/lib/firebase/auth";
import { isFirebaseConfigured } from "@/lib/firebase/client";
import {
  GraduationCap,
  ArrowRight,
  Lock,
  Mail,
  User,
  CheckCircle,
  AlertCircle,
  Building2,
  HardHat,
} from "lucide-react";

export default function LoginPage() {
  const { setCurrentUser } = useApp();
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [operationalBase, setOperationalBase] = useState("Operação CMPC Guaíba");
  const [department, setDepartment] = useState("Operações de Hidrojateamento");

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes("@")) {
      setErrorMessage("Por favor, informe um endereço de e-mail válido.");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setErrorMessage("A senha deve conter no mínimo 6 caracteres.");
      setLoading(false);
      return;
    }

    try {
      if (mode === "register") {
        if (!name.trim()) {
          setErrorMessage("Por favor, preencha seu nome completo.");
          setLoading(false);
          return;
        }

        // Se o Firebase estiver configurado, registra no Firebase Authentication
        if (isFirebaseConfigured) {
          const fbRes = await firebaseRegister(cleanEmail, password, name.trim());
          if (!fbRes.success || !fbRes.user) {
            setErrorMessage(fbRes.error || "Falha ao registrar conta no Firebase.");
            setLoading(false);
            return;
          }

          // Cria a sessão institucional associada ao UID autenticado
          const localUser = registerNewUser({
            id: fbRes.user.uid,
            name: name.trim(),
            email: cleanEmail,
            operationalBase,
            department,
          });

          if (localUser.user) {
            setCurrentUser(localUser.user);
          }

          setSuccessMessage("Conta criada e autenticada com sucesso no Firebase! Redirecionando...");
          setTimeout(() => {
            router.push("/dashboard");
          }, 800);
          return;
        }

        // Fallback para ambiente local se Firebase não estiver configurado
        const result = registerNewUser({
          name: name.trim(),
          email: cleanEmail,
          password,
          operationalBase,
          department,
        });

        if (!result.success || !result.user) {
          setErrorMessage(result.error || "Erro ao cadastrar conta.");
          setLoading(false);
          return;
        }

        setCurrentUser(result.user);
        setSuccessMessage("Conta criada com sucesso! Redirecionando para seu painel...");
        setTimeout(() => {
          router.push("/dashboard");
        }, 800);
      } else {
        // Modo Login
        if (isFirebaseConfigured) {
          const fbRes = await firebaseLogin(cleanEmail, password);
          if (!fbRes.success || !fbRes.user) {
            setErrorMessage(fbRes.error || "Credenciais inválidas no Firebase.");
            setLoading(false);
            return;
          }

          // Localiza ou estabelece o perfil de exibição para a conta autenticada
          const localMatch = authenticateUser(cleanEmail, password);
          if (localMatch.user) {
            localMatch.user.id = fbRes.user.uid;
            setCurrentUser(localMatch.user);
          } else {
            // Cria um perfil seguro padrão para o usuário autenticado caso seja primeiro acesso
            const displayName = fbRes.user.displayName || cleanEmail.split("@")[0];
            const fallbackUser = registerNewUser({
              id: fbRes.user.uid,
              name: displayName,
              email: cleanEmail,
              operationalBase: "Operação CMPC Guaíba",
              department: "Operações Industriais",
            });
            if (fallbackUser.user) {
              setCurrentUser(fallbackUser.user);
            }
          }

          setSuccessMessage("Autenticado com sucesso via Firebase! Redirecionando...");
          setTimeout(() => {
            router.push("/dashboard");
          }, 800);
          return;
        }

        // Fallback de login demonstrativo local
        const result = authenticateUser(cleanEmail, password);
        if (!result.success || !result.user) {
          setErrorMessage(result.error || "Credenciais inválidas.");
          setLoading(false);
          return;
        }

        setCurrentUser(result.user);
        setSuccessMessage(`Bem-vindo de volta, ${result.user.name.split(" ")[0]}! Redirecionando...`);
        setTimeout(() => {
          router.push("/dashboard");
        }, 800);
      }
    } catch {
      setErrorMessage("Ocorreu uma falha de conexão. Verifique sua rede e tente novamente.");
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 bg-slate-50/60 dark:bg-slate-950/40">
      <div className="max-w-md w-full space-y-6 p-7 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
        {/* Cabeçalho */}
        <div className="text-center space-y-2">
          <div className="inline-flex w-12 h-12 rounded-xl bg-blue-900 text-white items-center justify-center mx-auto shadow-md">
            <GraduationCap className="w-6 h-6 text-orange-400" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {mode === "login" ? "Entrar na sua Conta" : "Criar sua Conta"}
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {mode === "login"
              ? "Acesse seus treinamentos operacionais e certificados RSS3."
              : "Cadastre seu e-mail e senha para salvar seu progresso nos treinamentos."}
          </p>
        </div>

        {/* Abas Alternadoras: Entrar vs Criar Conta */}
        <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 border border-slate-200/80 dark:border-slate-700/60">
          <button
            type="button"
            onClick={() => {
              setMode("login");
              setErrorMessage(null);
              setSuccessMessage(null);
            }}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              mode === "login"
                ? "bg-white dark:bg-slate-900 text-blue-950 dark:text-white shadow-xs"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Entrar
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("register");
              setErrorMessage(null);
              setSuccessMessage(null);
            }}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              mode === "register"
                ? "bg-white dark:bg-slate-900 text-blue-950 dark:text-white shadow-xs"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Criar Conta
          </button>
        </div>

        {/* Notificações de Erro ou Sucesso */}
        {errorMessage && (
          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 flex items-start gap-2.5 text-xs text-rose-700 dark:text-rose-400">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 flex items-start gap-2.5 text-xs text-emerald-700 dark:text-emerald-400">
            <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Formulário */}
        <form onSubmit={handleFormSubmit} className="space-y-4">
          {mode === "register" && (
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>Nome Completo</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Carlos Eduardo Menezes"
                className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-orange-500 transition-all"
              />
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>E-mail Corporativo ou Pessoal</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu.email@rss3.com.br"
              className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-orange-500 transition-all"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Senha de Acesso</span>
              </label>
              {mode === "login" && (
                <Link
                  href="/recuperar-senha"
                  className="text-[11px] text-blue-600 dark:text-blue-400 hover:text-orange-500 transition-colors font-medium"
                >
                  Esqueceu a senha?
                </Link>
              )}
            </div>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 6 dígitos"
              className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-orange-500 transition-all"
            />
          </div>

          {mode === "register" && (
            <>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>Frente Operacional / Base</span>
                </label>
                <select
                  value={operationalBase}
                  onChange={(e) => setOperationalBase(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-orange-500 transition-all"
                >
                  <option value="Operação CMPC Guaíba">Operação CMPC Guaíba</option>
                  <option value="Sede Corporativa RSS3">Sede Corporativa RSS3</option>
                  <option value="Frente de Parada Industrial">Frente de Parada Industrial</option>
                  <option value="Operações Externas">Operações Externas</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <HardHat className="w-3.5 h-3.5 text-slate-400" />
                  <span>Área de Atuação</span>
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-orange-500 transition-all"
                >
                  <option value="Operações de Hidrojateamento">Operações de Hidrojateamento</option>
                  <option value="Pintura e Tratamento de Superfícies">Pintura e Tratamento de Superfícies</option>
                  <option value="Andaimes e Acesso Seguro">Andaimes e Acesso Seguro</option>
                  <option value="Segurança do Trabalho e Qualidade">Segurança do Trabalho e Qualidade</option>
                </select>
              </div>
            </>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 disabled:opacity-50 text-white font-semibold text-xs transition-colors shadow-xs flex items-center justify-center gap-2"
            >
              <span>{loading ? "Processando..." : mode === "login" ? "Entrar na Conta" : "Criar Conta e Acessar"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

