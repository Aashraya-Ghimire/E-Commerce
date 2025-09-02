import { useState } from "react";
import Items from "../pages/home/Items";
import { useNavigate } from "react-router";
import Button from "../Button/Button";

const Product = ({ productData }) => {
  const [visibleCount, setVisibleCount] = useState(15);
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate("/products"); // redirect to the OnlyProduct page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="item">
      <div>
        <div className="flex justify-between mx-[10%]">
          <h1 className="text-3xl font-bold my-12 text-center text-green-600">
            Products
          </h1>
        </div>

        <div>
          <Items productData={productData.slice(0, visibleCount)} />
        </div>
        {visibleCount < productData.length && (
          <div className="flex justify-center my-6">
            <Button
              title={"Show More"}
              onClick={handleShowMore}
              className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
