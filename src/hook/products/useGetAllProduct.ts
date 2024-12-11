import { useEffect } from "react";
import { useGetAllProductStore } from "../../store/products/getAllProduct.store";

function useGetAllProduct(filter: { gender?: string }) {
  const { data, error, fetchProductsData } = useGetAllProductStore();
  useEffect(() => {
    fetchProductsData(filter);
  }, [fetchProductsData, filter]);

  return { data, error };
}

export default useGetAllProduct;
