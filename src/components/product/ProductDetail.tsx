import { useState, useEffect } from "react";
import { ProductChoiceType, ProductDataType } from "../../constraints/PRODUCT_DATA_V2";
import useShoppingCartStore from "../../store/shoppingCart.store";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

type ProductDetailPropsType = {
  findProductChoice: ProductDataType | undefined;
  productChoiceData: ProductChoiceType | undefined;
};

function ProductDetail({ findProductChoice, productChoiceData }: ProductDetailPropsType) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [currentPrice, setCurrentPrice] = useState<string | number>("N/A");
  const [isSoldOut, setIsSoldOut] = useState<boolean>(false);

  const addProductToCart = useShoppingCartStore((state) => state.addProductToCart);

  if (!findProductChoice || findProductChoice.product_choice.length === 0) {
    return null;
  }

  useEffect(() => {
    if (selectedColor && selectedSize && findProductChoice) {
      const matchingChoice = findProductChoice.product_choice.find(
        (choice) => choice.color === selectedColor && choice.size === selectedSize,
      );
      if (matchingChoice) {
        setCurrentPrice(matchingChoice.price || "N/A");
        setIsSoldOut(matchingChoice.quantity === 0);
      }
    }
  }, [selectedColor, selectedSize, findProductChoice]);

  const availableColors = Array.from(
    new Set(findProductChoice.product_choice.map((choice) => choice.color)),
  );
  const availableSizes = Array.from(
    new Set(findProductChoice.product_choice.map((choice) => choice.size)),
  );
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize || !findProductChoice || isSoldOut) return;

    const matchingChoice = findProductChoice.product_choice.find(
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
    }
  };

  return (
    <section className='px-4 sm:sm:col-span-4'>
      <div>
        <h3>{findProductChoice.name || "Product Name"}:{selectedColor}</h3>
        <h3 className='my-4 text-gray-500'>${productChoiceData?.price}</h3>
      </div>
      <ul className='my-4 flex border-b-2'>
        <li className='m-2'>
          <a href=''>Womens</a>
        </li>
        <li className='m-2'>
          <a href=''>Mens</a>
        </li>
      </ul>
      <div className='mt-7 flex flex-col gap-y-2'>
        <span>Color</span>
        <div>
          {availableColors.map((color) => (
            <button
              key={color}
              className={`mx-1 my-4 rounded-full border-2 px-4 py-4 ${selectedColor === color ? "ring-4 ring-red-500" : ""
                }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            ></button>
          ))};
        </div>
      </div>
      <div className='mt-7 flex w-full flex-col gap-y-4 overflow-x-hidden'>
        <span>Size</span>
        <div className='flex flex-wrap gap-2'>
          {availableSizes.map((size) => (
            <button
              key={size}
              className={`rounded-none border size-12 ${selectedSize === size ? "bg-black text-white" : "bg-gray-200"
                }`}
              onClick={() => setSelectedSize(size)}
            >
              {size === "Small" && "S"}
              {size === "Medium" && "M"}
              {size === "Large" && "L"}
              {size === "Extra Large" && "XL"}
            </button>
          ))}
        </div>
      </div>
      <div className='mt-7'>
        <span>Description</span>
        <p className='text-gray-500'>
          <small>{findProductChoice?.description}</small>
        </p>
      </div>
      <div className='mt-7 flex justify-center'>
        <button
          className={`rounded-none h-12 w-full text-white ${isSoldOut ? "cursor-not-allowed bg-gray-400" : "bg-black hover:bg-green-600"
            }`}
          onClick={handleAddToCart}
          disabled={isSoldOut}
        >
          {isSoldOut ? "Sold Out" : "Add To Cart"}
        </button>
      </div>
    </section>
  );
}

export default ProductDetail;
//mb-2 me-2 w-full rounded-full bg-blue-700 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
