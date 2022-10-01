import {createSlice} from "@reduxjs/toolkit";

const initialState = {};

const messageSlice = createSlice(
    {
        name: 'messageSlice',
        initialState: initialState,
        reducers: {
            setMessage(state, action) {
                state.message = action.payload
            },
            clearMessage(state) {
                state.message = ""
            }
        }
    }
)


export default messageSlice
export const {setMessage, clearMessage} = messageSlice.actions
