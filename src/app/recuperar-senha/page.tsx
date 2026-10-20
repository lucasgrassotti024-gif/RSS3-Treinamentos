"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/app-context";
import { firebaseSendPasswordReset } from "@/lib/firebase/auth";
import { isFirebaseConfigured } from "@/lib/firebase/client";
import { Mail, ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react";

export default function RecoverPasswordPage() {
  const { t } = useApp();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes("@")) {
      setErrorMessage("Por favor, informe um endereço de e-mail válido.");
      setLoading(false);
      return;
    }

    try {
      if (isFirebaseConfigured) {
        const result = await firebaseSendPasswordReset(cleanEmail);
        if (!result.success) {
          setErrorMessage(result.error || "Não foi possível enviar o e-mail de recuperação.");
          setLoading(false);
          return;
        }
        setSubmitted(true);
        setLoading(false);
        return;
      }

      // Modo demonstrativo local / offline
      setSubmitted(true);
      setLoading(false);
    } catch {
      setErrorMessage("Ocorreu uma falha de conexão. Verifique sua rede e tente novamente.");
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-md w-full space-y-6 p-8 rounded-2xl border border-border bg-card shadow-sm">
        <Link
          href="/login"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 dark:text-blue-400 hover:text-orange-500 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t.recovery.backToLogin}</span>
        </Link>

        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold tracking-tight text-foreground">
            {t.recovery.title}
          </h1>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {t.recovery.subtitle}
          </p>
        </div>

        {errorMessage && (
          <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 flex items-start gap-2.5 text-xs text-rose-700 dark:text-rose-400">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {submitted ? (
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t.recovery.successTitle}</span>
            </div>
            <p className="text-emerald-700 dark:text-emerald-300 leading-relaxed">
              {t.recovery.successMessage}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                <span>{t.recovery.emailLabel}</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.nome@rss3.com.br"
                className="w-full px-3.5 py-2.5 text-xs rounded-lg border bg-background focus:outline-hidden focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 rounded-lg bg-blue-900 hover:bg-blue-800 disabled:opacity-50 text-white font-semibold text-xs transition-colors shadow-sm cursor-pointer"
            >
              {loading ? "Enviando e-mail de recuperação..." : t.recovery.submitBtn}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
