import {combineReducers} from "redux"; //reducer haye molhtalef ba ham combine
import {productReducer, selectedProducts} from './productReducer';

const reducers = combineReducers({
 allProducts: productReducer,
 product: selectedProducts
})

export default reducers;