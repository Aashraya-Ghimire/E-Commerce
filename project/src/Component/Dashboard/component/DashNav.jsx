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
        ? "bg-green-600 shadow-lg shadow-green-300 text-white"
        : "bg-red-100 text-red-800 hover:bg-red-200"
    }
    hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400`;

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
        fixed bottom-0 left-0 w-full h-[60px] mt-17 z-1 bg-gradient-to-b from-red-100 to-red-300 border-t border-red-200 shadow-inner
        md:fixed md:top-0 md:left-0 md:h-screen md:w-[15%] md:flex-col md:space-y-4 md:p-4 md:border-r
        flex justify-around items-center md:justify-start
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
          {/* Show icon on all screens */}
          <span className="inline md:inline">{item.icon}</span>

          {/* Show label only on desktop (lg+) */}
          <span className="hidden lg:inline font-semibold text-base ml-2">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default DashNav;
