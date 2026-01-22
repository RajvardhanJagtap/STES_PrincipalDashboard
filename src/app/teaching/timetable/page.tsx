"use client";

import React, { useMemo, useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type ClassType = "lecture" | "lab" | "tutorial";

interface TimetableSession {
  id: string;
  dayIndex: number; // 0..4 (Mon..Fri)
  slotIndex: number; // 0..N-1
  moduleCode: string;
  moduleName: string;
  location: string;
  type: ClassType;
}

function formatMonthDay(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
}

function addDays(date: Date, days: number) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
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

function ViewToggle({ active }: { active: "week" | "day" }) {
  return (
    <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
      <button
        type="button"
        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
          active === "week"
            ? "bg-gray-50 text-primary-700"
            : "text-gray-600 hover:bg-gray-50"
        }`}
      >
        Week View
      </button>
      <button
        type="button"
        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
          active === "day"
            ? "bg-gray-50 text-primary-700"
            : "text-gray-600 hover:bg-gray-50"
        }`}
      >
        Day View
      </button>
    </div>
  );
}

function ClassCard({ session }: { session: TimetableSession }) {
  const styles =
    session.type === "lecture"
      ? {
          container: "bg-primary-50 border-primary-200",
          stripe: "bg-primary-800",
          title: "text-primary-800",
          meta: "text-primary-700",
          icon: "text-primary-700",
        }
      : session.type === "lab"
        ? {
            container: "bg-green-50 border-green-200",
            stripe: "bg-green-600",
            title: "text-green-700",
            meta: "text-green-700",
            icon: "text-green-700",
          }
        : {
            container: "bg-amber-50 border-amber-200",
            stripe: "bg-amber-500",
            title: "text-amber-700",
            meta: "text-amber-700",
            icon: "text-amber-700",
          };

  return (
    <div
      className={`relative rounded-xl border overflow-hidden shadow-sm ${styles.container}`}
    >
      <div
        className={`absolute left-0 top-0 bottom-0 w-1.5 ${styles.stripe}`}
      />
      <div className="pl-5 pr-4 py-4">
        <div className={`font-bold text-lg leading-tight ${styles.title}`}>
          {session.moduleCode}
        </div>
        <div className={`mt-2 font-semibold ${styles.meta}`}>
          {session.moduleName}
        </div>
        <div className={`mt-3 flex items-center gap-2 text-sm ${styles.meta}`}>
          <MapPin className={`w-4 h-4 ${styles.icon}`} />
          <span>{session.location}</span>
        </div>
      </div>
    </div>
  );
}

export default function TimetablePage() {
  const [weekOffset, setWeekOffset] = useState(0);

  // Screenshot-style labels (Mon..Fri)
  const dayLabels = useMemo(
    () => ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    [],
  );

  const timeSlots = useMemo(
    () => [
      { label: "09:00 – 10:30" },
      { label: "11:00 – 12:30" },
      { label: "14:00 – 15:30" },
      { label: "16:00 – 17:30" },
    ],
    [],
  );

  const baseWeekStart = useMemo(() => new Date(2026, 0, 6), []); // Jan 6, 2026 (used for display)
  const weekStart = useMemo(
    () => addDays(baseWeekStart, weekOffset * 7),
    [baseWeekStart, weekOffset],
  );
  const weekEnd = useMemo(() => addDays(weekStart, 4), [weekStart]);

  const sessions = useMemo<TimetableSession[]>(
    () => [
      {
        id: "s-1",
        dayIndex: 0,
        slotIndex: 0,
        moduleCode: "CS301",
        moduleName: "Data Structures",
        location: "Lab A-204",
        type: "lecture",
      },
      {
        id: "s-2",
        dayIndex: 2,
        slotIndex: 0,
        moduleCode: "CS301",
        moduleName: "Data Structures",
        location: "Lab A-204",
        type: "lecture",
      },
      {
        id: "s-3",
        dayIndex: 1,
        slotIndex: 1,
        moduleCode: "CS420",
        moduleName: "Software Engineering",
        location: "Room B-105",
        type: "lecture",
      },
      {
        id: "s-4",
        dayIndex: 2,
        slotIndex: 1,
        moduleCode: "CS410",
        moduleName: "AI Fundamentals",
        location: "Room B-203",
        type: "lecture",
      },
      {
        id: "s-5",
        dayIndex: 3,
        slotIndex: 1,
        moduleCode: "CS420",
        moduleName: "Software Engineering",
        location: "Room B-105",
        type: "tutorial",
      },
      {
        id: "s-6",
        dayIndex: 0,
        slotIndex: 2,
        moduleCode: "CS305",
        moduleName: "Database Systems",
        location: "Lab A-205",
        type: "lab",
      },
      {
        id: "s-7",
        dayIndex: 3,
        slotIndex: 2,
        moduleCode: "CS305",
        moduleName: "Database Systems",
        location: "Lab A-205",
        type: "lab",
      },
      {
        id: "s-8",
        dayIndex: 4,
        slotIndex: 2,
        moduleCode: "CS210",
        moduleName: "Web Development",
        location: "Lab C-301",
        type: "lab",
      },
    ],
    [],
  );

  const weekDays = useMemo(() => {
    return dayLabels.map((label, idx) => ({
      label,
      date: addDays(weekStart, idx),
    }));
  }, [dayLabels, weekStart]);

  const sessionsByCell = useMemo(() => {
    const map = new Map<string, TimetableSession>();
    for (const s of sessions) {
      map.set(`${s.dayIndex}:${s.slotIndex}`, s);
    }
    return map;
  }, [sessions]);

  // Match screenshot values (can be wired to real data later)
  const stats = useMemo(
    () => ({
      totalClasses: 8,
      teachingHours: 18,
      differentRooms: 5,
      totalStudents: 205,
    }),
    [],
  );

  return (
    <MainLayout>
      <div className="w-full px-6 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Timetable</h1>
            <p className="mt-2 text-gray-600">Your weekly teaching schedule</p>
          </div>
          <div className="flex items-center gap-3">
            <ViewToggle active="week" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          <StatTile
            title="Total Classes/Week"
            value={stats.totalClasses}
            icon={<Calendar className="w-6 h-6" />}
            iconBg="bg-primary-50"
            iconColor="#1d4ed8"
          />
          <StatTile
            title="Teaching Hours"
            value={stats.teachingHours}
            icon={<Clock className="w-6 h-6" />}
            iconBg="bg-green-50"
            iconColor="#16a34a"
          />
          <StatTile
            title="Different Rooms"
            value={stats.differentRooms}
            icon={<MapPin className="w-6 h-6" />}
            iconBg="bg-amber-50"
            iconColor="#d97706"
          />
          <StatTile
            title="Total Students"
            value={stats.totalStudents}
            icon={<Users className="w-6 h-6" />}
            iconBg="bg-primary-50"
            iconColor="#1d4ed8"
          />
        </div>

        {/* Week Navigator */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <button
              type="button"
              onClick={() => setWeekOffset((v) => v - 1)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="font-medium">Previous Week</span>
            </button>

            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">
                Week {weekOffset + 1}
              </div>
              <div className="text-sm text-gray-500">
                {formatMonthDay(weekStart)} - {formatMonthDay(weekEnd)}, 2026
              </div>
            </div>

            <button
              type="button"
              onClick={() => setWeekOffset((v) => v + 1)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium">Next Week</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Timetable Grid */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[980px]">
              {/* Header row */}
              <div
                className="grid"
                style={{
                  gridTemplateColumns: "240px repeat(5, minmax(0, 1fr))",
                }}
              >
                <div className="bg-gray-50 border-b border-gray-200 px-6 py-5">
                  <div className="text-xs font-semibold text-gray-600 tracking-wider">
                    TIME
                  </div>
                </div>
                {weekDays.map((d, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 border-b border-gray-200 border-l px-6 py-5 text-center"
                  >
                    <div className="font-semibold text-gray-900">{d.label}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {formatMonthDay(d.date)}
                    </div>
                  </div>
                ))}

                {/* Body */}
                {timeSlots.map((slot, slotIndex) => (
                  <React.Fragment key={slotIndex}>
                    <div className="px-6 py-6 border-b border-gray-200 bg-white">
                      <div className="font-semibold text-gray-900">
                        {slot.label}
                      </div>
                    </div>
                    {weekDays.map((_, dayIndex) => {
                      const session = sessionsByCell.get(
                        `${dayIndex}:${slotIndex}`,
                      );
                      return (
                        <div
                          key={`${dayIndex}-${slotIndex}`}
                          className="px-4 py-4 border-b border-gray-200 border-l bg-white"
                        >
                          {session ? (
                            <ClassCard session={session} />
                          ) : (
                            <div className="h-[118px]" />
                          )}
                        </div>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 bg-white border border-gray-200 rounded-xl shadow-sm px-6 py-5">
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-sm font-medium text-gray-600">
              Class Types:
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-6 rounded bg-primary-800" />
              <span className="text-sm text-gray-700">Lecture</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-6 rounded bg-green-600" />
              <span className="text-sm text-gray-700">Lab</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-6 rounded bg-amber-500" />
              <span className="text-sm text-gray-700">Tutorial</span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
