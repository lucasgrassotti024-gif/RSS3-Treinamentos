import React, { Suspense } from "react";
import CourseDetailsClient from "./course-details-client";
import { DEMO_COURSES } from "@/lib/mock-data";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ courseId: string }>;
}

export function generateStaticParams() {
  return DEMO_COURSES.map((course) => ({
    courseId: course.id,
  }));
}

async function CourseDetailsContainer({ params }: PageProps) {
  const { courseId } = await params;

  const courseExists = DEMO_COURSES.some((c) => c.id === courseId);
  if (!courseExists) {
    notFound();
  }

  return <CourseDetailsClient courseId={courseId} />;
}

export default function CourseDetailsPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto p-10 text-xs text-muted-foreground flex items-center justify-center min-h-[50vh]">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <CourseDetailsContainer params={params} />
    </Suspense>
  );
}
