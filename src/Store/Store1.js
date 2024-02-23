import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Components/authSlice';
import { RegisterReducer } from '../Components/RegisterSlice';
export const store = configureStore({
    reducer:{
          auth:authReducer,
          register:RegisterReducer,
    },
});
export default store;