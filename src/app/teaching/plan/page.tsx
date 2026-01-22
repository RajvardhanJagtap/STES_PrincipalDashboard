"use client";

import React, { useMemo } from "react";
import MainLayout from "@/layouts/MainLayout";
import {
  Download,
  Upload,
  FileText,
  CheckCircle2,
  Clock,
  AlertCircle,
  Eye,
  Pencil,
} from "lucide-react";

type TeachingPlanStatus =
  | "approved"
  | "pending-review"
  | "needs-revision"
  | "draft";

interface TeachingPlanRow {
  id: string;
  module: string;
  moduleCode: string;
  weekRange: string;
  topic: string;
  assessment: string;
  submittedAt?: string;
  reviewedAt?: string;
  status: TeachingPlanStatus;
  reviewer?: string;
}

function StatusPill({ status }: { status: TeachingPlanStatus }) {
  const config = {
    approved: {
      label: "Approved",
      className: "bg-green-100 text-green-700",
      icon: <CheckCircle2 className="w-4 h-4" />,
    },
    "pending-review": {
      label: "Pending Review",
      className: "bg-amber-100 text-amber-700",
      icon: <Clock className="w-4 h-4" />,
    },
    "needs-revision": {
      label: "Needs Revision",
      className: "bg-red-100 text-red-700",
      icon: <AlertCircle className="w-4 h-4" />,
    },
    draft: {
      label: "Draft",
      className: "bg-gray-100 text-gray-700",
      icon: <FileText className="w-4 h-4" />,
    },
  } satisfies Record<
    TeachingPlanStatus,
    { label: string; className: string; icon: React.ReactNode }
  >;

  const item = config[status];

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${item.className}`}
    >
      {item.icon}
      {item.label}
    </span>
  );
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

function WorkflowStep({
  number,
  title,
  subtitle,
  tone,
}: {
  number: number;
  title: string;
  subtitle: string;
  tone: "neutral" | "warning" | "success";
}) {
  const toneClass =
    tone === "success"
      ? "bg-green-100 text-green-700"
      : tone === "warning"
        ? "bg-amber-100 text-amber-700"
        : "bg-gray-100 text-gray-700";

  return (
    <div className="flex items-start gap-4 min-w-0">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${toneClass}`}
      >
        {number}
      </div>
      <div className="min-w-0">
        <div className="font-semibold text-gray-900 truncate">{title}</div>
        <div className="text-sm text-gray-500 truncate">{subtitle}</div>
      </div>
    </div>
  );
}

export default function TeachingPlanPage() {
  const plans = useMemo<TeachingPlanRow[]>(
    () => [
      {
        id: "tp-1",
        module: "Data Structures",
        moduleCode: "CSC3101",
        weekRange: "Week 1-2",
        topic: "Introduction to Arrays and Linked Lists",
        assessment: "Quiz 1",
        submittedAt: "2025-08-15",
        reviewedAt: "2025-08-18",
        status: "approved",
        reviewer: "Prof. Jane Doe",
      },
      {
        id: "tp-2",
        module: "Data Structures",
        moduleCode: "CSC3101",
        weekRange: "Week 3-4",
        topic: "Stacks and Queues Implementation",
        assessment: "Assignment 1",
        submittedAt: "2025-08-20",
        reviewedAt: "2025-08-22",
        status: "approved",
        reviewer: "Prof. Jane Doe",
      },
      {
        id: "tp-3",
        module: "Software Engineering",
        moduleCode: "CSC4201",
        weekRange: "Week 1-3",
        topic: "Software Development Lifecycle",
        assessment: "Group presentation",
        submittedAt: "2025-09-01",
        status: "pending-review",
        reviewer: "Dr. Mark Johnson",
      },
      {
        id: "tp-4",
        module: "Web Development",
        moduleCode: "CSC2105",
        weekRange: "Week 1-2",
        topic: "HTML5 and CSS3 Fundamentals",
        assessment: "Website project",
        submittedAt: "2025-09-05",
        reviewedAt: "2025-09-06",
        status: "needs-revision",
        reviewer: "Dr. Sarah Miller",
      },
      {
        id: "tp-5",
        module: "Database Systems",
        moduleCode: "CSC3305",
        weekRange: "Week 1-2",
        topic: "Database Design and ER Modeling",
        assessment: "Database design project",
        status: "draft",
      },
    ],
    [],
  );

  const stats = useMemo(() => {
    const total = plans.length;
    const approved = plans.filter((p) => p.status === "approved").length;
    const pending = plans.filter((p) => p.status === "pending-review").length;
    const needsRevision = plans.filter(
      (p) => p.status === "needs-revision",
    ).length;

    return { total, approved, pending, needsRevision };
  }, [plans]);

  return (
    <MainLayout>
      <div className="w-full px-6 py-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Teaching Plan</h1>
            <p className="mt-2 text-gray-600">
              Submit and track your teaching plans for approval
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {}}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span className="font-medium">Download Template</span>
            </button>
            <button
              type="button"
              onClick={() => {}}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-700 text-white hover:bg-primary-800 transition-colors shadow-sm"
            >
              <Upload className="w-4 h-4" />
              <span className="font-medium">Submit New Plan</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          <StatTile
            title="Total Plans"
            value={stats.total}
            icon={<FileText className="w-6 h-6" />}
            iconBg="bg-primary-50"
            iconColor="#1d4ed8"
          />
          <StatTile
            title="Approved"
            value={stats.approved}
            icon={<CheckCircle2 className="w-6 h-6" />}
            iconBg="bg-green-50"
            iconColor="#16a34a"
          />
          <StatTile
            title="Pending Review"
            value={stats.pending}
            icon={<Clock className="w-6 h-6" />}
            iconBg="bg-amber-50"
            iconColor="#d97706"
          />
          <StatTile
            title="Needs Revision"
            value={stats.needsRevision}
            icon={<AlertCircle className="w-6 h-6" />}
            iconBg="bg-red-50"
            iconColor="#dc2626"
          />
        </div>

        {/* Plans Table */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">
              All Teaching Plans
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left text-xs font-semibold text-gray-600 tracking-wider px-6 py-4">
                    MODULE &amp; WEEK
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-600 tracking-wider px-6 py-4">
                    TOPIC
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-600 tracking-wider px-6 py-4">
                    ASSESSMENT
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-600 tracking-wider px-6 py-4">
                    SUBMITTED
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-600 tracking-wider px-6 py-4">
                    STATUS
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-600 tracking-wider px-6 py-4">
                    REVIEWER
                  </th>
                  <th className="text-right text-xs font-semibold text-gray-600 tracking-wider px-6 py-4">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {plans.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-5 align-top">
                      <div className="font-semibold text-gray-900">
                        {row.moduleCode} - {row.module}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {row.weekRange}
                      </div>
                    </td>
                    <td className="px-6 py-5 align-top text-gray-700">
                      {row.topic}
                    </td>
                    <td className="px-6 py-5 align-top text-gray-700">
                      {row.assessment}
                    </td>
                    <td className="px-6 py-5 align-top">
                      {row.submittedAt ? (
                        <div>
                          <div className="text-gray-900 text-sm">
                            {row.submittedAt}
                          </div>
                          {row.reviewedAt ? (
                            <div className="text-xs text-gray-500 mt-1">
                              Reviewed: {row.reviewedAt}
                            </div>
                          ) : null}
                        </div>
                      ) : (
                        <div className="text-sm text-gray-400">
                          Not submitted
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-5 align-top">
                      <StatusPill status={row.status} />
                    </td>
                    <td className="px-6 py-5 align-top text-gray-700">
                      {row.reviewer ?? <span className="text-gray-400">-</span>}
                    </td>
                    <td className="px-6 py-5 align-top">
                      <div className="flex items-center justify-end gap-3">
                        <button
                          type="button"
                          onClick={() => {}}
                          className="p-2 rounded-lg text-primary-700 hover:bg-primary-50 transition-colors"
                          aria-label="View"
                          title="View"
                        >
                          <Eye className="w-4.5 h-4.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {}}
                          className="p-2 rounded-lg text-primary-700 hover:bg-primary-50 transition-colors"
                          aria-label="Edit"
                          title="Edit"
                        >
                          <Pencil className="w-4.5 h-4.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {}}
                          className="p-2 rounded-lg text-primary-700 hover:bg-primary-50 transition-colors"
                          aria-label="Download"
                          title="Download"
                        >
                          <Download className="w-4.5 h-4.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Approval Workflow */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">
              Approval Workflow
            </h2>
          </div>

          <div className="px-6 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <WorkflowStep
                number={1}
                title="Submit Plan"
                subtitle="Upload teaching plan"
                tone="neutral"
              />
              <div className="hidden lg:block flex-1 h-px bg-gray-200" />
              <WorkflowStep
                number={2}
                title="Under Review"
                subtitle="HOD reviews plan"
                tone="warning"
              />
              <div className="hidden lg:block flex-1 h-px bg-gray-200" />
              <WorkflowStep
                number={3}
                title="Approved"
                subtitle="Ready to implement"
                tone="success"
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
