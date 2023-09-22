import Link from 'next/link';

const EventContent = () => {
	const upcomingEvents = [
		{
			name: 'Hacktoberfest 2023',
			description:
				'Third edition of the Hacktoberfest, celebrating the open source world.',
			date: new Date('10/23/2023'),
		},
	];

	const previousEvents = [
		{
			name: 'Atelier Dev Etudiant CIGA',
			description:
				"Une belle journ2e d'apprentissage avec les 2tudiants de CIGA.",
			date: new Date('05/27/2023'),
		},
		{
			name: 'Hacktoberfest 2023',
			description:
				'Third edition of the Hacktoberfest, celebrating the open source world.',
			date: new Date('10/15/2022'),
		},
		{
			name: 'Hacktoberfest 2021',
			description:
				'First edition of the Hacktoberfest, celebrating the open source world.',
			date: new Date('10/23/2021'),
		},
		{
			name: 'Xarala Tour Dakar 2021',
			description: 'Cloture de la 1ere phase du Xarala Tour 2021.',
			date: new Date('07/3/2023'),
		},
	];

	return (
		<section className="">
			<hgroup>
				<h1 className="text-3xl font-bold text-center lg:text-left">Events</h1>
				<p className="mt-2 text-gray-500 text-center lg:text-left">
					A listing of all the upcoming and previous events from our community.
				</p>
			</hgroup>

			<div className="mt-8 grid gap-16 lg:grid-cols-2">
				<article className="">
					<h2 className="text-2xl font-bold text-gray-700 text-center lg:text-3xl lg:text-left">
						Upcoming events
					</h2>
					{/* TODO: order by date */}
					{upcomingEvents.map((event) => (
						<EventCard key={event.name} event={event} />
					))}
				</article>
				<article className="">
					<h2 className="text-2xl font-bold text-gray-700 text-center lg:text-3xl lg:text-left">
						Previous events
					</h2>
					{/* TODO: order by date */}
					{previousEvents.map((event) => (
						<EventCard key={event.name} event={event} />
					))}
				</article>
			</div>
		</section>
	);
};

interface EventCardProps {
	event: {
		name: string;
		description: string;
		date: Date;
	};
}

const EventCard = ({ event }: EventCardProps) => {
	const { date, name, description } = event;

	// TODO: grab the loocales from next-translate
	const formattedDate = date.toLocaleDateString('fr-SN');
	const formattedMonthYear = date.toLocaleDateString('fr-SN', {
		month: 'short',
		year: 'numeric',
	});
	const eventDay = date.getDate().toString().padStart(2, '0');

	const slug = name
		.replaceAll(/[^a-zA-Z0-9 ]/g, '')
		.replaceAll(' ', '-')
		.toLowerCase();

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
					{description}
				</p>
			</div>
		</Link>
	);
};

export default EventContent;
