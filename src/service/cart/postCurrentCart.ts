import client from "../../config/axiosConfig";
import { onHandleErrorFromAPI } from "../../config/errorFromAPI";
import { AxiosReturn } from "../../config/errorFromAPI.type";
import { CartType } from "./cart.type";

async function postCurrentCart(customerId: string): AxiosReturn<CartType> {
  try {
    const response = await client.post<CartType>("/cart", {
      customerId: customerId,
    });

    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default postCurrentCart;
