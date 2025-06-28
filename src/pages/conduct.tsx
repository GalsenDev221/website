import Header from '@/components/Header';
import useTranslation from 'next-translate/useTranslation';

import LegalConduct from '@/components/legal/LegalConduct';

export default function CodeOfConduct() {
	const { t, lang } = useTranslation('common');
	return (
		<>
			<Header header={t('conduct.header')} />
			<div className="px-4 mt-4 mx-auto max-w-lg md:max-w-3xl lg:max-w-screen-xl sm:px-6 lg:px-8">
				<LegalConduct />
			</div>
		</>
	);
}
