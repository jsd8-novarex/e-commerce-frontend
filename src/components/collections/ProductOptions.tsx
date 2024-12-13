import { useState, useEffect, useMemo } from "react";
import { useScrollLockStore } from "../../store/scrollLock.store";
import { postCurrentCartStore } from "../../store/cart/postCurrentCart.store";
import { addItemToCartStore } from "../../store/cart/addItemToCart.store";
import { ProductDataType, ProductChoiceType } from "../../service/products/getProduct.type";
import { useCustomerStore } from "../../store/customers/customerStore";

type ProductOptionPropsType = {
  productData: ProductDataType | null;
  productChoice: ProductChoiceType | null;
};

function ProductOptions({ productData }: ProductOptionPropsType) {
  const { customer } = useCustomerStore();
  const { addToCart } = addItemToCartStore();
  const { fetchCurrentCartData } = postCurrentCartStore();
  const { openComponents, handleScrollLock } = useScrollLockStore();

  const customerId = customer ? customer._id : "";
  const isProductOptionsOpen = openComponents["ProductOptions"] || false;

  const [selectedChoice, setSelectedChoice] = useState<ProductChoiceType | null>(null);

  useEffect(() => {
    if (productData?.product_choices.length) {
      setSelectedChoice(productData.product_choices[0]);
    }
  }, [productData]);

  const availableColors = useMemo(
    () => Array.from(new Set(productData?.product_choices.map((choice) => choice.color) || [])),
    [productData],
  );

  const availableSizes = useMemo(
    () => Array.from(new Set(productData?.product_choices.map((choice) => choice.size) || [])),
    [productData],
  );

  const handleAddToCart = async () => {
    if (!selectedChoice || selectedChoice.quantity === 0) return;

    try {
      await addToCart({ customerId, productChoiceId: selectedChoice._id, quantity: 1 });
      await fetchCurrentCartData(customerId);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    } finally {
      handleScrollLock("ProductOptions", false);
    }
  };

  const handleColorChange = (color: string) => {
    if (!productData) return;
    const matchingChoice = productData.product_choices.find(
      (choice) => choice.color === color && choice.size === selectedChoice?.size,
    );
    if (matchingChoice) setSelectedChoice(matchingChoice);
  };

  const handleSizeChange = (size: string) => {
    if (!productData) return;
    const matchingChoice = productData.product_choices.find(
      (choice) => choice.size === size && choice.color === selectedChoice?.color,
    );
    if (matchingChoice) setSelectedChoice(matchingChoice);
  };

  return (
    <>
      {isProductOptionsOpen && (
        <div className='fixed bottom-8 left-[5%] right-[2%] z-[12] max-h-[90vh] max-w-[90vw] overflow-auto bg-white p-4 drop-shadow-2xl transition-transform sm:left-auto sm:max-w-md md:max-w-[800px]'>
          <div className='flex flex-col items-center gap-4 md:gap-6'>
            <div className='relative w-full'>
              <button
                onClick={() => handleScrollLock("ProductOptions", false)}
                className='top- absolute right-2 h-6 w-6 rounded-full bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-800 focus:outline-none'
                aria-label='Close'
              >
                ✕
              </button>
            </div>
            <div className='sm:flex md:flex lg:flex'>
              <div className='flex w-full flex-col items-center gap-4 sm:flex-row sm:items-start'>
                <img
                  src={selectedChoice?.images[0]?.url}
                  alt={productData?.name}
                  className='aspect-square w-full object-cover sm:w-full'
                />
              </div>

              <div className='flex w-full flex-col gap-y-4'>
                <div className='mb-2 flex flex-col items-center pb-4 sm:items-start'>
                  <div className='pb-4'>
                    <h2 className='text-lg font-bold text-gray-800 md:text-xl'>
                      {`${productData?.name} ${selectedChoice?.color}`}
                    </h2>
                  </div>
                  <div>
                    <p className='text-xl text-gray-600 md:text-xl'>
                      Price: {selectedChoice?.price || "N/A"}
                    </p>
                  </div>
                </div>
                <div className='mb-2 flex flex-wrap justify-center gap-2'>
                  {availableColors.map((color, index) => (
                    <button
                      key={index}
                      className={`h-8 w-8 rounded-full border-2 ${
                        selectedChoice?.color === color ? "ring-4 ring-red-500" : ""
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorChange(color)}
                    ></button>
                  ))}
                </div>
                <div className='flex flex-wrap justify-center gap-2'>
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      className={`border px-4 py-2 ${
                        selectedChoice?.size === size ? "bg-black text-white" : "bg-gray-200"
                      }`}
                      onClick={() => handleSizeChange(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <div className='mt-4 flex justify-center'>
                  <button
                    className={`px-6 py-3 text-white ${
                      selectedChoice?.quantity === 0
                        ? "cursor-not-allowed bg-gray-400"
                        : "bg-black hover:bg-green-600"
                    }`}
                    onClick={handleAddToCart}
                    disabled={selectedChoice?.quantity === 0}
                  >
                    {selectedChoice?.quantity === 0 ? "Sold Out" : "Add To Cart"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductOptions;
