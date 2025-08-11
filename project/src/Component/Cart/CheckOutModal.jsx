import React, { useRef, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import TextInput from "../InputField/TextInput";
import totalAmount from "../CustomFunction/totalAmount";
import Ordersuccess from "./Ordersuccess";
import { FaMoneyBillWave, FaCreditCard } from "react-icons/fa";
import OrangeButton from "../Button/OrangeButton";
import { IoCloseSharp } from "react-icons/io5";
import generateCartItem from "../CustomFunction/generateCartItem";
import { useNavigate } from "react-router-dom";
import addOrderApi from "../Api/Order/addOrderApi";
function CheckOutModal({ visible, setVisible, dta }) {
  const [success, setSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const navigate = useNavigate();
  const handleOrder = () => {
    // setErr(0);
    setSuccess(true);
    const tempData = {
      totalAmount: totalAmount(dta),
      items: generateCartItem(dta),
    };
    console.log("sdgshsfd", tempData);
    addOrderApi(tempData, navigate);
  };

  return (
    <>
      <div
        className={`${
          visible ? "flex" : "hidden"
        } fixed inset-0 z-50 items-center justify-center bg-black/30 backdrop-blur-sm px-2 md:px-4`}
      >
        <div className="w-full max-w-6xl h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-300">
          {/* Header */}
          <div className="px-6 py-5 bg-red-500 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/30 text-white rounded-full flex items-center justify-center text-2xl">
                <FiShoppingCart />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Checkout</h2>
                <p className="text-sm text-white/80">
                  Complete your order details
                </p>
              </div>
            </div>
            <button
              className="p-2 rounded-full bg-white text-red-500 hover:bg-orange-100 shadow"
              onClick={() => setVisible(false)}
              aria-label="Close"
            >
              <IoCloseSharp className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex flex-grow flex-wrap lg:flex-nowrap overflow-y-auto">
            {/* Left: User Details */}
            <div className="w-full lg:w-12/9 overflow-y-auto bg-gray-50 border-r border-gray-200 p-6 space-y-6">
              {/* Payment Method Card */}
              <div className="bg-white rounded-xl shadow-md px-6 p-4">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Payment Method
                </h4>
                <div className="space-y-4">
                  {/* Cash Option */}
                  <label
                    htmlFor="cash"
                    className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer border transition-all ${
                      paymentMethod === "cash"
                        ? "bg-orange-100 border-red-400 shadow"
                        : "bg-white hover:shadow-md border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      id="cash"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="accent-blue-500"
                    />
                    <FaMoneyBillWave className="text-2xl text-green-600" />
                    <span className="text-gray-800 font-medium">
                      Cash on Delivery
                    </span>
                  </label>

                  {/* Online Option */}
                  <label className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 opacity-60 cursor-not-allowed border border-gray-300">
                    <input
                      type="radio"
                      name="payment"
                      value="online"
                      disabled
                    />
                    <FaCreditCard className="text-2xl text-orange-500" />
                    <div className="flex flex-col">
                      <span className="text-gray-800 font-medium">
                        Online Payment
                      </span>
                      <span className="text-xs text-red-500 font-semibold">
                        Coming Soon
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right: Item Summary */}
            <div className="w-full lg:h-full overflow-y-auto p-6 bg-white">
              <div className="space-y-1">
                <h3 className="text-2xl font-semibold text-gray-800 text-center">
                  Order Summary
                </h3>

                <div className="text-sm text-gray-500 font-semibold flex justify-between border-b pb-2">
                  <span className="w-1/2">Item</span>
                  <span className="w-2/4 text-center">Qty</span>
                  <span className="w-1/4 text-right">Price</span>
                </div>

                <div className="space-y-3 max-h-[300px] overflow-y-auto">
                  {dta.map((item) => (
                    <div
                      key={item._id}
                      className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg"
                    >
                      <span className="w-1/2 text-gray-800 truncate">
                        {item.pName}
                      </span>
                      <span className="w-1/4 text-center text-gray-600">
                        x{item.quantity}
                      </span>
                      <span className="w-1/4 text-right font-semibold">
                        ${item.price}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-800">
                    <span>Total:</span>
                    <span>${totalAmount(dta)}</span>
                  </div>
                </div>
                <div className="pt-2 flex justify-center">
                  <OrangeButton
                    title="Process checkout"
                    onClick={handleOrder}
                  />
                </div>
                {success && (
                  <Ordersuccess success={success} setSuccess={setSuccess} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Success Popup */}
        <div className={`${success ? "flex" : "hidden"}`}>
          <Ordersuccess success={success} setSuccess={setSuccess} />
        </div>
      </div>
    </>
  );
}

export default CheckOutModal;
