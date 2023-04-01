import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import {Line} from "react-chartjs-2";
import {MostVisited} from "./MostVisitedChart";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: " Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [0, 5, 8, 2, 1, 4, 3],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

// export function App() {
//   return <Line options={options} data={data} />;
// }

export default function Chart() {
  return (
    <>
      <div className="container w-50 mt-2 p-5">
        <MostVisited />
      </div>
      {/* <div className="container w-75 ">
        <Line data={data} options={options} />
      </div> */}
    </>
  );
}
