import React from "react";
import ProductImages from "../components/productPage/ProductImages";
import ProductDetail from "../components/productPage/ProductDetail";

function ProductPage() {
  return (
    <div className='grid gap-3 sm:grid-cols-12 sm:gap-3 sm:px-4'>
      <ProductImages />
      <ProductDetail />
    </div>
  );
}

export default ProductPage;
// sm:h-dvh sm:min-h-dvh sm:w-dvw
