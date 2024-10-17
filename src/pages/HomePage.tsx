import ShowcaseSection from "../components/ShowcaseSection";
import { ShowCaseSectionData } from "../constraints/SHOWCASE_DATA";

function HomePage() {
  return (
    <main className='hide-scroll h-[91.5vh] w-dvw snap-y snap-mandatory overflow-hidden overflow-y-auto scroll-smooth ease-in-out'>
      {ShowCaseSectionData.map((data, index) => (
        <ShowcaseSection key={index} data={data} />
      ))}
    </main>
  );
}

export default HomePage;
