import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Image from 'next/image'

import { Layout } from '../components/Layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}

export default App
