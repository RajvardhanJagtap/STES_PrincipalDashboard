import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  CheckSquare,
  BarChart3,
  ChevronDown,
  ChevronRight,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";

const BRAND_BLUE = "#026892";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
  href?: string;
  children?: { id: string; label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true, // ✅ DEFAULT ACTIVE
    href: "/",
  },
  {
    id: "teaching",
    label: "Teaching",
    icon: Users,
    children: [
      { id: "assigned-modules", label: "Assigned Modules", href: "/teaching/modules" },
      { id: "teaching-plan", label: "Teaching Plan", href: "/teaching/plan" },
      { id: "timetable", label: "Timetable", href: "/teaching/timetable" },
      { id: "attendance", label: "Attendance", href: "/students/mark-attendance" },
      { id: "notify-students", label: "Notify Students", href: "/teaching/notify" },
    ],
  },
  {
    id: "students",
    label: "Students",
    icon: Users,
    children: [
      { id: "class-lists", label: "Class Lists", href: "/students/class-lists" },
      { id: "performance", label: "Performance", href: "/students/performance" },
      { id: "absences", label: "Absences", href: "/students/absences" },
      { id: "claims", label: "Claims", href: "/students/claims" },
      { id: "absence-requests", label: "Absence Requests", href: "/students/absence-requests" },
    ],
  },
  {
    id: "assessment",
    label: "Assessment",
    icon: CheckSquare,
    children: [
      { id: "calendar", label: "Calendar", href: "/calendar" },
      { id: "grades", label: "Grades", href: "/assessment/grades" },
      { id: "results", label: "Results", href: "/assessment/results" },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    icon: BarChart3,
    href: "/analytics",
  },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-40 transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Navigation */}
        <nav className="p-3 space-y-1 mt-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isExpanded = expandedItems.includes(item.id);
            const hasChildren = !!item.children?.length;

            return (
              <div key={item.id}>
                {hasChildren ? (
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      item.active
                        ? "text-white"
                        : "text-gray-600 hover:bg-blue-50"
                    )}
                    style={
                      item.active
                        ? { backgroundColor: BRAND_BLUE }
                        : undefined
                    }
                  >
                    <Icon className="w-5 h-5" />
                    <span className="flex-1 text-left">{item.label}</span>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href || "/"}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      item.active
                        ? "text-white"
                        : "text-gray-600 hover:bg-blue-50"
                    )}
                    style={
                      item.active
                        ? { backgroundColor: BRAND_BLUE }
                        : undefined
                    }
                  >
                    <Icon className="w-5 h-5" />
                    <span className="flex-1 text-left">{item.label}</span>
                  </Link>
                )}

                {/* Submodules */}
                {hasChildren && isExpanded && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.children!.map((child) => (
                      <Link
                        key={child.id}
                        href={child.href}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-blue-50 hover:text-[#026892] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Toggle */}
      <button
        onClick={onToggle}
        className="fixed top-20 left-4 z-30 p-2 bg-white rounded-lg shadow border border-gray-200 lg:hidden"
      >
        <Menu className="w-5 h-5 text-gray-900" />
      </button>
    </>
  );
};

export default Sidebar;