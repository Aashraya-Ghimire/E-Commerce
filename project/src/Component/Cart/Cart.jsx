import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import CartCard from "./CartCard";
import { NavLink } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import OrangeButton from "../Button/OrangeButton";
import totalAmount from "../CustomFunction/totalAmount";
import CheckOutModal from "./CheckOutModal";

function Cart() {
  const [visible, setVisible] = useState(false);
  const [dta, setDta] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setDta(data);
  }, []);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const inStockItems = dta.filter((item) => item.stock > 0);
      setSelected([...inStockItems]);
    } else {
      setSelected([]);
    }
  };

  if (!dta || dta.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[80vh] px-4 text-center animate-fadeIn">
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl max-w-md w-full">
            <div className="flex justify-center mb-6">
              <FiShoppingCart
                size={60}
                className="sm:size-[80px] text-red-400"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              Your Cart is Empty
            </h2>
            <p className="text-gray-500 mb-6 text-sm sm:text-base">
              Looks like you haven’t added anything yet. Start exploring our
              delicious options!
            </p>
            <NavLink to="/">
              <button className="bg-green-500 hover:opacity-90 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 shadow-md w-full">
                Start Shopping
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex justify-center px-3 sm:px-4 pt-20">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="h-auto sm:h-20 bg-red-500 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-white rounded-t-2xl gap-2">
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-bold">Your Cart</div>
              <div className="text-xs sm:text-sm text-orange-100">
                Items in the cart
              </div>
            </div>
            <NavLink
              to="/"
              className="bg-white text-orange-500 font-semibold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow hover:bg-gray-100 transition"
            >
              Continue Shopping
            </NavLink>
          </div>

          {/* Select All */}
          <div className="px-4 sm:px-6 py-3 flex items-center border-b border-gray-200">
            <input
              type="checkbox"
              className="w-4 h-4 sm:w-5 sm:h-5 accent-green-500 mr-2"
              checked={selected.length === dta.length && dta.length > 0}
              onChange={handleSelectAll}
            />
            <label className="font-semibold text-gray-700 text-sm sm:text-base">
              Select All
            </label>
          </div>

          {/* Cart Items */}
          <div className="max-h-[55vh] overflow-y-auto">
            {dta.map((item) => (
              <CartCard
                key={item._id}
                item={item}
                setDta={setDta}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </div>

          {/* Total & Actions */}
          <div className="px-4 sm:px-6 py-2 bg-gray-50">
            <div className="flex justify-between items-center text-sm sm:text-lg font-semibold text-gray-700">
              <div>Total</div>
              <div className="text-green-500 text-lg sm:text-xl">
                Rs {totalAmount(selected)}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 w-full">
              {/* Clear Cart */}
              <button
                onClick={() => {
                  localStorage.removeItem("cart");
                  setDta([]);
                  setSelected([]);
                }}
                className="flex items-center justify-center w-full sm:w-auto gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-full shadow hover:bg-gray-100 transition duration-300 text-sm sm:text-base"
              >
                <MdDeleteOutline className="text-lg sm:text-xl" />
                Clear Cart
              </button>

              {/* Checkout Button */}
              <OrangeButton
                title="Checkout"
                className="w-full sm:w-auto"
                onClick={() => {
                  if (totalAmount(selected) > 0) {
                    setVisible(true);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckOutModal visible={visible} setVisible={setVisible} dta={selected} />
    </div>
  );
}

export default Cart;
