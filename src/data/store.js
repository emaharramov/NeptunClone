import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from './slices/filters'
import  sebetSliceReducer  from "./slices/Sebet";
export const store = configureStore({

    reducer:{
        filterUp: filterSliceReducer,
        sebet: sebetSliceReducer
    }
})