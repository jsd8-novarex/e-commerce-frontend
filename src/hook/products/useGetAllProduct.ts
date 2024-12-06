import { useEffect } from "react";
import { useGetAllProductStore } from "../../store/products/getAllProduct.store";

function useGetAllProduct() {
  const { data, error, fetchProductsData } = useGetAllProductStore();
  useEffect(() => {
    fetchProductsData();
  }, []);  

  return { data, error };
}

export default useGetAllProduct;
