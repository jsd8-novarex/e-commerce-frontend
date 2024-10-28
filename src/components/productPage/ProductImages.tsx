import { ShowImageProductDataType } from "../../constraints/SHOWIMAGE_DATA";

type ShowImageProductPropsType = {
  data: ShowImageProductDataType[];
};

function ProductImages({ data }: ShowImageProductPropsType) {
  return (
    <section className='sm:col-start-1 sm:col-end-9'>
      <div className='flex w-full snap-x snap-mandatory gap-1 overflow-x-scroll scroll-smooth sm:grid sm:w-full sm:grid-cols-2 sm:grid-rows-2 sm:gap-1 sm:overflow-x-hidden'>
        {data.map((item, index) => (
          <div key={index} className='grid min-w-full snap-start'>
            <img src={item.url} alt={item.information} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductImages;
