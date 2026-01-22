"use client";

import React, { useMemo, useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import { Calendar, Download, Filter, ChevronDown } from "lucide-react";

type SessionType = "Lecture" | "Tutorial" | "Lab";

interface AbsenceRecord {
  id: string;
  moduleCode: string;
  moduleName: string;
  sessionType: SessionType;
  timeRange: string;
  date: string; // YYYY-MM-DD
  absentCount: number;
  totalStudents: number;
  absentStudents: string[];
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

function SelectButton({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 min-w-[180px] px-4 pr-10 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium appearance-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}

function AbsentChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-lg bg-red-100 text-red-600 text-sm font-semibold">
      {name}
    </span>
  );
}

export default function AbsencesPage() {
  const moduleOptions = useMemo(
    () => ["All Modules", "CSC3101", "CSC4201", "CSC2105"],
    [],
  );
  const dateOptions = useMemo(
    () => ["Last 7 Days", "Last 30 Days", "This Semester"],
    [],
  );

  const [selectedModule, setSelectedModule] = useState(moduleOptions[0]);
  const [selectedRange, setSelectedRange] = useState(dateOptions[0]);

  const records = useMemo<AbsenceRecord[]>(
    () => [
      {
        id: "ar-1",
        moduleCode: "CSC3101",
        moduleName: "Data Structures",
        sessionType: "Lecture",
        timeRange: "08:00-10:00",
        date: "2026-01-08",
        absentCount: 5,
        totalStudents: 45,
        absentStudents: [
          "Alice Johnson",
          "Bob Smith",
          "Carol Williams",
          "David Brown",
          "Emma Davis",
        ],
      },
      {
        id: "ar-2",
        moduleCode: "CSC4201",
        moduleName: "Software Engineering",
        sessionType: "Tutorial",
        timeRange: "10:30-12:30",
        date: "2026-01-07",
        absentCount: 2,
        totalStudents: 38,
        absentStudents: ["Frank Miller", "Grace Wilson"],
      },
      {
        id: "ar-3",
        moduleCode: "CSC2105",
        moduleName: "Web Development",
        sessionType: "Lab",
        timeRange: "14:00-17:00",
        date: "2026-01-06",
        absentCount: 4,
        totalStudents: 52,
        absentStudents: [
          "Henry Moore",
          "Isabella Taylor",
          "Jack Anderson",
          "Kelly Martinez",
        ],
      },
    ],
    [],
  );

  const filtered = useMemo(() => {
    if (selectedModule === "All Modules") return records;
    return records.filter((r) => r.moduleCode === selectedModule);
  }, [records, selectedModule]);

  // Screenshot-aligned stats (can be wired to real data later)
  const stats = useMemo(
    () => ({
      avgAttendanceRate: "89.3%",
      totalAbsences: 11,
      chronicAbsentees: 3,
      sessionsRecorded: 12,
    }),
    [],
  );

  return (
    <MainLayout>
      <div className="w-full px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Absence Records
            </h1>
            <p className="mt-2 text-gray-600">
              Track and monitor student absences
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
            title="Avg Attendance Rate"
            value={stats.avgAttendanceRate}
            icon={<Calendar className="w-6 h-6" />}
            iconBg="bg-green-50"
            iconColor="#16a34a"
          />
          <StatTile
            title="Total Absences"
            value={stats.totalAbsences}
            icon={<Calendar className="w-6 h-6" />}
            iconBg="bg-red-50"
            iconColor="#dc2626"
          />
          <StatTile
            title="Chronic Absentees"
            value={stats.chronicAbsentees}
            icon={<Calendar className="w-6 h-6" />}
            iconBg="bg-amber-50"
            iconColor="#d97706"
          />
          <StatTile
            title="Sessions Recorded"
            value={stats.sessionsRecorded}
            icon={<Calendar className="w-6 h-6" />}
            iconBg="bg-primary-50"
            iconColor="#1d4ed8"
          />
        </div>

        {/* Filters */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-sm p-4">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
            <div className="flex flex-wrap gap-4">
              <SelectButton
                value={selectedModule}
                onChange={setSelectedModule}
                options={moduleOptions}
              />
              <SelectButton
                value={selectedRange}
                onChange={setSelectedRange}
                options={dateOptions}
              />
              <button
                type="button"
                onClick={() => {}}
                className="h-12 inline-flex items-center gap-2 px-4 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-4.5 h-4.5" />
                <span className="font-medium">More Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Recent Absence Records */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">
              Recent Absence Records
            </h2>
          </div>

          <div className="divide-y divide-gray-200">
            {filtered.map((r) => (
              <div key={r.id} className="px-6 py-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex items-start gap-4 min-w-0">
                    <Calendar className="w-6 h-6 text-primary-700 flex-shrink-0 mt-1" />
                    <div className="min-w-0">
                      <div className="font-bold text-gray-900 text-lg truncate">
                        {r.moduleCode} - {r.moduleName}
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        {r.sessionType} • {r.timeRange} • {r.date}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-red-600 font-bold">
                      {r.absentCount} Absent
                    </div>
                    <div className="text-sm text-gray-500">
                      of {r.totalStudents} students
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="text-sm font-semibold text-gray-600">
                    Absent Students:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {r.absentStudents.map((name) => (
                      <AbsentChip key={name} name={name} />
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {filtered.length === 0 ? (
              <div className="px-6 py-10 text-center text-gray-500">
                No absence records found.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
