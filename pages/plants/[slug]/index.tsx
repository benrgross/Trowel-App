import { Layout } from '@/components/Layout';
import { getPlant } from '@/utils/trefle-service';
import { GetServerSidePropsContext } from 'next';
import { IPlantData, IPlantResponseData } from 'types/plants';
import { fetchPlantCareProperties } from '@/utils/gpt-service';
import { useState } from 'react';
import { toTitleCase } from '@/utils/helper-fuctions';
import ButtonPrimary from '@/components/ui/buttons/ButtonPrimary';
import CarouselComponent from '@/components/ui/images/Carousel';

const PlantDetailPages: React.FC<IPlantData> = ({ data }) => {
  const [trefleData, setTrefleData] = useState<IPlantResponseData>();
  const [plantCare, setPlantCare] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [plantCareLoading, setPlantCareLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  console.log(data);
  const getPlantInfo = async (plant: string, slug: string) => {
    setLoading(true);
    try {
      const plantData = await getPlant(slug);
      setTrefleData(plantData);
      console.log(plantData);
      const plantCare = await fetchPlantCareProperties(plant);
      setPlantCare(plantCare);
      setPlantCareLoading(false);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <Layout title={'Plant Details'}>
      <div className='px-[20px] mb-[120px] xl:mb-[251px] max-w-[1364px] mx-auto mt-14'>
        <div className='flex flex-col items-center'>
          <h1 className='mb-10 text-4xl'>{toTitleCase(data.common_name)}</h1>
          <CarouselComponent images={data.main_species.images} />
          <ButtonPrimary
            onClick={() => getPlantInfo(data.scientific_name, data.slug)}
            text='Get Plant Info'
          />
        </div>
      </div>
    </Layout>
  );
};

export default PlantDetailPages;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { slug } = context.query;
  if (slug) {
    try {
      const { data } = await getPlant(slug as string);
      console.log(data);
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
