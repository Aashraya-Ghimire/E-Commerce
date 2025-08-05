import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import OrangeButton from "../../Button/OrangeButton";

function Productinfo({ data, setShowmodel }) {
  const userData = JSON.parse(localStorage.getItem("userDetail"));

  return (
    <div
      className="bg-white flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 w-full max-w-3xl mx-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative w-full md:w-1/2 h-60 md:h-auto text-black">
        <img
          src={data?.image}
          alt={data?.pName}
          className="w-full h-full object-cover"
        />
        <button
          className="h-8 w-8 absolute top-2 left-2 z-10 bg-[#fa7516] rounded-full text-white text-xl flex items-center justify-center"
          onClick={() => setShowmodel(false)}
        >
          <IoIosArrowBack />
        </button>
      </div>

      <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
        <div>
          <div className="text-sm text-gray-400 uppercase tracking-widest mb-1 text-center md:text-left">
            {data?.mealtype}
          </div>

          <div className="flex justify-between items-start gap-1 mb-3">
            <h2 className="text-lg font-bold text-gray-800">{data?.pName}</h2>
            <div className="flex gap-[2px] text-yellow-400 text-base">
              {[...Array(Math.floor(data?.rating) || 0)].map((_, idx) => (
                <MdOutlineStarPurple500 key={idx} />
              ))}
              {[...Array(5 - (Math.floor(data?.rating) || 0))].map((_, idx) => (
                <IoStarOutline key={idx} />
              ))}
            </div>
          </div>

          {data?.cuisine && (
            <div className="text-sm text-gray-600 mb-1">
              <span className="font-semibold">Cuisine:</span> {data.cuisine}
            </div>
          )}

          {Array.isArray(data?.tags) && data.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {data.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-orange-100 text-orange-600 text-xs px-3 py-[2px] rounded-full font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
          <div className="flex items-center gap-1 bg-gray-100 px-2 py-1.5 rounded-lg">
            <span className="font-semibold text-gray-700">⏱</span>
            <span>{data?.cookTimeMinutes} min</span>
          </div>
          <div className="flex items-center gap-1 bg-gray-100 px-2 py-1.5 rounded-lg">
            <span className="font-semibold text-gray-700">🍽</span>
            <span>{data?.servings || data?.service} servings</span>
          </div>
          <div className="flex items-center gap-1 bg-gray-100 px-2 py-1.5 rounded-lg">
            <span className="font-semibold text-gray-700">🔥</span>
            <span className="capitalize">{data?.difficulty}</span>
          </div>
        </div>

        <div className="mt-2">
          <h3 className="text-sm font-semibold text-gray-700 mb-1">Sources</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-[2px]">
            {Array.isArray(data?.features) ? (
              data.features.map((features, index) => (
                <li key={index}>{features}</li>
              ))
            ) : (
              <li>{data?.features}</li>
            )}
          </ul>
        </div>

        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-extrabold text-[#fa7516]">
            ${data?.price}
          </span>
          {userData.role == "admin" ? (
            <OrangeButton title={"Update"} />
          ) : (
            <button
              onClick={() => alert("Added to cart")}
              className="flex items-center gap-2 bg-[#fa7516] hover:bg-[#f97216] text-white text-sm px-4 py-2 rounded-lg transition-all duration-200 shadow-md"
            >
              <FaShoppingCart />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Productinfo;
