"use client";

import MainLayout from "@/layouts/MainLayout";
import StatCard from "@/components/ui/StatCard";
import NewRegisteredStudents from "@/components/ui/NewRegisteredStudents";
import QuickActions from "@/components/ui/QuickActions";
import WelcomeSection from "@/components/ui/WelcomeSection";
import FinancialStatus from "@/components/ui/FinancialStatus";
import RecentGradeSubmissions from "@/components/ui/RecentGradeSubmissions";
import CollegePerformanceBySchools from "@/components/ui/CollegePerformanceBySchools";
import { currentPrincipal } from "@/data/principalUser";
import { principalDashboardStats } from "@/data/principalDashboard.mock";

export default function HomePage() {
  return (
    <MainLayout headerVariant="principalDashboard">
      <div className="w-full min-h-screen bg-white">
        <WelcomeSection userName={currentPrincipal.name} />

        {/* Stats */}
        <div className="py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
            {principalDashboardStats.map((stat) => (
              <StatCard
                key={stat.id}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                iconColor={stat.iconColor}
                change={stat.change}
              />
            ))}
          </div>
        </div>

        <div className="py-2 pb-10">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-3">
            <QuickActions />
            <div className="lg:col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-3">
              <NewRegisteredStudents />
              <FinancialStatus />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
            <RecentGradeSubmissions />
            <CollegePerformanceBySchools />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
