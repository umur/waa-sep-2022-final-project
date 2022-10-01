import * as React from "react";
import {configureStore} from "@reduxjs/toolkit"
import authSlice from "../reducers/authSlice";
import messageSlice from "../reducers/messageSlice";

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        message: messageSlice.reducer
    },
   // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
