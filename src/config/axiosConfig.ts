import axios from "axios";

const axiosApiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

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
