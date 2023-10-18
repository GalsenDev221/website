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
			<div className="px-4 mt-16 mx-auto max-w-lg space-y-16 lg:max-w-screen-xl sm:px-6 lg:px-8 lg:space-y-32">
				<HeroSection />
				<StatsSection />
				<ActivitySection />
				<LastEventSection />
				<PartnersSection />
			</div>
		</>
	);
}
