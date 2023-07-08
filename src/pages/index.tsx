import Header from '@/components/Header';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ActivitySection from '@/components/home/ActivitySection';
import LastEventSection from '@/components/home/LastEventSection';
import PartnersSection from '@/components/home/PartnersSection';
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
