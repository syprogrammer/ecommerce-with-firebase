import { createSlice } from "@reduxjs/toolkit";



export const authSlice = createSlice({
    name: "user",
    initialState: {
        userAuth:{
    isAuthenticated: false,
    uid: "useruid",
},
    userData: { name: "nouser",address:[],cart:[] }
    },
reducers: {
    saveUserAuth: function (state, action) {
        // console.log("authtoken", action.payload)
        state.userAuth = action.payload
    },
    saveUserData: function (state, action) {
        console.log("authtoken", action.payload)
        state.userData = action.payload
    },
    addNewAddress:function(state,action){
        state.userData.address.push(action.payload)
    }
}
})

export const { addNewAddress,saveUserAuth, saveUserData } = authSlice.actions
export default authSlice.reducer