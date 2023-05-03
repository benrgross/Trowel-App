import { Layout } from '@/components/Layout';
import { getPlant } from '@/utils/trefle-service';
import { GetServerSidePropsContext } from 'next';
import { IPlantData } from 'types/plants';
import { fetchPlantCareProperties } from '@/utils/gpt-service';

const PlantDetailPages: React.FC<IPlantData> = ({ data }) => {
  const getPlantInfo = async (plant: string) => {
    const data = await fetchPlantCareProperties(plant);

    console.log('gpt data', data);
  };

  console.log(data.common_name);
  return (
    <Layout title={'Plant Details'}>
      <h1>Plant</h1>
      <h1>{data.common_name}</h1>
      <button onClick={() => getPlantInfo(data.scientific_name)}>
        Plant Info
      </button>
    </Layout>
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
