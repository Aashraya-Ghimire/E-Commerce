import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaPhone, FaTruck, FaMoneyBillWave } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import OrangeButton from "../../Button/OrangeButton";
import updateOrderApi from "../../Api/Order/updateOrderApi";
import { CiDeliveryTruck } from "react-icons/ci";

const OrderCard = ({ data }) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(data.status); // 👈 local state for status

  const handleUpdate = async () => {
    const updatedData = {
      id: data._id,
      status: "completed",
    };

    try {
      await updateOrderApi(updatedData);
      setStatus("completed"); // 👈 update UI instantly
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT: Customer Details */}
        <div className="bg-gray-50 rounded-xl p-5 shadow-inner">
          <h2 className="text-lg font-semibold text-sky-700 border-b pb-3 mb-4 flex items-center gap-2">
            <FaUser className="text-sky-600" /> Customer Details
          </h2>
          <div className="text-sm space-y-3">
            <div className="flex justify-between">
              <span className="flex items-center gap-2 text-gray-600">
                <FaUser /> Name
              </span>
              <span className="font-medium">{data.cName}</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center gap-2 text-gray-600">
                <FaPhone /> Contact
              </span>
              <span className="font-medium">{data.contactNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center gap-2 text-gray-600">
                <FaLocationDot /> City
              </span>
              <span className="font-medium">{data.city}</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center gap-2 text-gray-600">
                <FaLocationDot /> Street
              </span>
              <span className="font-medium">{data.street}</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center gap-2 text-gray-600">
                <FaTruck /> Status
              </span>
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  status === "completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-sky-100 text-sky-700"
                }`}
              >
                {status}
              </span>
            </div>
            {data.deliveryDescription && (
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Note</span>
                <span className="text-gray-700 max-w-[220px] truncate text-right">
                  {data.deliveryDescription}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Items + Total + Action */}
        <div className="bg-gray-50 rounded-xl p-5 shadow-inner flex flex-col h-full">
          <h2 className="text-lg font-semibold text-sky-700 border-b pb-3 mb-4 flex items-center gap-2">
            🛒 Order Items
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-600">
                  <th className="text-left py-2 px-3">Item</th>
                  <th className="text-right py-2 px-3">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-none hover:bg-gray-50"
                  >
                    <td className="py-2 px-3">{item.itemName}</td>
                    <td className="text-right py-2 px-3">x{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer (Total + Action) */}
          <div className="mt-auto pt-5 flex flex-col sm:flex-row justify-between items-center gap-4 border-t">
            {status !== "completed" && (
              <OrangeButton
                title={<CiDeliveryTruck className="text-2xl" />}
                className="w-full sm:w-auto py-2 px-6"
                onClick={handleUpdate}
              />
            )}
            <div className="flex items-center gap-2 text-lg font-bold">
              <FaMoneyBillWave className="text-green-500" />
              <span className="text-green-700">Rs. {data.totalAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
