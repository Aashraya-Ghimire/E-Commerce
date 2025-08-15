import React, { useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { FiTrash2 } from "react-icons/fi";
import removeFromCart from "../Local/removeFromCart";
import Quantity from "./Quantity";
import OutofStockModel from "../Product/Modal/OutofStockModel";

const CartCard = ({ item, setDta, setSelected, selected }) => {
  const starsFilled = Math.floor(item?.rating || 0);
  const starsEmpty = 5 - starsFilled;

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelected([...selected, item]);
    } else {
      setSelected(selected.filter((i) => i._id != item._id));
    }
  };

  return (
    <div className="flex justify-center items-center px-2 py-2 bg-gray-100">
      <div
        className={`w-full max-w-4xl bg-white rounded-2xl shadow-md p-3 transition ${
          item.stock == 0 ? "opacity-60 cursor-not-allowed" : "hover:shadow-lg"
        }`}
      >
        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-3 items-center">
          {/* Checkbox */}
          <div className="col-span-1 flex justify-center">
            <input
              type="checkbox"
              className="w-5 h-5 accent-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              checked={
                item.stock > 0 && selected?.some((i) => i._id === item._id)
              }
              disabled={item.stock == 0}
              onChange={handleCheckboxChange}
            />
          </div>

          {/* Image */}
          <div className="col-span-2 w-full h-24 rounded-lg overflow-hidden shadow justify-self-center">
            <img
              src={item?.image}
              alt={item?.pName || "Item Image"}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name, Type, Rating */}
          <div className="col-span-4 flex flex-col gap-1">
            <h2 className="text-base font-bold text-gray-800 truncate">
              {item?.pName}
            </h2>
            <p className="text-xs text-gray-500">{item?.mealtype}</p>
            <div className="flex justify-start items-center mt-1 gap-2">
              <div className="flex text-yellow-400">
                {[...Array(starsFilled)].map((_, i) => (
                  <MdOutlineStarPurple500 key={`filled-${i}`} />
                ))}
                {[...Array(starsEmpty)].map((_, i) => (
                  <IoStarOutline key={`empty-${i}`} />
                ))}
              </div>
              <div className="h-fit flex items-center justify-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full shadow-sm">
                {item?.stock == 0 ? "Out of Stock" : `Stock: ${item?.stock}`}
              </div>
            </div>
          </div>

          {/* Quantity */}
          <div className="col-span-2 flex justify-center">
            <Quantity
              item={item}
              quantity={item?.quantity}
              setDta={setDta}
              disabled={item.stock == 0} // Disable quantity change
            />
          </div>

          {/* Price & Remove */}
          <div className="col-span-3 flex flex-col items-center justify-center gap-2">
            <div className="sm:text-lg font-bold text-green-500">
              Rs {Number(item?.price || 0)}
            </div>
            <button
              onClick={() => removeFromCart(item, setDta)}
              className="text-red-500 hover:text-red-600 transition"
              aria-label="Remove item"
            >
              <FiTrash2 className="text-15 sm:text-30" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
