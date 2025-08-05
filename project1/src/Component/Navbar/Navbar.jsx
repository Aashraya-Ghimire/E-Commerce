import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { HiX } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { MdOutlineSettings } from "react-icons/md";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logout successful");
    navigate("/auth");
  };

  return (
    <div className="w-full shadow-md px-4 sm:px-6 md:px-12 bg-white z-50 fixed top-0">
      {/* Top bar */}
      <div className="flex justify-between items-center h-[70px]">
        {/* Logo */}
        <div className="w-16 flex-shrink-0">
          <NavLink to="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-auto object-contain cursor-pointer"
            />
          </NavLink>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium text-sm">
          <NavLink
            to="/"
            className="hover:text-[#f58021] transition duration-200"
          >
            Home
          </NavLink>
          <NavLink
            to="#"
            className="hover:text-[#f58021] transition duration-200"
          >
            Menu
          </NavLink>
          <NavLink
            to="#"
            className="hover:text-[#f58021] transition duration-200"
          >
            About
          </NavLink>
          <NavLink
            to="#"
            className="hover:text-[#f58021] transition duration-200"
          >
            Contact
          </NavLink>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4 relative">
          {/* Mobile search */}
          <div className="flex md:hidden items-center bg-[#e6e5e5] rounded-xl px-3 py-1.5">
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent text-sm placeholder-gray-600 w-35 sm:w-30"
            />
            <button className="pl-2 text-gray-700 hover:text-black">
              <GrSearch size={18} />
            </button>
          </div>

          {/* Desktop search */}
          <div className="hidden md:flex items-center bg-[#e6e5e5] rounded-xl px-3 py-1.5">
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent text-sm placeholder-gray-600 w-32"
            />
            <button className="pl-2 text-gray-700 hover:text-black">
              <GrSearch size={18} />
            </button>
          </div>

          {/* Cart icon */}
          <button
            className="relative text-gray-700 hover:text-black transition"
            onClick={() => navigate("/cart")}
          >
            <FaCartShopping size={20} />
            <span className="absolute bg-blue-700 text-white text-[13px] h-4 w-4 flex items-center justify-center rounded-full -top-2 -right-2">
              0
            </span>
          </button>

          {/* Profile image dropdown */}
          {/* <div className="hidden md:flex">
            <img
              src="/user.jpg"
              alt="Profile"
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-9 h-9 rounded-full cursor-pointer object-cover"
            />
            {profileOpen && (
              <div className="absolute top-10 right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border z-50">
                <div className="flex flex-col text-sm font-medium text-gray-700 px-4 py-3 gap-2">
                  <NavLink
                    to="/cart"
                    className="hover:text-[#f58021] transition"
                    onClick={() => setProfileOpen(false)}
                  >
                    My Orders
                  </NavLink>
                </div>
                <div className="border-t border-gray-200 px-4 py-3">
                  <button
                    onClick={handleLogout}
                    className="text-sm w-full text-left text-red-500 hover:text-red-600 transition"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div> */}
          <div>
            <NavLink to="/setting">
              <MdOutlineSettings className="text-grey-600 text-3xl" />
            </NavLink>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="block md:hidden text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <PiDotsThreeOutlineVerticalFill />}
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] sm:w-[60%] bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-700"
          >
            <HiX />
          </button>
        </div>
        <div className="flex flex-col gap-4 px-6 text-gray-700 font-medium text-sm">
          {["Home", "Menu", "About", "Contact"].map((item, i) => (
            <NavLink
              key={i}
              to={item === "Home" ? "/" : "#"}
              onClick={() => setMenuOpen(false)}
              className="py-1 border-b border-gray-100 hover:text-[#f58021] transition"
            >
              {item}
            </NavLink>
          ))}

          {/* Logout in mobile nav */}
          <button
            onClick={handleLogout}
            className="text-sm text-red-500 text-left mt-8 border-t pt-4 hover:text-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
