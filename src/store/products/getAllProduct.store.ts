import { create } from "zustand";
import getAllProduct from "../../service/products/getAllProduct";
import { ProductType } from "../../service/products/getProduct.type";

interface GetAllProductStateType {
  data: ProductType | null;
  error: string | null;
  isLoading: boolean;
  fetchProductsData: (filter: { gender?: string }) => Promise<void>;
}

export const useGetAllProductStore = create<GetAllProductStateType>((set) => ({
  data: null,
  error: null,
  isLoading: false,
  fetchProductsData: async (filter: { gender?: string }) => {
    if (filter.gender === undefined) {
      set({ data: null, error: null, isLoading: false });
      return;
    }
    set({ isLoading: true, error: null });
    const [response, error] = await getAllProduct(filter);
    set({ data: response, error: error, isLoading: false });
  },
}));
