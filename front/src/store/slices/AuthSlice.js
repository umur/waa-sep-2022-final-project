import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {isAuthenticated:false,role:""};
const authSlice = createSlice(
    {
        name:'authentication',
        initialState:initialAuthState,
        reducers: {
            loginSuccessful(state, data) {
                state.isAuthenticated = true;
                state.role = data.payload;
                console.log(state.isAuthenticated)
                console.log(state.role)
            },
            logout(state) {
                console.log("from store")
                state.isAuthenticated = false;
                state.role=""
            }
           
        }
    }
)

export default authSlice;