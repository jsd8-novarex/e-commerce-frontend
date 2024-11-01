import ProductImages from "../components/productPage/ProductImages";
import ProductDetail from "../components/productPage/ProductDetail";

function ProductPage() {
  return (
    <div className='w-dvw grid gap-3 sm:grid-cols-12 sm:gap-3 sm:px-4'>
      <ProductImages />
      <ProductDetail />
    </div>
  );
}

export default ProductPage;
// sm:h-dvh sm:min-h-dvh sm:w-dvw
