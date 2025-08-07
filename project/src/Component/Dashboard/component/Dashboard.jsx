import React from "react";
import {
  FaBoxOpen,
  FaShoppingCart,
  FaDollarSign,
  FaClock,
} from "react-icons/fa";

const Dashboard = ({ orderData = [] }) => {
  return (
    <div className="flex-1 p-6 flex flex-wrap justify-center gap-6 bg-gradient-to-br from-sky-100 to-sky-200 rounded-lg shadow-inner">
      {/* Product Count */}
      <div className="h-fit bg-white shadow-md hover:shadow-xl transition-shadow border border-gray-300 rounded-xl w-52 p-5 flex flex-col items-center">
        <FaBoxOpen className="text-3xl text-sky-600 mb-2" />
        <p className="text-gray-600 font-medium">No of Products</p>
        <p className="text-2xl font-bold text-gray-800 mt-1">10</p>
      </div>

      {/* Order Count */}
      <div className="h-fit bg-white shadow-md hover:shadow-xl transition-shadow border border-gray-300 rounded-xl w-52 p-5 flex flex-col items-center">
        <FaShoppingCart className="text-3xl text-green-600 mb-2" />
        <p className="text-gray-600 font-medium">No of Orders</p>
        <p className="text-2xl font-bold text-gray-800 mt-1">
          {orderData.length}
        </p>
      </div>

      {/* Total Sales */}
      <div className="h-fit bg-white shadow-md hover:shadow-xl transition-shadow border border-gray-300 rounded-xl w-52 p-5 flex flex-col items-center">
        <FaDollarSign className="text-3xl text-yellow-600 mb-2" />
        <p className="text-gray-600 font-medium">Total Sales</p>
        <p className="text-2xl font-bold text-gray-800 mt-1">$10</p>
      </div>

      {/* Pending Orders */}
      <div className="h-fit bg-white shadow-md hover:shadow-xl transition-shadow border border-gray-300 rounded-xl w-52 p-5 flex flex-col items-center">
        <FaClock className="text-3xl text-red-500 mb-2" />
        <p className="text-gray-600 font-medium">Pending Orders</p>
        <p className="text-2xl font-bold text-gray-800 mt-1">10</p>
      </div>
    </div>
  );
};

export default Dashboard;
