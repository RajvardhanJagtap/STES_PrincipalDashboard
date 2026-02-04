"use client";

import MainLayout from "@/layouts/MainLayout";

export default function GradeSubmissionsPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen bg-slate-50 px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Grade Submissions</h1>
        <p className="mt-2 text-gray-600">
          Review and manage grade submissions.
        </p>
      </div>
    </MainLayout>
  );
}
