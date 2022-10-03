import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {useParams} from "react-router-dom";



export const fetchCustomer = createAsyncThunk("customer/fetchAll", async () => {
    //   const result = await axios.get("http://localhost:8080/products");
    //   return result.data;
    const data ={

            name : "Hiwot",
            email : "RetaH@miu.edu",
            contact : "Ottumwa",
            address : 20298182018,
        favoritList:[{
            id: "1",
            name: "Iowa",
            prop:[]
        },{
            id: "2",
            name: "Virginia",
            prop:[]
        }
        ]
        };
    const data2 =[{
            id: "1",
            name: "Iowa",
            prop:[]
        },{
            id: "2",
            name: "Virginia",
            prop:[]
        },
        {
            id: "3",
            name: "California",
            prop:[]
        },
        {
            id: "4",
            name: " New Jersey",
            prop:[]
        },
        ]
    ;
    return data2;

});

const SingleCustomersSlice = createSlice({
    name:"customer",
    initialState: {customers: [], status: 'hiii'},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCustomer.fulfilled, (state, action) => {
            state.customers = action.payload;
            state.status = 'completed'

        });
        builder.addCase(fetchCustomer.pending,  (state) => {
            state.status = 'pending'
        })
    }
})

export const { reducer } = SingleCustomersSlice;