import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cortadela</title>
        <meta name="description" content="Cortadela Podcasts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Results />
    </div>
  )
}
