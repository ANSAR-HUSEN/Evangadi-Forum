import axios from "axios";

const baseUrl = axios.create({
  // baseURL: "http://localhost:4000/api",
  baseURL: "https://forumapi.samiyayusuf.com/api",
});

export default baseUrl;