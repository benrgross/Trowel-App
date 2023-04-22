import { getPlant } from '@/utils/trefle-service';
import { GetServerSidePropsContext } from 'next';
import { IPlantData } from 'types/plants';

const PlantDetailPages: React.FC<IPlantData> = ({ data }) => {
  console.log(data.common_name);
  return (
    <>
      <h1>Plant</h1>
      <h1>{data.common_name}</h1>
    </>
  );
};

export default PlantDetailPages;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { slug } = context.query;
  if (slug) {
    try {
      const { data } = await getPlant(slug as string);
      return {
        props: { data },
      };
    } catch (error) {
      console.log(error);
      return { props: { data: {} } };
    }
  }
  return {
    props: {
      data: {},
    },
  };
}
