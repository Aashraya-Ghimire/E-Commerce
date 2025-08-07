import { React, useEffect, useState } from "react";
import Navbar from "./Component/NavBar/NavBar";
import Footer from "./Component/Footer/Footer";
import Landing from "./Component/pages/home/Landing";
import productDataApi from "./Component/Api/productData.api";
import Categories from "./Component/pages/home/Categories";
import Product from "./Component/Product/Product";
import { useOutletContext } from "react-router";
function App() {
  const mainData = useOutletContext();
  const [productData, setProductData] = useState([]);
  useEffect(
    () => {
      setProductData(mainData);
    },
    { mainData }
  );
  return (
    <div className="bg-[#F7F7F7]">
      <Navbar />
      <Landing />
      <Categories maindata={mainData} setProductData={setProductData} />
      <Product productData={productData} />
      <Footer />
    </div>
  );
}

export default App;
