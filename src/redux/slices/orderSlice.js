import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name:"order",
    initialState:{
        items:[],
        address:{name:"",mobilenumber:"",address:""},
        totalPrice:0,
    },
    reducers:{
        createOrder:function(state,action){
            state.items.push({...action.payload,qty:1})
        },
        setOrderAddress:function(state,action){
            state.address=action.payload
        },
        deleteOrder:function(state){
            state.items =[]
        }
    }
})

export const {setOrderAddress,createOrder,deleteOrder} = orderSlice.actions
export default orderSlice.reducer