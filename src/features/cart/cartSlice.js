import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existProduct = state.cart.filter(product => product._id = action.payload._id)
            if (existProduct) {
                existProduct.quantity = existProduct.quantity + 1
                state.cart = state.cart.filter(product => product._id !== existProduct._id)
                state.cart.push(existProduct)
            } else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }
            
        },
        removeFromCart: (state, action) => {
            const existProduct = state.cart.filter(product => product._id = action.payload._id)
            if (existProduct.quantity > 1) {
                existProduct.quantity = existProduct.quantity - 1
                state.cart = state.cart.filter(product => product._id !== action.payload._id)
                state.cart.push({ ...existProduct, quantity: existProduct.quantity - 1 })
            } else {
                state.cart = state.cart.filter(product => product._id !== action.payload._id)
            }
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer