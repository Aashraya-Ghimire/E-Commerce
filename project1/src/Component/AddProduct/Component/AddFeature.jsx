import React, { useState } from "react";
import OrangeButton from "../../Button/OrangeButton";

const AddFeature = ({ productDetail, setProductDetail }) => {
  const [features, setFeatures] = useState("");

  const handleAddFeature = () => {
    if (!features.trim()) return;

    setProductDetail({
      ...productDetail,
      features: [...productDetail.features, features.trim()],
    });
    setFeatures(""); // clear input after adding
  };
  return (
    <div className="my-2 space-y-1">
      <div className="text-sm font-medium text-gray-700">Features:</div>

      <div className="text-sm">
        Features:{" "}
        {productDetail.features.map((item, index) => (
          <span key={index}>{item}, </span>
        ))}
      </div>

      <input
        type="text"
        value={features}
        onChange={(e) => setFeatures(e.target.value)}
        className="border outline-none rounded-md p-1 w-full"
      />

      <OrangeButton title="Add +" onClick={handleAddFeature} />
    </div>
  );
};

export default AddFeature;
