"use client";

export default function PlansPage() {
  const plans = [
    {
      name: "Basic",
      price: "$10/mo",
      features: ["5 Users", "Basic Support", "All Core Features"],
    },
    {
      name: "Pro",
      price: "$30/mo",
      features: ["20 Users", "Priority Support", "Analytics Dashboard"],
    },
    {
      name: "Enterprise",
      price: "$100/mo",
      features: ["Unlimited Users", "Dedicated Support", "Custom Features"],
    },
    {
      name: "Custom",
      price: "Contact Us",
      features: ["Tailored Solutions", "Dedicated Account Manager", "Full Integration"],
    },
  ];

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-semibold text-gray-800">Our Plans</h1>
      <p className="text-gray-500 max-w-xl">
        Choose a plan that works best for your team. Upgrade anytime.
      </p>

      {/* Plans container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className="flex flex-col justify-between rounded-xl p-6 border border-gray-200 bg-white shadow-md transition transform hover:scale-105 hover:shadow-xl hover:border-indigo-300 duration-300"
          >
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">{plan.name}</h2>
              <p className="text-2xl font-bold text-gray-900">{plan.price}</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 transition-all duration-300 group-hover:translate-x-1"
                  >
                    <span className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-6 px-4 py-2 rounded-lg font-medium text-white bg-gray-800 hover:bg-indigo-600 transition duration-300">
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}