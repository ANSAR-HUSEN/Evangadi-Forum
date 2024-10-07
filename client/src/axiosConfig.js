import axios from 'axios';
const axiosBase = axios.create({
    baseURL: 'http://loaclhost:5500/api'
})

export default axiosBase;