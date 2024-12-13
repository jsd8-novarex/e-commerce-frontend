import { create } from "zustand";
import getProductChoice from "../../service/products/getProductChoice";
import { ProductChoiceType } from "../../service/products/getProduct.type";

interface GetProductChoiceStateType {
  data: ProductChoiceType | null;
  error: string | null;
  fetchProductsData: (productId: string, choiceId: string) => Promise<void>;
}

export const useGetProductChoiceStore = create<GetProductChoiceStateType>((set) => ({
  data: null,
  error: null,
  fetchProductsData: async (productId: string, choiceId: string) => {
    const [response, error] = await getProductChoice(productId, choiceId);
    set({ data: response, error: error });
  },
}));
