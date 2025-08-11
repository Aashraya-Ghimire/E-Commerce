import OrderCard from "./OrderCard";

const Order = ({ orderData }) => {
  return (
    <div
      className="
        p-4 sm:p-6 bg-sky-100 
        w-full h-fit
        pt-[60px]   
        sm:pt-6       
        min-h-[calc(100vh-60px)]  
      "
    >
      <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4 text-center sm:text-left">
        Orders
      </h2>

      <div className="flex flex-wrap justify-around gap-6 sm:gap-6 grid-cols-1">
        {orderData.map((item) => (
          <OrderCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Order;
