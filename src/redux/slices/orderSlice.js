import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name:"order",
    initialState:{
        items:[]
    },
    reducers:{
        createOrder:function(state,action){
            state.items.push({...action.payload,qty:1})
        },
        deleteOrder:function(state){
            state.items =[]
        }
    }
})

export const {createOrder,deleteOrder} = orderSlice.actions
export default orderSlice.reducer