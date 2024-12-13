import { memo } from "react";
import { ProductChoiceType } from "../../service/products/getProduct.type";

type ShowImageProductPropsType = {
  data: ProductChoiceType | null;
};

function ProductImages({ data }: ShowImageProductPropsType) {
  return (
    <section className='sm:col-span-8'>
      <div className='flex w-full snap-x snap-mandatory gap-1 overflow-x-scroll scroll-smooth sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-1 sm:overflow-x-hidden'>
        {data &&
          data.images.map((item, index) => (
            <div key={index} className='grid min-w-full snap-start'>
              <img
                src={item.url}
                alt={`${data.sku}-${item.index}`}
                className='max-w-screen w-screen sm:w-auto'
              />
            </div>
          ))}
      </div>
    </section>
  );
}

const ProductImagesMemo = memo(ProductImages)
export default ProductImagesMemo;
