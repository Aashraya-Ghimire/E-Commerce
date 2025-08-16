import React, { useEffect, useState } from "react";
import { FaBoxOpen, FaDollarSign, FaClock } from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = ({ orderData, productData }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const completedOrders = orderData.filter(
    (order) => order.status === "completed"
  ).length;

  const pendingOrders = orderData.length - completedOrders;

  const totalSales = orderData
    .filter((order) => order.status === "completed")
    .reduce((sum, order) => sum + (order.totalAmount || 0), 0);

  const cards = [
    {
      title: "No of Products",
      value: productData.length,
      icon: <FaBoxOpen className="text-3xl sm:text-4xl text-sky-600" />,
      bg: "bg-sky-100",
    },
    {
      title: "Completed Orders",
      value: completedOrders,
      icon: <FaClock className="text-3xl sm:text-4xl text-red-500" />,
      bg: "bg-red-100",
    },
    {
      title: "Pending Orders",
      value: pendingOrders,
      icon: <FaClock className="text-3xl sm:text-4xl text-orange-500" />,
      bg: "bg-orange-100",
    },
    {
      title: "Low Stock Items",
      value: productData.filter((product) => product.stock <= 5).length,
      icon: <FaBoxOpen className="text-3xl sm:text-4xl text-red-600" />,
      bg: "bg-red-100",
    },
    {
      title: "Total Sales",
      value: `Rs. ${totalSales}`,
      icon: <FaDollarSign className="text-3xl sm:text-4xl text-yellow-600" />,
      bg: "bg-yellow-100",
    },
  ];

  const pieData = [
    { name: "Completed Orders", value: completedOrders },
    { name: "Pending Orders", value: pendingOrders },
  ];

  const COLORS = ["#f87171", "#fb923c"]; // red & orange

  return (
    <div className="pt-10 px-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
      {/* Cards */}
      {cards.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl p-4 sm:p-5 transform transition-transform duration-500
            ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div
            className={`p-4 rounded-full mb-3 ${card.bg} flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20`}
          >
            {card.icon}
          </div>
          <p className="text-gray-600 font-medium text-center text-sm sm:text-base">
            {card.title}
          </p>
          <p className="text-xl sm:text-2xl font-bold text-gray-800 mt-1">
            {card.value}
          </p>
        </div>
      ))}

      {/* Pie Chart */}
      <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-5 bg-white p-5 sm:p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 text-center">
          Orders Distribution
        </h3>
        <div className="w-full h-80 sm:h-75 md:h-75">
          <ResponsiveContainer width="100%" height="75%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={40}
                label
                animationDuration={800}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={1} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
