import useSWR from 'swr';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import Header from '@/components/Header';
import { Event } from '@/pages/api/events/type';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Events() {
	const { t: translationCommon } = useTranslation('common');
	const { t } = useTranslation('events');

	const { data, error, isLoading } = useSWR<Event[]>('/api/events', fetcher);

	// TODO: better handle these use cases
	if (error) return <div>{t('eventsPage.fail')}</div>;
	if (isLoading) return <div>{t('eventsPage.load')}</div>;
	if (!data) return null;

	const upcomingEvents = data.filter((events) => events?.type === 'upcoming');
	const previousEvents = data.filter((events) => events?.type === 'previous');

	return (
		<>
			<Header header={translationCommon('events.header')} />
			<div className="px-4 mt-16 mx-auto max-w-lg md:max-w-3xl lg:max-w-screen-xl sm:px-6 lg:px-8">
				<section className="">
					<hgroup>
						<h1 className="text-3xl font-bold text-center lg:text-left">
							{t('eventsPage.title')}
						</h1>
						<p className="mt-2 text-gray-500 text-center lg:text-left">
							{t('eventsPage.titleDesc')}
						</p>
					</hgroup>

					<div className="mt-8 grid gap-16 lg:grid-cols-2">
						<article className="">
							<h2 className="text-2xl font-bold text-gray-700 text-center lg:text-3xl lg:text-left">
								{t('eventsPage.upcoming')}
							</h2>
							{/* TODO: order by date */}
							{upcomingEvents.map((event) => (
								<EventCard
									key={event.name}
									name={event.name}
									date={event.date}
								/>
							))}
						</article>
						<article className="">
							<h2 className="text-2xl font-bold text-gray-700 text-center lg:text-3xl lg:text-left">
								{t('eventsPage.previous')}
							</h2>
							{/* TODO: order by date */}
							{previousEvents.map((event) => (
								<EventCard
									key={event.name}
									name={event.name}
									date={event.date}
								/>
							))}
						</article>
					</div>
				</section>
			</div>
		</>
	);
}

interface EventCardProps {
	name: string;
	date: string;
}

const EventCard = ({ name, date }: EventCardProps) => {
	const { t, lang } = useTranslation('events');

	const slug = name
		.replaceAll(/[^a-zA-Z0-9 ]/g, '')
		.replaceAll(' ', '-')
		.toLowerCase();

	let locales: string;

	// TODO: maybe `next-translate` has a function for getting the locales
	switch (lang) {
		case 'fr':
			locales = 'fr-SN';
			break;
		case 'en':
			locales = 'en-US';
			break;
		default:
			locales = 'fr-SN';
			break;
	}

	const formattedDate = new Date(date).toLocaleDateString(locales);
	const formattedMonthYear = new Date(date).toLocaleDateString(locales, {
		month: 'short',
		year: 'numeric',
	});

	const eventDay = new Date(date).getDate().toString().padStart(2, '0');

	return (
		<Link
			href={'events/' + slug}
			className="mt-6 bg-gray-50 grid grid-cols-[auto_1fr] shadow duration-300 hover:shadow-lg"
		>
			<time
				dateTime={formattedDate}
				className="bg-gray-100 text-gray-700 w-28 h-28 flex flex-col items-center justify-center capitalize"
			>
				<span className="text-2xl font-semibold text-gray-900">{eventDay}</span>
				{formattedMonthYear}
			</time>
			<div className="px-4 self-center">
				<h3 className="text-lg font-medium text-gray-900">{name}</h3>
				<p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-700">
					{t(`eventsPage.events.${slug}.desc`)}
				</p>
			</div>
		</Link>
	);
};
