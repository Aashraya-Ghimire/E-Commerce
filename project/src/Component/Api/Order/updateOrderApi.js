import SecureFetch from "../Auth/ApiConfiguration";
import mainEndpoint from "../mainEndpoint";

const updateOrderApi = async (orderDetail) => {
  const request = await SecureFetch(
    mainEndpoint + "/order/orderDetail",
    "PATCH",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    orderDetail
  );
};
export default updateOrderApi;
