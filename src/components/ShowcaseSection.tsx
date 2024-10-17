import { ShowCaseSectionDataType } from "../constraints/SHOWCASE_DATA";

type ShowCaseSectionPropsType = {
  data: ShowCaseSectionDataType;
};

function ShowcaseSection({ data }: ShowCaseSectionPropsType) {
  return (
    <section className='relative h-full w-full snap-center snap-always'>
      <img src={data.url} alt={data.alternate} className='-z-10 h-full w-full' />
      <div className='absolute inset-0 z-0 h-full w-full bg-black/25' />
      <div className='absolute bottom-[12%] left-[5%] z-10 w-72 p-4 text-white sm:w-96 xl:w-[32rem]'>
        <p className='text-xl xl:text-2xl'>{data.name}</p>
        <p className='my-4 text-justify text-base'>{data.information}</p>
        <span className='text-xl xl:text-3xl'>{data.price}THB</span>
      </div>
    </section>
  );
}

export default ShowcaseSection;