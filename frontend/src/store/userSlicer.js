import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserManger} from "../component/auth/config";

export const fetchUser = createAsyncThunk("user/fetch", async () => {
    return await UserManger.getUser() || {};
})

export const login = createAsyncThunk("user/login", async () => {
    return await UserManger.signinRedirect();
})

export const logout =  createAsyncThunk("user/logout", async () => {
    return await UserManger.signoutRedirect()
})

const userSlice = createSlice({
    name: "user",
    initialState: {user: {}},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload || {};
        });
    }
})
export const {reducer} = userSlice;