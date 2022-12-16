import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice'
import filterSlice from '../features/filter/filterSlice'
import logger from "redux-logger"

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        filter: filterSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) // Add new middleware
})