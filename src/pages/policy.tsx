import Header from '@/components/Header';
import useTranslation from 'next-translate/useTranslation';

import LegalPolicy from '@/components/legal/LegalPolicy';

export default function Gallery() {
	const { t, lang } = useTranslation('common');
	return (
		<>
			<Header header={t('policy.header')} />
			<div className="px-4 mt-4 mx-auto max-w-lg md:max-w-3xl lg:max-w-screen-xl sm:px-6 lg:px-8">
				<LegalPolicy />
			</div>
		</>
	);
}
