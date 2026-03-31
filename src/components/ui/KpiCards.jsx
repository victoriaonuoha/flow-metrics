"use client";

import {
  Users,
  CreditCard,
  DollarSign,
  ClipboardList,
} from "lucide-react";

export default function KpiCards() {
  const cards = [
    {
      title: "Total Customers",
      value: "1,245",
      icon: Users,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      title: "Active Subscriptions",
      value: "893",
      icon: CreditCard,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Revenue",
      value: "$12,450",
      icon: DollarSign,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      title: "Pending Tasks",
      value: "23",
      icon: ClipboardList,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-between shadow-sm hover:shadow-md transition"
          >
            <div>
              <p className="text-sm text-gray-500">{card.title}</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">
                {card.value}
              </p>
            </div>

            <div
              className={`p-3 rounded-lg ${card.iconBg} flex items-center justify-center`}
            >
              <Icon className={`w-5 h-5 ${card.iconColor}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
}