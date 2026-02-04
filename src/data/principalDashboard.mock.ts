import React from "react";
import type { StatCard } from "@/types";
import {
  BadgeCheck,
  ClipboardCheck,
  GraduationCap,
  TrendingUp,
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
    title: "Faculty Members",
    value: "156",
    icon: React.createElement(GraduationCap),
    iconColor: "green",
    change: {
      text: "Enrollment-to-Faculty Ratio: 17:1",
      variant: "neutral",
    },
  },
  {
    id: "graduation-rate",
    title: "Graduation Rate",
    value: "94.2%",
    icon: React.createElement(BadgeCheck),
    iconColor: "orange",
  },
  {
    id: "pending-approvals",
    title: "Pending Approvals",
    value: "23",
    icon: React.createElement(ClipboardCheck),
    iconColor: "red",
    change: { text: "Needs review today", variant: "warning" },
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
    school: "School of Science",
    enrollment: 487,
    passRate: 86.2,
    avgGpa: 3.08,
    atRiskRate: 9.1,
    trendPp: -0.6,
  },
  {
    id: "s4",
    school: "School of Education",
    enrollment: 403,
    passRate: 90.1,
    avgGpa: 3.27,
    atRiskRate: 6.3,
    trendPp: 1.2,
  },
  {
    id: "s5",
    school: "School of Health Sciences",
    enrollment: 379,
    passRate: 93.0,
    avgGpa: 3.42,
    atRiskRate: 4.9,
    trendPp: 2.1,
  },
];
