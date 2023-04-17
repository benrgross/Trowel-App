import { IPlantSearchData, IPlantSearchResultData } from 'types/plants';

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
