import CollectionsFilterBar from "../components/collections/CollectionsFilterBar";
import ProductCard from "../components/collections/ProductCard";

function CollectionsPage() {
  return (
    <main className='relative grid min-h-screen grid-cols-12 gap-y-4 px-5 pt-32 sm:px-10'>
      <section className='col-span-full'>
        <div className='mb-8'>
          <p>Home / Shop All</p>
        </div>
        <h3 className='font-bold'>Shop All</h3>
        <div className='mr-4 mt-4 sm:max-w-[40rem]'>
          <p className='text-justify text-sm sm:text-base xl:text-lg'>
            Build your PANGAIA wardrobe with styles made from innovative materials. Discover our
            tracksuits, t-shirts, activewear, outerwear and sneakers for women in nature-inspired
            colors.
          </p>
        </div>
      </section>
      <CollectionsFilterBar />
      <section className='col-span-full'>
        <div className='grid grid-cols-12 gap-4 justify-self-center'>
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className='col-span-full sm:col-span-6 lg:col-span-3'>
              <ProductCard />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CollectionsPage;
