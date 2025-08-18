import Items from "../pages/home/Items";

const Product = ({ productData }) => {
  return (
    <div id="item">
      <div>
        <div className="flex justify-between mx-[10%]">
          <h1 className="text-3xl font-bold my-12 text-center text-green-600">
            Products
          </h1>
        </div>

        <div>
          <Items productData={productData} />
        </div>
      </div>
    </div>
  );
};

export default Product;
