import client from "../../config/axiosConfig";
import { onHandleErrorFromAPI } from "../../config/errorFromAPI";
import { AxiosReturn } from "../../config/errorFromAPI.type";
import { CartReturnMessageType, ItemToCartPropsType } from "./cart.type";

async function updateItemQuantity({
  customerId,
  productChoiceId,
  quantity,
}: ItemToCartPropsType): AxiosReturn<CartReturnMessageType> {
  try {
    const response = await client.post<CartReturnMessageType>("/cart/quantity", {
      customerId: customerId,
      productChoiceId: productChoiceId,
      quantity: quantity,
    });

    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default updateItemQuantity;