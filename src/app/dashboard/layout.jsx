"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function DashboardLayout({ children }) {
  // Sidebar collapsed state
  const [collapsed, setCollapsed] = useState(false);

  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100  transition-colors duration-300">
      
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Page content */}
        <main className="p-6 flex-1 overflow-auto">
          {children}
        </main>
      </div>

    </div>
  );
}