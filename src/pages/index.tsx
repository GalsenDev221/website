import Head from 'next/head'
import LastEventSection from './components/LastEventSection'
import PartnersSection from './components/PartnersSection'
// import { Inter } from '@next/font/google'

export default function Home() {
  return (
    <>
      <Head>
        <title>Galsen DEV - La communauté des développeurs sénégalais 🇸🇳</title>
        <meta name="description" content="La plus grande communauté de développeurs au Sénégal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <main>
        <LastEventSection />
        <PartnersSection />
      </main>
    </>
  )
}
