const subQuantity = (item, setDta) => {
  const localData = JSON.parse(localStorage.getItem("cart"));
  const index = localData.findIndex((data) => data._id == item._id);
  if (localData[index].quantity > 1) {
    localData[index].quantity -= 1;
  }
  localStorage.setItem("cart", JSON.stringify(localData));
  setDta(localData);
};
export default subQuantity;
