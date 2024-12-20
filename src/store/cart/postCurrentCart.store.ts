import { create } from "zustand";
import { CartType } from "../../service/cart/cart.type";
import postCurrentCart from "../../service/cart/postCurrentCart";

interface PostCurrentCartStateType {
  data: CartType | null;
  error: string | null;
  loading: boolean;
  fetchCurrentCartData: (customerId: string) => Promise<void>;
  removeData: () => void;
}

export const postCurrentCartStore = create<PostCurrentCartStateType>((set) => ({
  data: null,
  error: null,
  loading: false,
  fetchCurrentCartData: async (customerId) => {
    set((state) => ({ ...state, error: null, loading: true }));
    const [response, error] = await postCurrentCart(customerId);

    if (!customerId) {
      set({ data: null, error: error, loading: false });
    }

    set({ data: response, error: error, loading: false });
  },
  removeData: () => {
    set({ data: null, error: null, loading: false });
  },
}));
