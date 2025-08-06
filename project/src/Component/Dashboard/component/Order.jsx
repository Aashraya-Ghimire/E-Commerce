import React, { useEffect } from "react";
import getOrderApi from "../../Api/Order/getOrderApi";

const Order = () => {
  useEffect(() => {
    getOrderApi();
  }, []);
  return <div>Hello from order</div>;
};

export default Order;
