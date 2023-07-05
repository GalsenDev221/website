import Header from './components/Header';
import HeroSection from './components/home/HeroSection';
import StatsSection from './components/home/StatsSection';
import ActivitySection from './components/home/ActivitySection';
import LastEventSection from './components/home/LastEventSection';
import PartnersSection from './components/home/PartnersSection';

export default function Home() {
	return (
		<>
			<Header header="Galsen DEV - La communauté des développeurs sénégalais 🇸🇳" />
			<HeroSection />
			<StatsSection />
			<ActivitySection />
			<LastEventSection />
			<PartnersSection />
		</>
	);
}
