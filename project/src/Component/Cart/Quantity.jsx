import React from "react";
import subQuantity from "../Local/subQuantity";
import addQuantity from "../Local/addQuantity";

function Quantity({ quantity, item, setDta }) {
  return (
    <div className="flex items-center gap-4 px-4 py-2 rounded-xl w-fit">
      <button
        className="w-8 h-8 flex items-center justify-center text-lg font-bold 
        text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200"
        onClick={() => subQuantity(item, setDta)}
      >
        −
      </button>
      <span className="text-lg font-medium text-gray-800">{quantity}</span>
      <button
        className="w-8 h-8 flex items-center justify-center text-lg font-bold 
        text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-200"
        onClick={() => addQuantity(item, setDta)}
      >
        +
      </button>
    </div>
  );
}

export default Quantity;
