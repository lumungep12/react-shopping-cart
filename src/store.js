import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { orderReducer } from './Reducers/orderReducers';
import { productsReducer } from './Reducers/productReducers';
import { cartReducer }  from './Reducers/cartReducers';

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer
}),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;