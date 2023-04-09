import { Layout } from '@/components/layout';
import { useSession } from 'next-auth/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  return (
    <Layout title='Home'>
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <Head>
          <title>Profile {session?.user?.name}</title>
        </Head>

        <section className='flex flex-col items-center justify-center flex-1 w-full px-20 text-center'>
          <h1 className='mb-4 text-4xl font-bold'>
            Welcome {session?.user?.name}
          </h1>

          <Image
            src='/trowel-logo.png'
            alt='trowel-logo'
            width={128}
            height={128}
          />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
