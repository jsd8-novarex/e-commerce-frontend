import ProductImages from "../components/productPage/ProductImages";
import ProductDetail from "../components/productPage/ProductDetail";
import { ShowImageProductData } from "../constraints/SHOWIMAGE_DATA";

function ProductPage() {
  return (
    <div className='grid h-full w-full gap-3 sm:grid-cols-12 sm:gap-3 sm:px-4'>
      <ProductImages data={ShowImageProductData} />
      <ProductDetail />
    </div>
  );
}

export default ProductPage;
