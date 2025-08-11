import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { useNavigate } from "react-router";

const DashNav = ({ activeScreen, setActiveScreen }) => {
  const navigate = useNavigate();

  const navItemStyle = (isActive) =>
    `flex items-center gap-3 rounded-lg cursor-pointer transition-all duration-200 
    ${
      isActive
        ? "bg-orange-500 shadow-lg shadow-orange-200 text-white"
        : "bg-orange-100 text-orange-800 hover:bg-orange-200"
    } 
    hover:scale-[1.05] focus:outline-none focus:ring-2 focus:ring-orange-400`;

  return (
    <nav
      className="
        fixed top-0 left-0 z-50

        w-full h-[60px] flex justify-around items-center
        bg-gradient-to-b from-orange-100 to-orange-300
        border-orange-200 shadow-inner

        md:flex-col md:w-[15%] md:h-screen md:space-y-4 md:p-4 md:border-r
      "
      role="navigation"
      aria-label="Dashboard Navigation"
    >
      {/* Dashboard */}
      <button
        type="button"
        className={`${navItemStyle(activeScreen === 1)} 
          md:flex-row flex-col md:p-3 p-1 md:w-full w-auto`}
        onClick={() => setActiveScreen(1)}
        aria-current={activeScreen === 1 ? "page" : undefined}
      >
        <RiDashboardFill className="text-xl" />
        <span className="hidden md:inline font-semibold text-base">
          Dashboard
        </span>
      </button>

      {/* Order */}
      <button
        type="button"
        className={`${navItemStyle(activeScreen === 2)} 
          md:flex-row flex-col md:p-3 p-1 md:w-full w-auto`}
        onClick={() => setActiveScreen(2)}
        aria-current={activeScreen === 2 ? "page" : undefined}
      >
        <RiDashboardFill className="text-xl" />
        <span className="hidden md:inline font-semibold text-base">Order</span>
      </button>

      {/* Add Product */}
      <button
        type="button"
        className={`${navItemStyle(activeScreen === 3)} 
          md:flex-row flex-col md:p-3 p-1 md:w-full w-auto`}
        onClick={() => navigate("/product")}
        aria-current={activeScreen === 3 ? "page" : undefined}
      >
        <RiDashboardFill className="text-xl" />
        <span className="hidden md:inline font-semibold text-base">
          Add Product
        </span>
      </button>
    </nav>
  );
};

export default DashNav;
