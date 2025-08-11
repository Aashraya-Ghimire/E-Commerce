import React from "react";
import { LuDot } from "react-icons/lu";
import { FaUser, FaPhone, FaTruck, FaMoneyBillWave } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const OrderCard = ({ data }) => {
  return (
    <div className="w-fit bg-white sm:max-w-sm md:max-w-md p-4 rounded-xl shadow-md border border-gray-200 text-gray-700 font-medium hover:shadow-lg transition-all duration-200 mx-auto sm:mx-0">
      {/* Customer Details */}
      <div className="mb-4 space-y-2">
        <h3 className="text-base sm:text-lg font-semibold text-sky-700 border-b pb-1 flex items-center gap-2">
          <FaUser className="text-sky-600" />
          Customer Details
        </h3>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm sm:text-base gap-2 sm:gap-0">
          <div className="flex items-center gap-1">
            <FaUser className="text-gray-500" />
            <span>{data.cName}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaPhone className="text-gray-500" />
            <span>{data.contactNumber}</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-600 gap-1 sm:gap-0 mt-1">
          <div className="flex items-center gap-1">
            <FaLocationDot className="text-gray-500" />
            <span>{data.city}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaLocationDot className="text-gray-500" />
            <span>{data.street}</span>
          </div>
        </div>
        <div className="text-xs sm:text-sm mt-2">
          <p className="font-semibold text-gray-800 flex items-center gap-1">
            <FaTruck className="text-gray-600" /> Delivery:
          </p>
          <p className="text-gray-600 ml-5">{data.deliveryDescription}</p>
        </div>
      </div>

      {/* Items and Total */}
      <div className="space-y-2">
        <h3 className="text-base sm:text-lg font-semibold text-sky-700 border-b pb-1 flex items-center gap-2">
          Items
        </h3>

        <div className="divide-y">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-1 text-sm sm:text-base"
            >
              <div className="flex items-center gap-1">
                {/* <LuDot className="text-sky-600 text-lg" /> */}
                <span>{item.itemName}</span>
              </div>
              <span className="text-xs sm:text-sm text-gray-500">
                x{item.quantity}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-between font-semibold items-center text-base sm:text-lg">
          <span className="flex items-center gap-1">
            <FaMoneyBillWave className="text-green-500" /> Total:
          </span>
          <span className="text-green-600">Rs. {data.totalAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
