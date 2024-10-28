import ShowcaseSection from "../components/ShowcaseSection";
import { ShowCaseSectionData } from "../constraints/SHOWCASE_DATA";

function HomePage() {
  return (
    <main className='hide-scroll h-[90.4vh] w-full snap-y snap-mandatory overflow-hidden overflow-y-auto scroll-smooth ease-in-out xl:h-[91vh] 2xl:h-[91.2vh]'>
      {ShowCaseSectionData.map((data, index) => (
        <ShowcaseSection key={index} data={data} />
      ))}
    </main>
  );
}

export default HomePage;
