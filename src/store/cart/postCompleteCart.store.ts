import { create } from "zustand";
import { CartStoreType } from "./cartStore.type";
import postCompleteCart, { PostCompleteCartPropsType } from "../../service/cart/postCompleteCart";

interface PostCompleteCartStoreType extends CartStoreType {
  completeCart: ({ cartId, paymentMethod }: PostCompleteCartPropsType) => Promise<void>;
}

export const postCompleteCartStore = create<PostCompleteCartStoreType>((set) => ({
  data: null,
  error: null,
  loading: false,
  completeCart: async ({ cartId, paymentMethod }) => {
    set({ loading: true, data: null, error: null });
    const [response, error] = await postCompleteCart({ cartId, paymentMethod });
    set({ data: response, error: error, loading: false });
  },
}));
