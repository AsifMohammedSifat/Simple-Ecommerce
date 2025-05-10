import { ADDPRODUCT, DECREASEITEM } from "./actionTypes";

export const addProduct = (data) => {
  // console.log(data);
  const { pname, category, imageurl, price, quantity } = data;
  return {
    type: ADDPRODUCT,
    payload: {
      pname,
      category,
      imageurl,
      price,
      quantity,
    },
  };
};

export const decreaseItem = (id) => {
  return {
    type: DECREASEITEM,
    payload: id,
  };
};
