import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://evanapi.birukjira.com/api",
});

export default axiosBase;
