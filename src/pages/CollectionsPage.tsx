import { useEffect, useState } from "react";
import { useScrollLockStore } from "../store/scrollLock.store";
import { ProductDataType } from "../service/products/getProduct.type";
import ScrollToTopButton from "../components/button/ScrollToTopButton";
import ProductCard from "../components/collections/ProductCard";
import ProductOptions from "../components/collections/ProductOptions";
import useGetAllProduct from "../hook/products/useGetAllProduct";
import { useLocation } from "react-router-dom";

function CollectionsPage() {
  const { search } = useLocation();  // ใช้เพื่อดึง query parameters จาก URL
  const [filter, setFilter] = useState<string>('');  // เก็บตัวกรอง
  const { data, error } = useGetAllProduct(filter);  
  const { openComponents, handleScrollLock } = useScrollLockStore();
  const [selectedProduct, setSelectedProduct] = useState<ProductDataType | null>(null);
  const isProductOptionsOpen = openComponents["ProductOptions"] || false;

  useEffect(() => {
    const urlParams = new URLSearchParams(search);  // ดึงค่า query parameter
    const genderParam = urlParams.get("gender");  // รับค่าพารามิเตอร์ gender จาก URL
    if (genderParam) {
      setFilter(genderParam);  // ตั้งค่าตัวกรองตามพารามิเตอร์ที่รับมา
    }
  }, [search]);
  
  if (error) {
    console.error(error);  
    return <div>Error loading products</div>;
  }

  const toggleProductOption = (product: ProductDataType) => {
    setSelectedProduct(product);
    handleScrollLock("ProductOptions", !isProductOptionsOpen);
  };

  return (
    <main className='relative grid min-h-screen w-full grid-cols-12 gap-y-12 px-5 pt-32 sm:px-10 2xl:px-[7.5%]'>
      <ScrollToTopButton />
      {isProductOptionsOpen && (
        <ProductOptions productData={selectedProduct} productChoice={null} />
      )}

      <section className='col-span-full'>
        <div className='mb-8'>
          <p>Home / Shop All</p>
        </div>
        <h3 className='font-bold'>Shop All</h3>
        <div className='mr-4 mt-4 sm:max-w-[40rem]'>
          <p className='text-justify text-sm sm:text-base xl:text-lg'>
            Build your SHINING wardrobe with styles made from innovative materials. Discover our
            tracksuits, t-shirts, activewear, outerwear and sneakers for women in nature-inspired
            colors.
          </p>
        </div>
      </section>

      <section className='col-span-full mb-16 px-2'>
        <div className='grid grid-cols-12 gap-x-4 gap-y-8 justify-self-center sm:gap-8'>
        {data && data.products && data.products.map((item) => (
            <div key={item._id} className="col-span-full sm:col-span-6 lg:col-span-4 xl:col-span-3">
              <ProductCard
                productData={item}
                isProductOptionsOpen={() => toggleProductOption(item)}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CollectionsPage;
