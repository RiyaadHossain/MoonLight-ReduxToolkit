import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProductAPI, fetchProductsAPI, removeProductAPI } from "./productsAPI";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: ""
}

// Get Products
export const getProducts = createAsyncThunk("product/getProducts", () => {
    const data = fetchProductsAPI()
    return data
})

// Add Product
export const addProduct = createAsyncThunk("product/addProduct", async (product, thunkAPI) => {
    await addProductAPI(product)
    thunkAPI.dispatch(getProducts())
})

// Remove Product
export const removeProduct = createAsyncThunk("product/removeProduct", (id, thunkAPI) => {
    removeProductAPI(id)
    thunkAPI.dispatch(removeProductReducer(id))
})

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        removeProductReducer: (state, action) => {
            state.products = state.products.filter(product => product._id !== action.payload)
        }
    },
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

export const { removeProductReducer } = productSlice.actions
export default productSlice.reducer