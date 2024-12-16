import { create } from "zustand";
import removeItemFromCart, {
  RemoveItemFromCartPropsType,
} from "../../service/cart/removeItemFromCart";
import { CartStoreType } from "./cartStore.type";

interface RemoveItemFromCartStoreType extends CartStoreType {
  removeItem: ({ customerId, productChoiceId }: RemoveItemFromCartPropsType) => Promise<void>;
}

export const removeItemFromCartStore = create<RemoveItemFromCartStoreType>((set) => ({
  data: null,
  error: null,
  loading: false,
  removeItem: async ({ customerId, productChoiceId }) => {
    set({ loading: true, data: null, error: null });
    const [response, error] = await removeItemFromCart({ customerId, productChoiceId });
    set({ data: response, error: error, loading: false });
  },
}));
