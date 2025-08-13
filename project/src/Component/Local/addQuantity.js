const addQuantity = (item, setCartData) => {
  const localData = JSON.parse(localStorage.getItem("cart")) || [];
  const index = localData.findIndex((data) => data._id === item._id);

  if (index !== -1) {
    const currentQuantity = localData[index].quantity || 0;
    const stock = item.stock || 0;

    if (currentQuantity < stock) {
      localData[index].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(localData));
      setCartData(localData);
    }
  }
};

export default addQuantity;
