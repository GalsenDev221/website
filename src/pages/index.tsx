import Header from '@/components/Header';
import ActivitySection from '@/components/home/ActivitySection';
import HeroSection from '@/components/home/HeroSection';
import LastEventSection from '@/components/home/LastEventSection';
import PartnersSection from '@/components/home/PartnersSection';
import StatsSection from '@/components/home/StatsSection';

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
