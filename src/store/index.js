import { configureStore } from "@reduxjs/toolkit"
import counterSlice from './counterSlice'
import darkModeSlice from './darkMode'
import privacySlice from './privacy'

const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        privacy: privacySlice.reducer,
        darkMode: darkModeSlice.reducer,
    }
});

export default counterStore;

