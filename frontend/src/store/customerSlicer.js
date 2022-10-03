import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchAllCustomer = createAsyncThunk("customer/fetchAll", async () => {
    // const { data } = await axios.get("properties/")
    const data = [
        {
            name : "Hiwot",
            email : "RetaH@miu.edu",
            contact : "Ottumwa",
            address : 20298182018
        },
        {
            name : "Hamida",
            email : "hammaqso@miu.edu",
            contact : "Fairfield",
            address : 6417892938
        },
        {
            name : "Jamila",
            email : "jamilamaqsoudi@miu.edu",
            contact : "Maryland",
            address : 20298182018
        },
        {
            name : "John",
            email : "doejohn@miu.edu",
            contact : "Burlington",
            address : 6417892938
        },
        {
            name : "Sara",
            email : "sarasmith@miu.edu",
            contact : "Iowa",
            address : 6417892938
        },
        {
            name : "Salam",
            email : "Salam@miu.edu",
            contact : "Fairfield",
            address : 9282781929
        },
        {
            name : "Harriet",
            email : "harriet@miu.edu",
            contact : "Texas",
            address : 8273789279
        },
        {
          name : "Ahmed",
          email : "ahmedAli@miu.edu",
          contact : "Virginia",
          address : 827129992
      }];
    return data;
});


export const deleteCustomer = createAsyncThunk('', async (customerId) => {
    console.log(`customer id ${customerId} is deleted`);
})

const customersSlice = createSlice({
    name:"customer",
    initialState: {customers: [], status: 'hi'},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllCustomer.fulfilled, (state, action) => {
            state.customers = action.payload;
            state.status = 'completed'
            
        });
        builder.addCase(fetchAllCustomer.pending,  (state) => {
            state.status = 'pending'
        })
    }
})

export const { reducer } = customersSlice;