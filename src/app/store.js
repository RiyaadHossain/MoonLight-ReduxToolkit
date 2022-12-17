// import logger from "redux-logger"
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice'
import filterSlice from '../features/filter/filterSlice'
import productSlice from '../features/product/productSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        filter: filterSlice,
        product: productSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()/* .concat(logger)  */// Add new middleware
})