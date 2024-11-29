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

export async function getCustomerById(id: string): AxiosReturn<Customer> {
  try {
    const response = await client.get<{ data: Customer }>(`/customer/${id}`);

    return [response.data.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}
