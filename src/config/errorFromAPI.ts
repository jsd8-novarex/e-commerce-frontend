import axios from "axios";
import { ApiResponseErrorType } from "./errorFromAPI.type";
import { statusMessageErrorApi } from "../helpers/handleErrorApi";

export type OnHandleErrorFromAPIReturnType = [null, string];

const DEFAULT_ERROR_MESSAGE = "An unexpected error occurred. Please try again later.";

export const onHandleErrorFromAPI = (error: unknown): OnHandleErrorFromAPIReturnType => {
  if (axios.isCancel(error)) {
    return [null, "Request was cancelled"];
  }
  if (axios.isAxiosError<ApiResponseErrorType>(error)) {
    const status = error.response?.status ?? 503;

    if (status in statusMessageErrorApi) {
      return [null, statusMessageErrorApi[status].message];
    } else {
      const responseMessage = error.response?.data.error?.message ?? DEFAULT_ERROR_MESSAGE;
      return [null, responseMessage];
    }
  } else {
    return [null, (error as Error).message || DEFAULT_ERROR_MESSAGE];
  }
};
