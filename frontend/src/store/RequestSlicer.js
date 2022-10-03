import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const saveNewRequest = createAsyncThunk(
    "customer/request",
    async (payload) => {
        // await axios.put("customer/request", payload);

        console.log("your comment",payload);
    }

)

const addNewRequestSlicer = createSlice({
    name:"favoriteList",
    initialState:{favoriteList:[], status:""},
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(saveNewRequest.fulfilled,(state) =>{
            state.status = "completed";
            console.log(state.status);
        });
        builder.addCase(saveNewRequest.pending,(state) => {
            state.status = "pending";
            console.log(state.status);
        });
    }
});

export default addNewRequestSlicer;