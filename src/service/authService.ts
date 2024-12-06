import client from "../config/axiosConfig";
import axios from "../config/axiosConfig";

// Register User
export const registerCustomer = async (data: {
  email: string;
  password1: string;
  password2: string;
}) => {
  const response = await axios.post("/register", data);
  return response.data; // { token }
};

// Login User
export const loginCustomer = async (data: { email: string; password: string }) => {
  const response = await axios.post("/login", data);
  return response.data; // { token }
};

export async function login(email: string, password: string) {
  const response = await client.post("/auth/login", { email, password });
  const { token, userEmail } = response.data;
  localStorage.setItem("token", token);
  localStorage.setItem("email", userEmail);
}
