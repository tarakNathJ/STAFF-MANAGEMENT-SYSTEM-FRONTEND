import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserDetails from "./UserDetails";
import UserAccountType from "./UserAccountType";

const CombineRedusers = combineReducers({

        profileInfo:UserDetails,
        SelectBy:UserAccountType 
})

export const  store = configureStore({
        reducer:CombineRedusers,
})
