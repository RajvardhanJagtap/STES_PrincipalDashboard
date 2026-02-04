"use client";

import MainLayout from "@/layouts/MainLayout";

export default function ReportsPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen bg-slate-50 px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <p className="mt-2 text-gray-600">View analytics and reports.</p>
      </div>
    </MainLayout>
  );
}
