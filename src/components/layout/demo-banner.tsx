"use client";

import React from "react";
import { useApp } from "@/context/app-context";
import { AlertTriangle } from "lucide-react";

export function DemoBanner() {
  const { t } = useApp();

  return (
    <aside aria-label="Aviso de ambiente de demonstração" className="bg-amber-500/10 border-b border-amber-500/20 text-amber-800 dark:text-amber-300 py-1 px-3 text-3xs font-medium tracking-wide flex items-center justify-center gap-1.5 select-none">
      <AlertTriangle className="w-3 h-3 text-amber-600 dark:text-amber-400 shrink-0" />
      <span>{t.common.demoNotice}</span>
    </aside>
  );
}
