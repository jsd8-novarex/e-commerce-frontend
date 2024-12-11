import { memo, useMemo } from "react";
import { isFormatPrice } from "../../helpers/utils";
import CartItemActionsMemo from "./CartItemActions";
import { CartItemType } from "../../service/cart/cart.type";
import useGetAllProduct from "../../hook/products/useGetAllProduct";

type ProductInCartPropsType = {
  item: CartItemType;
};

function ProductInCart({ item }: ProductInCartPropsType) {
  const { data } = useGetAllProduct("");

  const productData = useMemo(() => {
    return data?.products.find((product) =>
      product.product_choices.some((choice) => choice._id === item.product_choice_id),
    );
  }, [data, item.product_choice_id]);

  const productChoice = useMemo(() => {
    return productData?.product_choices.find((choice) => choice._id === item.product_choice_id);
  }, [productData, item.product_choice_id]);

  return (
    <div className='relative flex justify-between border-b-2 px-2'>
      <div className='w-32'>
        <img src={item.image_url} />
      </div>
      <div className='flex w-48 items-center'>
        <div className='flex flex-col gap-y-1'>
          <h4 className='text-md font-bold'>{item && item.product_name}</h4>
          <p>Color: {item.color}</p>
          <p>{item && isFormatPrice(item.price, 0)}</p>
        </div>
      </div>
      <CartItemActionsMemo item={item} productChoice={productChoice} />
    </div>
  );
}

const ProductInCartMemo = memo(ProductInCart);
export default ProductInCartMemo;
