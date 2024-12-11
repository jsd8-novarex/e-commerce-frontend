import client from "../../config/axiosConfig";
import { onHandleErrorFromAPI } from "../../config/errorFromAPI";
import { AxiosReturn } from "../../config/errorFromAPI.type";
import { CartReturnMessageType } from "./cart.type";

export interface RemoveItemFromCart {
  customerId: string;
  productChoiceId: string;
}

async function removeItemFromCart({
  customerId,
  productChoiceId,
}: RemoveItemFromCart): AxiosReturn<CartReturnMessageType> {
  try {
    const response = await client.post<CartReturnMessageType>("/cart/delete", {
      customerId: customerId,
      productChoiceId: productChoiceId,
    });

    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default removeItemFromCart;
