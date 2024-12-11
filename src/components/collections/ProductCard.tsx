import { Link } from "react-router-dom";
import { ProductDataType } from "../../service/products/getProduct.type";
import { isFormatPrice } from "../../helpers/utils";

type ProductCardPropsType = {
  productData: ProductDataType;
  isProductOptionsOpen: () => void;
};

function ProductCard({ productData, isProductOptionsOpen }: ProductCardPropsType) {
  // เลือกราคาใน product_choice จากข้อมูล API
  const price = productData.product_choices[0]?.price ? productData.product_choices[0].price : "N/A";  
  
  // เลือก product_choice_id และรูปภาพจาก product_choices
  const productChoiceId = productData.product_choices[0]?._id;
  const imageProduct = productData.product_choices[0]?.images[0]?.url; // เลือกรูปภาพแรกจาก images  

  return (
    <div className='relative overflow-hidden rounded-ee-xl rounded-ss-xl drop-shadow-xl'>
      <div className='absolute right-0 top-0 flex h-16 w-16 items-center justify-center'>
        <button
          onClick={isProductOptionsOpen}
          className='btn btn-circle z-[2] mx-1 h-12 w-12 bg-white'
        >
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
        <Link to={`/product/${productChoiceId}`}>
          {/* แสดงภาพจาก product_choices */}
          <img src={imageProduct} alt={productData.name} />
        </Link>
      </div>
      <div className='absolute bottom-0 w-full px-4 py-2 sm:py-3 xl:py-4'>
        <div className='flex w-full justify-between gap-x-1 lg:gap-x-4'>
          <p className='text-base font-semibold'>{productData.name}</p>
          <div className='flex items-end'>
            <span className='text-lg font-semibold xl:text-xl'>
              {typeof price === "number" ? isFormatPrice(price, 0) : price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
