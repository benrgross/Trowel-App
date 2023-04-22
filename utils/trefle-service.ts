import { IPlantResponseData, IPlantSearchResultData } from 'types/plants';
const { NEXT_PUBLIC_URL } = process.env;
export const searchPlants = async (
  query: string,
  page: number
): Promise<IPlantSearchResultData> => {
  try {
    const response = await fetch(`/api/plants/search/${query}?page=${page}`);
    const data = await response.json();

    return { data: data.data, links: data.links, total: data.meta.total };
  } catch (error) {
    console.error('Error during plant search:', error);
    return { data: [], links: {}, total: 0 };
  }
};

export const getPlant = async (query: string): Promise<IPlantResponseData> => {
  try {
    // figure out this weird behavior
    const response = await fetch(
      `${NEXT_PUBLIC_URL}/api/plants/details/${query}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching plant:', error);
    return { data: {} };
  }
};
