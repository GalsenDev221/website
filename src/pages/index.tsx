import Head from "next/head";

import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ActivitySection from "./components/ActivitySection";
import LastEventSection from "./components/LastEventSection";
import PartnersSection from "./components/PartnersSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Galsen DEV - La communauté des développeurs sénégalais 🇸🇳</title>
        <meta
          name="description"
          content="La plus grande communauté de développeurs au Sénégal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <main className="px-4 mt-16 mx-auto max-w-lg space-y-16 lg:max-w-screen-xl sm:px-6 lg:px-8 lg:space-y-32">
        <HeroSection />
        <StatsSection />
        <ActivitySection />
        <LastEventSection />
        <PartnersSection />
      </main>
    </>
  );
}
