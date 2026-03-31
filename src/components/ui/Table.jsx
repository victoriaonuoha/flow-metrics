"use client";

import { Edit2, Trash2 } from "lucide-react";

export default function Table({ columns, data }) {
  return (
    <div className="space-y-4">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto border border-gray-200 rounded-xl">
        <table className="min-w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-6 py-3 text-sm font-medium text-gray-500"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                {row.map((cell, idx) => (
                  <td key={idx} className="px-6 py-4 text-sm text-gray-700">
                    {/* Status badges */}
                    {cell === "Active" && (
                      <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                        Active
                      </span>
                    )}
                    {cell === "Inactive" && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                        Inactive
                      </span>
                    )}
                    {cell === "Pending" && (
                      <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">
                        Pending
                      </span>
                    )}

                    {/* Action column */}
                    {idx === row.length - 1 && (
                      <div className="flex items-center gap-2">
                        <Edit2 className="w-4 h-4 text-indigo-600 cursor-pointer" />
                        <Trash2 className="w-4 h-4 text-red-600 cursor-pointer" />
                      </div>
                    )}

                    {/* Other cells */}
                    {cell !== "Active" &&
                      cell !== "Inactive" &&
                      cell !== "Pending" &&
                      idx !== row.length - 1 &&
                      cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile / Tablet Card View */}
      <div className="lg:hidden space-y-4">
        {data.map((row, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white"
          >
            {columns.map((col, idx) => (
              <div
                key={idx}
                className="flex justify-between py-1 items-center"
              >
                <span className="text-sm text-gray-500">{col}</span>

                <span className="text-sm text-gray-900 flex items-center gap-1">
                  {/* Status badges */}
                  {row[idx] === "Active" && (
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                      Active
                    </span>
                  )}
                  {row[idx] === "Inactive" && (
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                      Inactive
                    </span>
                  )}
                  {row[idx] === "Pending" && (
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">
                      Pending
                    </span>
                  )}

                  {/* Actions */}
                  {idx === row.length - 1 && (
                    <div className="flex items-center gap-2">
                      <Edit2 className="w-4 h-4 text-indigo-600 cursor-pointer" />
                      <Trash2 className="w-4 h-4 text-red-600 cursor-pointer" />
                    </div>
                  )}

                  {/* Other cells */}
                  {!["Active", "Inactive", "Pending"].includes(row[idx]) &&
                    idx !== row.length - 1 &&
                    row[idx]}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}