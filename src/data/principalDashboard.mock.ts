import React from "react";
import type { StatCard } from "@/types";
import {
  BadgeCheck,
  ClipboardCheck,
  GraduationCap,
  TrendingUp,
  User,
  Users,
} from "lucide-react";

export const principalDashboardStats: StatCard[] = [
  {
    id: "total-students",
    title: "Total Students",
    value: "2,847",
    icon: React.createElement(Users),
    iconColor: "blue",
    change: {
      text: "+12% from last year",
      variant: "positive",
      icon: React.createElement(TrendingUp),
    },
  },
  {
    id: "faculty-members",
    title: "Staff Members",
    value: "156",
    icon: React.createElement(User),
    iconColor: "green",
    change: {
      text: "current semester",
      variant: "positive",
    },
  },
  {
    id: "pending-approvals",
    title: "Pending Approvals",
    value: "23",
    icon: React.createElement(ClipboardCheck),
    iconColor: "red",
    change: { text: "Needs Attention", variant: "warning" },
  },
  {
    id: "graduation-rate",
    title: "Graduation Rate",
    value: "94.2%",
    icon: React.createElement(GraduationCap),
    iconColor: "orange",
  },
];

export type SchoolPerformance = {
  id: string;
  school: string;
  enrollment: number;
  passRate: number;
  avgGpa: number;
  atRiskRate: number;
  trendPp: number;
};

export const collegePerformanceBySchools: SchoolPerformance[] = [
  {
    id: "s1",
    school: "School of Engineering",
    enrollment: 612,
    passRate: 92.4,
    avgGpa: 3.36,
    atRiskRate: 5.8,
    trendPp: 1.6,
  },
  {
    id: "s2",
    school: "School of Business",
    enrollment: 528,
    passRate: 89.7,
    avgGpa: 3.21,
    atRiskRate: 7.4,
    trendPp: 0.9,
  },
  {
    id: "s3",
    school: "School of Medicine",
    enrollment: 403,
    passRate: 90.1,
    avgGpa: 3.27,
    atRiskRate: 6.3,
    trendPp: 1.2,
  },
];
