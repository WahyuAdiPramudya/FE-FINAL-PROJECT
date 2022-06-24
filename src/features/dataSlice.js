import { createSlice } from "@reduxjs/toolkit";
import data from "../utils/constants/provinces"
const dataSlice = createSlice({
    name:"Covid Slice",
    initialState: {
        global_covid:[],
        dashboard_url:"",
        covid_provinsi:data.provinces
    },
    reducers:{
        update_global_covid(state,action){
            state.global_covid = action.payload;
        },
        update_dashboard_url(state,action){
            state.dashboard_url = action.payload;
        },
        update_covid_provinsi(state,action){
            state.covid_provinsi = action.payload;
        },
    }
});

const covid_data_reducers = dataSlice.reducer;
const {update_global_covid,update_dashboard_url,update_covid_provinsi} = dataSlice.actions;

export default covid_data_reducers;
export {update_global_covid,update_dashboard_url,update_covid_provinsi};