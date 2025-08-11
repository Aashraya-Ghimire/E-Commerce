import React, { useEffect } from "react";
import getOrderApi from "../../Api/Order/getOrderApi";
import OrderCard from "./OrderCard";

const Order = ({ orderData }) => {
  // useEffect(() => {
  //   getOrderApi();
  // }, []);

  return (
    <div className="p-6 bg-gradient-to-br from-sky-100 to-white min-h-screen">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Orders</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {orderData.map((item) => (
          <OrderCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Order;
