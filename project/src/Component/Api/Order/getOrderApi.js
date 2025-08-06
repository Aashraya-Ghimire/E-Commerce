import SecureFetch from "../Auth/ApiConfiguration";

const getOrderApi = async () => {
  const request = await SecureFetch("http://localhost:3000/user/order", "GET", {
    "content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  });
  const response = await request.json();
  console.log("response of order", response);
};
export default getOrderApi;
