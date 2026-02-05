"use client";

import React from "react";
import { TrendingUp, Users } from "lucide-react";

const NewRegisteredStudents: React.FC = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 h-auto sm:h-[280px] flex flex-col shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 h-9 w-9 rounded-lg bg-blue-50 text-blue-600 grid place-items-center">
          <Users className="h-[18px] w-[18px]" />
        </div>

        <div className="min-w-0">
          <h2 className="text-[18px] font-bold text-gray-900 leading-tight">
            New Registered Students
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Students registered this academic year
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="text-3xl font-bold text-[#026892] leading-none">
            487
          </div>
          <p className="text-sm text-gray-600 mt-2">Total new registrations</p>
        </div>

        <div className="flex-shrink-0 h-11 w-11 rounded-full bg-blue-50 text-blue-600 grid place-items-center">
          <Users className="h-5 w-5" />
        </div>
      </div>

      <div className="my-4 h-px bg-gray-100" />

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-700">Undergraduate</span>
          <span className="font-semibold text-gray-900">342</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-700">Postgraduate</span>
          <span className="font-semibold text-gray-900">145</span>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <div className="rounded-lg bg-emerald-50 px-3 py-2 text-emerald-700 text-sm font-medium flex items-center gap-2">
          <TrendingUp className="h-4 w-4" />
          <span>+18% from last academic year</span>
        </div>
      </div>
    </div>
  );
};

export default NewRegisteredStudents;
