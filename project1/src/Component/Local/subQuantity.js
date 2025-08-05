const subQuantity = (item, setDta) => {
  const localData = JSON.parse(localStorage.getItem("cart"));
  const index = localData.findIndex((data) => data.id == item.id);
  if (localData[index].quantity > 1) {
    localData[index].quantity -= 1;
  }
  localStorage.setItem("cart", JSON.stringify(localData));
  setDta(localData);
};
export default subQuantity;
