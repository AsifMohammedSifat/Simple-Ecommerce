import initialStates from "./initialStates";
import { ADDPRODUCT, DECREASEITEM } from "./actionTypes";

const nextProductId = (products) => {
  const maxId = products.reduce(
    (maxId, product) => Math.max(maxId, product.id ?? -1),
    -1
  );
  return maxId + 1;
};

export const productReducer = (state = initialStates, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return [
        ...state,
        {
          id: nextProductId(state),
          ...action.payload,
        },
      ];
    case DECREASEITEM:
      return state.map((item) => {
        if (item.id == action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else return state;
      });
    default:
      return state;
  }
};

// export default reducer;
