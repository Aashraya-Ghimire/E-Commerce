import React, { useEffect, useState } from "react";
import Card from "../../Product/Card/Card";

function Items({ productData }) {
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
