import { create } from "zustand";
import getAllProduct from "../../service/products/getAllProduct";
import { ProductType } from "../../service/products/getProduct.type";

interface GetAllProductStateType {
  data: ProductType | null;
  error: string | null;
  fetchProductsData: () => Promise<void>;
}

export const useGetAllProductStore = create<GetAllProductStateType>((set) => ({
  data: null,
  error: null,
  fetchProductsData: async () => {
    const [response, error] = await getAllProduct();
    set({ data: response, error: error });
  },
}));
