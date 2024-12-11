import client from "../config/axiosConfig";
import { onHandleErrorFromAPI } from "../config/errorFromAPI";
import { AxiosReturn } from "../config/errorFromAPI.type";
import { CustomerAddress } from "./customerAddressType";

// ดึงข้อมูลที่อยู่ลูกค้าทั้งหมด
export async function getAllAddresses(): AxiosReturn<CustomerAddress[]> {
  try {
    const response = await client.get<{ data: CustomerAddress[] }>("/customeraddress", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return [response.data.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

// ดึงข้อมูลที่อยู่ของลูกค้าตาม customer_id
export async function getAddressesByCustomerId(customerId: string): AxiosReturn<CustomerAddress[]> {
  try {
    const response = await client.get<{ data: CustomerAddress[] }>(
      `/customeraddress/${customerId}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      },
    );
    return [response.data.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

// สร้างที่อยู่ใหม่
export async function createAddress(
  addressData: Partial<CustomerAddress>,
): AxiosReturn<CustomerAddress> {
  try {
    const response = await client.post<{ data: CustomerAddress }>("/customeraddress", addressData, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return [response.data.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

// อัปเดตที่อยู่ของลูกค้า
// อัปเดตที่อยู่ของลูกค้าตาม customer_id
export async function updateAddress({
  customer_id,
  data,
}: {
  customer_id: string;
  data: Partial<CustomerAddress>;
}): AxiosReturn<CustomerAddress> {
  try {
    const response = await client.put<{ data: CustomerAddress }>(
      `/customeraddress/${customer_id}`,
      data,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      },
    );
    return [response.data.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

// ลบที่อยู่ของลูกค้า
export async function deleteAddress(id: string): AxiosReturn<null> {
  try {
    await client.delete(`/customeraddress/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return [null, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}
const customerAddressService = {
  getAllAddresses,
  getAddressesByCustomerId,
  createAddress,
  updateAddress,
  deleteAddress,
};

export default customerAddressService;
