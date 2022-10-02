import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/AuthSlice";
import IdSlice from "./slices/IdSlice.js";



const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        propId:IdSlice.reducer,
    }
})

export const authActions = authSlice.actions;
export const idActions =IdSlice.actions
export default store;