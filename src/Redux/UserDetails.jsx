import {createSlice} from "@reduxjs/toolkit";
import {LoadState,StoreData,RemoveData} from "../SessionStorage/UserPersonalData";
const SessionKey = "UserData"
const Token = "UserToken"



export const userDetails = createSlice({
	name: "User",
	initialState: {
		userData: LoadState(SessionKey,[]),
		UserToken: LoadState(Token,[])
	},
	reducers: {
		UserPersonalDetails: (state,action) => {
			state.userData = action.payload;
			StoreData(SessionKey,state.userData);
		},
		UserToken: (state,action) => {
			state.UserToken = action.payload;
			StoreData(Token,state.UserToken);
		},
		RemoveDetails: (state) => {
			state.userData = [];
			RemoveData(SessionKey);
			RemoveData(Token);
		}

	}
})

export const {UserPersonalDetails,RemoveDetails,UserToken} = userDetails.actions;
export default userDetails.reducer;