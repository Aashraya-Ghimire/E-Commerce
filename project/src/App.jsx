import { React, useEffect, useState } from "react";
import Footer from "./Component/Footer/Footer";
import Categories from "./Component/pages/home/Categories";
import Product from "./Component/Product/Product";
import { useOutletContext } from "react-router";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/pages/home/Hero";
function App() {
  const mainData = useOutletContext();
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    setProductData(mainData);
  }, [mainData]);
  return (
    <div className="bg-[#F7F7F7]">
      <Navbar maindata={mainData} setProductData={setProductData} />
      <Hero />
      <Categories maindata={mainData} setProductData={setProductData} />
      <Product productData={productData} />
      <Footer />
    </div>
  );
}

export default App;
