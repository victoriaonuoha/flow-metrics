"use client";

import { Bell } from "lucide-react";

export default function Navbar() {
  return (
  <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm sticky top-0 z-30">
  <h1 className="text-xl font-semibold text-gray-800">Subscription Overview</h1>

  <div className="flex items-center gap-4">
    <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
      <Bell size={20} className="text-gray-600" />
      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
    </button>

    <div className="flex items-center gap-2">
      <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
        FO
      </div>
    </div>
  </div>
</header>
  );
}