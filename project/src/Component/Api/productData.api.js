import mainEndpoint from "./mainEndpoint";

const productDataApi = async (setMaindata) => {
  const request = await fetch(mainEndpoint + "/product");
  const response = await request.json();
  if (request.status == 200) {
    setMaindata(response.data);
  } else {
    setMaindata([]);
  }
};
export default productDataApi;
