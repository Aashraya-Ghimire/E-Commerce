import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import MainAuth from "./Component/Authentiction/MainAuth";
import productDataApi from "./Component/Api/productData.api";

const Home = () => {
  const token = localStorage.getItem("token");
  const [maindata, setMaindata] = useState([]);

  useEffect(() => {
    if (token) {
      productDataApi(setMaindata);
    }
  }, [token]);

  return (
    <div className="h-[100vh]">
      {token ? <Outlet context={maindata} /> : <MainAuth />}
    </div>
  );
};

export default Home;
