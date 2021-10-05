import prisma from "lib/prisma";

export const getStaticPaths = async () => {
  const data = await prisma.mountain.findMany({});
 

  const paths = data.map((mountain) => {
    return {
      params: { name: mountain.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({params}) => {
  const res = await prisma.mountain.findMany({
    where: {
      name: params.name
    }
  })
  return {
    props: {mountain: res[0]}
  }
}


const MountainDetails = ({mountain}) => {
  return <div>{mountain.name}</div>;
};

export default MountainDetails;
