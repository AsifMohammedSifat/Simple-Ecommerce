import { ADDPRODUCT } from "./actionTypes";

export const addProduct = (name, category, imageUrl, price, quantity) => {
  return {
    type: ADDPRODUCT,
    payload: {
      name,
      category,
      imageUrl,
      price,
      quantity,
    },
  };
};
