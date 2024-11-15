import { CartProductItemType } from "../store/shoppingCart.store";
import { product_list } from "../constraints/PRODUCT_DATA_V2";
import { ShowImageProductData2 } from "../constraints/SHOWIMAGE_DATA";

type ProductInCartPropsType = {
  item: CartProductItemType;
  removeProductFromCart: (productChoiceId: string) => void
};

function ProductInCart({item, removeProductFromCart}:ProductInCartPropsType) {
    const productData = product_list.find((product) => product.product_choice[0].id  === item.product_choice_id)
    const imageProduct = ShowImageProductData2.find((image) => image.product_choice_id === item.product_choice_id)
    
  return (
    <div>
      <div className='m-5 mb-0 flex border-2'>
        <div className='w-1/4'>
          <img src={imageProduct?.url} />
        </div>
        <div className='flex w-1/2 items-center'>
          <div className="w-2/3">
            <h4>{productData && productData.name}</h4>
          </div>
          <div className="w-1/3 text-center ">
            <p> ${ productData && productData.product_choice[0].price}</p>
          </div>         
        </div>
        <div className='flex w-1/4 flex-col items-center justify-center gap-2 px-2'>
          <p className='w-7 font-semibold text-center'>{item.quantity}</p>
          <button onClick={() => removeProductFromCart(item.product_choice_id)}>Remove</button>
        </div>
      </div>
    </div>
  );
}
export default ProductInCart;
