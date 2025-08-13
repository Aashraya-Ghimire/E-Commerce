import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { FiTrash2 } from "react-icons/fi";
import { FaBoxes } from "react-icons/fa";
import removeFromCart from "../Local/removeFromCart";
import Quantity from "./Quantity";

const CartCard = ({ item, setDta, setSelected, selected }) => {
  const starsFilled = Math.floor(item?.rating || 0);
  const starsEmpty = 5 - starsFilled;

  return (
    <div className="flex justify-center items-center px-2 py-1 bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-3 transition hover:shadow-lg">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-shrink-0">
            <input
              type="checkbox"
              className="w-5 h-5 accent-green-500"
              checked={selected?.some((i) => i._id == item._id) || false}
              disabled={item.stock == 0} // ❌ disable if out of stock
              onChange={(e) => {
                if (e.target.checked) {
                  setSelected([...selected, item]);
                } else {
                  setSelected(selected.filter((i) => i._id !== item._id));
                }
              }}
            />
          </div>

          {/* Image */}
          <div className="w-24 h-24 rounded-lg overflow-hidden shadow flex-shrink-0">
            <img
              src={item?.image}
              alt={item?.pName || "Item Image"}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex-1 grid sm:grid-cols-5 gap-4 w-full items-center">
            <div className="col-span-2">
              <h2 className="text-lg font-bold text-gray-800 truncate">
                {item?.pName}
              </h2>
              <p className="text-sm text-gray-500">{item?.mealtype}</p>
              <div className="flex mt-1 text-yellow-400">
                {[...Array(starsFilled)].map((_, i) => (
                  <MdOutlineStarPurple500 key={`filled-${i}`} />
                ))}
                {[...Array(starsEmpty)].map((_, i) => (
                  <IoStarOutline key={`empty-${i}`} />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <Quantity item={item} quantity={item?.quantity} setDta={setDta} />
            </div>

            {/* Stock Badge */}
            <div className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full shadow-sm justify-center">
              <FaBoxes className="text-green-500 text-sm" />
              {item?.stock == 0 ? "Out of Stock" : `${item?.stock} in stock`}
            </div>

            {/* Price & Remove */}
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="text-xl font-bold text-green-500">
                Rs {Number(item?.price || 0).toFixed(2)}
              </div>
              <button
                onClick={() => removeFromCart(item, setDta)}
                className="text-red-500 hover:text-red-600 transition"
                aria-label="Remove item"
              >
                <FiTrash2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
