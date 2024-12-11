import { create } from "zustand";
import { CartReturnMessageType } from "../../service/cart/cart.type";
import removeItemFromCart, { RemoveItemFromCart } from "../../service/cart/removeItemFromCart";

interface RemoveItemFromCartStoreType {
  data: CartReturnMessageType | null;
  error: string | null;
  loading: boolean;
  removeItem: ({ customerId, productChoiceId }: RemoveItemFromCart) => Promise<void>;
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
