import { createSlice } from "@reduxjs/toolkit";



export const authSlice = createSlice({
    name: "user",
    initialState: {
        userAuth:{
    isAuthenticated: false,
    uid: "useruid",
},
    userData: { name: "nouser" }
    },
reducers: {
    saveUserAuth: function (state, action) {
        // console.log("authtoken", action.payload)
        state.userAuth = action.payload
    },
    saveUserData: function (state, action) {
        console.log("authtoken", action.payload)
        state.userData = action.payload
    }
}
})

export const { saveUserAuth, saveUserData } = authSlice.actions
export default authSlice.reducer