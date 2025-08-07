import SecureFetch from "../Auth/ApiConfiguration";
import mainEndpoint from "../mainEndpoint";

const updateProductApi = async (productDetail) => {
  const request = await SecureFetch(
    mainEndpoint + "/product",
    "PATCH",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    productDetail
  );
  if (request.status == 200) {
    alert("product updated successfully");
  } else {
    alert("something went wrong ");
  }
};
export default updateProductApi;
