import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Components/authSlice';
import { RegisterReducer } from '../Components/RegisterSlice';
import { CategoryReducer } from '../Components/CategorySlice';
export const store = configureStore({
    reducer:{
          auth:authReducer,
          register:RegisterReducer,
          category:CategoryReducer,
    },
});
export default store;