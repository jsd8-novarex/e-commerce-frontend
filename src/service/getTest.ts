import client from "../config/axiosConfig";
import { onHandleErrorFromAPI } from "../config/errorFromAPI";
import { AxiosReturn } from "../config/errorFromAPI.type";

export interface GetTestType {
  message: string;
}

async function getTest(): AxiosReturn<GetTestType> {
  try {
    const response = await client.get<GetTestType>("/customer");
    return [response.data, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

export default getTest;
