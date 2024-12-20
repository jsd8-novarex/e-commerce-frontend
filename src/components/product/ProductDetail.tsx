import { useMemo } from "react";
import clsx from "clsx";
import { useCustomerStore } from "../../store/customers/customerStore";
import { addItemToCartStore } from "../../store/cart/addItemToCart.store";
import { postCurrentCartStore } from "../../store/cart/postCurrentCart.store";
import { ProductChoiceType, ProductDataType } from "../../service/products/getProduct.type";
import { SelectedOptionType } from "../../pages/ProductPage";
import { useNavigate } from "react-router-dom";
import { isFormatPrice } from "../../helpers/utils";
import { hexColor } from "../../helpers/hexColor";

type ProductDetailPropsType = {
  product: ProductDataType | undefined;
  currentProductChoice: ProductChoiceType | null;
  selectedOptions: SelectedOptionType;
  setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOptionType>>;
};
interface SizeData {
  [key: string]: string;
}

function ProductDetail({
  product,
  currentProductChoice,
  selectedOptions,
  setSelectedOptions,
}: ProductDetailPropsType) {
  const navigate = useNavigate();
  const { customer } = useCustomerStore();
  const { addToCart } = addItemToCartStore();
  const { fetchCurrentCartData } = postCurrentCartStore();
  const customerId = customer ? customer._id : "";

  const availableColors = useMemo(() => {
    if (!product) return [];
    return Array.from(new Set(product.product_choices.map((choice) => choice.color)));
  }, [product]);

  const availableSizes = useMemo(() => {
    if (!product) return [];
    return Array.from(new Set(product?.product_choices.map((choice) => choice.size) || []));
  }, [product]);

  const sizeButtons = useMemo(() => {
    if (!product) return [];

    return availableSizes.map((size) => {
      const isDisabled = !product.product_choices.some(
        (choice) =>
          choice.size === size && choice.color === selectedOptions.color && choice.quantity > 0,
      );
      return { size, isDisabled };
    });
  }, [product, availableSizes, selectedOptions.color]);

  const handleAddToCart = async () => {
    if (!customerId) {
      navigate("/sign-in");
    } else if (currentProductChoice && selectedOptions.color && selectedOptions.size) {
      try {
        await addToCart({ customerId, productChoiceId: currentProductChoice._id, quantity: 1 });
        await fetchCurrentCartData(customerId);
      } catch (error) {
        console.error("Error adding item to cart:", error);
      }
    }
  };

  const tableData = [
    { name: "Size", key: "size" },
    { name: "Chest", key: "chest" },
    { name: "Waist", key: "waist" },
    { name: "Hip", key: "hip" },
  ];

  const sizeChart: SizeData[] = [
    { size: "S", chest: '36"', waist: '30"', hip: '38"' },
    { size: "M", chest: '38"', waist: '32"', hip: '40"' },
    { size: "L", chest: '40"', waist: '34"', hip: '42"' },
    { size: "XL", chest: '42"', waist: '36"', hip: '44"' },
  ];

  return (
    <section className='px-4 sm:sm:col-span-4'>
      <div className='border-b-2'>
        <h3>{product?.name}</h3>
        <h3 className='my-4 text-gray-500'>{isFormatPrice(currentProductChoice?.price ?? 0, 0)}</h3>
      </div>
      <div className='mt-7 flex flex-col gap-y-2'>
        <span>Color</span>
        <div className='flex gap-1'>
          {availableColors.map((color, index) => (
            <button
              key={index}
              className={`mx-1 my-4 rounded-full border-2 px-4 py-4 ${
                selectedOptions.color === color ? "ring-4 ring-black" : ""
              }`}
              title={color || "Unknown"}
              onClick={() => setSelectedOptions((prev) => ({ ...prev, color }))}
              style={{
                backgroundColor: hexColor[color]?.hexColor || color,
              }}
            ></button>
          ))}
        </div>
      </div>
      <div className='mt-7 flex w-full flex-col gap-y-4 overflow-x-hidden'>
        <span>Size</span>
        <div className='flex flex-wrap gap-2'>
          {sizeButtons.map(({ size, isDisabled }, index) => (
            <button
              key={index}
              className={clsx("size-12 rounded-none border px-4 py-2 transition-all", {
                "bg-black text-white": selectedOptions.size === size,
                "bg-gray-200": selectedOptions.size !== size && !isDisabled,
                "cursor-not-allowed bg-gray-300 text-white opacity-50": isDisabled,
              })}
              onClick={() => setSelectedOptions((prev) => ({ ...prev, size }))}
              disabled={isDisabled}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className='mt-7'>
        <span>Description</span>
        <p className='text-gray-500'>
          <small>{product?.description}</small>
        </p>
      </div>
      <div className='mt-7 flex justify-center'>
        <button
          className={clsx("h-12 w-full rounded-none text-white transition-all", {
            "cursor-not-allowed bg-gray-400":
              !currentProductChoice || !selectedOptions.color || !selectedOptions.size,
            "bg-black hover:bg-gray-600":
              currentProductChoice && selectedOptions.color && selectedOptions.size,
          })}
          onClick={handleAddToCart}
        >
          {!currentProductChoice || !selectedOptions.color || !selectedOptions.size
            ? "Select Options"
            : "Add To Cart"}
        </button>
      </div>
      <div className='mt-20'>
        <span className="font-semibold">Size Chart</span>
        <table className='mt-4 min-w-full table-auto border-collapse'>
          <thead>
            <tr className='border-b'>
              {tableData.map((header) => (
                <th key={header.key} className='px-4 py-2 text-left'>
                  {header.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sizeChart.map((sizeData, index) => (
              <tr key={index} className='border-b'>
                {tableData.map((header) => (
                  <td key={header.key} className='px-4 py-2'>
                    {sizeData[header.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ProductDetail;
