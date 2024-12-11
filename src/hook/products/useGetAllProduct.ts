import { useEffect } from "react";
import { useGetAllProductStore } from "../../store/products/getAllProduct.store";

function useGetAllProduct(filter: string) {
  const { data, error, fetchProductsData } = useGetAllProductStore();

  useEffect(() => {
    fetchProductsData(filter);
  }, [fetchProductsData, filter]);

  return { data, error, isLoading };
}

export default useGetAllProduct;
