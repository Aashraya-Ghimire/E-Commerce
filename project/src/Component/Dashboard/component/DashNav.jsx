import React from "react";
import {
  RiDashboardFill,
  RiShoppingCart2Line,
  RiAddCircleLine,
} from "react-icons/ri";
import { useNavigate } from "react-router";

const DashNav = ({ activeScreen, setActiveScreen }) => {
  const navigate = useNavigate();

  const navItemStyle = (isActive) =>
    `flex items-center justify-center md:justify-start gap-2 rounded-lg cursor-pointer transition-all duration-200 
    ${
      isActive
        ? "bg-orange-500 shadow-lg shadow-orange-200 text-white"
        : "bg-orange-100 text-orange-800 hover:bg-orange-200"
    } 
    hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400`;

  const navItems = [
    {
      id: 1,
      label: "Dashboard",
      icon: <RiDashboardFill className="text-xl" />,
    },
    {
      id: 2,
      label: "Orders",
      icon: <RiShoppingCart2Line className="text-xl" />,
    },
    {
      id: 3,
      label: "Add Product",
      icon: <RiAddCircleLine className="text-xl" />,
      navigateTo: "/product",
    },
  ];

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
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`${navItemStyle(activeScreen === item.id)} 
            flex flex-col md:flex-row md:p-3 p-2 md:w-full w-auto`}
          onClick={() => {
            if (item.navigateTo) {
              navigate(item.navigateTo);
            } else {
              setActiveScreen(item.id);
            }
          }}
          aria-current={activeScreen === item.id ? "page" : undefined}
        >
          {item.icon}
          {/* Show label only on desktop */}
          <span className="hidden md:inline font-semibold text-base">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default DashNav;
