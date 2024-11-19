import ProductImages from "../components/product/ProductImages";
import ProductDetail from "../components/product/ProductDetail";
import { ShowImageProductData2 } from "../constraints/SHOWIMAGE_DATA";
import { product_list } from "../constraints/PRODUCT_DATA_V2";

function ProductPage() {
  const product_choice_id = "c1b9f124-45d4-4c8f-983d-2093dbe1d957";
  const filterData = ShowImageProductData2.filter(
    (item) => item.product_choice_id === product_choice_id,
  );
  const findProductChoice = product_list.find((item) =>
    item.product_choice.some((choice) => choice.id === product_choice_id),
  );

  const productChoiceData = findProductChoice?.product_choice.find(
    (choice) => choice.id === product_choice_id,
  );

  return (
    <div className='grid h-full w-full gap-3 py-32 sm:grid-cols-12 sm:px-10'>
      <ProductImages data={filterData} />
      <ProductDetail findProductChoice={findProductChoice} productChoiceData={productChoiceData} />
    </div>
  );
}

export default ProductPage;
