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
  meta?: {
    total: number;
  };
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
  meta: {
    total: number;
  };
}

export interface IPlantResponseData {
  data:
    | {
        id: number;
        common_name: string | null;
        slug: string;
        scientific_name: string;
        main_species_id: number;
        image_url: string | null;
        year: number;
        bibliography: string;
        author: string;
        family_common_name: string;
        genus_id: number;
        observations: string;
        vegetable: boolean;
        links: {
          self: string;
          species: string;
          genus: string;
        };
        main_species: MainSpecies;
        genus: Genus;
        family: Family;
        species: Species[];
        subspecies: any[];
        varieties: any[];
        hybrids: any[];
        forms: any[];
        subvarieties: any[];
        sources: Source[];
        images: [any];
      }
    | {};
  meta?: {
    last_modified: string;
  };
}

export interface IPlantData {
  data: {
    id: number;
    common_name: string | null;
    slug: string;
    scientific_name: string;
    main_species_id: number;
    image_url: string | null;
    year: number;
    bibliography: string;
    author: string;
    family_common_name: string;
    genus_id: number;
    observations: string;
    vegetable: boolean;
    links: {
      self: string;
      species: string;
      genus: string;
    };
    main_species: MainSpecies;
    genus: Genus;
    family: Family;
    species: Species[];
    subspecies: any[];
    varieties: any[];
    hybrids: any[];
    forms: any[];
    subvarieties: any[];
    sources: Source[];
  };
  meta: {
    last_modified: string;
  };
}

export interface MainSpecies {
  id: number;
  common_name: string | null;
  slug: string;
  scientific_name: string;
  year: number;
  bibliography: string;
  author: string;
  status: string;
  rank: string;
  family_common_name: string;
  genus_id: number;
  observations: string;
  vegetable: boolean;
  image_url: string | null;
  genus: string;
  family: string;
  duration: string | null;
  edible_part: string | null;
  edible: boolean;
  images: Images;
  common_names: Record<string, unknown>;
  distribution: {
    native: string[];
  };
  distributions: {
    native: Distribution[];
  };
  flower: {
    color: string | null;
    conspicuous: boolean | null;
  };
  foliage: {
    texture: string | null;
    color: string | null;
    leaf_retention: boolean | null;
  };
  fruit_or_seed: {
    conspicuous: boolean | null;
    color: string | null;
    shape: string | null;
    seed_persistence: boolean | null;
  };
  specifications: {
    ligneous_type: string | null;
    growth_form: string | null;
    growth_habit: string | null;
    growth_rate: string | null;
    average_height: {
      cm: number | null;
    };
    maximum_height: {
      cm: number | null;
    };
    nitrogen_fixation: string | null;
    shape_and_orientation: string | null;
    toxicity: string | null;
  };
  growth: Growth;
  links: {
    self: string;
    plant: string;
    genus: string;
  };
  synonyms: any[];
  sources: Source[];
}

export interface Genus {
  id: number;
  name: string;
  slug: string;
  links: {
    self: string;
    plants: string;
    species: string;
    family: string;
  };
}

export interface Family {
  id: number;
  name: string;
  common_name: string;
  slug: string;
  links: {
    self: string;
    division_order: string;
    genus: string;
  };
}

export interface Species {
  id: number;
  common_name: string | null;
  slug: string;
  scientific_name: string;
  year: number;
  bibliography: string;
  author: string;
  status: string;
  rank: string;
  family_common_name: string;
  genus_id: number;
  image_url: string | null;
  synonyms: any[];
  genus: string;
  family: string;
  links: {
    self: string;
    plant: string;
    genus: string;
  };
}

export interface Distribution {
  id: number;
  name: string;
  slug: string;
  tdwg_code: string;
  tdwg_level: number;
  species_count: number;
  links: {
    self: string;
    plants: string;
    species: string;
  };
}

interface Growth {
  description: string | null;
  sowing: string | null;
  days_to_harvest: number | null;
  row_spacing: {
    cm: number | null;
  };
  spread: {
    cm: number | null;
  };
  ph_maximum: number | null;
  ph_minimum: number | null;
  light: number | null;
  atmospheric_humidity: number | null;
  growth_months: string[] | null;
  bloom_months: string[] | null;
  fruit_months: string[] | null;
  minimum_precipitation: {
    mm: number | null;
  };
  maximum_precipitation: {
    mm: number | null;
  };
  minimum_root_depth: {
    cm: number | null;
  };
  minimum_temperature: {
    deg_f: number | null;
    deg_c: number | null;
  };
  maximum_temperature: {
    deg_f: number | null;
    deg_c: number | null;
  };
  soil_nutriments: number | null;
  soil_salinity: number | null;
  soil_texture: number | null;
  soil_humidity: number | null;
}

interface Source {
  last_update: string;
  id: string;
  name: string;
  url: string;
  citation: string | null;
}

interface Image {
  id: number;
  image_url: string;
  copyright: string;
}

interface Images {
  bark: Image[];
  flower: Image[];
  fruit: Image[];
  habit: Image[];
  leaf: Image[];
  other: Image[];
  '': Image[]; // for empty string key
}
