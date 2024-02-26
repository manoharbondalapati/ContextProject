import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './Counter';

export const Store= configureStore({
    reducer:{
        CounterReducer,
    }
})