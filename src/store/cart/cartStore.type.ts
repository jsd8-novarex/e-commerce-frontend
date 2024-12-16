import { CartReturnMessageType } from "../../service/cart/cart.type";

export interface CartStoreType {
  data: CartReturnMessageType | null;
  error: string | null;
  loading: boolean;
}