import { create } from "zustand";
import addItemToCart from "../../service/cart/addItemToCart";
import { CartReturnMessageType, ItemToCartPropsType } from "../../service/cart/cart.type";

interface AddItemToCartStoreType {
  data: CartReturnMessageType | null;
  error: string | null;
  loading: boolean;
  addToCart: ({ customerId, productChoiceId, quantity }: ItemToCartPropsType) => Promise<void>;
}

export const addItemToCartStore = create<AddItemToCartStoreType>((set) => ({
  data: null,
  error: null,
  loading: false,
  addToCart: async ({ customerId, productChoiceId, quantity }) => {
    set({ data: null, error: null, loading: true });
    const [response, error] = await addItemToCart({ customerId, productChoiceId, quantity });
    set({ data: response, error: error, loading: false });
  },
}));
