"use client";

import React, { useMemo } from "react";
import MainLayout from "@/layouts/MainLayout";
import {
  Calendar,
  CheckCircle2,
  Download,
  Eye,
  XCircle,
  Clock,
} from "lucide-react";

type RequestStatus = "Pending" | "Approved" | "Rejected";

interface AbsenceRequest {
  requestId: string;
  status: RequestStatus;
  hasDocument: boolean;
  studentName: string;
  studentRef: string;
  module: string;
  absenceDate: string; // YYYY-MM-DD
  submittedDate: string; // YYYY-MM-DD
  reviewedDate?: string; // YYYY-MM-DD
  reasonTitle: string;
  reasonDescription: string;
  reviewerComment?: string;
}

function StatTile({
  title,
  value,
  icon,
  iconBg,
  iconColor,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}
          style={{ color: iconColor }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

function StatusPill({ status }: { status: RequestStatus }) {
  if (status === "Approved") {
    return (
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
        <CheckCircle2 className="w-4 h-4" />
        Approved
      </span>
    );
  }

  if (status === "Rejected") {
    return (
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-semibold">
        <XCircle className="w-4 h-4" />
        Rejected
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">
      <Clock className="w-4 h-4" />
      Pending
    </span>
  );
}

function DocumentBadge() {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-100 text-blue-700 text-sm font-semibold">
      Document Attached
    </span>
  );
}

export default function AbsenceRequestsPage() {
  const requests = useMemo<AbsenceRequest[]>(
    () => [
      {
        requestId: "REQ-2026-001",
        status: "Pending",
        hasDocument: true,
        studentName: "Alice Johnson",
        studentRef: "CSC/2023/001",
        module: "CSC3101 - Data Structures",
        absenceDate: "2026-01-08",
        submittedDate: "2026-01-07",
        reasonTitle: "Medical Appointment",
        reasonDescription:
          "Doctor appointment scheduled for morning session. Medical certificate attached.",
      },
      {
        requestId: "REQ-2026-002",
        status: "Approved",
        hasDocument: true,
        studentName: "Bob Smith",
        studentRef: "CSC/2023/002",
        module: "CSC4201 - Software Engineering",
        absenceDate: "2026-01-06",
        submittedDate: "2026-01-05",
        reviewedDate: "2026-01-06",
        reasonTitle: "Family Emergency",
        reasonDescription:
          "Family emergency requiring immediate travel. Documentation provided.",
      },
      {
        requestId: "REQ-2026-003",
        status: "Rejected",
        hasDocument: false,
        studentName: "Carol Williams",
        studentRef: "CSC/2023/003",
        module: "CSC2105 - Web Development",
        absenceDate: "2026-01-04",
        submittedDate: "2026-01-03",
        reviewedDate: "2026-01-04",
        reasonTitle: "Personal Reasons",
        reasonDescription: "Unable to attend due to personal circumstances.",
        reviewerComment: "Insufficient documentation provided",
      },
      {
        requestId: "REQ-2026-004",
        status: "Pending",
        hasDocument: true,
        studentName: "David Brown",
        studentRef: "CSC/2023/004",
        module: "CSC3101 - Data Structures",
        absenceDate: "2026-01-10",
        submittedDate: "2026-01-08",
        reasonTitle: "Transport Issue",
        reasonDescription:
          "Public transport disruption caused delays and missed session. Supporting note attached.",
      },
    ],
    [],
  );

  const stats = useMemo(() => {
    const total = requests.length;
    const pending = requests.filter((r) => r.status === "Pending").length;
    const approved = requests.filter((r) => r.status === "Approved").length;
    const rejected = requests.filter((r) => r.status === "Rejected").length;
    return { total, pending, approved, rejected };
  }, [requests]);

  return (
    <MainLayout>
      <div className="w-full px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Absence Requests
            </h1>
            <p className="mt-2 text-gray-600">
              Review and approve student absence requests
            </p>
          </div>

          <button
            type="button"
            onClick={() => {}}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-700 text-white hover:bg-primary-800 transition-colors shadow-sm w-fit"
          >
            <Download className="w-4 h-4" />
            <span className="font-medium">Export Report</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          <StatTile
            title="Total Requests"
            value={stats.total}
            icon={<Calendar className="w-6 h-6" />}
            iconBg="bg-primary-50"
            iconColor="#1d4ed8"
          />
          <StatTile
            title="Pending"
            value={stats.pending}
            icon={<Calendar className="w-6 h-6" />}
            iconBg="bg-amber-50"
            iconColor="#d97706"
          />
          <StatTile
            title="Approved"
            value={stats.approved}
            icon={<Calendar className="w-6 h-6" />}
            iconBg="bg-green-50"
            iconColor="#16a34a"
          />
          <StatTile
            title="Rejected"
            value={stats.rejected}
            icon={<Calendar className="w-6 h-6" />}
            iconBg="bg-red-50"
            iconColor="#dc2626"
          />
        </div>

        {/* All Requests */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">All Requests</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {requests.map((r) => {
              const isPending = r.status === "Pending";

              return (
                <div key={r.requestId} className="px-6 py-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-primary-700 font-bold tracking-wide">
                          {r.requestId}
                        </span>
                        <StatusPill status={r.status} />
                        {r.hasDocument ? <DocumentBadge /> : null}
                      </div>

                      <h3 className="mt-3 text-xl font-bold text-gray-900">
                        {r.studentName}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {r.studentRef} • {r.module}
                      </p>

                      <div className="mt-5 bg-gray-50 rounded-xl p-5">
                        <p className="text-sm font-bold text-gray-800">
                          Reason:{" "}
                          <span className="font-semibold">{r.reasonTitle}</span>
                        </p>
                        <p className="mt-2 text-sm text-gray-600">
                          {r.reasonDescription}
                        </p>
                        {r.status === "Rejected" && r.reviewerComment ? (
                          <p className="mt-3 text-sm text-red-600 font-semibold">
                            Comment:{" "}
                            <span className="font-medium">
                              {r.reviewerComment}
                            </span>
                          </p>
                        ) : null}
                      </div>

                      {!isPending && r.reviewedDate ? (
                        <p className="mt-4 text-sm text-gray-500">
                          Reviewed: {r.reviewedDate}
                        </p>
                      ) : null}
                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-4">
                      <div className="text-right">
                        <div className="inline-flex items-center gap-2 text-gray-700 font-semibold">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          {r.absenceDate}
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Submitted: {r.submittedDate}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-end gap-3">
                        <button
                          type="button"
                          onClick={() => {}}
                          className="h-11 inline-flex items-center gap-2 px-5 rounded-xl border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 transition-colors"
                        >
                          <Eye className="w-4 h-4 text-gray-500" />
                          <span className="font-semibold">View Document</span>
                        </button>

                        {isPending ? (
                          <>
                            <button
                              type="button"
                              onClick={() => {}}
                              className="h-11 inline-flex items-center justify-center px-6 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-colors font-semibold"
                            >
                              Approve
                            </button>
                            <button
                              type="button"
                              onClick={() => {}}
                              className="h-11 inline-flex items-center justify-center px-6 rounded-xl bg-red-600 text-white hover:bg-red-700 transition-colors font-semibold"
                            >
                              Reject
                            </button>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
