import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload
        },
        addProduct: (state, action) => {

        },
        updateProduct: (state, action) => {

        },
        deleteProduct: (state, action) => {

        },
    }
})

export const { getProducts, addProduct, updateProduct, deleteProduct } = productSlice.actions
export default productSlice.reducer