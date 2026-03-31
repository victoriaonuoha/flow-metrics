"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  return (
    <div className="space-y-8 py-2 px-0">
      <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
      <p className="text-gray-500 max-w-xl">
        Manage your account, preferences, and security settings.
      </p>

      {/* Profile Section */}
      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              defaultValue="Victoria Onuoha"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              defaultValue="victoria@example.com"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>
        </div>
        <button className="px-4 py-2 mt-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Save Changes
        </button>
      </div>

      {/* Notifications Section */}
      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
        <div className="space-y-2">
          {Object.entries(notifications).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
            >
              <span className="capitalize text-gray-700">{key} notifications</span>
              <input
                type="checkbox"
                checked={value}
                onChange={() =>
                  setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
                }
                className="w-5 h-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Security</h2>
        <p className="text-gray-500 text-sm">
          Update your password and enable two-factor authentication for better security.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">New Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>
        </div>
        <button className="px-4 py-2 mt-4 bg-gray-800 text-white rounded-lg hover:bg-indigo-600 transition">
          Update Password
        </button>
      </div>
    </div>
  );
}