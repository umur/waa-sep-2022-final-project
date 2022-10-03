import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import axios from "axios";
import MockData from "./../data.json";




export const feachAllPropertyWithImage = createAsyncThunk("property/fetchAll", async () => {
    //   const result = await axios.get("http://localhost:8080/products");
    //   return result.data;
    //   Admin Property Slicer

    return MockData.properties.allPropertiesWithImg;
  }
);

export const deleteProperty = createAsyncThunk("", async(propertyId)=>{
  console.log(`Property id: ${propertyId} has been removed.`)
})


const propertySlice = createSlice({
  name:"propertyAdmin",
  initialState: {properties: [], status: 'hi'},
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(feachAllPropertyWithImage.fulfilled, (state, action) => {
          state.properties = action.payload;
          state.status = 'completed'
      });
      builder.addCase(feachAllPropertyWithImage.pending,  (state) => {
          state.status = 'pending'
      });
  }
})

export const { reducer } = propertySlice;



