import { create } from "zustand";
import getProductById from "../../service/products/getProductById";
import { ProductType } from "../../service/products/getProduct.type";

interface GetProductByIdStateType {
  data: ProductType | null;
  error: string | null;
  fetchProductsData: (productId: string) => Promise<void>;
}

export const useGetProductByIdStore = create<GetProductByIdStateType>((set) => ({
  data: null,
  error: null,
  fetchProductsData: async (productId: string) => {
    const [response, error] = await getProductById(productId);
    set({ data: response, error: error });
  },
}));
