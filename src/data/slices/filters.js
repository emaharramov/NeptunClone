import { createSlice } from "@reduxjs/toolkit";
import data from "../data"

const initialState= data
const filterSlice = createSlice({
    name: 'filterData',
    initialState,
    reducers:{
        filterById: (state, action)=>{
            state= action.payload;
        }
    }
})
export const {filterById}= filterSlice.actions
export const filteres = (state)=> state.filterData
export default filterSlice.reducer