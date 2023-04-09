import SearchField from './SearchField';
import { IPlantSearchData } from 'types/plants';

export type SearchWidgetProps = {
  searchQuery: string;
  searchResults: IPlantSearchData[];
  onChangeCallback: any;
  inputPlaceholder: string;
  clearSearch: () => void;
  loading: boolean;
};

export const PlantSearchWidget = ({
  searchQuery,
  searchResults,
  inputPlaceholder,
  onChangeCallback,
  clearSearch,
  loading,
}: SearchWidgetProps) => {
  return (
    <section className='w-2/3 mb-10'>
      <div
        id='plant-search-widget'
        className={`relative w-full border border-gray-mediumLight rounded-md ${
          searchResults?.length ? 'shadow-lg border' : 'shadow-none'
        }`}
        data-component='customer-search-widget'
      >
        <SearchField
          searchQuery={searchQuery}
          inputPlaceholder={inputPlaceholder}
          onChangeCallback={onChangeCallback}
          clearSearch={clearSearch}
          hasResults={!!searchResults?.length}
        />
      </div>
    </section>
  );
};
