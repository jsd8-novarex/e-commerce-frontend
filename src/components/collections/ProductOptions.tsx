import { useState, useEffect } from "react";
import { useScrollLockStore } from "../../store/scrollLock.store";
import useShoppingCartStore from "../../store/shoppingCart.store";
import { ProductDataType, ProductChoiceType } from "../../constraints/PRODUCT_DATA_V2";
import { ShowImageProductData2 } from "../../constraints/SHOWIMAGE_DATA";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

type ProductOptionPropsType = {
  productData: ProductDataType | null;
  productChoice: ProductChoiceType | null;
};

function ProductOptions({ productData, productChoice }: ProductOptionPropsType) {
  const { openComponents, handleScrollLock } = useScrollLockStore();
  const isProductOptionsOpen = openComponents["ProductOptions"] || false;

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [imageProduct, setImageProduct] = useState<string | null>(null);
  const [currentPrice, setCurrentPrice] = useState<string | number>("N/A");
  const [isSoldOut, setIsSoldOut] = useState<boolean>(false);

  const addProductToCart = useShoppingCartStore((state) => state.addProductToCart);

  useEffect(() => {
    if (productData && productData.product_choice.length > 0) {
      const defaultChoice = productData.product_choice[0];
      setSelectedColor(defaultChoice.color);
      setSelectedSize(defaultChoice.size);
      setImageProduct(
        ShowImageProductData2.find((item) => item.product_choice_id === defaultChoice.id)?.url ||
          null,
      );
      setCurrentPrice(defaultChoice.price || "N/A");

      setIsSoldOut(defaultChoice.quantity === 0);
    }
  }, [productData, productChoice]);

  useEffect(() => {
    if (selectedColor && selectedSize && productData) {
      const matchingChoice = productData.product_choice.find(
        (choice) => choice.color === selectedColor && choice.size === selectedSize,
      );
      if (matchingChoice) {
        setImageProduct(
          ShowImageProductData2.find((item) => item.product_choice_id === matchingChoice.id)?.url ||
            null,
        );
        setCurrentPrice(matchingChoice.price || "N/A");
        setIsSoldOut(matchingChoice.quantity === 0);
      }
    }
  }, [selectedColor, selectedSize, productData]);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize || !productData || isSoldOut) return;

    const matchingChoice = productData.product_choice.find(
      (choice) => choice.color === selectedColor && choice.size === selectedSize,
    );

    if (matchingChoice) {
      const timestamp = dayjs().toISOString();
      const newProduct = {
        id: uuidv4(),
        cart_id: "",
        product_choice_id: matchingChoice.id,
        quantity: 1,
        create_timestamp: timestamp,
        last_updated_timestamp: timestamp,
        creator_id: "admin",
        last_op_id: "admin",
        selectedColor,
      };
      addProductToCart(newProduct);
      handleScrollLock("ProductOptions", false);
    }
  };

  if (!productData || productData.product_choice.length === 0) {
    return null;
  }

  const availableColors = Array.from(
    new Set(productData.product_choice.map((choice) => choice.color)),
  );
  const availableSizes = Array.from(
    new Set(productData.product_choice.map((choice) => choice.size)),
  );

  return (
    <>
      {isProductOptionsOpen && (
        <div className='fixed bottom-4 left-[2%] right-[2%] z-[12] max-h-[90vh] max-w-[90vw] overflow-auto rounded-lg bg-white p-4 shadow-lg transition-transform sm:left-auto sm:right-5 sm:max-w-md md:max-h-[600px] md:max-w-[600px]'>
          <div className='flex flex-col items-center gap-4 md:gap-6'>
            <div className='relative w-full'>
              <button
                onClick={() => handleScrollLock("ProductOptions", false)}
                className='absolute right-2 top-0 rounded-full bg-gray-300 p-[2px] text-gray-600 hover:bg-gray-400 hover:text-gray-800 focus:outline-none'
                aria-label='Close'
              >
                ✕
              </button>
            </div>
            <div className='flex w-full flex-col items-center gap-4 rounded-md shadow-md sm:flex-row sm:items-start'>
              <img
                src={imageProduct || ""}
                alt={productData.name || "Product"}
                className='aspect-square w-1/2 rounded-lg object-cover sm:w-1/3'
              />
              <div className='flex flex-col items-center sm:items-start'>
                <h2 className='text-lg font-bold text-gray-800 md:text-xl'>
                  {productData.name || "Product Name"}:{selectedColor}
                </h2>
                <p className='text-md text-gray-600 md:text-lg'>Price: {currentPrice}</p>
              </div>
            </div>

            <div className='w-full'>
              <div className='mb-2 text-center'>
                <p className='text-gray-700'>Colors</p>
              </div>
              <div className='flex flex-wrap justify-center gap-2'>
                {availableColors.map((color) => (
                  <button
                    key={color}
                    className={`h-8 w-8 rounded-full border-2 ${
                      selectedColor === color ? "ring-4 ring-red-500" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  ></button>
                ))}
              </div>
            </div>

            <div className='w-full'>
              <div className='mb-2 text-center'>
                <p className='text-gray-700'>Size</p>
              </div>
              <div className='flex flex-wrap justify-center gap-2'>
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    className={`rounded-lg border px-4 py-2 ${
                      selectedSize === size ? "bg-black text-white" : "bg-gray-200"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className='mt-4 flex justify-center'>
              <button
                className={`rounded-lg px-6 py-3 text-white ${
                  isSoldOut ? "cursor-not-allowed bg-gray-400" : "bg-black hover:bg-green-600"
                }`}
                onClick={handleAddToCart}
                disabled={isSoldOut}
              >
                {isSoldOut ? "Sold Out" : "Add To Cart"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductOptions;
