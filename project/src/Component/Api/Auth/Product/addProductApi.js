import SecureFetch from "../ApiConfiguration";

const addProductApi = async (productDetail, setProductDetail) => {
  const request = await SecureFetch(
    "http://localhost:3000/product",
    "POST",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    productDetail
  );
  if (request.status == 200) {
    // alert("product add sucessfully");
    setProductDetail({
      pName: "",
      features: [],
      price: 0,
      image: "",
      rating: 0,
      caterory: "",
      description: "",
    });
  }
};
export default addProductApi;
