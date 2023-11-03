import { createSlice } from "@reduxjs/toolkit";



const searchSlice = createSlice({
    name: "searchSlice",
    initialState: {
        isSearchContainer: false
    },
    reducers: {
        searchToggle: function (state) {
            state.isSearchContainer = !isSearchContainer
        },
        openSearchContainer: function (state) {
            state.isSearchContainer = true
        },
        closeSearchContainer: function (state) {
            state.isSearchContainer = false
        }
    }
})

export const {searchToggle,openSearchContainer,closeSearchContainer} = searchSlice.actions
export default searchSlice.reducer