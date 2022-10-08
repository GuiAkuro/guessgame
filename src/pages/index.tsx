import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from "../components/templates/header"

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-zinc-900">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  )
}

export default Home
