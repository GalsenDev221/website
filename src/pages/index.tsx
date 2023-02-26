import Head from 'next/head'
// import { Inter } from '@next/font/google'
import Hero from './components/HeroSection'
import Stats from './components/StatsSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Galsen DEV - La communauté des développeurs sénégalais 🇸🇳</title>
        <meta name="description" content="La plus grande communauté de développeurs au Sénégal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <main className="">
        <Hero/>
        <Stats/>
      </main>
    </>
  )
}
