import SecureFetch from "../ApiConfiguration";

const updateProductApi = async (productDetail) => {
  const request = await SecureFetch(
    "http://localhost:3000/product",
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
