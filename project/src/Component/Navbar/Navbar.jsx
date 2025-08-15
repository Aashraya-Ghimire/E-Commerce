import React, { useState, useEffect } from "react";
import { GrSearch } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router";
import { MdOutlineSettings, MdDashboardCustomize } from "react-icons/md";
import SearchBar from "./SearchBar";

function Navbar({ setProductData, maindata }) {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("userDetails"));
  const userData = JSON.parse(localStorage.getItem("userDetail"));

  // State for cart count
  const [count, setCount] = useState(0);

  const navigateFunction = () => {
    navigate("/dashboard", { state: data });
  };

  // Read cart count when component mounts
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCount(cart.length);

    // Listen for cart updates via custom event
    const handleCartUpdate = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCount(updatedCart.length);
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  return (
    <div className="w-full shadow-md px-4 sm:px-6 md:px-12 bg-white z-50 fixed top-0">
      {/* Top bar */}
      <div className="flex justify-between items-center h-[70px]">
        {/* Logo */}
        <div className="w-20 flex-shrink-0">
          <NavLink to="/">
            <img
              src="/sportstore.png"
              alt="Logo"
              className="w-full h-auto object-contain cursor-pointer"
            />
          </NavLink>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4 relative">
          <div>
            <SearchBar setProductData={setProductData} maindata={maindata} />
          </div>

          {userData.role === "admin" ? (
            <button
              className="relative text-gray-700 hover:text-black transition"
              onClick={navigateFunction}
            >
              <MdDashboardCustomize size={25} />
            </button>
          ) : (
            <button
              className="relative text-gray-700 hover:text-black transition"
              onClick={() => navigate("/cart")}
            >
              <FaCartShopping size={20} />
              <span className="absolute bg-blue-700 text-white text-[13px] h-4 w-4 flex items-center justify-center rounded-full -top-2 -right-2">
                {count}
              </span>
            </button>
          )}

          <div>
            <NavLink to="/setting">
              <MdOutlineSettings className="text-grey-600 text-3xl" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
