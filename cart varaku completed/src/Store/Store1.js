import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Components/authSlice';
import { RegisterReducer } from '../Components/RegisterSlice';
import { CategoryReducer } from '../Components/CategorySlice';
import { ProductReducer } from '../Components/ProductSlice';
import { cartReducer } from '../Components/CartSlice';
export const store = configureStore({
    reducer:{
          auth:authReducer,
          register:RegisterReducer,
          category:CategoryReducer,
          product:ProductReducer,
          cart:cartReducer,
    },
});
export default store;