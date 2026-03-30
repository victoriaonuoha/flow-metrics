import KpiCards from "@/components/ui/KpiCards";

export default function DashboardPage() {
  return     <div>
     <KpiCards/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md h-64 flex items-center justify-center">
          Revenue Chart
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md h-64 flex items-center justify-center">
          Customer Growth
        </div>
      </div>
    </div>;
}