import React from "react";
import General from "./component/General";
import Location from "./component/Location";
import Password from "./component/Password";
import DeleteAccount from "./component/DeleteAccount";
import Navbar from "../Navbar/Navbar";

const Setting = () => {
  return (
    <div className="p-2 flex flex-col h-[100vh]">
      <Navbar />
      <div className=" flex flex-col my-4 gap-4 mt-20">
        <General />
        <Location />
        <Password />
        <DeleteAccount />
      </div>
    </div>
  );
};

export default Setting;
