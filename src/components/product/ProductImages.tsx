import { ShowImageProduct2DataType } from "../../constraints/SHOWIMAGE_DATA";

type ShowImageProductPropsType = {
  data: ShowImageProduct2DataType[];
};

function ProductImages({ data }: ShowImageProductPropsType) {
  return (
    <section className='sm:col-span-8'>
      <div className='flex w-full snap-x snap-mandatory gap-1 overflow-x-scroll scroll-smooth sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-1 sm:overflow-x-hidden'>
        {data.map((item, index) => (
          <div key={index} className='grid min-w-full snap-start'>
            <img
              src={item.url}
              alt={item.product_choice_id}
              className='max-w-screen w-screen sm:w-auto'
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductImages;
