import { create } from "zustand";
import getAllProduct from "../../service/products/getAllProduct";
import { ProductType } from "../../service/products/getProduct.type";

interface GetAllProductStateType {
  data: ProductType | null;
  error: string | null;
  fetchProductsData: (filter: { gender?: string }) => Promise<void>;
}

export const useGetAllProductStore = create<GetAllProductStateType>((set) => ({
  data: null,
  error: null,
  fetchProductsData: async (filter: { gender?: string }) => {
    const [response, error] = await getAllProduct(filter);
    set({ data: response, error: error });
  },
}));
