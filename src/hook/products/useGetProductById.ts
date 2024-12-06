import { useEffect } from "react";
import { useGetProductByIdStore } from "../../store/products/getProductById.store";
import { useParams } from "react-router-dom";

function useGetAllProduct() {
  const { productId } = useParams<{ productId: string }>();
  const { data, error, fetchProductsData } = useGetProductByIdStore();
  useEffect(() => {
    if (productId) {
      fetchProductsData(productId);
    }
  }, [productId, fetchProductsData]);

  return { data, error };
}

export default useGetAllProduct;
