"use client";

import React, { useMemo, useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import {
  Download,
  Mail,
  Search,
  SlidersHorizontal,
  Users,
  User,
  UserRound,
  Eye,
  Phone,
} from "lucide-react";

type Gender = "male" | "female";

interface StudentRow {
  id: string;
  initials: string;
  name: string;
  regNo: string;
  email: string;
  phone: string;
  program: string;
  year: string;
  gpa: number;
  attendancePercent: number;
  gender: Gender;
  classCode: string;
}

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/g).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  return (first + last).toUpperCase();
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

function AvatarBadge({ initials }: { initials: string }) {
  return (
    <div className="w-12 h-12 rounded-xl bg-primary-800 text-white flex items-center justify-center font-bold">
      {initials}
    </div>
  );
}

function gpaPillClasses(gpa: number) {
  if (gpa >= 3.75) return "bg-green-100 text-green-700";
  if (gpa >= 3.5) return "bg-blue-100 text-blue-700";
  return "bg-amber-100 text-amber-700";
}

function attendanceBarColor(attendancePercent: number) {
  if (attendancePercent >= 85) return "bg-green-600";
  if (attendancePercent >= 75) return "bg-amber-500";
  return "bg-red-500";
}

export default function ClassListsPage() {
  const classOptions = useMemo(() => ["CSC4201", "CSC3101", "CSC3305"], []);
  const [selectedClass, setSelectedClass] = useState(classOptions[0]);
  const [query, setQuery] = useState("");

  const allStudents = useMemo<StudentRow[]>(() => {
    const featured: StudentRow[] = [
      {
        id: "s-1",
        initials: "AJ",
        name: "Alice Johnson",
        regNo: "CSC/2023/001",
        email: "alice.j@ur.ac.rw",
        phone: "+250 788 123 456",
        program: "BSc Computer Science",
        year: "Year 3",
        gpa: 3.8,
        attendancePercent: 92,
        gender: "female",
        classCode: "CSC4201",
      },
      {
        id: "s-2",
        initials: "BS",
        name: "Bob Smith",
        regNo: "CSC/2023/002",
        email: "bob.s@ur.ac.rw",
        phone: "+250 788 234 567",
        program: "BSc Computer Science",
        year: "Year 3",
        gpa: 3.5,
        attendancePercent: 88,
        gender: "male",
        classCode: "CSC4201",
      },
      {
        id: "s-3",
        initials: "CW",
        name: "Carol Williams",
        regNo: "CSC/2023/003",
        email: "carol.w@ur.ac.rw",
        phone: "+250 788 345 678",
        program: "BSc Computer Science",
        year: "Year 3",
        gpa: 3.9,
        attendancePercent: 78,
        gender: "female",
        classCode: "CSC4201",
      },
      {
        id: "s-4",
        initials: "DB",
        name: "David Brown",
        regNo: "CSC/2023/004",
        email: "david.b@ur.ac.rw",
        phone: "+250 788 456 789",
        program: "BSc Computer Science",
        year: "Year 3",
        gpa: 3.6,
        attendancePercent: 95,
        gender: "male",
        classCode: "CSC4201",
      },
      {
        id: "s-5",
        initials: "ED",
        name: "Emma Davis",
        regNo: "CSC/2023/005",
        email: "emma.d@ur.ac.rw",
        phone: "+250 788 567 890",
        program: "BSc Computer Science",
        year: "Year 3",
        gpa: 3.7,
        attendancePercent: 85,
        gender: "female",
        classCode: "CSC4201",
      },
    ];

    // Build additional demo students for CSC4201 to resemble the screenshot scale (45 total).
    // Target distribution: 28 male / 17 female, Avg GPA ~ 3.65
    const extraNames = [
      "Grace Lee",
      "Henry Wilson",
      "Isabella Moore",
      "Jackson Taylor",
      "Katherine Anderson",
      "Liam Thomas",
      "Mia Jackson",
      "Noah White",
      "Olivia Harris",
      "Paul Martin",
      "Quinn Thompson",
      "Riya Garcia",
      "Sophia Martinez",
      "Theo Robinson",
      "Uma Clark",
      "Victor Rodriguez",
      "Wendy Lewis",
      "Xavier Lee",
      "Yara Walker",
      "Zane Hall",
      "Aisha King",
      "Brian Young",
      "Chloe Allen",
      "Dylan Scott",
      "Ella Green",
      "Farhan Baker",
      "Hannah Adams",
      "Ibrahim Nelson",
      "Jasmine Carter",
      "Kofi Mitchell",
      "Lina Perez",
      "Mohamed Roberts",
      "Nora Turner",
      "Omar Phillips",
      "Priya Campbell",
      "Rohan Parker",
      "Sara Evans",
      "Tariq Edwards",
      "Vera Collins",
      "William Stewart",
    ];

    // We need 40 extra to reach 45 total for CSC4201.
    const extraCount = 40;
    const extra: StudentRow[] = [];

    // Remaining gender targets after featured (male 2, female 3): males 26, females 14
    let remainingMales = 26;
    let remainingFemales = 14;

    // GPA targets to keep avg ~3.65 given featured gpas sum to 18.5:
    // Remaining 40 sum should be 145.75.
    // Use 39 students at 3.64 and 1 student at 3.79.
    const gpas: number[] = Array.from({ length: extraCount }, (_, idx) =>
      idx === 0 ? 3.79 : 3.64,
    );

    for (let i = 0; i < extraCount; i++) {
      const name = extraNames[i % extraNames.length];
      const gender: Gender = remainingMales > 0 ? "male" : "female";
      if (gender === "male") remainingMales -= 1;
      else remainingFemales -= 1;

      const regIndex = 6 + i;
      const attendanceBase = 70 + (i % 26); // 70..95
      const attendancePercent = Math.max(60, Math.min(99, attendanceBase));

      extra.push({
        id: `s-4201-${i + 1}`,
        initials: initialsFromName(name),
        name,
        regNo: `CSC/2023/${String(regIndex).padStart(3, "0")}`,
        email: `${name
          .toLowerCase()
          .replace(/[^a-z\s]/g, "")
          .replace(/\s+/g, ".")}@ur.ac.rw`,
        phone: `+250 788 ${String(100 + ((i * 3) % 900)).padStart(3, "0")} ${String(100 + ((i * 7) % 900)).padStart(3, "0")}`,
        program: "BSc Computer Science",
        year: "Year 3",
        gpa: gpas[i],
        attendancePercent,
        gender,
        classCode: "CSC4201",
      });
    }

    const otherClasses: StudentRow[] = [
      // Extra rows for other classes (so dropdown looks real)
      {
        id: "s-6",
        initials: "KM",
        name: "Kevin Martin",
        regNo: "CSC/2023/021",
        email: "kevin.m@ur.ac.rw",
        phone: "+250 788 111 222",
        program: "BSc Computer Science",
        year: "Year 2",
        gpa: 3.4,
        attendancePercent: 82,
        gender: "male",
        classCode: "CSC3101",
      },
      {
        id: "s-7",
        initials: "NP",
        name: "Nadia Patel",
        regNo: "CSC/2023/022",
        email: "nadia.p@ur.ac.rw",
        phone: "+250 788 222 333",
        program: "BSc Computer Science",
        year: "Year 2",
        gpa: 3.85,
        attendancePercent: 90,
        gender: "female",
        classCode: "CSC3101",
      },
      {
        id: "s-8",
        initials: "SR",
        name: "Samuel Roberts",
        regNo: "CSC/2023/031",
        email: "samuel.r@ur.ac.rw",
        phone: "+250 788 333 444",
        program: "BSc Information Systems",
        year: "Year 3",
        gpa: 3.55,
        attendancePercent: 86,
        gender: "male",
        classCode: "CSC3305",
      },
    ];

    return [...featured, ...extra, ...otherClasses];
  }, []);

  const filteredStudents = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allStudents
      .filter((s) => s.classCode === selectedClass)
      .filter((s) => {
        if (!q) return true;
        return (
          s.name.toLowerCase().includes(q) ||
          s.regNo.toLowerCase().includes(q) ||
          s.email.toLowerCase().includes(q)
        );
      });
  }, [allStudents, selectedClass, query]);

  const stats = useMemo(() => {
    const total = filteredStudents.length;
    const male = filteredStudents.filter((s) => s.gender === "male").length;
    const female = filteredStudents.filter((s) => s.gender === "female").length;
    const avgGpa = total
      ? filteredStudents.reduce((acc, s) => acc + s.gpa, 0) / total
      : 0;

    return {
      total,
      male,
      female,
      avgGpa: avgGpa ? avgGpa.toFixed(2) : "0.00",
    };
  }, [filteredStudents]);

  return (
    <MainLayout>
      <div className="w-full px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Class Lists</h1>
            <p className="mt-2 text-gray-600">View and manage your students</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {}}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium">Email All</span>
            </button>
            <button
              type="button"
              onClick={() => {}}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-700 text-white hover:bg-primary-800 transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span className="font-medium">Export List</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          <StatTile
            title="Total Students"
            value={stats.total}
            icon={<Users className="w-6 h-6" />}
            iconBg="bg-primary-50"
            iconColor="#1d4ed8"
          />
          <StatTile
            title="Male"
            value={stats.male}
            icon={<User className="w-6 h-6" />}
            iconBg="bg-green-50"
            iconColor="#16a34a"
          />
          <StatTile
            title="Female"
            value={stats.female}
            icon={<UserRound className="w-6 h-6" />}
            iconBg="bg-amber-50"
            iconColor="#d97706"
          />
          <StatTile
            title="Avg GPA"
            value={stats.avgGpa}
            icon={<Users className="w-6 h-6" />}
            iconBg="bg-primary-50"
            iconColor="#0284c7"
          />
        </div>

        {/* Search & Filters */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-sm p-4">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search students by name or registration number..."
                  className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="h-12 px-4 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium"
              >
                {classOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => {}}
                className="h-12 inline-flex items-center gap-2 px-4 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <SlidersHorizontal className="w-4.5 h-4.5" />
                <span className="font-medium">Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left text-xs font-semibold text-gray-600 tracking-wider px-6 py-4">
                    STUDENT
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-600 tracking-wider px-6 py-4">
                    CONTACT
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-600 tracking-wider px-6 py-4">
                    PROGRAM
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-600 tracking-wider px-6 py-4">
                    GPA
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-600 tracking-wider px-6 py-4">
                    ATTENDANCE
                  </th>
                  <th className="text-right text-xs font-semibold text-gray-600 tracking-wider px-6 py-4">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStudents.map((s) => (
                  <tr
                    key={s.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <AvatarBadge initials={s.initials} />
                        <div>
                          <div className="font-semibold text-gray-900">
                            {s.name}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            {s.regNo}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-gray-700">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">{s.email}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">{s.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-gray-900">{s.program}</div>
                      <div className="text-sm text-gray-500 mt-1">{s.year}</div>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex items-center justify-center px-3 py-1.5 rounded-full text-sm font-semibold ${gpaPillClasses(s.gpa)}`}
                      >
                        {s.gpa.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-28 h-2.5 rounded-full bg-gray-100 overflow-hidden">
                          <div
                            className={`h-full ${attendanceBarColor(s.attendancePercent)} rounded-full`}
                            style={{ width: `${s.attendancePercent}%` }}
                          />
                        </div>
                        <div className="text-sm text-gray-700 font-medium">
                          {s.attendancePercent}%
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-end gap-4">
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
                          aria-label="Email"
                          title="Email"
                        >
                          <Mail className="w-4.5 h-4.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredStudents.length === 0 ? (
                  <tr>
                    <td
                      className="px-6 py-10 text-center text-gray-500"
                      colSpan={6}
                    >
                      No students found.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
