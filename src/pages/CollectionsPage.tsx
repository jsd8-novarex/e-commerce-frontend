import { useEffect, useState } from "react";
import { useScrollLockStore } from "../store/scrollLock.store";
import { ProductDataType } from "../service/products/getProduct.type";
import ScrollToTopButton from "../components/button/ScrollToTopButton";
import ProductCardMemo from "../components/collections/ProductCard";
import ProductOptions from "../components/collections/ProductOptions";
import useGetAllProduct from "../hook/products/useGetAllProduct";
import { NavLink, useLocation } from "react-router-dom";
import CollectionsFilterBar from "../components/collections/CollectionsFilterBar";

function CollectionsPage() {
  const { search } = useLocation(); // ใช้เพื่อดึง query parameters จาก URL
  const [filter, setFilter] = useState<string>(""); // เก็บตัวกรอง
  const [sortOrder, setSortOrder] = useState<string>("");
  const { data } = useGetAllProduct(filter);
  const { openComponents, handleScrollLock } = useScrollLockStore();
  const [selectedProduct, setSelectedProduct] = useState<ProductDataType | null>(null);
  const isProductOptionsOpen = openComponents["ProductOptions"] || false;

  useEffect(() => {
    const urlParams = new URLSearchParams(search); // ดึงค่า query parameter
    const genderParam = urlParams.get("gender"); // รับค่าพารามิเตอร์ gender จาก URL
    if (genderParam === "man" || genderParam === "woman") {
      setFilter(genderParam);
    } else {
      setFilter("");
    }
  }, [search]);

  const toggleProductOption = (product: ProductDataType) => {
    setSelectedProduct(product);
    handleScrollLock("ProductOptions", !isProductOptionsOpen);
  };

  // ฟังก์ชันการจัดเรียงสินค้าตาม sortOrder
  const sortProducts = (products: ProductDataType[], sortOrder: string) => {
    if (!products) return [];
    switch (sortOrder) {
      case "A-Z":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case "Z-A":
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      case "low-high":
        return [...products].sort((a, b) => {
          const minPriceA = Math.min(...a.product_choices.map((choice) => choice.price));
          const minPriceB = Math.min(...b.product_choices.map((choice) => choice.price));
          return minPriceA - minPriceB;
        });
      case "high-low":
        return [...products].sort((a, b) => {
          const maxPriceA = Math.max(...a.product_choices.map((choice) => choice.price));
          const maxPriceB = Math.max(...b.product_choices.map((choice) => choice.price));
          return maxPriceB - maxPriceA;
        });
      default:
        return products;
    }
  };

  // การจัดเรียงสินค้าภายหลังจากการกรอง
  const sortedProducts = sortProducts(
    (data?.products || []).filter(
      (item) => !filter || item.gender.toLowerCase() === filter.toLowerCase(),
    ),
    sortOrder,
  );

  const shopTitle = filter === "man" ? "Men" : filter === "woman" ? "Women" : "Shop All";

  return (
    <main className='relative grid min-h-screen w-full grid-cols-12 gap-y-12 px-5 pt-32 sm:px-10 2xl:px-[7.5%]'>
      <ScrollToTopButton />
      {isProductOptionsOpen && (
        <ProductOptions productData={selectedProduct} productChoice={null} />
      )}

      {sortedProducts && sortedProducts.length > 0 ? (
        <>
          <section className='col-span-full'>
            <div className='mb-8'>
              <NavLink to='/' className='hover:underline'>
                Home
              </NavLink>
              {" / "}
              <NavLink to={`/collections/?gender=${filter}`} className='hover:underline'>
                {shopTitle}
              </NavLink>
            </div>
            <h3 className='font-bold'>{shopTitle}</h3>
            <div className='mr-4 mt-4 sm:flex sm:flex-wrap sm:justify-between'>
              <p className='text-justify text-sm sm:max-w-[40rem] sm:text-base xl:text-lg'>
                Build your SHINING wardrobe with styles made from innovative materials. Discover our
                tracksuits, t-shirts, activewear, and outerwear for women in nature-inspired colors.
              </p>
              <div>
                <CollectionsFilterBar setSortOrder={setSortOrder} />
              </div>
            </div>
          </section>

          <section className='col-span-full mb-16 px-2'>
            <div className='grid grid-cols-12 gap-x-4 gap-y-8 justify-self-center sm:gap-8'>
              {sortedProducts.map((item) => (
                <div
                  key={item._id}
                  className='col-span-full sm:col-span-6 lg:col-span-4 xl:col-span-3'
                >
                  <ProductCardMemo
                    productData={item}
                    isProductOptionsOpen={() => toggleProductOption(item)}
                  />
                </div>
              ))}
            </div>
          </section>
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
    </main>
  );
}

export default CollectionsPage;
