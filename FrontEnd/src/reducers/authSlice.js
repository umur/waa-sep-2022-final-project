import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../services/auth-header";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? {isLoggedIn: true, user}
    : {isLoggedIn: false, user: null};
const authSlice = createSlice(
    {
        name: 'authSlice',
        initialState: initialState,
        reducers: {
            login(state, action) {
                console.log('auth: ', action.payload.userName)
                return axios
                    .post(  "/auth/signin", {
                        userName: action.payload.userName,
                        password: action.payload.password
                    },{ headers: authHeader() })
                    .then((response) => {
                        if (response.data.accessToken) { debugger
                            localStorage.setItem("user", JSON.stringify(response.data));
                        }
                        state = {...state, isLoggedIn:true, user:response.data}
                        Promise.resolve()
                    }).catch(error => Promise.resolve(error));
            },
            register(state, action) {
                 axios.post( "/auth/signup", {
                    userName:action.payload.userName,
                    email: action.payload.email,
                    password: action.payload.password,
                });
            },
            logout(state) {
                state.user = null
                state.auth.user = null
                localStorage.removeItem("user");
                console.log('in logout: ', state.user)
            }
        }
    }
)

export default authSlice
export const {login, logout, register} = authSlice.actions
