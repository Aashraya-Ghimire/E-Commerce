import React, { useState } from "react";
import DashNav from "./Components/DashNav";
import Dashboard from "./Components/Dashboard";
import Order from "./Components/Order";

const DashboardMain = () => {
  const [activeScreen, setActiveScreen] = useState(1);
  return (
    <div className="flex h-[100vh] bg-sky-50">
      <DashNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />

      {activeScreen == 1 && <Dashboard />}
      {activeScreen == 2 && <Order />}
    </div>
  );
};

export default DashboardMain;
