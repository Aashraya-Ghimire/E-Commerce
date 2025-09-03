import React from "react";

const ProductInputField = ({
  setProductDetail,
  label,
  name,
  productDetail,
  placeholder,
}) => {
  const handleChange = (e) => {
    setProductDetail({
      ...productDetail,
      [name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="font-medium text-sm text-gray-600 mb-0.5">{label}:</div>
      <input
        className="outline-none p-1 border rounded-sm text-sm w-full"
        value={productDetail[name] || ""}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {productDetail[name] === "" && (
        <p className="text-red-500 text-[10px]"></p>
      )}
    </div>
  );
};

export default ProductInputField;
