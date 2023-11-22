import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
      
    },
    reducers: {
        addItem: function (state, action) {
            const prod = action.payload
            if (state.items.length == 0) {
                state.items.push({
                    ...prod,
                    qty: 1
                })
            } else {
                const checkexisting = state.items.filter((cartitem) => {
                    return cartitem.id == action.payload.id
                })
                console.log(checkexisting)
                if (checkexisting.length ==0) {
                    state.items.push({
                        ...prod,
                        qty: 1
                    })
                }
            }


        },
        increaseQty: function (state, action) {
            state.items.forEach((cartItem) => {
                if (cartItem.id == action.payload && cartItem.qty < 4) {
                    cartItem.qty += 1
                }
            })
           
        },
        decreaseQty: function (state, action) {
            state.items.forEach((cartItem) => {
                if (cartItem.id == action.payload && cartItem.qty > 1) {
                    cartItem.qty -= 1
                }
            })
          
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((cartitem) => {
                return cartitem.id !== action.payload
            })
           
        },
        clearCart: function (state) {
            state.items = []
        },
       

    }
})

export const { addItem, increaseQty, decreaseQty, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer