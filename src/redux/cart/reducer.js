import { ADDTOCART, DECREMENT, DELETE, INCREMENT } from "./actionTypes";
import initialStates from "./initialStates";

export const cartReducer = (state = initialStates, action) => {
  switch (action.type) {
    case INCREMENT:
      return state.map((item) => {
        if (item.id == action.payload) {
          return {
            ...item,
            productQuantity: item.productQuantity + 1,
          };
        } else return item;
      });

    case DECREMENT:
      return state.map((item) => {
        if (item.id == action.payload) {
          return {
            ...item,
            productQuantity: item.productQuantity - 1,
          };
        } else return item;
      });

    case ADDTOCART:
      return [...state, action.payload];

    case DELETE:
      return state.filter((item) => item.id != action.payload);

    default:
      return state;
  }
};

// export default reducer;
