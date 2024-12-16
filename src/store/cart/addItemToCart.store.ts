import { create } from "zustand";
import addItemToCart from "../../service/cart/addItemToCart";
import { ItemToCartPropsType } from "../../service/cart/cart.type";
import { CartStoreType } from "./cartStore.type";

interface AddItemToCartStoreType extends CartStoreType {
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
