import React from "react";
import ProductInputField from "../../InputField/ProductInputField";
import AddFeature from "./AddFeature";
import AddCategory from "./AddCategory";

const AddProductDetailComponent = ({ setProductDetail, productDetail }) => {
  return (
    <div className="space-y-4">
      {/* Product Name */}
      <ProductInputField
        setProductDetail={setProductDetail}
        label="Product Name"
        name="pName"
        placeholder="Enter Product Name"
        productDetail={productDetail}
      />

      {/* Feature Adder */}
      <AddFeature
        productDetail={productDetail}
        setProductDetail={setProductDetail}
      />

      {/* Rating & Price */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProductInputField
          setProductDetail={setProductDetail}
          label="Rating"
          name="rating"
          placeholder="Enter product Rating"
          productDetail={productDetail}
        />
        <ProductInputField
          setProductDetail={setProductDetail}
          label="Price"
          name="price"
          placeholder="Enter product Price"
          productDetail={productDetail}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Category Selector */}
        <AddCategory
          setProductDetail={setProductDetail}
          productDetail={productDetail}
        />

        <ProductInputField
          setProductDetail={setProductDetail}
          label="Stock"
          name="stock"
          placeholder="Enter product Stocks"
          productDetail={productDetail}
        />
      </div>

      {/* Description */}
      <ProductInputField
        setProductDetail={setProductDetail}
        label="Description"
        name="description"
        placeholder="Enter product Descriptions"
        productDetail={productDetail}
      />

      {/* Image Link */}
      <ProductInputField
        setProductDetail={setProductDetail}
        label="Image URL"
        name="image"
        placeholder="Enter product Image link"
        productDetail={productDetail}
      />
    </div>
  );
};

export default AddProductDetailComponent;
