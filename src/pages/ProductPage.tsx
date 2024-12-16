import { useMemo, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import ProductImagesMemo from "../components/product/ProductImages";
import ProductDetail from "../components/product/ProductDetail";
import useGetAllProduct from "../hook/products/useGetAllProduct";

export type SelectedOptionType = {
  color: string | null;
  size: string | null;
};

function ProductPage() {
  const { data } = useGetAllProduct("");

  const { productChoiceId } = useParams<{ productChoiceId: string }>();

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionType>({
    color: null,
    size: null,
  });

  const product = data?.products.find((item) =>
    item.product_choices.some((choice) => choice._id === productChoiceId && productChoiceId),
  );

  const initialChoice = useMemo(() => {
    if (product && productChoiceId) {
      return product.product_choices.find((choice) => choice._id === productChoiceId) || null;
    }
    return null;
  }, [product, productChoiceId]);

  const matchingChoice = useMemo(() => {
    if (product && selectedOptions.color && selectedOptions.size) {
      return (
        product.product_choices.find(
          (choice) =>
            choice.color === selectedOptions.color && choice.size === selectedOptions.size,
        ) || null
      );
    }
    return null;
  }, [product, selectedOptions.color, selectedOptions.size]);

  const currentProductChoice = matchingChoice || initialChoice;

  return (
    <div className='grid h-full w-full gap-3 py-32 sm:grid-cols-12 sm:px-10'>
       {currentProductChoice && product ? (
    <>
      <ProductImagesMemo data={currentProductChoice} />
      <ProductDetail
        product={product}
        currentProductChoice={currentProductChoice}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
    </>
  ) : (
    <div className='col-span-full flex min-h-screen flex-col items-center justify-start'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold sm:text-6xl'>Page not found</h1>
        <p className='mt-2 text-lg sm:text-3xl'>Server Error.</p>
      </div>
      <div className='mt-8'>
        <button type='button' className='btn-black px-6 py-2 text-lg sm:text-xl'>
          <NavLink to='/'>Home</NavLink>
        </button>
      </div>
    </div>
  )}
    </div>
  );
}

export default ProductPage;
