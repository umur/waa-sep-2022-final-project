import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {saveNewRequest} from "./RequestSlicer";



export const fetchAllOwnersProperty = createAsyncThunk(
    "property/fetchAll",


    async (id) => {
        //   const result = await axios.get("http://localhost:8080/owners/{id}");
        //   return result.data;
        // id
        const data = [
            {
                id:1,
                picture:"https://s.yimg.com/ny/api/res/1.2/e69g_dqborwvwqTU9de8pg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMyMQ--/https://s.yimg.com/uu/api/res/1.2/SS3GTek3.J98LAMNhRE09Q--~B/aD01Mjc7dz0xMDUwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/house_beautiful_336/60ecb223c28669b241d14842826921c8",
                price: 22000,
                numberOfRooms: 3,
                numberOfBathrooms:2,
                type:"rent",
                location:"California",
                views: 234,
                size: 23333,
                year: 2023,
                constructionYear:2004
            },
            {
                id:2,
                picture:"https://www.safewise.com/app/uploads/featured-image-first-home.jpg",

                price: 232000,
                numberOfRooms: 3,
                numberOfBathrooms:2,
                type:"rent",
                location:"Dc",
                views: 234,
                size: 23333,
                year: 2023,
                constructionYear:2004
            },
            {
                id:3,
                picture:"https://ahpweb.blob.core.windows.net/ahpcomimages/buildingcenters/90/images/4242.jpg",

                price: 652000,
                numberOfRooms: 3,
                numberOfBathrooms:2,
                type:"rent",
                location:"Iowa ",
                views: 234,
                size: 23333,
                year: 2023,
                constructionYear:2004
            },
            {
                id:4,
                picture:"https://www.one-automation.com/wp-content/uploads/2022/02/Fibaro-System-in-Dubai.jpg",

                price: 5320690,
                numberOfRooms: 3,
                numberOfBathrooms:2,
                type:"rent",
                location:"Virginia",
                views: 234,
                size: 23333,
                year: 2023,
            constructionYear:2004
            },

        ];
        return data;
    }
);

export const deleteOwnersProperty = createAsyncThunk(
    "owner/property",
    async (id) => {
        // await axios.delete("owner/property/{id}");
        console.log(id);
    console.log('property Deleted successfully');

    }

)

export const fetchOwnerProperty= createAsyncThunk("property/fetch", async (id) => {
    //   const result = await axios.get("http://localhost:8080/owner/property/{id}");
    //   return result.data;



    const data =  {
            picture1:"https://www.safewise.com/app/uploads/featured-image-first-home.jpg",
            picture2:"https://www.safewise.com/app/uploads/featured-image-first-home.jpg",
            picture3:"https://www.safewise.com/app/uploads/featured-image-first-home.jpg",
            price: 232000,
            numberOfRooms: 3,
            numberOfBathrooms:2,
            type:"rent",
            location:"Dc",
            views: 234,
            size: 23333,
            year: 2023,
            constructionYear:2004
        }
    return data;
});


const ownerPropertySlice = createSlice({
    name: "property",
    initialState: { properties: [], status: " " },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllOwnersProperty.fulfilled, (state, action) => {
            console.log(action.payload);
            state.properties = action.payload;
            state.status = "completed";
        });
        builder.addCase(fetchAllOwnersProperty.pending, (state) => {
            state.status = "pending";
        });
        builder.addCase(fetchOwnerProperty.fulfilled, (state, action) => {
            // console.log("payload" ,action.payload);
            state.properties = action.payload;
            state.status = "completed";
        });
        builder.addCase(fetchOwnerProperty.pending, (state) => {
            state.status = "pending";
        });
        builder.addCase(deleteOwnersProperty.fulfilled,(state) =>{
            state.status = "completed";
            console.log(state.status);
        });
        builder.addCase(deleteOwnersProperty.pending,(state) => {
            state.status = "pending";
            console.log(state.status);
        });


    },
});
export const { reducer } = ownerPropertySlice;