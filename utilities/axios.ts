import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/api/",
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default axiosInstance;
