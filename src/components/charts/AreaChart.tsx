import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export const AreaChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "area",
      foreColor: "#fff",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2023-01-05T00:00:00.000Z",
        "2023-02-19T01:30:00.000Z",
        "2023-03-19T02:30:00.000Z",
        "2023-04-19T03:30:00.000Z",
        "2023-05-19T04:30:00.000Z",
        "2023-06-19T05:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
      fillSeriesColor: true,
    },
  };

  const series = [
    {
      name: "Current Value",
      data: [31, 40, 28, 51, 42, 109],
    },
    {
      name: "Invested amount",
      data: [11, 32, 45, 32, 34, 52],
    },
    {
      name: "vs BTC",
      data: [26, 45, 48, 62, 28, 35],
    },
  ];

  return <Chart options={options} series={series} type="area" height={"270"} />;
};
