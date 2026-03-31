"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function RevenueChart() {
  const options = {
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    dataLabels: { enabled: false },
    grid: {
      borderColor: "#f1f5f9",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    colors: ["#6366f1"],
  };

  const series = [
    {
      name: "Revenue",
      data: [1200, 2100, 1800, 2800, 3200, 4100],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height={250}
    />
  );
}