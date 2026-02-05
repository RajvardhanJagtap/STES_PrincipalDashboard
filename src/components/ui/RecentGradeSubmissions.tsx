"use client";

import React from "react";

type Status = "Reviewed" | "In Progress" | "Pending Review";

const RecentGradeSubmissions: React.FC = () => {
  const rows: Array<{
    group: string;
    year: string;
    progress: number;
    modules: string;
    status: Status;
  }> = [
    {
      group: "MEE LEVEL 1",
      year: "Year 1",
      progress: 100,
      modules: "13/13",
      status: "Reviewed",
    },
    {
      group: "CSE LEVEL 2",
      year: "Year 2",
      progress: 85,
      modules: "11/13",
      status: "In Progress",
    },
    {
      group: "BBA LEVEL 3",
      year: "Year 3",
      progress: 92,
      modules: "12/13",
      status: "Reviewed",
    },
    {
      group: "LAW LEVEL 2",
      year: "Year 2",
      progress: 76,
      modules: "10/13",
      status: "In Progress",
    },
  ];

  const getStatusPill = (status: Status) => {
    switch (status) {
      case "Reviewed":
        return "bg-emerald-50 text-emerald-800 ring-1 ring-inset ring-emerald-200";
      case "In Progress":
        return "bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-200";
      case "Pending Review":
        return "bg-slate-50 text-slate-800 ring-1 ring-inset ring-slate-200";
      default:
        return "bg-slate-50 text-slate-800 ring-1 ring-inset ring-slate-200";
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm h-full flex flex-col">
      <div>
        <h2 className="text-[18px] font-bold text-gray-900 leading-tight">
          Recent Grade Submissions
        </h2>
        <p className="text-sm text-gray-500 mt-1">Grade submissions by group</p>
      </div>

      <div className="mt-3 border border-gray-200 rounded-xl overflow-hidden flex-1">
        <div className="w-full">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="text-left text-xs font-semibold text-gray-700 px-3 py-2.5 uppercase tracking-wide">
                  Group
                </th>
                <th className="hidden sm:table-cell text-left text-xs font-semibold text-gray-700 px-3 py-2.5 uppercase tracking-wide whitespace-nowrap">
                  Year
                </th>
                <th className="text-left text-xs font-semibold text-gray-700 px-3 py-2.5 uppercase tracking-wide">
                  Completion
                </th>
                <th className="hidden md:table-cell text-right text-xs font-semibold text-gray-700 px-3 py-2.5 uppercase tracking-wide whitespace-nowrap">
                  Modules
                </th>
                <th className="text-left text-xs font-semibold text-gray-700 px-3 py-2.5 uppercase tracking-wide">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((row) => (
                <tr key={row.group} className="hover:bg-gray-50">
                  <td className="px-3 py-3.5 font-semibold text-gray-900 whitespace-normal break-normal">
                    {row.group}
                  </td>
                  <td className="hidden sm:table-cell px-3 py-3.5 text-gray-700 whitespace-nowrap">
                    {row.year}
                  </td>
                  <td className="px-3 py-3.5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="h-2 w-24 sm:w-28 rounded-full bg-gray-200 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#026892]"
                          style={{ width: `${row.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-gray-900 tabular-nums whitespace-nowrap">
                        {row.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-3 py-3.5 text-right font-semibold text-gray-900 whitespace-nowrap tabular-nums">
                    {row.modules}
                  </td>
                  <td className="px-3 py-3.5 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold ${getStatusPill(row.status)}`}
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
