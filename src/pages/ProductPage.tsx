import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
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
      <ProductImagesMemo data={currentProductChoice} />
      <ProductDetail
        product={product}
        currentProductChoice={currentProductChoice}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
    </div>
  );
}

export default ProductPage;
