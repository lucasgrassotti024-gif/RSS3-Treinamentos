"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/app-context";
import { BookX, ArrowLeft } from "lucide-react";

export default function CourseNotFound() {
  const { t } = useApp();

  return (
    <div className="flex-1 flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full text-center space-y-5 p-8 rounded-2xl border border-border bg-card shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center mx-auto">
          <BookX className="w-6 h-6" />
        </div>

        <div className="space-y-1">
          <h2 className="text-xl font-extrabold text-foreground tracking-tight">
            {t.courseDetails.notFoundTitle}
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {t.courseDetails.notFoundSubtitle}
          </p>
        </div>

        <Link
          href="/catalogo"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold transition-colors shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t.courseDetails.backToCatalog}</span>
        </Link>
      </div>
    </div>
  );
}
