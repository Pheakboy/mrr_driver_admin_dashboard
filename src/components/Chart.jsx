import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const Chart = ({ bookingsData }) => {
  const data = {
    labels: bookingsData.map((item) => item.month),
    datasets: [
      {
        label: 'Bookings',
        data: bookingsData.map((item) => item.bookings),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Passengers',
        data: bookingsData.map((item) => item.passengers),
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Revenue',
        data: bookingsData.map((item) => item.revenue),
        fill: false,
        backgroundColor: 'rgb(255, 206, 86)',
        borderColor: 'rgba(255, 206, 86, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Booking Statistics',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div className="w-full h-[40rem] max-w-6xl mx-auto mt-10 p-5 bg-white rounded-lg shadow-md">
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
