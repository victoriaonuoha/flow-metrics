"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function CustomerGrowthChart() {
  const options = {
    chart: {
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "50%",
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    grid: {
      borderColor: "#f1f5f9",
    },
    colors: ["#10b981"],
  };

  const series = [
    {
      name: "Customers",
      data: [50, 80, 65, 120, 150, 200],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      height={250}
    />
  );
}