import ProductImages from "../components/product/ProductImages";
import ProductDetail from "../components/product/ProductDetail";
import { ShowImageProductData2 } from "../constraints/SHOWIMAGE_DATA";

function ProductPage() {
  return (
    <div className='grid h-full w-full gap-3 py-32 sm:grid-cols-12 sm:px-10'>
      <ProductImages data={ShowImageProductData2} />
      <ProductDetail />
    </div>
  );
}

export default ProductPage;
