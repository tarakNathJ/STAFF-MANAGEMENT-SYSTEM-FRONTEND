import { createSlice } from "@reduxjs/toolkit";
import { LoadState, StoreData,RemoveData } from "../SessionStorage/UserPersonalData";
const SessionKey = "Type"



export const UserAccountType = createSlice({
    name: "SELECT_BY",
    initialState: {
        userData: LoadState(SessionKey,"ProfileInformetion"),
    },
    reducers: {
        UserSelectedDetails:(state, action)=>{
            state.userData =action.payload;
           
            StoreData(SessionKey,state.userData);
        },
        RemoveSelectedDetails:(state)=>{
            state.userData = [];
            RemoveData(SessionKey);
        }

    }
})

export const {UserSelectedDetails ,RemoveSelectedDetails} = UserAccountType.actions;
export default UserAccountType.reducer;