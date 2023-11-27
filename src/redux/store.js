import {configureStore} from "@reduxjs/toolkit"
import cartSlice from './slices/cartSlice'
import searchSlice from "./slices/searchSlice"
import userSlice from "./slices/userSlice"
import orderSlice from "./slices/orderSlice"

const store = configureStore({
    reducer:{
        cart:cartSlice,
        search:searchSlice,
        auth:userSlice,
        order:orderSlice
    }
})

export default store