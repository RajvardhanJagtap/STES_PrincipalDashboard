"use client";

import MainLayout from "@/layouts/MainLayout";

export default function SummarySheetsPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen bg-slate-50 px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Summary Sheets</h1>
        <p className="mt-2 text-gray-600">View and download summary sheets.</p>
      </div>
    </MainLayout>
  );
}
