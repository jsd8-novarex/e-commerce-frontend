import { useEffect } from "react";
import { postCurrentCartStore } from "../../store/cart/postCurrentCart.store";

function usePostCurrentCart(customerId: string) {
  const { data, error, fetchCurrentCartData} = postCurrentCartStore();

  useEffect(() => {
    if (customerId) {
      fetchCurrentCartData(customerId);
    }
  }, [fetchCurrentCartData, customerId]);

  return { data, error};
}

export default usePostCurrentCart;
