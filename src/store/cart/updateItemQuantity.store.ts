import { create } from "zustand";
import updateItemQuantity from "../../service/cart/updateItemQuantity";
import { ItemToCartPropsType } from "../../service/cart/cart.type";
import { CartStoreType } from "./cartStore.type";

interface UpdateItemQuantityStoreType extends CartStoreType {
  updateQuantity: ({ customerId, productChoiceId, quantity }: ItemToCartPropsType) => Promise<void>;
}

export const updateItemQuantityStore = create<UpdateItemQuantityStoreType>((set) => ({
  data: null,
  error: null,
  loading: false,
  updateQuantity: async ({ customerId, productChoiceId, quantity }) => {
    set({ loading: true, data: null, error: null });
    const [response, error] = await updateItemQuantity({ customerId, productChoiceId, quantity });
    set({ data: response, error: error, loading: false });
  },
}));
