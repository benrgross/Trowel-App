import { IPlantSearchData, IPlantSearchResultData } from 'types/plants';

export const searchPlants = async (
  query: string
): Promise<IPlantSearchData[]> => {
  try {
    const response = await fetch(`/api/plants/search/${query}`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error('Error during plant search:', error);
    return [];
  }
};
