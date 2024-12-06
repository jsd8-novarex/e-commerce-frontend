import axios from "axios";

const axiosApiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Interceptor สำหรับเพิ่ม Token ใน Header
axiosApiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Interceptor สำหรับ Response Error
axiosApiInstance.interceptors.response.use(
  (response) => {
    console.log("Response from API:", response);
    return response;
  },
  (error) => {
    console.error("Error from API:", error.response?.data || error.message);
    return Promise.reject(error);
  },
);
const client = axiosApiInstance;
export default client;
