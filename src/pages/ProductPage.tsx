import ProductImages from "../components/product/ProductImages";
import ProductDetail from "../components/product/ProductDetail";
import { ShowImageProductData } from "../constraints/SHOWIMAGE_DATA";

function ProductPage() {
  // const product_choice_id = 'c1b9f124-45d4-4c8f-983d-2093dbe1d957'

  return (
    <div className='grid h-full w-full gap-3 py-32 sm:grid-cols-12 sm:px-10'>
      <ProductImages data={ShowImageProductData} />
      <ProductDetail />
    </div>
  );
}

export default ProductPage;
