import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetProductChoiceStore } from "../../store/products/getProductChoice.store";

function useGetProductChoice() {
  const { productId, choiceId } = useParams<{ productId: string, choiceId: string }>(); 
  const { data, error, fetchProductsData } = useGetProductChoiceStore();
  useEffect(() => {
    if (productId && choiceId) {
      fetchProductsData(productId, choiceId);
    }
  }, [productId, choiceId, fetchProductsData]);
  
  return { data, error };
}

export default useGetProductChoice;