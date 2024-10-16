import ShowcaseSection from "../components/ShowcaseSection";

function HomePage() {
  return (
    <main className='hide-scroll h-[91.7vh] w-dvw snap-y snap-mandatory overflow-hidden overflow-y-auto scroll-smooth ease-in-out'>
      <ShowcaseSection />
      <section className='h-full w-full snap-center snap-always bg-green-500'>
        <h1>section1</h1>
      </section>
      <section className='h-full w-full snap-center snap-always bg-blue-500'>
        <h1>section1</h1>
      </section>
    </main>
  );
}

export default HomePage;
