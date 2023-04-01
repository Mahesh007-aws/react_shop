import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
// import Spin from "react-reveal";
ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: " Most Visited Sites of All Mart store ",
      color: "white",
    },
  },
};

export function MostVisited() {
  const VC = useSelector((state) => state.visit);

  const data = {
    labels: ["Electronics ", "Fruits", "Grocerys"],
    datasets: [
      {
        label: "Most visited Store Sites",

        data: [VC.Electronics, VC.Fruits, VC.Grocerys],
        backgroundColor: [
          "rgba(255, 99, 132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderColor: [
          "rgba(0, 99, 132, 1)",
          "rgba(54, 0, 235, 1)",
          "rgba(10, 206, 86, 1)",
        ],
        borderWidth: 5,
        // color: "white",
      },
    ],
  };
  return (
    <>
      {/* <Spin> */}
      <Doughnut data={data} options={options} />
      {/* </Spin> */}
    </>
  );
}
