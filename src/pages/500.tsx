import Head from "next/head"
import Error500 from "./components/errors/500Error"

export default function Custom500() {
  return (
    <>
      <Head>
        <title>Oup !</title>
        <meta name="description" content="La plus grande communauté de développeurs au Sénégal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Error500/>
    </>
  );
}
