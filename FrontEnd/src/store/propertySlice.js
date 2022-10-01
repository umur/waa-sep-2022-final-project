import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPersons = createAsyncThunk('properties/fetchAll',
    async () => {
        const result= await axios.get('properties');
        return result.data;
    })

const propertySlice = createSlice({
    name: 'property',
    initialState: { properties: [] , status :''},
    reducers: {

    },
    extraReducers : (builder)=>{
        builder.addCase(fetchPersons.fulfilled, (state,action)=>{
            state.properties = action.payload;
            state.status = 'completed'
        });
        builder.addCase(fetchPersons.pending,(state)=>{
            state.status = 'pending'
        })
    }
})

export default propertySlice;
