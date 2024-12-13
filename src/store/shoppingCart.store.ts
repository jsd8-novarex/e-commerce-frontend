import dayjs from "dayjs";
import { create } from "zustand";

export type ShoppingCartType = {
  id: string;
  customer_id: string;
  status: string;
  payment_method: string;
  payment_status: string;
  payment_timestamp: string;
  items: CartProductItemType[];
  create_timestamp: string;
  last_updated_timestamp: string;
  creator_id: string;
  last_op_id: string;
  tram_status: boolean;
};

export type CartProductItemType = {
  id: string;
  cart_id: string;
  product_choice_id: string;
  quantity: number;
  create_timestamp: string;
  last_updated_timestamp: string;
  creator_id: string;
  last_op_id: string;
  selectedColor: string | null;
};

export type ShoppingCartStoreType = {
  cart: ShoppingCartType | null;
  addProductToCart: (newItem: CartProductItemType) => void;
  updateProductQuantity: (productChoiceId: string, quantity: number) => void;
  removeProductFromCart: (productChoiceId: string) => void;
};

const useShoppingCartStore = create<ShoppingCartStoreType>((set) => ({
  cart: {
    id: "",
    customer_id: "",
    status: "pending",
    payment_method: "",
    payment_status: "unpaid",
    payment_timestamp: "",
    items: [],
    create_timestamp: dayjs().toISOString(),
    last_updated_timestamp: dayjs().toISOString(),
    creator_id: "",
    last_op_id: "",
    tram_status: false,
  },
  addProductToCart: (newItem) =>
    set((state) => {
      const existingItemIndex = state.cart?.items.findIndex(
        (item) => item.product_choice_id === newItem.product_choice_id,
      );

      if (existingItemIndex !== undefined && existingItemIndex !== -1 && state.cart) {
        const updatedItems = [...state.cart.items];
        const existingItem = updatedItems[existingItemIndex];
        updatedItems[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
          last_updated_timestamp: dayjs().toISOString(),
          last_op_id: newItem.last_op_id,
        };

        return {
          cart: {
            ...state.cart,
            items: updatedItems,
            last_updated_timestamp: dayjs().toISOString(),
            last_op_id: newItem.last_op_id,
          },
        };
      } else if (state.cart) {
        return {
          cart: {
            ...state.cart,
            items: [
              ...state.cart.items,
              {
                ...newItem,
                create_timestamp: dayjs().toISOString(),
                last_updated_timestamp: dayjs().toISOString(),
                last_op_id: newItem.last_op_id,
              },
            ],
            last_updated_timestamp: dayjs().toISOString(),
            last_op_id: newItem.last_op_id,
          },
        };
      }
      return state;
    }),
  updateProductQuantity: (productChoiceId, quantity) =>
    set((state) => {
      if (state.cart) {
        const updatedItems = state.cart.items.map((item) =>
          item.product_choice_id === productChoiceId
            ? { ...item, quantity: quantity, last_updated_timestamp: dayjs().toISOString() }
            : item,
        );

        return {
          cart: {
            ...state.cart,
            items: updatedItems,
            last_updated_timestamp: dayjs().toISOString(),
          },
        };
      }
      return state;
    }),
  removeProductFromCart: (productChoiceId) =>
    set((state) => ({
      cart: state.cart
        ? {
            ...state.cart,
            items: state.cart.items.filter((item) => item.product_choice_id !== productChoiceId),
            last_updated_timestamp: dayjs().toISOString(),
          }
        : null,
    })),
}));

export default useShoppingCartStore;
