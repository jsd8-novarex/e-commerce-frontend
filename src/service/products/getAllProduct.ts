// import axios from "axios";
import client from "../../config/axiosConfig";
import { onHandleErrorFromAPI } from "../../config/errorFromAPI";
import { ProductType } from "./getProduct.type";
import { AxiosReturn } from "../../config/errorFromAPI.type";


async function getAllProduct(filter: { gender?: string }): AxiosReturn<ProductType> {
  try {
    // สร้าง query string ถ้ามี gender
    const queryParams = filter.gender ? `?gender=${filter.gender}` : '';
    const response = await client.get<ProductType>(`/product${queryParams}`);
    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default getAllProduct;
