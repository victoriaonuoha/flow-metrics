"use client";

export default function KpiCards() {
  const cards = [
    { title: "Total Customers", value: "1,245", color: "bg-indigo-50", icon: "👥" },
    { title: "Active Subscriptions", value: "893", color: "bg-green-50", icon: "💳" },
    { title: "Revenue", value: "$12,450", color: "bg-yellow-50", icon: "💰" },
    { title: "Pending Tasks", value: "23", color: "bg-red-50", icon: "📝" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {cards.map((card) => (
        <div key={card.title} className={`p-6 rounded-xl shadow-md flex items-center justify-between ${card.color}`}>
          <div>
            <p className="text-sm text-gray-500">{card.title}</p>
            <p className="text-2xl font-semibold text-gray-800">{card.value}</p>
          </div>
          <div className="text-3xl">{card.icon}</div>
        </div>
      ))}
    </div>
  );
}