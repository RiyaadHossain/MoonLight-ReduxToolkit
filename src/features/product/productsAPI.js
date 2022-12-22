import axios from "../../api/axios.config"

// Get Products
export const fetchProductsAPI = async () => {
    const { data } = await axios.get("/products")
    return data.data
}

// Add Product
export const addProductAPI = async (product) => {
    await axios.post("/product", product)
}

// Update Product
export const updateProductAPI = async ({id, product}) => {
    await axios.patch(`/product/${id}`, product)
}

// Remove Product
export const removeProductAPI = async (id) => {
    await axios.delete(`/product/${id}`)
}
