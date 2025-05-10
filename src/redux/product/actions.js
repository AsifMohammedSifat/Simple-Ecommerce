import { ADDPRODUCT } from "./actionTypes";

export const addProduct = (data) => {
  // console.log(data);
  const {pname, category, imageurl, price, quantity} = data;
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
