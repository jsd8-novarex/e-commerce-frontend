import { useEffect, useState } from "react";
import useShoppingCartStore, { CartProductItemType } from "../../store/shoppingCart.store";
import { ProductChoiceType } from "../../constraints/PRODUCT_DATA_V2";
import InputNumber from "../input/InputNumber";

type ProductInCartPropsType = {
  item: CartProductItemType;
  productChoice: ProductChoiceType | undefined;
};

function CartItemActions({ item, productChoice }: ProductInCartPropsType) {
  const { removeProductFromCart, updateProductQuantity } = useShoppingCartStore();
  const [inputValue, setInputValue] = useState<string>(item.quantity.toString());

  useEffect(() => {
    setInputValue(item.quantity.toString());
  }, [item.quantity]);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleBlur = () => {
    let newQuantity = parseInt(inputValue, 10);

    if (!newQuantity || newQuantity < 1) {
      newQuantity = 1;
    }
    if (productChoice?.quantity && newQuantity > productChoice.quantity) {
      newQuantity = productChoice.quantity;
    }

    setInputValue(newQuantity.toString());
    updateProductQuantity(item.product_choice_id, newQuantity);
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
      <button onClick={() => removeProductFromCart(item.product_choice_id)}>Remove</button>
    </div>
  );
}

export default CartItemActions;
