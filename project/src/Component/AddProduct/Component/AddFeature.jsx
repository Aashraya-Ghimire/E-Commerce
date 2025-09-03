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
    setFeatures("");
  };
  const handleRemoveFeature = () => {
    setFeatures(" ");
    setProductDetail({ ...productDetail, features: [] });
  };
  return (
    <div className="my-2 space-y-2">
      <div className="text-sm">
        Features:{" "}
        {productDetail.features.map((item, index) => (
          <span key={index}>{item}, </span>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2">
        <input
          type="text"
          value={features}
          placeholder="Features of Product"
          onChange={(e) => setFeatures(e.target.value)}
          className="border outline-none rounded-md p-1 w-full"
        />
        <OrangeButton title="Add" onClick={() => handleAddFeature()} />
        <OrangeButton title="Remove" onClick={() => handleRemoveFeature()} />
      </div>
    </div>
  );
};

export default AddFeature;
