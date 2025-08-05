import { data } from "react-router";
import { useState } from "react";
const removeFromCart = (item, setDta) => {
  const cartData = localStorage.getItem("cart");
  const actualData = JSON.parse(cartData);
  const updatedData = actualData.filter((data) => data.id != item.id);
  localStorage.setItem("cart", JSON.stringify(updatedData));
  setDta(updatedData);
};
export default removeFromCart;
