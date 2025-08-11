import Items from "../pages/home/Items";

const Product = ({ productData }) => {
  return (
    <div>
      <div>
        <div className="flex justify-between mx-[10%]">
          <div className="text-2xl font-bold">Popular Foods</div>
        </div>

        <div>
          <Items productData={productData} />
        </div>
      </div>
    </div>
  );
};

export default Product;
