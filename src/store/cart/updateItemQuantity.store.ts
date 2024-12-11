import { create } from "zustand";
import { CartReturnMessageType, ItemToCartPropsType } from "../../service/cart/cart.type";
import updateItemQuantity from "../../service/cart/updateItemQuantity";

interface UpdateItemQuantityStoreType {
  data: CartReturnMessageType | null;
  error: string | null;
  loading: boolean;
  updateQuantity: ({ customerId, productChoiceId, quantity }: ItemToCartPropsType) => Promise<void>
}

export const updateItemQuantityStore = create<UpdateItemQuantityStoreType>((set) => ({
  data: null,
  error: null,
  loading: false,
  updateQuantity: async ({ customerId, productChoiceId, quantity }) => {
    set({ loading: true, data: null, error: null });
    const [response, error] = await updateItemQuantity({ customerId, productChoiceId, quantity })
    set({ data: response, error: error, loading: false });
  }
}))