import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { useNavigate } from "react-router";

const DashNav = ({ activeScreen, setActiveScreen }) => {
  const navigate = useNavigate();

  const navItemStyle = (isActive) =>
    `flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 
     ${
       isActive
         ? "bg-orange-500 shadow-lg shadow-orange-200 text-white"
         : "bg-orange-100 text-orange-800 hover:bg-orange-200"
     }
     hover:scale-[1.02]`;

  return (
    <div className="w-[15%] min-h-screen bg-gradient-to-b from-orange-100 to-orange-300 p-4 space-y-4 shadow-inner border-r border-orange-200">
      <div
        className={navItemStyle(activeScreen === 1)}
        onClick={() => setActiveScreen(1)}
      >
        <RiDashboardFill className="text-xl group-hover:animate-pulse" />
        <span className="font-semibold text-base">Dashboard</span>
      </div>

      <div
        className={navItemStyle(activeScreen === 2)}
        onClick={() => setActiveScreen(2)}
      >
        <RiDashboardFill className="text-xl" />
        <span className="font-semibold text-base">Order</span>
      </div>

      <div
        className={navItemStyle(activeScreen === 3)}
        onClick={() => navigate("/product")}
      >
        <RiDashboardFill className="text-xl" />
        <span className="font-semibold text-base">Add Product</span>
      </div>
    </div>
  );
};

export default DashNav;
