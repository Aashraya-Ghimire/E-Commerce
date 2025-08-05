import React, { useState } from "react";
// import Card from "../Product/Component/Card";
import Card from "../Product/Card/Card";
import AddProductDetailComponent from "./Component/AddProductDetailComponent";
import { useLocation } from "react-router-dom";
import OrangeButton from "../Button/OrangeButton";
import addProductApi from "../Api/Auth/Product/addProductApi";

const AddProduct = () => {
  const location = useLocation();
  const data = location.state;
  const temp = {
    pName: "",
    features: [],
    price: 0,
    image: "",
    rating: 0,
    caterory: "",
    description: "",
  };

  const [productDetail, setProductDetail] = useState(data ? data : temp);
  const handleProduct = () => {
    addProductApi(productDetail, setProductDetail);
  };
  return (
    <div className="h-[100xh] p-5 flex flex-col px-20">
      <div>
        <h1 className="text-3xl font-bold text-center my-2 italic">
          {data ? "Update Product" : "Add Product"}
        </h1>
      </div>

      <div className="flex-1  md:flex gap-10 justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center w-[]  md:w-[40%]">
          <Card data={productDetail} />
          <div className=" hidden md:flex  mx-5 font-medium text-gray-500">
            Add a new product or update existing details here to keep your
            catalog accurate and up to date. Make sure to fill in all required
            fields for the best results.
          </div>
        </div>
        <div className="flex-1 ">
          <div className="text-center text-gray-500 font-semibold italic text-2xl">
            Product Detail
          </div>
          <AddProductDetailComponent
            setProductDetail={setProductDetail}
            productDetail={productDetail}
          />
        </div>
      </div>
      <div>
        <OrangeButton title={"Add product"} onClick={() => handleProduct()} />
      </div>
    </div>
  );
};

export default AddProduct;
