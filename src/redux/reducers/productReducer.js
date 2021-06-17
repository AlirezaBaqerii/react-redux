import {actionTypes} from "../constants/action-types";

const initialState = {
 products: []
}

export function productReducer (state= initialState, {type, payload}) {
  switch (type) {
   case actionTypes.SET_PRODUCTS:
    return {...state, products: payload};

  //  case actionTypes.SELECTED_PRODUCT:
  //    return {...state, product: payload}

  //   case actionTypes.REMOVE_SELECTED_PRODUCTS:
  //     return {...state, product: {}}

   default:
    return state;
  }
};

export const selectedProducts = (state={}, {type, payload}) => {
  switch (type) {
    case actionTypes.SELECTED_PRODUCT: 
      return {...state, ...payload}
    default:
      return state;
  }
}