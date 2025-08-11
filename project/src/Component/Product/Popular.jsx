import React, { useState } from "react";

import Items from "/items";
const Popular = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between mx-[10%]">
          <div className="text-2xl font-bold">Menu</div>
        </div>

        <div className="h-80 overflow-scroll w-[50vw]">
          <Items />
        </div>
      </div>
    </div>
  );
};

export default Popular;
