"use client";

import React from "react";
import { Activity, GraduationCap } from "lucide-react";

const FinancialStatus: React.FC = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 h-auto sm:h-[280px] flex flex-col shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 h-9 w-9 rounded-lg bg-blue-50 text-blue-600 grid place-items-center">
          <GraduationCap className="h-[18px] w-[18px]" />
        </div>

        <div className="min-w-0">
          <h2 className="text-[18px] font-bold text-gray-900 leading-tight">
            Enrolled in Semester
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Students enrolled in current semester
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="text-3xl font-bold text-[#026892] leading-none">
            2847
          </div>
          <p className="text-sm text-gray-600 mt-2">Active enrollments</p>
        </div>

        <div className="flex-shrink-0 h-11 w-11 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center">
          <GraduationCap className="h-5 w-5" />
        </div>
      </div>

      <div className="my-4 h-px bg-gray-100" />

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-700">Full-time</span>
          <span className="font-semibold text-gray-900">2,456</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-700">Part-time</span>
          <span className="font-semibold text-gray-900">391</span>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <div className="rounded-lg bg-blue-50 px-3 py-2 text-blue-700 text-sm font-medium flex items-center gap-2">
          <Activity className="h-4 w-4" />
          <span>97.2% retention rate this semester</span>
        </div>
      </div>
    </div>
  );
};

export default FinancialStatus;
