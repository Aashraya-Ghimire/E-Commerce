import React, { useState } from "react";
import Card from "../Product/Card/Card";
import AddProductDetailComponent from "./Component/AddProductDetailComponent";
import { useLocation, useNavigate } from "react-router-dom";
import OrangeButton from "../Button/OrangeButton";
import addProductApi from "../Api/Product/addProductApi";
import updateProductApi from "../Api/Product/updateProductApi";
import { MdKeyboardBackspace } from "react-icons/md";
import Navbar from "../Navbar/Navbar";

const AddProduct = () => {
  const userData = JSON.parse(localStorage.getItem("userDetail"));
  if (!userData || userData.role != "admin") {
    window.location.href = "/";
    return;
  }
  const location = useLocation();
  const data = location.state;
  const temp = {
    pName: "",
    features: [],
    price: 0,
    image: "",
    rating: 0,
    category: "",
    description: "",
  };

  const [productDetail, setProductDetail] = useState(data ? data : temp);

  const handleProduct = async () => {
    await addProductApi(productDetail, setProductDetail);
    alert("product added successfully");
  };
  const handleUpdateProduct = () => {
    const tempData = productDetail;
    tempData.id = productDetail._id;
    updateProductApi(productDetail);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <header className="px-4 md:px-16 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          {data ? "Update Product" : "Add Product"}
        </h1>
      </header>

      <main className="flex flex-wrap md:flex-nowrap items-center justify-center flex-1 gap-6 md:gap-12 px-4 md:px-16 py-10 mx-auto">
        {/* Left Section - Product Preview & Info + Button */}
        <section className="md:w-2/5 flex flex-col items-center">
          <Card item={productDetail} />
          <p className="mt-6 text-center text-gray-600 text-sm md:text-base font-medium max-w-md">
            Add a new product or update existing details here to keep your
            catalog accurate and up to date. Make sure to fill in all required
            fields for the best results.
          </p>

          {/* Button moved here */}
          <div className="mt-8 w-full flex justify-center">
            {data ? (
              <OrangeButton
                title={"Update Product"}
                onClick={() => {
                  handleUpdateProduct();
                }}
                className="px-12 py-3"
              />
            ) : (
              <OrangeButton
                title={"Add Product"}
                onClick={handleProduct}
                className="px-12 py-3"
              />
            )}
          </div>
        </section>

        {/* Right Section - Product Details Form */}
        <section className="md:w-3/6 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold  text-center text-gray-700 mb-2">
            Product Detail
          </h2>
          <AddProductDetailComponent
            setProductDetail={setProductDetail}
            productDetail={productDetail}
          />
        </section>
      </main>
    </div>
  );
};

export default AddProduct;
