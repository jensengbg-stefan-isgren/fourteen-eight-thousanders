import prisma from "../lib/prisma";
import Header from "@/components/HeaderSection";
import MountainCardSection from "@/components/MountainCardSection";
import data from "../data/data";

const Home = ({ mountains }) => {
  const saveMountains = async (data) => {
    data.forEach(async (element) => {
      await fetch("/api/mountains", {
        method: "POST",
        body: JSON.stringify(element),
      });
    });
  };

  return (
    <div>
      <Header />
      <button onClick={() => saveMountains(data)}>Add</button>
      <MountainCardSection mountains={mountains} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await prisma.mountain.findMany({});
  return { props: { mountains: data } };
};
