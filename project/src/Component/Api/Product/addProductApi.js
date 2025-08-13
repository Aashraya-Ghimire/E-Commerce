import SecureFetch from "../Auth/ApiConfiguration";
import mainEndpoint from "../mainEndpoint";

const addProductApi = async (productDetail, setProductDetail) => {
  const request = await SecureFetch(
    mainEndpoint + "/product",
    "POST",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    productDetail
  );
  if (request.status == 200) {
    alert("product add sucessfully");
    setProductDetail({
      pName: "",
      features: [],
      price: 0,
      image: "",
      rating: 0,
      caterory: "",
      description: "",
      stoke: 0,
    });
  }
};
export default addProductApi;
