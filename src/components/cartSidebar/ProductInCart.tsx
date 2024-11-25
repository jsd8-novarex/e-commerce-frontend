import { CartProductItemType } from "../../store/shoppingCart.store";
import { product_list } from "../../constraints/PRODUCT_DATA_V2";
import { ShowImageProductData2 } from "../../constraints/SHOWIMAGE_DATA";
import { isFormatPrice } from "../../helpers/utils";
import CartItemActions from "./CartItemActions";

type ProductInCartPropsType = {
  item: CartProductItemType;
};

function ProductInCart({ item }: ProductInCartPropsType) {
  const productData = product_list.find((product) =>
    product.product_choice.some((choice) => choice.id === item.product_choice_id),
  );

  const productChoice = productData?.product_choice.find(
    (choice) => choice.id === item.product_choice_id,
  );

  const imageProduct = ShowImageProductData2.find(
    (image) => image.product_choice_id === item.product_choice_id,
  );

  return (
    <div className='relative flex justify-between border-b-2 px-2'>
      <div className='w-32'>
        <img src={imageProduct?.url} />
      </div>
      <div className='flex w-48 items-center'>
        <div className='flex flex-col gap-y-1'>
          <h4 className='text-md font-bold'>{productData && productData.name}</h4>
          <h4 className='text-md font-semibold'>{productChoice && productChoice.color}</h4>
          <p>{productChoice && isFormatPrice(productChoice.price, 0)}</p>
        </div>
      </div>
      <CartItemActions item={item} productChoice={productChoice} />
    </div>
  );
}
export default ProductInCart;
