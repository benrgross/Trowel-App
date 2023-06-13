import React from 'react';
import { IPlantSearchData } from 'types/plants';
import PlantPreviewCard from '../cards/PlantPreviewCard';

interface SearchResultsProps {
  searchResults: IPlantSearchData[];
  searchCharacterCount: number;
  loading?: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  searchResults,
  loading,
  searchCharacterCount,
}) => {
  const renderNoResults = !loading && !searchResults?.length;
  if (searchCharacterCount < 3) return <></>;

  console.log(searchResults);

  return (
    <section
      id='search-results-container'
      className='grid grid-cols-1 bg-white rounded-sm gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-4'
    >
      {searchResults?.map((result) => (
        <PlantPreviewCard
          id={result.id}
          slug={result.slug}
          commonName={result?.common_name}
          scientificName={result?.scientific_name}
          imageUrl={result?.image_url}
        />
      ))}

      {renderNoResults ? (
        <li className='w-full p-4 text-center text-gray-500'>
          No results found
        </li>
      ) : loading ? (
        <li className='w-full p-4 text-center text-gray-500'>Loading...</li>
      ) : null}
    </section>
  );
};

export default SearchResults;
