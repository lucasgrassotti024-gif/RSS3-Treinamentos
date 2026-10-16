"use client";

import React from "react";
import { useApp } from "@/context/app-context";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  const { t } = useApp();

  return (
    <footer className="border-t bg-card text-muted-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-orange-500" />
          <span className="font-semibold text-foreground">
            RSS3 Treinamentos
          </span>
          <span>— {t.common.companyName}</span>
        </div>

        <div className="flex items-center gap-4 text-muted-foreground">
          <span>Ambiente de Demonstração Técnico</span>
          <span>•</span>
          <span>Fase 1: Fundação</span>
          <span>•</span>
          <span>© 2026 RSS3</span>
        </div>
      </div>
    </footer>
  );
}
