import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const updateFavList = createAsyncThunk(
    "customer/favoriteList",
    async (requestBody) => {
        // await axios.post("http://localhost:8080/customer",{customerId, requestBody});
    }

)





const addFavoriteListSlice = createSlice({
    name:"favoriteList",
    initialState:{favoriteList:[], status:""},
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(updateFavList.fulfilled,(state) =>{
            state.status = "completed";
            console.log(state.status);
        });
        builder.addCase(updateFavList.pending,(state) => {
            state.status = "pending";
            console.log(state.status);
        })
    }
})