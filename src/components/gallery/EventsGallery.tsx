import Image from 'next/image';
import Link from 'next/link';

import ciga from '/public/img/events/ciga2023.png';
import hof22 from '/public/img/events/hacktoberfest2022.png';
import hof21 from '/public/img/events/hacktoberfest2021.png';
import xtdk21 from '/public/img/events/xaralatourdk2021.png';

import RightArrow from '../svg/RightArrow';

import useTranslation from 'next-translate/useTranslation';

const EventsGallery = () => {
	const { t, lang } = useTranslation('gallery');
	return (
		<section className="">
			<div className="mx-auto mb-16 max-w-3xl text-center">
				<h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
					{t('eventsGallery.firstHeading')}
				</h2>

				<p className="mt-4 text-gray-500 sm:text-xl">
					{t('eventsGallery.secondHeading')}
				</p>
			</div>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16">
				<div>
					<article className="relative overflow-hidden rounded-lg shadow">
						<Image
							alt="Atelier Ciga"
							src={ciga}
							loading="eager"
							placeholder="blur"
							priority={true}
							className="absolute inset-0 h-full w-full object-cover transition group-hover:grayscale-[30%]"
						/>
						<div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
							<div className="p-4 sm:p-6">
								<Link
									className="group mb-2 relative inline-flex items-center overflow-hidden rounded bg-baseColor px-6 py-3 text-white focus:outline-none focus:none"
									href="https://photos.app.goo.gl/cVtbXhHubx5FEd5f7"
									target="_blank"
								>
									<RightArrow />
									<span className="text-sm font-medium transition-all group-hover:me-4">
										Voir les photos
									</span>
								</Link>

								<h3 className="text-lg font-medium text-gray-200">
									{t('eventsGallery.title1')}
								</h3>
								<p className="line-clamp-3 text-sm/relaxed text-gray-300">
									{t('eventsGallery.desc1')}
								</p>

								<span className="rounded-full bg-baseColor px-2.5 mr-2 py-0.5 text-xs text-blue-100">
									{t('eventsGallery.date1')}
								</span>
								<span className="rounded-full bg-baseColor px-2.5 py-0.5 text-xs text-blue-100">
									CIGA, Guédiawaye
								</span>
							</div>
						</div>
					</article>
				</div>
				<div>
					<article className="relative overflow-hidden rounded-lg shadow">
						<Image
							alt="Hacktoberfest 2022"
							src={hof22}
							loading="eager"
							placeholder="blur"
							priority={true}
							className="absolute inset-0 h-full w-full object-cover transition group-hover:grayscale-[30%]"
						/>
						<div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
							<div className="p-4 sm:p-6">
								<Link
									className="group mb-2 relative inline-flex items-center overflow-hidden rounded bg-baseColor px-6 py-3 text-white focus:outline-none focus:none"
									href="https://photos.app.goo.gl/PwzmZYvXwT1zo6ss5"
									target="_blank"
								>
									<RightArrow />
									<span className="text-sm font-medium transition-all group-hover:me-4">
										Voir les photos
									</span>
								</Link>

								<h3 className="text-lg font-medium text-gray-200">
									Hacktoberfest 2022
								</h3>
								<p className="line-clamp-3 text-sm/relaxed text-gray-300">
									{t('eventsGallery.desc2')}
								</p>

								<span className="rounded-full bg-baseColor px-2.5 mr-2 py-0.5 text-xs text-blue-100">
									{t('eventsGallery.date2')}
								</span>
								<span className="rounded-full bg-baseColor px-2.5 py-0.5 text-xs text-blue-100">
									Campus Xarala, Liberté 6
								</span>
							</div>
						</div>
					</article>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16 mt-6">
				<div>
					<article className="relative overflow-hidden rounded-lg shadow">
						<Image
							alt="Hacktoberfest 2021"
							src={hof21}
							loading="eager"
							placeholder="blur"
							priority={true}
							className="absolute inset-0 h-full w-full object-cover transition group-hover:grayscale-[30%]"
						/>
						<div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
							<div className="p-4 sm:p-6">
								<Link
									className="group mb-2 relative inline-flex items-center overflow-hidden rounded bg-baseColor px-6 py-3 text-white focus:outline-none focus:none"
									href="https://photos.app.goo.gl/i1RewRU3DrDQVM4P8"
									target="_blank"
								>
									<RightArrow />
									<span className="text-sm font-medium transition-all group-hover:me-4">
										Voir les photos
									</span>
								</Link>

								<h3 className="text-lg font-medium text-gray-200">
									Hacktoberfest 2021
								</h3>
								<p className="line-clamp-3 text-sm/relaxed text-gray-300">
									{t('eventsGallery.desc3')}
								</p>

								<span className="rounded-full bg-baseColor px-2.5 mr-2 py-0.5 text-xs text-blue-100">
									{t('eventsGallery.date3')}
								</span>
								<span className="rounded-full bg-baseColor px-2.5 py-0.5 text-xs text-blue-100">
									Ofisini Coworking, Liberté 6
								</span>
							</div>
						</div>
					</article>
				</div>
				<div>
					<article className="relative overflow-hidden rounded-lg shadow">
						<Image
							alt="Xarala Tour Dakar 2021"
							src={xtdk21}
							loading="eager"
							placeholder="blur"
							priority={true}
							className="absolute inset-0 h-full w-full object-cover transition group-hover:grayscale-[30%]"
						/>
						<div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
							<div className="p-4 sm:p-6">
								<Link
									className="group mb-2 relative inline-flex items-center overflow-hidden rounded bg-baseColor px-6 py-3 text-white focus:outline-none focus:none"
									href="https://photos.app.goo.gl/F8W2gWh6Y6AW7Xto7"
									target="_blank"
								>
									<RightArrow />
									<span className="text-sm font-medium transition-all group-hover:me-4">
										Voir les photos
									</span>
								</Link>

								<h3 className="text-lg font-medium text-gray-200">
									Xarala Tour Dakar 2021
								</h3>
								<p className="line-clamp-3 text-sm/relaxed text-gray-300">
									{t('eventsGallery.desc4')}
								</p>

								<span className="rounded-full bg-baseColor px-2.5 mr-2 py-0.5 text-xs text-blue-100">
									{t('eventsGallery.date4')}
								</span>
								<span className="rounded-full bg-baseColor px-2.5 py-0.5 text-xs text-blue-100">
									Orange Digital Center, Mermoz Ecole Police
								</span>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default EventsGallery;
