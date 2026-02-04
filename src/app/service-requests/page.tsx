"use client";

import MainLayout from "@/layouts/MainLayout";

export default function ServiceRequestsPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen bg-slate-50 px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Service Requests</h1>
        <p className="mt-2 text-gray-600">
          Track and respond to service requests.
        </p>
      </div>
    </MainLayout>
  );
}
