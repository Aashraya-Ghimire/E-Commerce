import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaPhone, FaTruck, FaMoneyBillWave } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import OrangeButton from "../../Button/OrangeButton";
import updateOrderApi from "../../Api/Order/updateOrderApi";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const OrderCard = ({ data }) => {
  const navigate = useNavigate();

  const handleUpdate = async () => {
    const updatedData = {
      id: data._id,
      status: "completed",
    };
    navigate("/dashboard");

    try {
      await updateOrderApi(updatedData);
      // ✅ Navigate to dashboard after successful update
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  return (
    <div className="w-full max-w-xs bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 p-5 flex flex-col gap-4 mx-auto sm:mx-0">
      {/* Customer Details */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-sky-700 border-b pb-2 flex items-center gap-2">
          <FaUser className="text-sky-600" /> Customer Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <FaUser className="text-gray-500" />
            <span>{data.cName}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-gray-500" />
            <span>{data.contactNumber}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-gray-500" />
            <span>{data.city}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-gray-500" />
            <span>{data.street}</span>
          </div>
        </div>

        <div className="mt-2 text-sm">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800 flex items-center gap-2">
              <FaTruck className="text-gray-600" /> Delivery:
            </p>
            <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-sky-100 text-sky-700">
              {data.status}
            </span>
          </div>
          <p className="text-gray-600 mt-1 ml-6 truncate">
            {data.deliveryDescription}
          </p>
        </div>
      </div>

      {/* Items List */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-sky-700 border-b pb-2 flex items-center gap-2">
          Items
        </h3>

        <div className="divide-y">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 text-sm"
            >
              <span className="truncate">{item.itemName}</span>
              <span className="text-gray-500">x{item.quantity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action & Total */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-3">
        {data.status !== "completed" && (
          <OrangeButton
            title={<CiDeliveryTruck className="text-2xl" />}
            className="w-full sm:w-auto py-1"
            onClick={handleUpdate} // 👈 Navigate after update
          />
        )}
        {/* <div>
          <button className="cursor-pointer">
            <RiDeleteBin6Line className="text-2xl text-red-500" />
          </button>
        </div> */}

        <div className="flex items-center gap-2 text-base font-semibold">
          <FaMoneyBillWave className="text-green-500" />
          Total: <span className="text-green-600">Rs. {data.totalAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
