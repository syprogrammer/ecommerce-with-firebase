import {configureStore} from "@reduxjs/toolkit"
import cartSlice from './slices/cartSlice'
import searchSlice from "./slices/searchSlice"
import userSlice from "./slices/userSlice"

const store = configureStore({
    reducer:{
        cart:cartSlice,
        search:searchSlice,
        auth:userSlice
    }
})

export default store