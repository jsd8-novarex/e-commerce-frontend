import CollectionsFilterBar from "../components/collectionsPage/CollectionsFilterBar";
import ProductCard from "../components/collectionsPage/ProductCard";

function CollectionsPage() {
  return (
    <main className='relative grid min-h-dvh w-dvw grid-cols-12 gap-y-4'>
      <section className='col-start-1 col-end-13 p-4 lg:col-start-2 lg:col-end-12 2xl:col-start-3 2xl:col-end-11'>
        <div className='mb-8'>
          <p>Home / Shop All</p>
        </div>
        <h3 className='font-bold'>Shop All</h3>
        <div className='mt-4 sm:max-w-[40rem]'>
          <p className='text-justify text-sm sm:text-base'>
            Build your PANGAIA wardrobe with styles made from innovative materials. Discover our
            tracksuits, t-shirts, activewear, outerwear and sneakers for women in nature-inspired
            colors.
          </p>
        </div>
      </section>
      <CollectionsFilterBar />
      <section className='col-start-1 col-end-13 grid grid-cols-1 gap-4 justify-self-center p-4 sm:grid-cols-2 lg:col-start-2 lg:col-end-12 lg:grid-cols-3 2xl:col-start-3 2xl:col-end-11 2xl:grid-cols-4'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </main>
  );
}

export default CollectionsPage;
