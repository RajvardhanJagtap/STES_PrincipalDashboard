"use client";

import React from "react";

const RecentGradeSubmissions: React.FC = () => {
  const rows = [
    {
      group: "MEE LEVEL 1",
      year: "Year 1",
      progress: 100,
      modules: "13/13",
      status: "Reviewed" as const,
    },
    {
      group: "CSE LEVEL 2",
      year: "Year 2",
      progress: 85,
      modules: "11/13",
      status: "In Progress" as const,
    },
    {
      group: "BBA LEVEL 3",
      year: "Year 3",
      progress: 92,
      modules: "12/13",
      status: "Pending Review" as const,
    },
    {
      group: "LAW LEVEL 2",
      year: "Year 2",
      progress: 76,
      modules: "10/13",
      status: "In Progress" as const,
    },
    {
      group: "NUR LEVEL 1",
      year: "Year 1",
      progress: 96,
      modules: "12/13",
      status: "Reviewed" as const,
    },
    {
      group: "EEE LEVEL 2",
      year: "Year 2",
      progress: 68,
      modules: "9/13",
      status: "In Progress" as const,
    },
    {
      group: "ECO LEVEL 1",
      year: "Year 1",
      progress: 90,
      modules: "12/13",
      status: "Pending Review" as const,
    },
  ];

  const getStatusPill = (status: (typeof rows)[number]["status"]) => {
    switch (status) {
      case "Reviewed":
        return "bg-blue-100 text-blue-700";
      case "In Progress":
        return "bg-orange-100 text-orange-700";
      case "Pending Review":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm h-full flex flex-col">
      <div>
        <h2 className="text-[19px] font-bold text-gray-900 leading-tight">
          Recent Grade Submissions
        </h2>
        <p className="text-sm text-gray-500 mt-1">Grade submissions by group</p>
      </div>

      <div className="mt-4 border border-gray-200 rounded-xl overflow-hidden flex-1">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-white">
              <tr className="border-b border-gray-200">
                <th className="text-left font-medium text-gray-700 px-4 py-3">
                  Group
                </th>
                <th className="text-left font-medium text-gray-700 px-4 py-3">
                  Year
                </th>
                <th className="text-left font-medium text-gray-700 px-4 py-3">
                  Progress
                </th>
                <th className="text-center font-medium text-gray-700 px-4 py-3">
                  Modules
                </th>
                <th className="text-left font-medium text-gray-700 px-4 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.group}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <td className="px-4 py-4 font-semibold text-gray-900 whitespace-nowrap">
                    {row.group}
                  </td>
                  <td className="px-4 py-4 text-gray-700 whitespace-nowrap">
                    {row.year}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2 min-w-[140px]">
                      <div className="h-2 w-20 rounded-full bg-slate-200 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#026892]"
                          style={{ width: `${row.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-gray-900">
                        {row.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center font-semibold text-gray-900 whitespace-nowrap">
                    {row.modules}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${getStatusPill(row.status)}`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentGradeSubmissions;
