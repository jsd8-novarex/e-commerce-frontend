import client from "../config/axiosConfig";
import { onHandleErrorFromAPI } from "../config/errorFromAPI";
import { AxiosReturn } from "../config/errorFromAPI.type";

export interface Customer {
  id: string;
  name: string;
  email: string;
  mobile_phone: string;
  date_of_birth: string;
  password: string;
}

// ดึงข้อมูล Customer โดยใช้ email
export async function getCustomerProfile(): AxiosReturn<Customer> {
  try {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    if (!email) {
      throw new Error("Email is missing. Please log in again.");
    }

    if (!token) {
      throw new Error("Authentication token is missing. Please log in again.");
    }

    const response = await client.get<{ data: Customer }>(`/customer/email/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`, // ส่ง Token ใน Header
      },
    });

    return [response.data.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}
