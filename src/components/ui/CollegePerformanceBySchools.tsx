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
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm h-full flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-[19px] font-bold text-gray-900">
            College Performance by Schools
          </h2>
          <div className="text-sm text-gray-600 mt-1 truncate">
            {academicYear} <span className="mx-1">•</span> {semLabel} overview
          </div>
        </div>
      </div>

      <div className="mt-4 border border-gray-200 rounded-xl overflow-hidden flex-1">
        <div className="w-full">
          <table className="w-full text-sm table-fixed">
            <thead className="bg-white">
              <tr className="border-b border-gray-200">
                <th className="text-left font-medium text-gray-700 px-4 py-3">
                  School
                </th>
                <th className="hidden sm:table-cell text-left font-medium text-gray-700 px-4 py-3 whitespace-nowrap">
                  Enrollment
                </th>
                <th className="text-left font-medium text-gray-700 px-4 py-3 whitespace-nowrap">
                  Pass Rate
                </th>
                <th className="hidden xl:table-cell text-left font-medium text-gray-700 px-4 py-3 whitespace-nowrap">
                  Avg GPA
                </th>
                <th className="hidden xl:table-cell text-left font-medium text-gray-700 px-4 py-3 whitespace-nowrap">
                  At-risk
                </th>
              </tr>
            </thead>
            <tbody>
              {collegePerformanceBySchools.map((row) => {
                return (
                  <tr
                    key={row.id}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <td className="px-4 py-4 font-semibold text-gray-900 whitespace-normal break-normal w-[44%]">
                      {row.school}
                    </td>

                    <td className="hidden sm:table-cell px-4 py-4 text-gray-700 whitespace-nowrap w-[14%]">
                      {row.enrollment.toLocaleString()}
                    </td>

                    <td className="px-4 py-4 w-[26%]">
                      <div className="flex items-center gap-2 min-w-0 flex-wrap">
                        <div className="h-2 w-20 sm:w-24 rounded-full bg-slate-200 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#026892]"
                            style={{
                              width: `${Math.max(0, Math.min(100, row.passRate))}%`,
                            }}
                          />
                        </div>
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${toneForPassRate(row.passRate)}`}
                        >
                          {row.passRate.toFixed(1)}%
                        </span>
                      </div>
                    </td>

                    <td className="hidden xl:table-cell px-4 py-4 text-gray-700 whitespace-nowrap">
                      {row.avgGpa.toFixed(2)}
                    </td>

                    <td className="hidden xl:table-cell px-4 py-4 text-gray-700 whitespace-nowrap">
                      {row.atRiskRate.toFixed(1)}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CollegePerformanceBySchools;
