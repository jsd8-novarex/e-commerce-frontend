import { filterOptionsData } from "../../constraints/NAVIGATION_DATA";

function CollectionsFilterBar() {
  return (
    <section className='sticky top-[4.25rem] z-20 col-start-1 col-end-13 flex items-center justify-end gap-x-8 bg-white/90 px-4 py-2 md:justify-between lg:top-[4.5rem] lg:col-start-2 lg:col-end-12 2xl:top-[4.75rem] 2xl:col-start-3 2xl:col-end-11'>
      <div className='hide-scroll hidden md:flex md:snap-x md:snap-proximity md:items-center md:overflow-y-hidden md:overflow-x-scroll md:scroll-smooth md:whitespace-nowrap'>
        <span className='mr-8 text-xl font-bold uppercase'>Quick filter</span>
        {filterOptionsData.map((item) => (
          <span key={item.order} className='p-4 text-xl uppercase'>
            {item.name}
          </span>
        ))}
      </div>
      <div>
        <button className='btn-black'>Filter</button>
      </div>
    </section>
  );
}

export default CollectionsFilterBar;
