import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsAPI";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: ""
}


export const getProducts = createAsyncThunk("product/getProducts", async () => {
    const data = fetchProducts()
    return data
})

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.isLoading = true
            state.error = false
        }).addCase(getProducts.fulfilled, (state, action) => {
            console.log(action.payload);
            state.products = action.payload
            state.isLoading = false
        }).addCase(getProducts.rejected, (state, action) => {
            state.products = []
            state.isError = true
            state.error = action.error.message
        })
    },
})

// export const { getProducts, addProduct, updateProduct, deleteProduct } = productSlice.actions
export default productSlice.reducer