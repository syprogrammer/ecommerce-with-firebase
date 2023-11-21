import { createSlice } from "@reduxjs/toolkit";



export const authSlice = createSlice({
    name: "user",
    initialState: {
       isAuthenticated:false,
       userData: {}
    },
    reducers: {
        saveUserAuth: function (state, action) {
            // console.log("authtoken", action.payload)
            state.isAuthenticated = action.payload
        },
        saveUserData: function (state, action) {
            console.log("authtoken", action.payload)
            state.userData = action.payload
        }
    }
})

export const { saveUserAuth, saveUserData } = authSlice.actions
export default authSlice.reducer