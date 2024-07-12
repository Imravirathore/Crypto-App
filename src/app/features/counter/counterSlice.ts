import { createSlice,PayloadAction } from "@reduxjs/toolkit";

// Define a type 
interface CounterState {
  totalCamera: number;
  userInfoData: userInfoData | null; // Update type to include user info

}

//  Form Data
interface userInfoData {
  name: string;
  gender: string;
  about: string;

}

// Initial State Define
const initialState:CounterState = {
    totalCamera : 100,
    userInfoData : null
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

          // New reducer to set user info
    setUserInfo: (state, action: PayloadAction<userInfoData>) => {
      state.userInfoData = action.payload;
    },
    }  
})

export const {IncrementCamera, DecrementCamera, setUserInfo } = counterSlice.actions;

export default counterSlice.reducer;
