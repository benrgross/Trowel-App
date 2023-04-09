import React from 'react';
import { IPlantSearchData } from 'types/plants';

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
  return (
    <section
      id='search-results-container'
      className='w-full overflow-hidden bg-white rounded-b search-results-container'
    >
      {searchResults?.map((result) => (
        <li
          key={result.id}
          className='w-full p-4 border-b border-gray-mediumLight'
        >
          <div className='flex items-center'>
            <div className='flex flex-col'>
              <img
                alt={`${result.common_name}-search-thumb-img`}
                src={result.image_url}
                width={100}
                height={100}
              />
              <span className='text-sm font-bold text-gray-900'>
                {result.common_name}
              </span>
              <span className='text-sm text-gray-500'>
                {result.scientific_name}
              </span>
            </div>
          </div>
        </li>
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
