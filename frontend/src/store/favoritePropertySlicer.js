import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import axios from "axios";
import {useParams} from "react-router-dom";

export const fetchAllFavorite = createAsyncThunk(
    "favorite/fetchAll",
    async () => {
        //   const result = await axios.get("http://localhost:8080/favorites");
        //   return result.data;

        const data = [{

            name:"Iowa",
            property:[{
                id:1,
            picture:"https://assets.architecturaldigest.in/photos/60083e76274aca243711c3a4/16:9/w_2560%2Cc_limit/ghaziabad-uttar-pradesh-homes-photos-1366x768.jpg",
            price: 22000,
            numberOfRooms: 3,
            numberOfBathrooms:2,
            views: 244,
            size: 23333,
            year: 2023,
        },{
                id:2,
            picture:"https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
            price: 22000,
            numberOfRooms: 3,
            numberOfBathrooms:2,
            views: 234,
            size: 23333,
            year: 2023}]},
            {

                name:"Dc ",
                property:[{
                    id:3,
                    picture:"https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2022/1/27/4-cent-trivandrum-home-view.jpg",
                    price: 526000,
                    numberOfRooms: 2,
                    numberOfBathrooms:1,
                    views: 4222,
                    size: 63333,
                    year: 2003,
                }]},{
                name:"Virginia",
                property:[{
                    id:4,
                    picture:"https://assets.architecturaldigest.in/photos/60083e76274aca243711c3a4/16:9/w_2560%2Cc_limit/ghaziabad-uttar-pradesh-homes-photos-1366x768.jpg",
                    price: 22000,
                    numberOfRooms: 3,
                    numberOfBathrooms:2,
                    views: 234,
                    size: 23333,
                    year: 2023,
                },{
                    id:5,
                    picture:"https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_30/1355945/home-exterior-today-180726-tease.jpg",
                    price: 22000,
                    numberOfRooms: 3,
                    numberOfBathrooms:2,
                    views: 234,
                    size: 23333,
                    year: 2023}]},
        ];
        return data;
    }
);


export const deleteFavProperty = createAsyncThunk(
    "owner/property",
    async (id) => {
        // await axios.delete("owner/property/{id}");

        console.log('property Deleted successfully s');

    }
)



const favoritePropertySlicer = createSlice({
    name: "favorite",
    initialState: { favorite: [], status: " " },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllFavorite.fulfilled, (state, action) => {
            // console.log(action.payload);
            state.favorite = action.payload;
            state.status = "completed";
        });
        builder.addCase(fetchAllFavorite.pending, (state) => {
            state.status = "pending";
        });
        builder.addCase(deleteFavProperty.fulfilled, (state, action) => {
            // console.log(action.payload);
            state.favorite = action.payload;
            state.status = "completed";
        });
        builder.addCase(deleteFavProperty.pending, (state) => {
            state.status = "pending";
        });

    },
});
export const { reducer } = favoritePropertySlicer;