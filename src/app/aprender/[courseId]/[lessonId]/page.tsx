import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { DEMO_COURSES } from "@/lib/mock-data";
import LearningPlayerClient from "./learning-player-client";

interface PageProps {
  params: Promise<{
    courseId: string;
    lessonId: string;
  }>;
}

export function generateStaticParams() {
  const params: { courseId: string; lessonId: string }[] = [];

  for (const course of DEMO_COURSES) {
    if (course.modules) {
      for (const mod of course.modules) {
        for (const lesson of mod.lessons) {
          params.push({
            courseId: course.id,
            lessonId: lesson.id,
          });
        }
      }
      params.push({
        courseId: course.id,
        lessonId: "conclusao-e-certificado",
      });
    }
  }

  return params;
}

async function LearningPlayerContainer({ params }: PageProps) {
  const { courseId, lessonId } = await params;

  const course = DEMO_COURSES.find((c) => c.id === courseId);
  if (!course) {
    notFound();
  }

  // Verificar se a aula existe no currículo do curso ou se é a etapa final de conclusão
  const allLessons = (course.modules || []).flatMap((m) => m.lessons);
  const isFinalCompletionLesson = lessonId === "conclusao-e-certificado";
  const lesson = allLessons.find((l) => l.id === lessonId);
  if (!lesson && !isFinalCompletionLesson) {
    notFound();
  }

  return <LearningPlayerClient courseId={courseId} lessonId={lessonId} />;
}

export default function LearningPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <LearningPlayerContainer params={params} />
    </Suspense>
  );
}
