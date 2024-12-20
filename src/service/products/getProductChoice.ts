// import axios from "axios";
import client from "../../config/axiosConfig";
import { onHandleErrorFromAPI } from "../../config/errorFromAPI";
import { ProductChoiceType } from "./getProduct.type";
import { AxiosReturn } from "../../config/errorFromAPI.type";

async function getProductChoice(
  productId: string,
  choiceId: string,
): AxiosReturn<ProductChoiceType> {
  try {
    const response = await client.get<ProductChoiceType>(
      `/product/${productId}/${choiceId || ""} `,
    );
    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default getProductChoice;
