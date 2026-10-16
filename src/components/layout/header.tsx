"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useApp } from "@/context/app-context";
import { firebaseLogout } from "@/lib/firebase/auth";
import { Locale } from "@/types";
import {
  Sun,
  Moon,
  Globe,
  GraduationCap,
  Menu,
  X,
  User,
  LogOut,
} from "lucide-react";

export function Header() {
  const { locale, setLocale, theme, toggleTheme, currentUser, setCurrentUser, mounted, t } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await firebaseLogout();
    } catch {
      // Falha silenciosa
    }
    setCurrentUser(null);
    router.push("/login");
  };

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/catalogo", label: t.nav.catalog },
    { href: "/dashboard", label: t.nav.myLearning },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-card/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Marca Oficial */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-blue-900 dark:bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <GraduationCap className="w-6 h-6 text-orange-400" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-blue-950 dark:text-white">
                RSS3
              </span>
              <span className="font-medium text-lg tracking-tight text-orange-600 dark:text-orange-400">
                Treinamentos
              </span>
            </div>
            <span className="text-[10px] text-muted-foreground uppercase font-medium tracking-wider -mt-1">
              Soluções Industriais
            </span>
          </div>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-900 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Controles: Idioma, Tema e Perfil */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Alternador de Idioma */}
          <div className="flex items-center rounded-md border border-border bg-secondary/50 p-0.5">
            <Globe className="w-3.5 h-3.5 ml-2 text-muted-foreground shrink-0 hidden sm:block" />
            {(["pt-BR", "en", "es"] as Locale[]).map((loc) => (
              <button
                key={loc}
                onClick={() => setLocale(loc)}
                className={`px-2 py-1 text-xs font-semibold rounded transition-colors ${
                  locale === loc
                    ? "bg-card text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title={`Mudar para ${loc}`}
              >
                {loc === "pt-BR" ? "PT" : loc.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Alternador de Tema */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            title={theme === "light" ? "Modo Escuro" : "Modo Claro"}
            aria-label="Alternar tema visual"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>

          {/* Área do Usuário / Login */}
          {mounted && currentUser ? (
            <div className="flex items-center gap-1.5">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-md border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/30 hover:bg-blue-100/50 dark:hover:bg-blue-900/40 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-blue-900 dark:bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                  {currentUser.name.charAt(0)}
                </div>
                <div className="hidden sm:flex flex-col text-left">
                  <span className="text-xs font-semibold text-foreground truncate max-w-[120px]">
                    {currentUser.name.split(" ")[0]}
                  </span>
                  <span className="text-[10px] text-muted-foreground truncate max-w-[120px]">
                    {currentUser.roleName[locale]}
                  </span>
                </div>
              </Link>
              <button
                onClick={handleLogout}
                className="p-2 rounded-md border border-border text-muted-foreground hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                title={t.nav.logout}
                aria-label="Sair da conta"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-900 dark:bg-blue-600 text-white text-xs font-semibold hover:bg-blue-800 transition-colors shadow-xs"
            >
              <User className="w-3.5 h-3.5" />
              <span>{t.nav.login}</span>
            </Link>
          )}

          {/* Menu Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t px-4 pt-2 pb-4 space-y-1 bg-card">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t mt-2 flex flex-col gap-2">
            {mounted && currentUser ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-md bg-blue-900 dark:bg-blue-600 text-white text-sm font-semibold"
                >
                  <User className="w-4 h-4" />
                  <span>{currentUser.name} (Painel)</span>
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleLogout();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-md border border-rose-200 dark:border-rose-900/60 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-sm font-semibold cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{t.nav.logout}</span>
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2 rounded-md bg-blue-900 dark:bg-blue-600 text-white text-sm font-semibold"
              >
                <User className="w-4 h-4" />
                <span>{t.nav.login}</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
