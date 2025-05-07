import { INCREMENT, DECREMENT, DELETE, ADDTOCART } from "./action";

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
    types: DELETE,
    payload: id,
  };
};

export const addToCart = (name, category, imageUrl, price, quantity) => {
  return {
    type: ADDTOCART,
    payload: {
      name,
      category,
      imageUrl,
      price,
      quantity,
    },
  };
};
