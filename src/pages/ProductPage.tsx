import React from "react";
import ProductImages from "../components/productPage/ProductImages";
import ProductDetail from "../components/productPage/ProductDetail";

function ProductPage() {
  return (
    <div className='grid h-dvh min-h-dvh w-dvw grid-cols-12 gap-3 px-8'>
      <ProductImages />
      <ProductDetail />
    </div>
  );
}

export default ProductPage;
