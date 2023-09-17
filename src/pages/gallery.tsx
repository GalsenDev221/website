import Header from '@/components/Header';
import useTranslation from 'next-translate/useTranslation';

import EventsGallery from '@/components/gallery/EventsGallery';

export default function Gallery() {
	const { t, lang } = useTranslation('common');
	return (
		<>
			<Header header={t('gallery.header')} />
			<EventsGallery />
		</>
	);
}
