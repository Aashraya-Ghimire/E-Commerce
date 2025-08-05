import React, { useState } from "react";
import Button from "../Button/Button";

import Items from "/items";
const Popular = () => {
  const [change, setChange] = useState(true);
  const [title, setTitle] = useState("See All");
  const handleClick = () => {
    setChange(!change);
    if (change == true) {
      setTitle("See Less");
    } else {
      setTitle("See All");
    }
  };
  return (
    <div>
      <div>
        <div className="flex justify-between mx-[10%]">
          <div className="text-2xl font-bold">Popular Foods</div>
          <div>
            <Button
              title={title}
              className="text-[#e07115] text-xl font-medium cursor-pointer shadow-amber-50"
              onClick={() => handleClick()}
            />
          </div>
        </div>

        <div className="h-80 overflow-scroll w-[50vw]">
          <Items />
        </div>
      </div>
    </div>
  );
};

export default Popular;
