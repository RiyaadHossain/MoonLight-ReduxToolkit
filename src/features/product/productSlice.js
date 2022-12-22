import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProductAPI, fetchProductsAPI, removeProductAPI } from "./productsAPI";

const initialState = {
    products: [],
    isFetching: false,
    isLoading: false,
    isError: false,
    isPostSuccessful: false,
    isDeleteSuccessful: false,
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
        },
        togglePostSuccessful: (state, action) => {
            state.isPostSuccessful = false
        },
        toggleDeleteSuccessful: (state, action) => {
            state.isDeleteSuccessful = false
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.isFetching = true
            state.error = false
        }).addCase(getProducts.fulfilled, (state, action) => {
            console.log(action.payload);
            state.products = action.payload
            state.isFetching = false
        }).addCase(getProducts.rejected, (state, action) => {
            state.products = []
            state.isError = true
            state.isFetching = false
            state.error = action.error.message
        }).addCase(addProduct.pending, (state, action) => {
            state.isLoading = true
            state.error = false
        }).addCase(addProduct.fulfilled, (state, action) => {
            state.isPostSuccessful = true
            state.isLoading = false
        }).addCase(addProduct.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.error = action.error.message
        }).addCase(removeProduct.pending, (state, action) => {
            state.isLoading = true
            state.error = false
        }).addCase(removeProduct.fulfilled, (state, action) => {
            state.isDeleteSuccessful = true
            state.isLoading = false
        }).addCase(removeProduct.rejected, (state, action) => {
            state.isError = true
            state.error = action.error.message
        })
    },
})

export const { removeProductReducer, togglePostSuccessful, toggleDeleteSuccessful } = productSlice.actions
export default productSlice.reducer