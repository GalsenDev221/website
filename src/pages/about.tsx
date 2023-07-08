import Header from '@/components/Header';
import Presentation from '@/components/about/Presentation';
import useTranslation from 'next-translate/useTranslation';

export default function About() {
	const { t, lang } = useTranslation('common');
	return (
		<>
			<Header header={t('about.header')} />
			<Presentation />
		</>
	);
}
