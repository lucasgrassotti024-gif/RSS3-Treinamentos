"use client";

import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/app-context";
import { Locale } from "@/types";
import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  Home,
  Sun,
  Moon,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Globe,
  User,
  LogOut,
  Trophy,
} from "lucide-react";

interface AppShellProps {
  children: React.ReactNode;
}

// Funções de sincronização externa para estado recolhido da sidebar
function subscribeSidebar(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("rss3_sidebar_change", callback);
  return () => {
    window.removeEventListener("rss3_sidebar_change", callback);
  };
}

function getSidebarSnapshot(): boolean {
  try {
    return localStorage.getItem("rss3_sidebar_collapsed") === "true";
  } catch {
    return false;
  }
}

function getServerSidebarSnapshot(): boolean {
  return false;
}

export function AppShell({ children }: AppShellProps) {
  const { locale, setLocale, toggleTheme, currentUser, setCurrentUser, mounted, t } = useApp();
  const pathname = usePathname();

  // Se estivermos dentro da rota do player (/aprender/...), ele já possui layout imersivo próprio
  const isPlayerRoute = pathname.startsWith("/aprender/");

  // Estado da sidebar sincronizado externamente com salvaguarda de montagem para paridade SSR
  const rawCollapsed = useSyncExternalStore(subscribeSidebar, getSidebarSnapshot, getServerSidebarSnapshot);
  const collapsed = mounted ? rawCollapsed : false;
  const [mobileOpen, setMobileOpen] = useState(false);

  const setCollapsed = (val: boolean) => {
    try {
      localStorage.setItem("rss3_sidebar_collapsed", val ? "true" : "false");
      window.dispatchEvent(new Event("rss3_sidebar_change"));
    } catch {
      // storage restrito
    }
  };

  const navItems = [
    {
      href: "/",
      label: t.nav.home,
      icon: Home,
    },
    {
      href: "/catalogo",
      label: t.nav.catalog,
      icon: BookOpen,
    },
    {
      href: "/mbas",
      label: t.nav.mbas || "MBAs",
      icon: GraduationCap,
    },
    {
      href: "/dashboard",
      label: t.nav.myLearning,
      icon: LayoutDashboard,
    },
    {
      href: "/desafios",
      label: (t.nav as Record<string, string>).challenges || "Desafios & Provas",
      icon: Trophy,
    },
  ];

  // Caso seja o player de aprendizagem, mantemos layout imersivo sem a barra lateral global interferindo
  if (isPlayerRoute) {
    return <div className="flex-1 flex flex-col">{children}</div>;
  }

  return (
    <div className="flex-1 flex min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Backdrop para mobile */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-slate-900/60 z-40 lg:hidden backdrop-blur-xs"
        />
      )}

      {/* Sidebar Corporativa */}
      <aside
        className={`
          fixed lg:sticky top-0 h-screen z-50 lg:z-30
          bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800
          flex flex-col justify-between transition-all duration-300 ease-in-out
          ${collapsed ? "lg:w-20" : "lg:w-64"}
          ${mobileOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Topo da Sidebar: Logo & Botão de Recolher */}
        <div className={`p-4 border-b border-slate-200 dark:border-slate-800 flex items-center ${collapsed ? "justify-center" : "justify-between"}`}>
          {(!collapsed || mobileOpen) && (
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 overflow-hidden group min-w-0"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-900 dark:bg-blue-600 flex items-center justify-center text-white shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6 text-orange-400" />
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-base tracking-tight text-blue-950 dark:text-white">
                    RSS3
                  </span>
                  <span className="font-semibold text-base tracking-tight text-orange-600 dark:text-orange-400">
                    Treinamentos
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 uppercase font-medium tracking-wider -mt-0.5 truncate">
                  Soluções Industriais
                </span>
              </div>
            </Link>
          )}

          {/* Botão para diminuir / expandir no desktop (visível no topo) */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
            title={collapsed ? "Expandir menu lateral" : "Diminuir menu lateral"}
            aria-label={collapsed ? "Expandir menu lateral" : "Diminuir menu lateral"}
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-slate-600 dark:text-slate-300" />
            )}
          </button>

          {/* Botão fechar no mobile */}
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navegação Principal */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          <div>
            {(!collapsed || mobileOpen) && (
              <span className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Navegação
              </span>
            )}
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <div key={item.href} className="relative group/nav">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-blue-50 dark:bg-blue-950/50 text-blue-900 dark:text-blue-300 shadow-xs border border-blue-200/80 dark:border-blue-900/60"
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                      } ${collapsed ? "justify-center" : ""}`}
                    >
                      <Icon
                        className={`w-5 h-5 shrink-0 ${
                          isActive
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-slate-400 group-hover/nav:text-slate-600 dark:group-hover/nav:text-slate-200"
                        }`}
                      />
                      {(!collapsed || mobileOpen) && (
                        <span className="truncate">{item.label}</span>
                      )}
                    </Link>

                    {/* Tooltip Flutuante Lateral no Modo Recolhido */}
                    {collapsed && !mobileOpen && (
                      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-x-1 transition-all duration-200 shadow-xl border border-slate-700 z-50">
                        {item.label}
                        <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-2 bg-slate-900 rotate-45 border-l border-b border-slate-700" />
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Rodapé da Sidebar: Área do Usuário + Botão de Recolher */}
        <div suppressHydrationWarning className="p-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
          {currentUser && (
            <div className="space-y-1">
              <Link
                href="/dashboard"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
                title={collapsed ? currentUser.name : undefined}
              >
                <div className="w-8 h-8 rounded-full bg-blue-900 dark:bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs group-hover:ring-2 group-hover:ring-blue-400">
                  {currentUser.name.charAt(0)}
                </div>
                {(!collapsed || mobileOpen) && (
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {currentUser.name}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate flex items-center gap-1.5">
                      <span>{currentUser.roleName[locale]}</span>
                      <span>•</span>
                      <span className="text-orange-600 dark:text-orange-400 font-semibold">N{currentUser.level}</span>
                    </div>
                  </div>
                )}
              </Link>

              {(!collapsed || mobileOpen) && (
                <button
                  type="button"
                  onClick={() => setCurrentUser(null)}
                  className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 text-2xs font-semibold transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sair da conta</span>
                </button>
              )}
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center gap-2 p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition-colors"
            title={collapsed ? "Expandir barra lateral" : "Recolher barra lateral"}
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            ) : (
              <>
                <ChevronLeft className="w-4 h-4 text-slate-500" />
                <span>Recolher menu</span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* Conteúdo Principal com Barra Superior (Topbar) */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar Corporativa Superior Fixa */}
        <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          {/* Lado Esquerdo da Topbar */}
          <div className="flex items-center gap-3">
            {/* Botão Hambúrguer Mobile */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Abrir menu lateral"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo compacto no mobile */}
            <Link href="/" className="lg:hidden flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-900 dark:bg-blue-600 flex items-center justify-center text-white">
                <GraduationCap className="w-4 h-4 text-orange-400" />
              </div>
              <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                RSS3 Treinamentos
              </span>
            </Link>

            {/* Identificação Institucional Desktop */}
            <div className="hidden lg:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span className="font-semibold text-slate-900 dark:text-white">
                RSS3 Soluções Industriais
              </span>
              <span>•</span>
              <span>Plataforma Corporativa de Capacitação</span>
            </div>
          </div>

          {/* Lado Direito da Topbar: Idioma, Tema e Perfil */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Alternador de Idioma */}
            <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-800/40 p-0.5">
              <Globe className="w-3.5 h-3.5 ml-2 text-slate-400 shrink-0 hidden sm:block" />
              {(["pt-BR", "en", "es"] as Locale[]).map((loc) => (
                <button
                  key={loc}
                  onClick={() => setLocale(loc)}
                  className={`px-2 py-1 text-xs font-bold rounded-md transition-colors ${
                    locale === loc
                      ? "bg-white dark:bg-slate-700 text-blue-900 dark:text-white shadow-xs"
                      : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                  title={`Idioma: ${loc}`}
                >
                  {loc === "pt-BR" ? "PT" : loc.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Alternador de Tema Claro / Escuro - Renderização imune a mismatch SSR via CSS */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Alternar tema visual"
              aria-label="Alternar tema visual"
            >
              {/* No tema claro (sem .dark no html), o Moon fica visível e o Sun escondido. No tema escuro (.dark), o Sun fica visível */}
              <Moon className="w-4 h-4 text-slate-700 block dark:hidden" />
              <Sun className="w-4 h-4 text-amber-400 hidden dark:block" />
            </button>

            {/* Perfil do Usuário / Acesso ao Login */}
            <div suppressHydrationWarning className="flex items-center">
              {currentUser ? (
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 p-1 sm:px-3 sm:py-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-900 dark:bg-blue-600 text-white flex items-center justify-center font-bold text-2xs shrink-0">
                    {currentUser.name.charAt(0)}
                  </div>
                  <div className="hidden sm:flex flex-col text-left">
                    <span className="text-xs font-semibold text-slate-900 dark:text-white truncate max-w-[120px]">
                      {currentUser.name.split(" ")[0]}
                    </span>
                  </div>
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-900 dark:bg-blue-600 text-white text-xs font-semibold hover:bg-blue-800 transition-colors shadow-xs"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>{t.nav.login}</span>
                </Link>
              )}
            </div>
          </div>
        </header>

        {/* Páginas do Sistema */}
        <main className="flex-1 flex flex-col min-w-0">{children}</main>
      </div>
    </div>
  );
}
