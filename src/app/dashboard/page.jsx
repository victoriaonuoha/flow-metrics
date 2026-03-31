import KpiCards from "@/components/ui/KpiCards";
import RevenueChart from "@/components/charts/RevenueChart";
import CustomerGrowthChart from "@/components/charts/CustomerGrowthChart";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <KpiCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Revenue Card */}
        <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Revenue Overview
            </h2>
            <span className="text-sm text-green-600 font-medium">
              +12.5%
            </span>
          </div>

          <RevenueChart />
        </div>

        {/* Customer Growth Card */}
        <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Customer Growth
            </h2>
            <span className="text-sm text-green-600 font-medium">
              +8.2%
            </span>
          </div>

          <CustomerGrowthChart />
        </div>

      </div>
    </div>
  );
}