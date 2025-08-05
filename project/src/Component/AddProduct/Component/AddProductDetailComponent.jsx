import React, { useState } from "react";
// import ProductInputField from "../../InputFields/ProductInputField";
import ProductInputField from "../../InputField/ProductInputField";
import AddFeature from "./AddFeature";
import AddCategory from "./AddCategory";

const AddProductDetailComponent = ({ setProductDetail, productDetail }) => {
  return (
    <div>
      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Name"}
        name={"pName"}
        productDetail={productDetail}
      />

      <AddFeature
        productDetail={productDetail}
        setProductDetail={setProductDetail}
      />

      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Rating"}
        name={"rating"}
        productDetail={productDetail}
      />
      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Price"}
        name={"price"}
        productDetail={productDetail}
      />
      <AddCategory
        setProductDetail={setProductDetail}
        productDetail={productDetail}
      />
      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Description"}
        name={"description"}
        productDetail={productDetail}
      />
      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Image"}
        name={"image"}
        productDetail={productDetail}
      />
    </div>
  );
};

export default AddProductDetailComponent;
