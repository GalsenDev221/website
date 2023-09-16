import Image from 'next/image';
import Link from 'next/link';

import ciga from '/public/img/events/ciga2023.png';
import hof22 from '/public/img/events/hacktoberfest2022.png';
import hof21 from '/public/img/events/hacktoberfest2021.png';
import xtdk21 from '/public/img/events/xaralatourdk2021.png';

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
					<article className="group">
						<Link href="/">
							<Image
								alt="Atelier Ciga"
								src={ciga}
								loading="eager"
								placeholder="blur"
								priority={true}
								className="h-full w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[30%]"
							/>
						</Link>

						<div className="p-4">
							<Link href="/">
								<h3 className="text-lg font-medium text-gray-900">
									{t('eventsGallery.title1')}
								</h3>
							</Link>

							<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
								{t('eventsGallery.desc1')}
							</p>

							<span className="rounded-full bg-blue-100 px-2.5 m-2 py-0.5 text-xs text-blue-600">
								{t('eventsGallery.date1')}
							</span>
							<span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
								CIGA, Guédiawaye
							</span>
						</div>
					</article>
				</div>
				<div>
					<article className="group">
						<Link href="/">
							<Image
								alt="Hacktoberfest 2022"
								src={hof22}
								loading="eager"
								placeholder="blur"
								priority={true}
								className="h-full w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[30%]"
							/>
						</Link>

						<div className="p-4">
							<Link href="/">
								<h3 className="text-lg font-medium text-gray-900">
									Hacktoberfest 2022
								</h3>
							</Link>

							<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
								{t('eventsGallery.desc2')}
							</p>

							<span className="rounded-full bg-blue-100 px-2.5 m-2 py-0.5 text-xs text-blue-600">
								{t('eventsGallery.date2')}
							</span>
							<span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
								Campus Xarala, Liberté 6
							</span>
						</div>
					</article>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16 mt-6">
				<div>
					<article className="group">
						<Link href="/">
							<Image
								alt="Hacktoberfest 2021"
								src={hof21}
								loading="eager"
								placeholder="blur"
								priority={true}
								className="h-full w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[30%]"
							/>
						</Link>

						<div className="p-4">
							<Link href="/">
								<h3 className="text-lg font-medium text-gray-900">
									Hacktoberfest 2021
								</h3>
							</Link>

							<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
								{t('eventsGallery.desc3')}
							</p>

							<span className="rounded-full bg-blue-100 px-2.5 m-2 py-0.5 text-xs text-blue-600">
								{t('eventsGallery.date3')}
							</span>
							<span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
								Ofisini Coworking, Liberté 6
							</span>
						</div>
					</article>
				</div>
				<div>
					<article className="group">
						<Link href="/">
							<Image
								alt="Xarala Tour Dakar 2021"
								src={xtdk21}
								loading="eager"
								placeholder="blur"
								priority={true}
								className="h-full w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[30%]"
							/>
						</Link>

						<div className="p-4">
							<Link href="/">
								<h3 className="text-lg font-medium text-gray-900">
									Xarala Tour Dakar 2021
								</h3>
							</Link>

							<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
								{t('eventsGallery.desc4')}
							</p>

							<span className="rounded-full bg-blue-100 px-2.5 m-2 py-0.5 text-xs text-blue-600">
								{t('eventsGallery.date4')}
							</span>
							<span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
								Orange Digital Center, Mermoz Ecole Police
							</span>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default EventsGallery;
