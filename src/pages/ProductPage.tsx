import ProductImages from "../components/product/ProductImages";
import ProductDetail from "../components/product/ProductDetail";
import { ShowImageProductData2 } from "../constraints/SHOWIMAGE_DATA";
import { product_list } from "../constraints/PRODUCT_DATA_V2";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { productChoiceId } = useParams<{ productChoiceId: string }>();
  const filterData = ShowImageProductData2.filter(
    (item) => item.product_choice_id === productChoiceId,
  );
  const findProductChoice = product_list.find((item) =>
    item.product_choice.some((choice) => choice.id === productChoiceId),
  );

  const productChoiceData = findProductChoice?.product_choice.find(
    (choice) => choice.id === productChoiceId,
  );

  return (
    <div className='grid h-full w-full gap-3 py-32 sm:grid-cols-12 sm:px-10'>
      <ProductImages data={filterData} productChoiceId = {productChoiceId} />
      <ProductDetail findProductChoice={findProductChoice} productChoiceData={productChoiceData} />
    </div>
  );
}

export default ProductPage;
