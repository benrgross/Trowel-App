import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Shift Lab Starter</title>
      </Head>

      <section className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="mb-4 text-4xl font-bold">
          Shift Lab NextJS + Typescript + Tailwind Starter
        </h1>

        <Image
          src="/shift-icon.png"
          alt="Shift Logo"
          width={128}
          height={128}
        />
      </section>
    </div>
  )
}

export default Home
