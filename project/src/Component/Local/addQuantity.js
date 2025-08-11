const addQuantity = (item, setCartData) => {
  const localData = JSON.parse(localStorage.getItem("cart"));
  const index = localData.findIndex((data) => data._id == item._id);
  localData[index].quantity += 1;
  localStorage.setItem("cart", JSON.stringify(localData));
  setCartData(localData);
};
export default addQuantity;
