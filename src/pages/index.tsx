import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="La plus grande communauté de développeurs au Sénégal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO: Change the favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p className={inter.className}>Hello World</p>
      </main>
    </>
  )
}
