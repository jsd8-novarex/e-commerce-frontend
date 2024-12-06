import axios from "axios";
// import client from "../../config/axiosConfig";
import { onHandleErrorFromAPI } from "../../config/errorFromAPI";
import { ProductType } from "./getProduct.type";
import { AxiosReturn } from "../../config/errorFromAPI.type";


async function getProductById(productId: string): AxiosReturn<ProductType> {
    try {
      const response = await axios.get<ProductType>(`http://localhost:4000/product/${productId}`);
      return [response.data, null];
    } catch (error) {
      return onHandleErrorFromAPI(error);
    }
  }

export default getProductById;