"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  BookOpen,
  CreditCard,
  LibraryBig,
  Building2,
  LifeBuoy,
  FileText,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
  href?: string;
}

const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: Home, href: "/" },
  { id: "academic", label: "Academic", icon: BookOpen, href: "/academic" },
  { id: "finance", label: "Finance", icon: CreditCard, href: "/finance" },
  { id: "library", label: "Library", icon: LibraryBig, href: "/library" },
  {
    id: "accommodation",
    label: "Accommodation",
    icon: Building2,
    href: "/accommodation",
  },
  {
    id: "support",
    label: "Support Services",
    icon: LifeBuoy,
    href: "/support-services",
  },
  { id: "documents", label: "Documents", icon: FileText, href: "/documents" },
  { id: "profile", label: "Profile", icon: User, href: "/profile" },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const pathname = usePathname();
  const activeId = useMemo(() => {
    const match = navItems.find((item) => item.href === pathname);
    return match?.id || "dashboard";
  }, [pathname]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-x-0 top-24 md:top-16 bottom-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-24 md:top-16 left-0 h-[calc(100vh-96px)] md:h-[calc(100vh-64px)] w-64 bg-white border-r border-gray-200 z-40 transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Navigation */}
        <nav className="p-4 space-y-1 h-full overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeId;
            const showChevron = item.id !== "dashboard";

            return (
              <Link
                key={item.id}
                href={item.href || "/"}
                onClick={() => {
                  if (isOpen) onToggle();
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors",
                  isActive
                    ? "bg-[#EAF7F1] text-[#026892]"
                    : "text-gray-900 hover:bg-gray-50",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="flex-1 text-left">{item.label}</span>
                {showChevron && (
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                )}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
