import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import axios from "axios";

//find all properties
export const fetchAllProperty = createAsyncThunk(
  "property/fetchAll",
  async () => {
    //   const result = await axios.get("http://localhost:8080/products");
    //   return result.data;
    // id
    const data = [
      {
        picture:"https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
        price: 22000,
        numberOfRooms: 3,
        numberOfBathrooms:2,
        views: 234,
        size: 23333,
        year: 2023,
      },
      {
        price: 232000,
        numberOfRooms: 3,
        numberOfBathrooms:2,
        views: 234,
        size: 23333,
        year: 2023,
      },
      {
        price: 652000,
        numberOfRooms: 3,
        numberOfBathrooms:2,
        views: 234,
        size: 23333,
        year: 2023,
      },
      {
        price: 5320690,
        numberOfRooms: 3,
        numberOfBathrooms:2,
        views: 234,
        size: 23333,
        year: 2023,
      },
    ];
    return data;
  }
);


//find property by id
export const fetchProperty= createAsyncThunk("property/fetch", async (id) => {
  //   const result = await axios.get(`http://localhost:8080/products/:{id}`);
  //   return result.data;
  const data = {

    price: 22000,
    numberOfRooms: 3,
    numberOfBathrooms:2,
    views: 234,
    size: 23333,
    year: 2023,
  };
  return data;
});

///filter property
export const filterProperty= createAsyncThunk("property/filter", async (d) => {

   // const result = await axios.get(`http://localhost:8080/products/?name=${d.name}&price=${d.price}&size=${d.size}&location=${d.location}`);
  //   return result.data;
  const data = {
   
    price: 22000,
    numberOfRooms: 3,
    numberOfBathrooms:2,
    views: 234,
    size: 23333,
    year: 2023,
  };
  return data;
});

//post properrty
export const registerProperty = createAsyncThunk("property/add", async (d) => {

  console.log(d)
  // const result = await axios.post(`http://localhost:8080/products`,d);
//   return result.data;
const data = {


};
return data;
});


const propertySlice = createSlice({
  name: "property",
  initialState: { products: [], status: " " },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProperty.fulfilled, (state, action) => {
      console.log(action.payload);
      state.products = action.payload;
      state.status = "completed";
    });
    builder.addCase(fetchAllProperty.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchProperty.fulfilled, (state, action) => {
      console.log(action.payload);
      state.products = action.payload;
      state.status = "completed";
    });
    builder.addCase(fetchProperty.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(filterProperty.fulfilled, (state, action) => {
      console.log(action.payload);
      state.products = action.payload;
      state.status = "completed";
    });
    builder.addCase(filterProperty.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(registerProperty.fulfilled, (state, action) => {
      console.log(action.payload);
      state.products = action.payload;
      state.status = "completed";
    });
    builder.addCase(registerProperty.pending, (state) => {
      state.status = "pending";
    });
  },
});
export const { reducer } = propertySlice;