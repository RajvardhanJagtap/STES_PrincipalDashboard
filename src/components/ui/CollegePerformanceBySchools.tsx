"use client";

import React from "react";
import { useAcademicContext } from "@/contexts/AcademicContext";
import { collegePerformanceBySchools } from "@/data/principalDashboard.mock";

const CollegePerformanceBySchools: React.FC = () => {
  const { academicYear, semester } = useAcademicContext();
  const semLabel = semester === "Fall" ? "Sem 1" : "Sem 2";

  const toneForPassRate = (passRate: number) => {
    if (passRate >= 92) return "bg-emerald-100 text-emerald-700";
    if (passRate >= 88) return "bg-blue-100 text-blue-700";
    if (passRate >= 84) return "bg-amber-100 text-amber-700";
    return "bg-rose-100 text-rose-700";
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm h-full flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-[18px] font-bold text-gray-900">
            College Performance by Schools
          </h2>
          <div className="text-sm text-gray-600 mt-1 truncate">
            {academicYear} <span className="mx-1">•</span> {semLabel} overview
          </div>
        </div>
      </div>

      <div className="mt-3 border border-gray-200 rounded-xl overflow-hidden flex-1">
        <div className="w-full">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="text-left text-xs font-semibold text-gray-700 px-3 py-2.5 uppercase tracking-wide">
                  School
                </th>
                <th className="hidden sm:table-cell text-right text-xs font-semibold text-gray-700 px-3 py-2.5 uppercase tracking-wide whitespace-nowrap">
                  Enrollment
                </th>
                <th className="text-left text-xs font-semibold text-gray-700 px-3 py-2.5 uppercase tracking-wide whitespace-nowrap">
                  Pass Rate
                </th>
                <th className="hidden xl:table-cell text-right text-xs font-semibold text-gray-700 px-3 py-2.5 uppercase tracking-wide whitespace-nowrap">
                  Avg GPA
                </th>
                <th className="hidden xl:table-cell text-right text-xs font-semibold text-gray-700 px-3 py-2.5 uppercase tracking-wide whitespace-nowrap">
                  At-risk
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {collegePerformanceBySchools.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-3 py-3.5 font-semibold text-gray-900 whitespace-normal break-normal">
                    {row.school}
                  </td>

                  <td className="hidden sm:table-cell px-3 py-3.5 text-right text-gray-700 whitespace-nowrap tabular-nums">
                    {row.enrollment.toLocaleString()}
                  </td>

                  <td className="px-3 py-3.5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="h-2 w-24 sm:w-28 rounded-full bg-gray-200 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#026892]"
                          style={{
                            width: `${Math.max(0, Math.min(100, row.passRate))}%`,
                          }}
                        />
                      </div>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold tabular-nums ${toneForPassRate(row.passRate)}`}
                      >
                        {row.passRate.toFixed(1)}%
                      </span>
                    </div>
                  </td>

                  <td className="hidden xl:table-cell px-3 py-3.5 text-right text-gray-700 whitespace-nowrap tabular-nums">
                    {row.avgGpa.toFixed(2)}
                  </td>

                  <td className="hidden xl:table-cell px-3 py-3.5 text-right text-gray-700 whitespace-nowrap tabular-nums">
                    {row.atRiskRate.toFixed(1)}%
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

export default CollegePerformanceBySchools;
