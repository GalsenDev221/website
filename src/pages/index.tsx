import Head from 'next/head';

import HeroSection from './components/home/HeroSection';
import StatsSection from './components/home/StatsSection';
import ActivitySection from './components/home/ActivitySection';
import LastEventSection from './components/home/LastEventSection';
import PartnersSection from './components/home/PartnersSection';

export default function Home() {
	return (
		<>
			<Head>
				<title>Galsen DEV - La communauté des développeurs sénégalais 🇸🇳</title>
				<meta
					name="description"
					content="Renforcer la scène tech sénégalaise, connecter les développeurs, partager la connaissance et offrir un soutien communautaire."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon/favicon.ico" />
			</Head>
			<HeroSection />
			<StatsSection />
			<ActivitySection />
			<LastEventSection />
			<PartnersSection />
		</>
	);
}
