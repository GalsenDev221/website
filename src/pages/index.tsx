import Header from '@/components/Header';
import ActivitySection from '@/components/home/ActivitySection';
import HeroSection from '@/components/home/HeroSection';
import LastEventSection from '@/components/home/LastEventSection';
import PartnersSection from '@/components/home/PartnersSection';
import StatsSection from '@/components/home/StatsSection';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
	const { t, lang } = useTranslation('common');
	return (
		<>
			<Header header={t('home.header')} />
			<HeroSection />
			<StatsSection />
			<ActivitySection />
			<LastEventSection />
			<PartnersSection />
		</>
	);
}
