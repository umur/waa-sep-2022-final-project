import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMonthlyCustomer = createAsyncThunk("", async() => {
    const monthlyRegCustomers = [0,4,2,4,0,7,0,15];
    return monthlyRegCustomers;
})

// export const fetchMonthlyProperty = createAsyncThunk("", async() => {
//     const monthlyRegProperty = [0,9,1,2,9,0,5];
//     return monthlyRegProperty;
// })


const adminCustomerGraphSlice = createSlice({
    name:"customer",
    initialState: {monthlyRegCustomers: [], status: 'hi'},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMonthlyCustomer.fulfilled, (state, action) => {
            state.monthlyRegCustomers = action.payload;
            state.status = 'completed'
            
        });
        builder.addCase(fetchMonthlyCustomer.pending,  (state) => {
            state.status = 'pending'
        });

    }
})

export const { reducer } = adminCustomerGraphSlice;