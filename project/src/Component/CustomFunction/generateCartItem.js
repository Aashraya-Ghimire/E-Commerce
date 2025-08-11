const generateCartItem = (dta) => {
  const tempArray = [];
  dta.map((item) => {
    tempArray.push({ itemName: item.pName, quantity: item.quantity });
  });
  return tempArray;
};
export default generateCartItem;
