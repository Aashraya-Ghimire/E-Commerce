const addToCart = (productData) => {
  productData.quantity = 1;
  let localData = localStorage.getItem("cart");

  if (localData == null) {
    // If no cart exists, create one
    let tempArray = [];
    tempArray.push(productData);
    localStorage.setItem("cart", JSON.stringify(tempArray));
  } else {
    let tempArray = JSON.parse(localData);

    // Prevent duplicate items
    let tempCheck = tempArray.filter((data) => data._id === productData._id);
    if (tempCheck.length !== 0) {
      return; // Item already exists
    }

    tempArray.push(productData);
    localStorage.setItem("cart", JSON.stringify(tempArray));
  }

  // Notify app that cart has changed000111
  window.dispatchEvent(new Event("cartUpdated"));
};

export default addToCart;
