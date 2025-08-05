import React, { useEffect, useState } from "react";

// import productDataApi from "../../Api/productData.api";
// import Productinfo from "../../Product/Modal/Productinfo";
// import addToCart from "../../Local/addToCart";
import Card from "../../Product/Card/Card";

function Items({ productData }) {
  const handleClick = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <div className="relative flex justify-center items-center">
      <div className="flex flex-wrap gap-6 justify-center p-6 bg-white rounded-3xl w-[85vw]">
        {productData.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Items;
