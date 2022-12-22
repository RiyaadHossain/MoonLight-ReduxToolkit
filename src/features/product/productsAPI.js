import axios from "../../api/axios.config"

export const fetchProducts = async () => {
    const { data } = await axios.get("/products")
    return data.data
}
