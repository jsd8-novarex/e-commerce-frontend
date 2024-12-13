import client from "../config/axiosConfig";
import { onHandleErrorFromAPI } from "../config/errorFromAPI";
import { AxiosReturn } from "../config/errorFromAPI.type";

// สร้างคำสั่งซื้อและเชื่อมกับ Stripe
export async function placeOrderStripe(customerId: string): AxiosReturn<string> {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Missing credentials. Please log in again.");
    }

    const response = await client.post<{ sessionUrl: string }>(
      `/payment/place-order`,
      { customerId },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    return [response.data.sessionUrl, null];
  } catch (error) {
    return onHandleErrorFromAPI(error);
  }
}

// ยืนยันสถานะการชำระเงิน
export async function verifyPayment({
  orderId,
  success,
}: {
  orderId: string;
  success: boolean;
}): Promise<[null | undefined, null | Error]> {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Missing credentials. Please log in again.");
    }

    await client.post(
      `/payment/verify-payment`,
      { orderId, success },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    return [null, null];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return [undefined, error];
  }
}
