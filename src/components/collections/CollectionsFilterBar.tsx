// import { filterOptionsData } from "../../constraints/COLLECTIONS_FILTER_DATA";

function CollectionsFilterBar() {
  return (
    <section className='sticky top-[5rem] z-[2] col-span-full flex items-center justify-end bg-white/90 py-2 lg:top-[4.5rem] 2xl:top-[4.75rem]'>
      {/* <div className='hide-scroll hidden md:flex md:snap-x md:snap-proximity md:items-center md:overflow-y-hidden md:overflow-x-scroll md:scroll-smooth md:whitespace-nowrap'>
        <span className='mr-8 text-xl font-bold uppercase'>Quick filter</span>
        {filterOptionsData.map((item) => (
          <span key={item.order} className='p-4 text-xl uppercase'>
            {item.name}
          </span>
        ))}
      </div> */}
      <div>
        <button className='btn-black'>Filter</button>
      </div>
    </section>
  );
}

export default CollectionsFilterBar;
