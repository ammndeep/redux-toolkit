import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: false,
    reducers: {
        toggleDark: (state) => {
            return state = !state;
        }
    }
});
export const darkModeActions = darkModeSlice.actions;
export default darkModeSlice;