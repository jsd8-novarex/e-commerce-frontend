import { create } from "zustand";
import getAllProduct from "../../service/products/getAllProduct";
import { ProductType } from "../../service/products/getProduct.type";

interface GetAllProductStateType {
  data: ProductType | null;
  error: string | null;
  fetchProductsData: (gender?: string) => Promise<void>;
}

export const useGetAllProductStore = create<GetAllProductStateType>((set) => ({
  data: null,
  error: null,
  isLoading: false,
  fetchProductsData: async (gender?: string) => {
    if (gender === undefined) {
      set({ data: null, error: null });
      return;
    }
    set({ error: null });
    const [response, error] = await getAllProduct(gender);
    set({ data: response, error: error });
  },
}));
