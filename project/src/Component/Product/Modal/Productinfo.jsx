import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import OrangeButton from "../../Button/OrangeButton";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import addToCart from "../../Local/addToCart";

function Productinfo({ data, setShowmodel, item }) {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userDetail"));
  const [cart, setCart] = useState(false);

  const navigateFunction = () => {
    navigate("/product", { state: data });
  };

  const handleClick = () => {
    setCart((prev) => !prev);
    addToCart(data);
  };

  return (
    <div
      className="bg-white flex flex-col md:flex-row rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 w-full max-w-6xl mx-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-auto flex-shrink-0">
        <img
          src={data?.image}
          alt={data?.pName}
          className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-t-none"
        />
        <button
          className="h-8 w-8 absolute top-2 left-2 z-10 bg-red-500 rounded-full text-white text-xl flex items-center justify-center"
          onClick={() => setShowmodel(false)}
        >
          <IoIosArrowBack />
        </button>
      </div>

      {/* Info Section */}
      <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-between max-h-[calc(100vh-16rem)] overflow-y-auto md:max-h-full">
        <div>
          <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest mb-2 text-center md:text-left">
            {data?.category}
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 text-center sm:text-left">
              {data?.pName}
            </h2>
            <div className="flex justify-center sm:justify-start gap-[2px] text-yellow-400 text-base">
              {[...Array(Math.floor(data?.rating) || 0)].map((_, idx) => (
                <MdOutlineStarPurple500 key={idx} />
              ))}
              {[...Array(5 - (Math.floor(data?.rating) || 0))].map((_, idx) => (
                <IoStarOutline key={idx} />
              ))}
            </div>
          </div>

          {data?.cuisine && (
            <div className="text-sm text-gray-600 mb-1 text-center md:text-left">
              <span className="font-semibold">Cuisine:</span> {data.cuisine}
            </div>
          )}

          {Array.isArray(data?.tags) && data.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3 justify-center md:justify-start">
              {data.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-orange-100 text-green-400 text-xs px-3 py-[2px] rounded-full font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mb-4">
          <div className="text-gray-700 font-semibold mb-1 text-lg">
            Description
          </div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {data?.description}
          </p>
        </div>

        {/* Features */}
        <div className="mt-2">
          <h3 className="text-sm font-semibold text-gray-700 mb-1">Features</h3>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-[2px]">
            {Array.isArray(data?.features) ? (
              data.features.map((features, index) => (
                <li key={index}>{features}</li>
              ))
            ) : (
              <li>{data?.features}</li>
            )}
          </ul>
        </div>

        {/* Price & Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-4">
          <span className="text-lg sm:text-xl font-semibold text-green-400">
            ${data?.price}
          </span>
          {userData.role === "admin" ? (
            <OrangeButton title={"Update"} onClick={navigateFunction} />
          ) : (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleClick(item);
              }}
              title={cart ? "Added to cart" : "Add to cart"}
              className={`w-full sm:w-32 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300 ${
                cart
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-green-600 hover:brightness-110"
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Productinfo;
