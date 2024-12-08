import { Link } from "react-router-dom";
import { ProductDataType } from "../../constraints/PRODUCT_DATA_V2";
import useCartStore from "../../store/cartItems.store";
import dayjs from "dayjs";

type ProductCardPropsType = {
  productData: ProductDataType;
};

function ProductCard({ productData }: ProductCardPropsType) {
  const addToCart = useCartStore((state) => state.addToCart);
  const price = productData.price ? productData.price : "N/A";

  const handleAddToCart = () => {
    const newProduct = {
      productId: productData.id,
      productChoiceId: productData.product_choice[0].id,
      name: productData.name,
      price: productData.price,
      quantity: 1,
      timestamp: dayjs().toISOString(),
    };

    addToCart(newProduct);
  };

  return (
    <div className='relative overflow-hidden rounded-ee-xl rounded-ss-xl drop-shadow-xl'>
      <div className='absolute right-0 top-0 flex h-16 w-16 items-center justify-center'>
        <button onClick={handleAddToCart} className='btn btn-circle z-[2] mx-1 h-12 w-12 bg-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='size-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
            />
          </svg>
        </button>
      </div>
      <div className='bg-slate-100'>
        <Link to={"/product"}>
          <img
            src='https://pangaia.com/cdn/shop/files/Recycled-Cotton-Hoodie-Black-1.png?crop=center&height=1023&v=1724674090&width=768'
            alt='Mens 365 Heavyweight Hoodie'
          />
        </Link>
      </div>
      <div className='absolute bottom-0 w-full px-4 py-2 sm:py-3 xl:py-4'>
        <div className='flex w-full justify-between gap-x-1 lg:gap-x-4'>
          <p className='text-base font-semibold'>{productData.name}</p>
          <div className='flex items-end'>
            <span className='text-lg font-semibold xl:text-xl'>${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
