import currentUserReducer from './currentuser';
import productIdReducer from './productid';
import categoryIdReducer from './categoryid';

import {combineReducers} from 'redux';


const allReducers = combineReducers({
    currentUser: currentUserReducer,
    productId: productIdReducer,
    categoryId: categoryIdReducer
});

export default allReducers;