import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPersons = createAsyncThunk('properties/fetchAll',
    async () => {
        const result= await axios.get('categories');
        return result.data;
    })

const categorySlice = createSlice({
    name: 'category',
    initialState: { categories: [] , status :''},
    reducers: {},
    extraReducers : (builder)=>{
        builder.addCase(fetchPersons.fulfilled, (state,action)=>{
            state.categories = action.payload;
            state.status = 'completed'
        });
        builder.addCase(fetchPersons.pending,(state)=>{
            state.status = 'pending'
        })
    }
})

export default categorySlice;
