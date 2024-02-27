import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Components/authSlice';
import { RegisterReducer } from '../Components/RegisterSlice';
import { CategoryReducer } from '../Components/CategorySlice';
import { ProductReducer } from '../Components/ProductSlice';
import { cartReducer } from '../Components/CartSlice';
import { CustomerIdReducer } from '../Components/CustomerIdSlice';
import { OrderReducer } from '../Components/OrderSlice';


export const store = configureStore({
    reducer:{
          auth:authReducer,
          register:RegisterReducer,
          category:CategoryReducer,
          product:ProductReducer,
          cart:cartReducer,
          customerid:CustomerIdReducer,
          order:OrderReducer,
    },
});
export default store;