import client from "../../config/axiosConfig";
import { onHandleErrorFromAPI } from "../../config/errorFromAPI";
import { AxiosReturn } from "../../config/errorFromAPI.type";
import { CartReturnMessageType } from "./cart.type";

export interface PostCompleteCartPropsType {
  cartId: string;
  paymentMethod: string;
}

async function postCompleteCart({
  cartId,
  paymentMethod,
}: PostCompleteCartPropsType): AxiosReturn<CartReturnMessageType> {
  try {
    const response = await client.post<CartReturnMessageType>("/cart/payment", {
      cartId,
      paymentMethod,
    });
    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default postCompleteCart;
