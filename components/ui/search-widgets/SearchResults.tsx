import React from 'react';
import { IPlantSearchData } from 'types/plants';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  console.log('searchResults', searchResults);
  const renderNoResults = !loading && !searchResults?.length;
  if (searchCharacterCount < 3) return <></>;

  const handleSelection = (slug: string) => {
    console.log('handleSelection', slug);

    router.push({
      pathname: `/plants/${slug}`,
    });
  };
  return (
    <section
      id='search-results-container'
      className='grid grid-cols-1 bg-white rounded-sm gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-4'
    >
      {searchResults?.map((result) => (
        <button
          onClick={() => handleSelection(result.slug)}
          key={result.id}
          className='max-w-sm overflow-hidden border rounded shadow-lg cursor-pointer border-gray-light hover:bg-gray-light'
        >
          <div className='w-full'>
            <img
              alt={`${result.common_name}-search-thumb-img`}
              src={result.image_url}
              className='w-[300px] h-[200px] object-cover'
            />
          </div>
          <div className='mt-4 mb-2 text-xl font-bold'>
            {result.common_name}
          </div>
          <p className='mb-5 text-base text-gray-700'>
            {result.scientific_name}
          </p>
        </button>
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
