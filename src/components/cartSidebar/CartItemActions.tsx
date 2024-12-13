import { memo, useEffect, useState } from "react";
import InputNumber from "../input/InputNumber";
import { postCurrentCartStore } from "../../store/cart/postCurrentCart.store";
import { removeItemFromCartStore } from "../../store/cart/removeItemFromCart.store";
import { updateItemQuantityStore } from "../../store/cart/updateItemQuantity.store";
import { ProductChoiceType } from "../../service/products/getProduct.type";
import { CartItemType } from "../../service/cart/cart.type";
import { useCustomerStore } from "../../store/customers/customerStore";

type ProductInCartPropsType = {
  item: CartItemType;
  productChoice: ProductChoiceType | undefined;
};

function CartItemActions({ item, productChoice }: ProductInCartPropsType) {
  const { customer } = useCustomerStore();
  const { removeItem } = removeItemFromCartStore();
  const { updateQuantity } = updateItemQuantityStore();
  const { fetchCurrentCartData } = postCurrentCartStore();
  const [inputValue, setInputValue] = useState<string>(item.quantity.toString());

  const customerId = customer ? customer._id : "";
  useEffect(() => {
    setInputValue(item.quantity.toString());
  }, [item.quantity]);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleBlur = async () => {
    let newQuantity = parseInt(inputValue, 10);

    if (!newQuantity || newQuantity < 1) {
      newQuantity = 1;
    }
    if (productChoice?.quantity && newQuantity > productChoice.quantity) {
      newQuantity = productChoice.quantity;
    }

    setInputValue(newQuantity.toString());
    await updateQuantity({
      customerId,
      productChoiceId: item.product_choice_id,
      quantity: newQuantity,
    });
    await fetchCurrentCartData(customerId);
  };

  const handleRemove = async () => {
    await removeItem({ customerId, productChoiceId: item.product_choice_id });
    await fetchCurrentCartData(customerId);
  };

  return (
    <div className='flex w-32 flex-col items-center justify-center gap-2 px-2'>
      <InputNumber
        value={inputValue}
        min={1}
        max={productChoice?.quantity}
        onChange={handleQuantityChange}
        onBlur={handleBlur}
      />
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}

const CartItemActionsMemo = memo(CartItemActions);
export default CartItemActionsMemo;
