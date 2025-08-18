import React, { useState } from "react";
import { FaUserCircle, FaLock } from "react-icons/fa";
import DeleteAccount from "./component/DeleteAccount";
import Navbar from "../Navbar/Navbar";
import General from "./component/General";
import Location from "./component/Location";
import Password from "./component/Password";

const Setting = () => {
  const [activeSection, setActiveSection] = useState("profile"); // default section

  const sidebarButtonClasses = (isActive) =>
    `w-full flex items-center gap-4 px-4 py-3 rounded-xl shadow transition-all font-semibold justify-center md:justify-start ${
      isActive ? "bg-gray-300 text-gray-900" : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      {/* Sidebar for mobile: below navbar */}
      <div className="md:hidden flex w-full bg-gray-100 p-2 gap-2 mt-18">
        <button
          onClick={() => setActiveSection("profile")}
          className={sidebarButtonClasses(activeSection === "profile")}
        >
          <FaUserCircle className="text-2xl" />
        </button>
        <button
          onClick={() => setActiveSection("password")}
          className={sidebarButtonClasses(activeSection === "password")}
        >
          <FaLock className="text-2xl" />
        </button>
        <DeleteAccount />
      </div>

      <div className="flex flex-col md:flex-row flex-1 mt-4">
        {/* Sidebar for desktop */}
        <div className="hidden md:flex md:flex-col w-64 bg-gray-100 p-4 items-start gap-4 md:h-[calc(100vh-64px)] md:sticky md:top-16">
          <button
            onClick={() => setActiveSection("profile")}
            className={sidebarButtonClasses(activeSection === "profile")}
          >
            <FaUserCircle className="text-2xl" />
            <span className="inline">Profile</span>
          </button>

          <button
            onClick={() => setActiveSection("password")}
            className={sidebarButtonClasses(activeSection === "password")}
          >
            <FaLock className="text-2xl" />
            <span className="inline">Password & Security</span>
          </button>

          <div className="flex flex-col gap-4 w-full mt-4">
            <DeleteAccount />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-y-auto p-4 md:p-6 mt-8">
          {activeSection === "profile" && (
            <div className="space-y-6">
              <General />
              <Location />
            </div>
          )}
          {activeSection === "password" && <Password />}
        </div>
      </div>
    </div>
  );
};

export default Setting;
