import client from "../config/axiosConfig";
import { onHandleErrorFromAPI } from "../config/errorFromAPI";
import { AxiosReturn } from "../config/errorFromAPI.type";
import { Customer } from "./customertype";

// ดึงข้อมูล Customer โดยใช้ email
export async function getCustomerProfile(): AxiosReturn<Customer> {
  try {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    if (!email || !token) {
      throw new Error("Missing credentials. Please log in again.");
    }

    const response = await client.get<{ data: Customer }>(`/customer/email/${email}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return [response.data.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export async function updatePassword({
  id,
  oldPassword,
  newPassword,
}: {
  id: string;
  oldPassword: string;
  newPassword: string;
}): Promise<[null | undefined, null | Error]> {
  try {
    await client.put(`/customer/${id}/change-password`, { oldPassword, newPassword });
    return [null, null];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return [undefined, error];
  }
}

export async function updateCustomer({
  id,
  data,
}: {
  id: string;
  data: Partial<Customer>;
}): Promise<[null | undefined, null | Error]> {
  try {
    await client.put(`/customer/${id}`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    return [null, null];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return [undefined, error];
  }
}

export async function verifyOldPassword({
  id,
  oldPassword,
}: {
  id: string;
  oldPassword: string;
}): Promise<[null | boolean, null | Error]> {
  try {
    const response = await client.post(
      `/customer/${id}/verify-password`,
      { oldPassword },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      },
    );

    return [response.data.isValid, null];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return [null, new Error("Failed to verify password")];
  }
}
