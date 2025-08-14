import React from "react";
import subQuantity from "../Local/subQuantity";
import addQuantity from "../Local/addQuantity";

function Quantity({ quantity, item, setDta }) {
  return (
    <div className="flex flex-nowrap items-center sm:gap-3 px-2 sm:px-4 py-1 sm:py-2 rounded-xl w-fit">
      <button
        className="w-5 h-5 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl font-bold
        text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition"
        onClick={() => subQuantity(item, setDta)}
      >
        −
      </button>
      <span className="text-base sm:text-lg font-medium text-gray-800 min-w-[24px] text-center">
        {quantity}
      </span>
      <button
        className="w-5 h-5 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl font-bold
        text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200 transition"
        onClick={() => addQuantity(item, setDta)}
      >
        +
      </button>
    </div>
  );
}

export default Quantity;
