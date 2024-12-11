import { useState, useEffect } from "react";
import { useScrollLockStore } from "../../store/scrollLock.store";
import useShoppingCartStore from "../../store/shoppingCart.store";
import { ProductDataType, ProductChoiceType } from "../../service/products/getProduct.type";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

type ProductOptionPropsType = {
  productData: ProductDataType | null;
  productChoice: ProductChoiceType | null;  
};

function ProductOptions({ productData }: ProductOptionPropsType) {
  const { openComponents, handleScrollLock } = useScrollLockStore();
  const isProductOptionsOpen = openComponents["ProductOptions"] || false;

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [imageProduct, setImageProduct] = useState<string | null>(null);
  const [currentPrice, setCurrentPrice] = useState<string | number>("N/A");
  const [isSoldOut, setIsSoldOut] = useState<boolean>(false);

  const addProductToCart = useShoppingCartStore((state) => state.addProductToCart);

  useEffect(() => {
    if (productData && productData.product_choices.length > 0) {
      const defaultChoice = productData.product_choices[0];
      setSelectedColor(defaultChoice.color);
      setSelectedSize(defaultChoice.size);
      setImageProduct(
        defaultChoice.images.length > 0 ? defaultChoice.images[0].url : null
      );
      setCurrentPrice(defaultChoice.price || "N/A");
      setIsSoldOut(defaultChoice.quantity === 0);
    }
  }, [productData]);

  useEffect(() => {
    if (selectedColor && selectedSize && productData) {
      const matchingChoice = productData.product_choices.find(
        (choice) => choice.color === selectedColor && choice.size === selectedSize,
      );
      if (matchingChoice) {
        setImageProduct(
          matchingChoice.images.length > 0 ? matchingChoice.images[0].url : null
        );
        setCurrentPrice(matchingChoice.price || "N/A");
        setIsSoldOut(matchingChoice.quantity === 0);
      }
    }
  }, [selectedColor, selectedSize, productData]);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize || !productData || isSoldOut) return;

    const matchingChoice = productData.product_choices.find(
      (choice) => choice.color === selectedColor && choice.size === selectedSize,
    );

    if (matchingChoice && matchingChoice._id) {
      const timestamp = dayjs().toISOString();
      const newProduct = {
        id: uuidv4(),
        cart_id: "",
        product_choice_id: matchingChoice._id,
        quantity: 1,
        create_timestamp: timestamp,
        last_updated_timestamp: timestamp,
        creator_id: "admin",
        last_op_id: "admin",
        selectedColor: matchingChoice.color,
      };
      addProductToCart(newProduct);
      handleScrollLock("ProductOptions", false);
    }
  };

  if (!productData || productData.product_choices.length === 0) {
    return null;
  }

  const availableColors = Array.from(
    new Set(productData.product_choices.map((choice) => choice.color)),
  );
  const availableSizes = Array.from(
    new Set(productData.product_choices.map((choice) => choice.size)),
  );

  return (
    <>
      {isProductOptionsOpen && (
        <div className='fixed bottom-8 left-[5%] right-[2%] z-[12] max-h-[90vh] max-w-[90vw] overflow-auto bg-white p-4 shadow-lg transition-transform sm:left-auto sm:max-w-md md:max-w-[800px]'>
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
                  src={imageProduct || ""}
                  alt={productData.name || "Product"}
                  className='aspect-square w-full object-cover sm:w-full'
                />
              </div>

              <div className='flex w-full flex-col gap-y-4'>
                <div className='flex flex-col items-center pb-4 sm:items-start'>
                  <div className='pb-4'>
                    <h2 className='text-lg font-bold text-gray-800 md:text-xl'>
                      {productData.name || "Product Name"} {selectedColor}
                    </h2>
                  </div>
                  <div>
                    <p className='text-xl text-gray-600 md:text-xl'>Price: {currentPrice}</p>
                  </div>
                </div>
                <div className='mb-2 text-center'>
                  {/* <p className='text-gray-700'>Colors</p> */}
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
                <div className='mb-2 text-center'>
                  {/* <p className='text-gray-700'>Size</p> */}
                </div>
                <div className='flex flex-wrap justify-center gap-2'>
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      className={`border px-4 py-2 ${
                        selectedSize === size ? "bg-black text-white" : "bg-gray-200"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <div className='mt-4 flex justify-center'>
                  <button
                    className={`px-6 py-3 text-white ${
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
          </div>
        </div>
      )}
    </>
  );
}

export default ProductOptions;
