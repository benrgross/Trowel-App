import Head from 'next/head';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Image from 'next/image';

import { Layout } from '../components/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,400&display=swap'
        />
      </Head>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
};

export default App;
