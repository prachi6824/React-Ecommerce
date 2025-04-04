import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";
import styles from "./Dashboard.module.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const SalesChart = ({ data }) => {

  if (!data || !data.datasets) {
    return <p>Loading chart...</p>;
  }

  const chartData = {
    labels: data.labels,
    datasets: data.datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default SalesChart;
