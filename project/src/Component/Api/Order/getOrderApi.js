import SecureFetch from "../Auth/ApiConfiguration";
import mainEndpoint from "../mainEndpoint";

const getOrderApi = async (setOrderData) => {
  const request = await SecureFetch(mainEndpoint + "/order", "GET", {
    "content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  });
  const response = await request.json();
  if (request.status == 200) {
    setOrderData(response.data);
  } else {
    setOrderData([]);
  }
};
export default getOrderApi;
