import SecureFetch from "../Auth/ApiConfiguration";
import mainEndpoint from "../mainEndpoint";
const deleteProductApi = async (id) => {
  const request = await SecureFetch(
    mainEndpoint + "/product",
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
