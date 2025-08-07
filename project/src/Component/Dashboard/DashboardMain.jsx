import React, { useEffect, useState } from "react";
import DashNav from "./component/DashNav";
// import Dashboard from "./Components/Dashboard";
import Dashboard from "./component/Dashboard";
import Order from "./component/Order";
import getOrderApi from "../Api/Order/getOrderApi";
import { useOutletContext } from "react-router";

const DashboardMain = () => {
  const userData = JSON.parse(localStorage.getItem("userDetail"));
  if (!userData || userData.role != "admin") {
    window.location.href = "/";
    return;
  }
  const mainData = useOutletContext;
  const [activeScreen, setActiveScreen] = useState(1);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    getOrderApi(setOrderData);
  }, []);
  return (
    <div className="flex h-[100vh] bg-sky-50">
      <DashNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />

      {activeScreen == 1 && (
        <Dashboard orderData={orderData} productData={mainData} />
      )}
      {activeScreen == 2 && <Order orderData={orderData} />}
    </div>
  );
};

export default DashboardMain;
