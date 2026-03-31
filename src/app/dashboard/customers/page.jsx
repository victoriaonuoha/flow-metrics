"use client";

import { useState } from "react";
import Table from "@/components/ui/Table";

export default function CustomersPage() {
  const columns = ["Name", "Email", "Plan", "Status", "Actions"];

  const mockData = [
    ["Victoria Onuoha", "victoria@example.com", "Pro", "Active", "Edit"],
    ["John Doe", "john@example.com", "Basic", "Inactive", "Edit"],
    ["Jane Smith", "jane@example.com", "Pro", "Active", "Edit"],
    ["Alice Johnson", "alice@example.com", "Enterprise", "Active", "Edit"],
    ["Bob Brown", "bob@example.com", "Basic", "Pending", "Edit"],
  ];

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredData = mockData.filter(
    (row) =>
      row[0].toLowerCase().includes(search.toLowerCase()) ||
      row[1].toLowerCase().includes(search.toLowerCase())
  );

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = filteredData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <input
          type="text"
          placeholder="Search customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-64 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-100"
        />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Add Customer
        </button>
      </div>

      <Table columns={columns} data={paginatedData} />

      {/* Pagination */}
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="px-3 py-1 border rounded-lg hover:bg-gray-100 transition"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 border rounded-lg hover:bg-gray-100 transition ${
              page === i + 1 ? "bg-indigo-100 border-indigo-300" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className="px-3 py-1 border rounded-lg hover:bg-gray-100 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}