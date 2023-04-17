import { Layout } from '@/components/Layout';
import { useSession } from 'next-auth/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { PlantSearchWidget } from '@/components/ui/search-widgets/PlantSearchWidget';
import { IPlantSearchData, IPlantSearchResultData } from 'types/plants';
import { useEffect, useState } from 'react';
import { searchPlants } from '@/utils/trefle-service';
import SearchResults from '@/components/ui/search-widgets/SearchResults';
import Pagination from '@/components/ui/Pagination';
import { Links } from '@/components/ui/Pagination';

const Home: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<IPlantSearchData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [links, setLinks] = useState<Links | {}>({});
  const [page, setPage] = useState<number>(1);
  const { data: session, status } = useSession();

  const clearSearch = () => setSearchQuery('');

  useEffect(() => {
    const searchPants = async () => {
      setLoading(true);
      setPage(1);

      const plantsResults = await searchPlants(searchQuery, page);

      setSearchResults(plantsResults.data);
      setLinks(plantsResults.links);
      setLoading(false);
    };

    if (searchQuery.length > 2) {
      searchPants();
    } else {
      setSearchResults([]);
      setLinks({});
    }
  }, [searchQuery]);

  const handlePageSelect = async (pageNumber: number) => {
    setPage(pageNumber);
    const plantsResults = await searchPlants(searchQuery, pageNumber);

    setSearchResults(plantsResults.data);

    setLinks(plantsResults.links);
    setLoading(false);
  };

  return (
    <Layout title='Home'>
      <div className='flex flex-col items-center justify-center py-6 mt-10'>
        <Head>
          <title>Profile {session?.user?.name}</title>
        </Head>

        <section className='flex flex-col items-center justify-center flex-1 w-full px-20 mb-6 text-center'>
          <h1 className='mb-10 text-4xl font-bold'>
            Welcome {session?.user?.name}
          </h1>

          <PlantSearchWidget
            inputPlaceholder='Search for any plant'
            searchQuery={searchQuery}
            onChangeCallback={setSearchQuery}
            searchResults={searchResults}
            clearSearch={clearSearch}
            loading={loading}
          />

          <SearchResults
            searchResults={searchResults}
            loading={loading}
            searchCharacterCount={searchQuery.length}
          />
          {searchQuery.length > 2 && (
            <Pagination
              links={links}
              onPageSelect={handlePageSelect}
              currentPage={page}
            />
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Home;
