import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import hof23 from '/public/img/events/hacktoberfest2023.jpg';
import ciga from '/public/img/events/ciga2023.jpg';
import hof22 from '/public/img/events/hacktoberfest2022.jpg';
import hof21 from '/public/img/events/hacktoberfest2021.jpg';
import xtdk21 from '/public/img/events/xaralatourdk2021.jpg';

import useTranslation from 'next-translate/useTranslation';
import { Icon } from '../ui/icon';

const EventsGallery = () => {
	const { t } = useTranslation('gallery');
	return (
		<section className="">
			<div className="mx-auto mb-8 max-w-3xl text-center">
				<h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
					{t('eventsGallery.firstHeading')}
				</h2>

				<p className="mt-4 text-gray-500 sm:text-xl">
					{t('eventsGallery.secondHeading')}
				</p>
			</div>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
				<EventGalleryCard
					eventId="event-1"
					place="Campus Xarala, Sicap Mbao"
					photosLink="https://photos.app.goo.gl/j6f9geUSLrYuwDn38"
					image={hof23}
				/>
				<EventGalleryCard
					eventId="event-2"
					place="CIGA, Guédiawaye"
					photosLink="https://photos.app.goo.gl/cVtbXhHubx5FEd5f7"
					image={ciga}
				/>
				<EventGalleryCard
					eventId="event-3"
					place="Campus Xarala, Liberté 6"
					photosLink="https://photos.app.goo.gl/PwzmZYvXwT1zo6ss5"
					image={hof22}
				/>
				<EventGalleryCard
					eventId="event-4"
					place="Ofisini Coworking, Liberté 6"
					photosLink="https://photos.app.goo.gl/i1RewRU3DrDQVM4P8"
					image={hof21}
				/>
				<EventGalleryCard
					eventId="event-5"
					place="Orange Digital Center, Mermoz Ecole Police"
					photosLink="https://photos.app.goo.gl/F8W2gWh6Y6AW7Xto7"
					image={xtdk21}
				/>
			</div>
		</section>
	);
};

interface EventGalleryCardProps {
	image: StaticImageData;
	place: string;
	photosLink: string;
	eventId: string;
}

const EventGalleryCard = ({
	image,
	place,
	photosLink,
	eventId,
}: EventGalleryCardProps) => {
	const { t } = useTranslation('gallery');

	return (
		<article className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow group md:aspect-[3/4] lg:aspect-[4/3]">
			<h3 className="sr-only">t(`eventsGallery.${eventId}.title`)</h3>
			<Image
				alt={t(`eventsGallery.${eventId}.title`)}
				src={image}
				loading="eager"
				placeholder="blur"
				priority={true}
				fetchPriority="auto"
				className="absolute inset-0 h-full w-full object-cover transition group-hover:grayscale-[80%]"
			/>
			<div className="absolute botto-0 inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/5 flex items-end">
				<div className="p-4 sm:p-6">
					<Link
						className="group relative inline-flex items-center overflow-hidden rounded bg-baseColor px-6 py-3 text-white focus:outline-none focus:none"
						href={photosLink}
						target="_blank"
					>
						<Icon
							name="arrow-right"
							className="absolute -end-full transition-all group-hover:end-4"
						/>
						<span className="text-sm font-medium transition-all group-hover:me-4">
							{t(`eventsGallery.see`)}
						</span>
					</Link>

					<h3 className="mt-4 text-lg font-medium text-gray-200">
						{t(`eventsGallery.${eventId}.title`)}
					</h3>
					<p className="line-clamp-3 text-sm/relaxed text-gray-300">
						{t(`eventsGallery.${eventId}.desc`)}
					</p>

					<div className="mt-3 flex items-end gap-3 md:flex-col lg:flex-row">
						<span className="rounded-full bg-baseColor px-2.5 py-0.5 text-xs text-blue-100">
							{t(`eventsGallery.${eventId}.date`)}
						</span>
						<span className="rounded-full bg-baseColor px-2.5 py-0.5 text-xs text-blue-100">
							{place}
						</span>
					</div>
				</div>
			</div>
		</article>
	);
};

export default EventsGallery;
