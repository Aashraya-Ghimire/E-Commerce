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

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setDta(data);
  }, []);

  if (!dta || dta.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[80vh] px-4 text-center animate-fadeIn">
          <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full">
            <div className="flex justify-center mb-6">
              <FiShoppingCart size={80} className="text-red-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Your Cart is Empty
            </h2>
            <p className="text-gray-500 mb-6">
              Looks like you haven’t added anything yet. Start exploring our
              delicious options!
            </p>
            <NavLink to="/">
              <button className="bg-green-500 hover:opacity-90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md">
                Start Shopping
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 h-[100vh]">
      <Navbar />
      <div className="flex justify-center px-4 pt-20">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-20 bg-red-500 flex flex-col sm:flex-row justify-between items-center px-6 py-5 text-white rounded-t-2xl">
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold">Your Cart</div>
              <div className="text-sm text-orange-100">Items in the cart</div>
            </div>
            <NavLink
              to="/"
              className="mt-3 sm:mt-0 bg-white text-orange-500 font-semibold text-sm px-4 py-2 rounded-full shadow hover:bg-gray-100 transition"
            >
              Continue Shopping
            </NavLink>
          </div>
          <div className="max-h-[55vh] overflow-y-auto">
            {dta.map((item, index) => (
              <CartCard item={item} key={index} setDta={setDta} />
            ))}
          </div>
          <div className="px-6 py-5 bg-gray-50">
            <div className="flex justify-between items-center text-lg font-semibold text-gray-700 mb-4">
              <div>Total</div>
              <div className="text-green-500 text-xl">
                Rs {totalAmount(dta)}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
              <button
                onClick={() => {
                  localStorage.removeItem("cart");
                  setDta([]);
                }}
                className="flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-full shadow hover:bg-gray-100 transition duration-300"
              >
                <MdDeleteOutline className="text-xl" />
                Clear Cart
              </button>
              <OrangeButton
                title="Checkout"
                onClick={() => {
                  setVisible(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <CheckOutModal visible={visible} setVisible={setVisible} dta={dta} />
    </div>
  );
}

export default Cart;
