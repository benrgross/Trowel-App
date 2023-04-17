export interface IPlantSearchResultData {
  data: IPlantSearchData[];
  links:
    | {
        first: string;
        last: string;
        next: string;
        self: string;
      }
    | {};
  total: number;
}

export interface IPlantSearchData {
  author: string;
  bibliography: string;
  common_name: string;
  family: string;
  family_common_name: string;
  genus: string;
  genus_id: number;
  id: number;
  image_url: string;
  links: {
    genus: string;
    plant: string;
    self: string;
  };
  rank: string;
  scientific_name: string;
  slug: string;
  status: string;
  synonyms: string[];
  year: number;
}
