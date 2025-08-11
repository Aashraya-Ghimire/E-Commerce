import SecureFetch from "../Auth/ApiConfiguration";
import mainEndpoint from "../mainEndpoint";

const addOrderApi = async (tempData, navigate) => {
  const request = await SecureFetch(
    mainEndpoint + "/order",
    "POST",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    tempData
  );
  if (request.status == 200) {
    alert("order placed successfully");
    localStorage.removeItem("cart");
    navigate("/");
  } else {
    alert("something went wrong please try again");
  }
};
export default addOrderApi;
