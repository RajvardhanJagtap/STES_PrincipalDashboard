"use client";

import { Bell } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Avatar from "@/components/ui/Avatar";
import { User } from "@/types";
import { useAcademicContext } from "@/contexts/AcademicContext";

interface HeaderProps {
  user?: User;
}

const TopBar: React.FC<HeaderProps> = ({ user }) => {
  const { academicYear, semester, setAcademicYear, setSemester } =
    useAcademicContext();

  const semesterLabel = semester === "Fall" ? "semester one" : "semester two";
  const username = (user?.email || "john.doe").split("@")[0];

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="flex h-16">
        {/* LEFT: Sidebar-aligned logo column */}
        <div className="w-64 flex items-center justify-center border-r border-gray-100">
          <img
            src="/images/ur-logo.jpeg"
            alt="UR Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>

        {/* RIGHT: Main header area */}
        <div className="flex flex-1 items-center justify-between px-6">
          {/* Brand text */}
          <h1 className="text-[20px] font-medium tracking-normal text-[#026892]">
  SAMPS UR
</h1>


          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative p-2 rounded-md hover:bg-gray-100">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                3
              </span>
            </button>

            {/* Academic Year */}
            <Select value={academicYear} onValueChange={setAcademicYear}>
              <SelectTrigger className="h-9 w-[130px] border-gray-200 text-sm font-medium">
                <SelectValue placeholder="2024-2025" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024-2025">2024-2025</SelectItem>
                <SelectItem value="2025-2026">2025-2026</SelectItem>
              </SelectContent>
            </Select>

            {/* Semester */}
            <Select
              value={semesterLabel}
              onValueChange={(value) =>
                setSemester(value === "semester one" ? "Fall" : "Spring")
              }
            >
              <SelectTrigger className="h-9 w-[150px] border-gray-200 text-sm font-medium capitalize">
                <SelectValue placeholder="semester one" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="semester one">semester one</SelectItem>
                <SelectItem value="semester two">semester two</SelectItem>
              </SelectContent>
            </Select>

            {/* User */}
            <Select value={username} onValueChange={() => {}}>
              <SelectTrigger className="h-9 border-gray-200 text-sm font-medium px-3">
                <div className="flex items-center gap-2">
                  <SelectValue placeholder="john.doe" />
                  <Avatar name={user?.name || "John"} size="sm" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={username}>{username}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
