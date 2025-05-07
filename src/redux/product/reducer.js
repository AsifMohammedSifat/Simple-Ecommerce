import initialStates from "./initialStates";
import { ADDPRODUCT } from './actionTypes';


const nextProductId = (products) =>{
    const maxId = products.reduce((product,maxId)=>Math.max(product.id,maxId),0);
    return maxId;
}

export const productReducer = (states=initialStates,action) =>{
    switch(action.type){
        case ADDPRODUCT:
            return [
                ...states,
                {
                    id:nextProductId(states),
                    ...action.payload
                }
            ]
        default:
            return states;
    };

}

// export default reducer;