import React, { useEffect, useState } from "react";
import DashNav from "./component/DashNav";
import Dashboard from "./component/Dashboard";
import Order from "./component/Order";
import getOrderApi from "../Api/Order/getOrderApi";
import Navbar from "../Navbar/Navbar";
import { useOutletContext } from "react-router";

const DashboardMain = () => {
  const userData = JSON.parse(localStorage.getItem("userDetail"));
  if (!userData || userData.role !== "admin") {
    window.location.href = "/";
    return null;
  }
  const mainData = useOutletContext();
  const [activeScreen, setActiveScreen] = useState(1);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    getOrderApi(setOrderData);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-sky-50">
      <Navbar className="z-1" />
      <DashNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />

      <main
        className="
          flex-1
                /* padding top equal to mobile nav height */
              /* no padding top on desktop */
          md:ml-[15%]     /* margin left for desktop sidebar width */
          overflow-auto
          min-h-0         /* fixes flex overflow issues */
          mt-12
        "
      >
        {activeScreen === 1 && (
          <Dashboard orderData={orderData} productData={mainData} />
        )}
        {activeScreen === 2 && <Order orderData={orderData} />}
      </main>
    </div>
  );
};

export default DashboardMain;
