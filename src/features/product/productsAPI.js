import { createAsyncThunk } from "@reduxjs/toolkit"

const URL = "https://moon-light-server.vercel.app"

export const getProducts = createAsyncThunk("product/getProducts", async () => {
    const res = await fetch(`${URL}/products`)
    const {data} = await res.json()
    return data
})