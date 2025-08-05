const productDataApi = async (setProductData, setMaindata) => {
  const request = await fetch("http://localhost:3000/product");
  const response = await request.json();
  if (request.status == 200) {
    setProductData(response.data);
    setMaindata(response.data);
  }
};
export default productDataApi;
