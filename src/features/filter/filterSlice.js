import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stock: false,
    brands: [],
    keyword: ""
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        toggle: (state, action ) => {
            state.stock = !state.stock
        },
        brandToggle: (state, action) => {

        }
    }
})

export default filterSlice.reducer