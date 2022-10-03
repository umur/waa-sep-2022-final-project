import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const saveNewFavList = createAsyncThunk(
    "customer/favoriteList",
    async (payload) => {
        // await axios.put("user/favorite-list", payload);

        console.log(payload);
    }

)

const addNewFavListSlicer = createSlice({
    name:"favoriteList",
    initialState:{favoriteList:[], status:""},
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(saveNewFavList.fulfilled,(state) =>{
            state.status = "completed";
            console.log(state.status);
        });
        builder.addCase(saveNewFavList.pending,(state) => {
            state.status = "pending";
            console.log(state.status);
        });
    }
});

export default addNewFavListSlicer;