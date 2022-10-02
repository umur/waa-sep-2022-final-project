import { createSlice } from "@reduxjs/toolkit";



const initialState={id:0};

const IdSlice=createSlice({
name:'Id',
initialState:initialState,
reducers:{
updateId(state,data){
    console.log(state.id)
state.id=data.payload;
console.log(state.id)
}
}
})

export default IdSlice