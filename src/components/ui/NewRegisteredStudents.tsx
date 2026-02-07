"use client";

import React from "react";
import { TrendingUp } from "lucide-react";

const NewRegisteredStudents: React.FC = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 md:p-5 h-auto sm:h-[300px] flex flex-col shadow-sm">
      <div>
        <h2 className="text-base sm:text-lg md:text-[18px] font-bold text-gray-900 leading-tight">
          New Registered Students
        </h2>
      </div>

      <div className="mt-2 sm:mt-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          <span className="text-xs sm:text-sm text-gray-700 font-medium">Total new registrations</span>
          <span className="text-2xl sm:text-3xl font-bold text-[#026892]">487</span>
        </div>
      </div>

      <div className="my-2 sm:my-3 h-px bg-gray-100" />

      <div className="space-y-1.5 sm:space-y-2">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="text-gray-700">Undergraduate</span>
          <span className="font-semibold text-gray-900">342</span>
        </div>
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="text-gray-700">Postgraduate</span>
          <span className="font-semibold text-gray-900">145</span>
        </div>
      </div>

      <div className="mt-auto pt-2 sm:pt-0">
        <div className="rounded-lg bg-emerald-50 px-2 sm:px-3 py-1.5 sm:py-2 text-emerald-700 text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2">
          <TrendingUp className="h-3 sm:h-4 w-3 sm:w-4" />
          <span>+18% from last academic year</span>
        </div>
      </div>
    </div>
  );
};

export default NewRegisteredStudents;

