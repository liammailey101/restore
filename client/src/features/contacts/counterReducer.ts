import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  data: number;
};

const initialState: CounterState = {
  data: 42
};

export const counterSlice = createSlice({
  name: 'counter',
    initialState,
    reducers: { 
        increment: (state, action) => {
            state.data += action.payload || 1;
        },
        decrement: (state, action) => {
            state.data -= action.payload || 1;
        }
    }
})

export const {increment, decrement} = counterSlice.actions;