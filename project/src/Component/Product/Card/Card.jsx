import React, { useState } from "react";
import Button from "../../Button/Button";
import { MdDelete, MdOutlineStarPurple500 } from "react-icons/md";
import addToCart from "../../Local/addToCart";
import Productinfo from "../Modal/Productinfo";
import deleteProductApi from "../../Api/Product/deleteProductApi";
import { IoStarOutline } from "react-icons/io5";

const Card = ({ item }) => {
  const userData = JSON.parse(localStorage.getItem("userDetail"));
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState(false);

  const handleClick = (item) => {
    setCart((prev) => !prev);
    if (!cart) addToCart(item);
  };

  const handleDelete = () => {
    deleteProductApi({ id: item._id });
  };
  return (
    <div>
      <div
        onClick={() => setShowModal(true)}
        className="w-72 h-[300px] rounded-3xl shadow-xl bg-white bg-opacity-80 backdrop-blur-md border border-gray-100 hover:shadow-2xl transition-transform duration-300 transform hover:scale-[1.025] cursor-pointer flex flex-col overflow-hidden relative"
      >
        <div className="absolute top-3 left-3 px-3 py-1 bg-green-500 text-white text-xs z-1 font-semibold rounded-full shadow-md flex items-center justify-center">
          {item?.stock} in stock
        </div>

        {userData.role == "admin" && (
          <div
            className="w-[25px] h-[25px] bg-red-500 rounded-2xl absolute z-1 flex justify-center items-center top-2 right-2"
            onClick={(e) => {
              e.stopPropagation(), handleDelete();
            }}
          >
            <MdDelete className="text-white text-xl" />
          </div>
        )}

        <div className="relative h-36 overflow-hidden">
          <img
            src={item?.image}
            alt={item?.pName}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-between flex-grow p-4">
          <div className="text-[11px] text-center text-gray-500 tracking-wide">
            {item?.category}
          </div>

          <div className="flex justify-between items-start mt-1 gap-2">
            <h3 className="text-[15px] font-medium text-gray-800 w-2/3 line-clamp-2 leading-tight">
              {item?.pName}
            </h3>
          </div>
          {/* rating */}
          <div className="flex gap-1 text-yellow-400 text-2xl">
            {[...Array(Math.floor(item?.rating) || 0)].map((_, i) => (
              <MdOutlineStarPurple500 key={(_, i)} />
            ))}

            {[...Array(5 - (Math.floor(item?.rating) || 0))].map((_, i) => (
              <IoStarOutline key={(_, i)} />
            ))}
          </div>

          {/* Price + Button */}
          <div className="flex justify-between items-center mt-auto pt-3">
            <div className="text-green-500 font-bold text-[15px]">
              Rs {item?.price}
            </div>

            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleClick(item);
              }}
              title={cart ? "Added to cart" : "Add to cart"}
              className={`w-32 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300 ${
                cart
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-green-600 hover:brightness-110"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center px-4 py-8">
          <Productinfo data={item} setShowmodel={setShowModal} />
        </div>
      )}
    </div>
  );
};

export default Card;
