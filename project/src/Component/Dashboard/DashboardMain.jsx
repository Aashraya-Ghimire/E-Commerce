import React, { useState } from "react";
import DashNav from "./component/DashNav";
import Dashboard from "./Component/Dashboard";
import Order from "./Component/Order";

const DashboardMain = () => {
  const [activeScreen, setActiveScreen] = useState(1);

  const renderScreen = () => {
    switch (activeScreen) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Order />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-sky-50 via-blue-100 to-sky-200 overflow-hidden">
      {/* Side Navigation */}
      <DashNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />

      {/* Content Area */}
      <div className="flex-1 p-6 overflow-y-auto transition-all duration-300 ease-in-out">
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 min-h-[90vh] w-full mx-auto animate-fade-in">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
