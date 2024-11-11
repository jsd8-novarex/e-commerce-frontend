import dayjs from "dayjs";
import { create } from "zustand";

export type CartItemType = {
  productId: string;
  productChoiceId: string;
  name: string;
  price: number;
  quantity: number;
  timestamp: string;
};

export type CartStoreType = {
  items: CartItemType[];
  addToCart: (newProduct: CartItemType) => void;
  removeFromCart: (productChoiceId: string) => void;
};

const useCartStore = create<CartStoreType>((set) => ({
  items: [],
  addToCart: (newProduct) =>
    set((state) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.productChoiceId === newProduct.productChoiceId,
      );
      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
          timestamp: dayjs().toISOString(),
        };
        return { items: updatedItems };
      } else {
        return { items: [...state.items, newProduct] };
      }
    }),
  removeFromCart: (productChoiceId) =>
    set((state) => ({
      items: state.items.filter((item) => item.productChoiceId !== productChoiceId),
    })),
}));

export default useCartStore;
