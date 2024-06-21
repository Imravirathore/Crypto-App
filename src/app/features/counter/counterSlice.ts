import { createSlice,PayloadAction } from "@reduxjs/toolkit";

// Define a type 
interface CounterState {
  totalCamera: number;
}
// Initial State Define
const initialState:CounterState = {
    totalCamera : 100,
}

// Slices (Reducers)
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        IncrementCamera: (state) => {
            state.totalCamera += 1;
          },
          DecrementCamera: (state) => {
            state.totalCamera -= 1;
          },
    }  
})

export const {IncrementCamera, DecrementCamera,} = counterSlice.actions;

export default counterSlice.reducer;
