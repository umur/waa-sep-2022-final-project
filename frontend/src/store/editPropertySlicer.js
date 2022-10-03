import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const editProperty = createAsyncThunk("property",async(payload)=>{
    console.log("something")
    await axios.put("owner/property", payload);
    console.log("your edited property",payload);
})
    //"owner/property",
    //async (payload) => {
        // await axios.put("owner/property", payload);

        // console.log("your edited property",payload);
       // console.log("something")
    //}




const editPropertySlicer = createSlice({
    name:"favoriteList",
    initialState:{favoriteList:[], status:""},
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(editProperty.fulfilled,(state) =>{
            state.status = "completed";
            // console.log(state.status);
        });
        builder.addCase(editProperty.pending,(state) => {
            state.status = "pending";
            // console.log(state.status);
        });
    }
});

export const { reducer } =  editPropertySlicer;
// export default editPropertySlicer;