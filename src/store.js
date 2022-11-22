import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';
import { productDetailReducer } from './reducers/productReducers';
const reducer=combineReducers({
    productList:productListReducer,
    productDetail:productDetailReducer,
});
const initialState={};
const store=createStore(reducer,initialState,applyMiddleware(thunk));
export default store;