import { createSlice } from "@reduxjs/toolkit";



export const authSlice = createSlice({
    name: "user",
    initialState: {
        userAuth: {
            token:undefined,
        },
       userData: undefined
    },
    reducers: {
        saveToken: function (state, action) {
            // console.log("authtoken", action.payload)
            state.userAuth = action.payload
        },
        saveUserData: function (state, action) {
            console.log("authtoken", action.payload)
            state.userData = action.payload
        }
    }
})

export const { saveToken, saveUserData } = authSlice.actions
export default authSlice.reducer