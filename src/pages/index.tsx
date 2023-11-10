import Header from '@/components/Header';
import ActivitySection from '@/components/home/ActivitySection';
import HeroSection from '@/components/home/HeroSection';
import EventSection from '@/components/home/EventSection';
import PartnersSection from '@/components/home/PartnersSection';
import StatsSection from '@/components/home/StatsSection';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
	const { t, lang } = useTranslation('common');
	return (
		<>
			<Header header={t('home.header')} />
			<div className="px-4 mt-16 mx-auto w-full max-w-7xl space-y-16 md:px-6 lg:px-8 lg:space-y-32">
				<HeroSection />
				<StatsSection />
				<ActivitySection />
				<EventSection />
				<PartnersSection />
			</div>
		</>
	);
}
