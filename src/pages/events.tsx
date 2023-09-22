import useTranslation from 'next-translate/useTranslation';
import Header from '@/components/Header';
import EventContent from '@/components/events/EventContent';

export default function Events() {
	const { t } = useTranslation('common');
	return (
		<>
			<Header header={t('events.header')} />
			<EventContent />
		</>
	);
}
