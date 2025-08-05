import SecureFetch from "../ApiConfiguration";
const deleteProductApi = async (id) => {
  const request = await SecureFetch(
    "http://localhost:3000/product",
    "DELETE",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    id
  );
  if (request.status == 200) {
    alert("Product deleted successfully");
    window.location.href = "/";
  } else {
    alert("Somethimg went wrong");
  }
};
export default deleteProductApi;
