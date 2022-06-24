import { configureStore } from "@reduxjs/toolkit"
import covid_data_reducers from "../features/dataSlice"

const store = configureStore({
    reducer:{
        covid_data_reducers
    }
});

export default store;