import Header from '@/components/Header';
import Presentation from '@/components/about/Presentation';
import useTranslation from 'next-translate/useTranslation';

export default function About() {
	const { t, lang } = useTranslation('common');
	return (
		<>
			<Header header={t('about.header')} />
			<div className="px-4 mt-16 mx-auto max-w-lg lg:max-w-screen-xl sm:px-6 lg:px-8">
				<Presentation />
			</div>
		</>
	);
}
