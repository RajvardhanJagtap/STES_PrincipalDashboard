"use client";

import React from "react";
import Link from "next/link";
import { BarChart3, BookOpen, ClipboardList, FileText } from "lucide-react";

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  variant: "blue" | "green" | "orange" | "purple";
}

const QuickActions: React.FC = () => {
  const actions: QuickAction[] = [
    {
      id: "marks-submitted",
      label: "Marks Submitted",
      icon: <ClipboardList size={20} />,
      href: "/grade-submissions",
      variant: "blue",
    },
    {
      id: "service-requests",
      label: "Service Requests",
      icon: <FileText size={20} />,
      href: "/service-requests",
      variant: "green",
    },
    {
      id: "academic-affairs",
      label: "Academic Affairs",
      icon: <BookOpen size={20} />,
      href: "/academic",
      variant: "orange",
    },
    {
      id: "reports",
      label: "Reports",
      icon: <BarChart3 size={20} />,
      href: "/reports",
      variant: "purple",
    },
  ];

  const getItemStyles = (variant: QuickAction["variant"]) => {
    switch (variant) {
      case "purple":
        return {
          bg: "bg-purple-100",
          icon: "text-purple-600",
          text: "text-purple-700",
          ring: "focus-visible:ring-purple-600/20",
        };
      case "green":
        return {
          bg: "bg-emerald-100",
          icon: "text-emerald-600",
          text: "text-emerald-700",
          ring: "focus-visible:ring-emerald-600/20",
        };
      case "orange":
        return {
          bg: "bg-orange-100",
          icon: "text-orange-600",
          text: "text-orange-800",
          ring: "focus-visible:ring-orange-600/20",
        };
      default:
        return {
          bg: "bg-blue-100",
          icon: "text-blue-600",
          text: "text-blue-700",
          ring: "focus-visible:ring-blue-600/20",
        };
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm h-auto sm:h-[300px] flex flex-col">
      <h2 className="text-[19px] font-bold text-gray-900 mb-3">
        Quick Actions
      </h2>
      <div className="flex flex-col flex-1 gap-2">
        {actions.map((action) => {
          const styles = getItemStyles(action.variant);

          return (
            <Link key={action.id} href={action.href} className="block">
              <div
                className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl ${styles.bg} hover:brightness-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 ${styles.ring}`}
              >
                <div className={`flex-shrink-0 ${styles.icon}`}>
                  <span className="[&>svg]:h-5 [&>svg]:w-5">{action.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-semibold text-[15px] ${styles.text}`}>
                    {action.label}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
