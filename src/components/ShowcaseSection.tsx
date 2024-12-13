import { NavLink } from "react-router-dom";
import { ShowCaseSectionDataType } from "../constraints/SHOWCASE_DATA";

type ShowCaseSectionPropsType = {
  data: ShowCaseSectionDataType;
};

function ShowcaseSection({ data }: ShowCaseSectionPropsType) {
  const genderQuery = data.gender ? data.gender : "";
  return (
    <NavLink
      to={`/collections${genderQuery ? `?gender=${genderQuery}` : ""}`}
      className='relative h-full w-full snap-center snap-always'
    >
      <section className='relative h-full w-full snap-center snap-always'>
        <img
          src={data.url}
          alt={data.name}
          className={`-z-[2] h-full w-full ${data.positionImg}`}
        />
        <div className='absolute inset-0 z-0 h-full w-full bg-black/25' />
        <div className='absolute bottom-[12%] left-[5%] z-10 w-72 p-4 text-white sm:w-96 xl:w-[32rem]'>
          <p className='text-xl xl:text-2xl'>{data.name}</p>
          <p className='my-4 text-justify text-base'>{data.information}</p>
        </div>
      </section>
    </NavLink>
  );
}

export default ShowcaseSection;
// sm:object-center
