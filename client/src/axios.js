import axios from "axios"

const axiosBase = axios.create({
    baseURL:"http://localhost:5500/api"
})

export default axiosBase;