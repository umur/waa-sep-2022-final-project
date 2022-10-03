import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllOwner = createAsyncThunk("owner/fetchAll", async () => {
    // const { data } = await axios.get("properties/")
    const data = [
        {
            name : "Ahmad",
            email : "AhmadAli@miu.edu",
            contact : "Ottumwa",
            address : 20298182018
        },
        {
            name : "Michael",
            email : "MichaelRod@miu.edu",
            contact : "Fairfield",
            address : 6417892938
        },
       ];
    return data;
})

export const deleteOwner = createAsyncThunk("", async (ownerId, thunkApi) => {

    // const response = await carApi.adminOwnerById(ownerId)
    // return response.data



    console.log(`Owner with id ${ownerId} has been deleted.`)
})

const ownersSlice = createSlice({
    name:"owner",
    initialState: {owners: [], status: 'hi'},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllOwner.fulfilled, (state, action) => {
            state.owners = action.payload;
            state.status = 'completed'
        });
        builder.addCase(fetchAllOwner.pending,  (state) => {
            state.status = 'pending'
        })
    }
})

export const { reducer } = ownersSlice;