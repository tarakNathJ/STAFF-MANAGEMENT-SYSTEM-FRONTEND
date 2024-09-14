import { createSlice } from "@reduxjs/toolkit";
import { LoadState, StoreData,RemoveData } from "../SessionStorage/UserPersonalData";
const SessionKey = "UserData"



export const userDetails = createSlice({
    name: "User",
    initialState: {
        userData: LoadState(SessionKey,[]),
    },
    reducers: {
        UserPersonalDetails:(state, action)=>{
            state.userData =action.payload;
            StoreData(SessionKey,state.userData);
        },
        RemoveDetails:(state)=>{
            state.userData = [];
            RemoveData(SessionKey);
        }

    }
})

export const {UserPersonalDetails ,RemoveDetails} = userDetails.actions;
export default userDetails.reducer;