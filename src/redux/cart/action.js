import { INCREMENT, DECREMENT, DELETE, ADDTOCART } from "./actionTypes";

export const incrementItem = (id) => {
  return {
    type: INCREMENT,
    payload: id,
  };
};
export const decrementItem = (id) => {
  return {
    type: DECREMENT,
    payload: id,
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

export const addToCart = (id,pname, category, imageurl, price, quantity) => {
  return {
    type: ADDTOCART,
    payload: {
      id,
      pname,
      category,
      imageurl,
      price,
      quantity,
      productQuantity:1
    },
  };
};
