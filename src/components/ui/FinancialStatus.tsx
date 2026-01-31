"use client";

import React, { useState } from "react";
import { EyeOff, Eye, CreditCard } from "lucide-react";
import { formatRwfNumber } from "@/utils/helpers";

type FinancialStatusProps = {
  semesterFees: number;
  paid: number;
  remaining: number;
  paidProgress: number; // 0..1
  nextPaymentDue: string;
};

const BRAND_BLUE = "#026892";

const FinancialStatus: React.FC<FinancialStatusProps> = ({
  semesterFees,
  paid,
  remaining,
  paidProgress,
  nextPaymentDue,
}) => {
  // Default to hidden: eye-off icon and masked amounts
  const [isVisible, setIsVisible] = useState(false);
  const clampedProgress = Math.max(0, Math.min(1, paidProgress));

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 h-[300px] flex flex-col shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[19px] font-bold text-gray-900">
          Financial Status
        </h2>
        <button
          type="button"
          onClick={toggleVisibility}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label={isVisible ? "Hide amounts" : "Show amounts"}
        >
          {!isVisible ? (
            <EyeOff className="w-5 h-5 text-gray-500" />
          ) : (
            <Eye className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>

      <div className="space-y-3 flex-1">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-700 font-medium">Semester Fees</span>
          <span className="text-gray-900 font-semibold tabular-nums w-[140px] flex items-center justify-end gap-1">
            <span className="shrink-0">RWF</span>
            <span className="text-right">
              {isVisible ? formatRwfNumber(semesterFees) : "******"}
            </span>
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-700 font-medium">Paid</span>
          <span className="text-[#026892] font-semibold tabular-nums w-[140px] flex items-center justify-end gap-1">
            <span className="shrink-0">RWF</span>
            <span className="text-right">
              {isVisible ? formatRwfNumber(paid) : "******"}
            </span>
          </span>
        </div>

        <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${clampedProgress * 100}%`,
              backgroundColor: BRAND_BLUE,
            }}
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-700 font-medium">Remaining</span>
          <span className="text-orange-600 font-semibold tabular-nums w-[140px] flex items-center justify-end gap-1">
            <span className="shrink-0">RWF</span>
            <span className="text-right">
              {isVisible ? formatRwfNumber(remaining) : "******"}
            </span>
          </span>
        </div>

        <div className="text-xs text-gray-500 pt-2">
          Next payment due:{" "}
          <span className="text-gray-700 font-medium">{nextPaymentDue}</span>
        </div>
      </div>
      <button
        type="button"
        className="mt-4 w-full px-4 py-2 rounded-md bg-[#026892] flex items-center justify-center gap-2 text-white text-[15px] font-medium"
      >
        <CreditCard className="w-4 h-4 text-white" />
        <span>Make Payment</span>
      </button>
    </div>
  );
};

export default FinancialStatus;
