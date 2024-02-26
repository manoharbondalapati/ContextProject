import {createSlice} from '@reduxjs/toolkit'

 const Counter=createSlice(
    {
        name:'counter',
        initialState:{counter:0},
        reducers:
        {
            increament :(state)=>
            {
                state.counter += 1;
            },
            decreament:(state)=>
            {
                state.counter -= 1;
            },
        },
    }
)
export const {increament,decreament}=Counter.actions;
export default Counter.reducer;