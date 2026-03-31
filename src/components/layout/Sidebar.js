"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar({ collapsed, setCollapsed }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Customers", href: "/dashboard/customers", icon: Users },
    { name: "Plans", href: "/dashboard/plans", icon: CreditCard },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow"
      >
        <Menu size={20} />
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
    fixed md:relative top-0 left-0 h-screen bg-white shadow-lg z-50
    transform transition-all duration-300
    ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
    ${collapsed ? "w-20" : "w-64"}
    flex flex-col
  `}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          {!collapsed && (
            <span className="text-2xl font-bold text-indigo-600 tracking-wide">
              FlowMetrics
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:block text-gray-500 hover:text-gray-700 transition-colors"
          >
            {collapsed ? <Menu size={18} /> : <X size={18} />}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`
            flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
            transition-all duration-200
            ${isActive ? "bg-indigo-50 text-indigo-600 font-semibold shadow-sm" : "text-gray-600 hover:bg-gray-100"}
          `}
              >
                <Icon size={18} />
                {!collapsed && item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
