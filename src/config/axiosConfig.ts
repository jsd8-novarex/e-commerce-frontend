import axios from "axios";
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";

const axiosApiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Interceptor สำหรับเพิ่ม Token ใน Header
axiosApiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      const jwtData = jwtDecode<{ id: string; iat: number; exp: number }>(token);
      const isExpired = dayjs.unix(jwtData.exp).diff(dayjs()) < 1;

      if (!isExpired) {
        config.headers["Authorization"] = `Bearer ${token}`;
        return config;
      } else {
        localStorage.removeItem("token");
      }
      return config;
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
    return response;
  },
  (error) => {
    console.error("Error from API:", error.response?.data || error.message);
    return Promise.reject(error);
  },
);
const client = axiosApiInstance;
export default client;
