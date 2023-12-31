import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { Icon } from '../ui/Icon';

const EventSection = () => {
	const { t, lang } = useTranslation('home');
	return (
		<section>
			<div className="">
				<div className="grid grid-cols-1 lg:h-[600px] lg:grid-cols-2">
					<div className="relative z-10 lg:py-16">
						<div className="relative h-64 sm:h-80 lg:h-full">
							<Image
								src="https://res.cloudinary.com/degyjrpjj/image/upload/v1688584020/galsendev/main/kmq29giidcrky4x0klpv.png"
								alt="Last event of Galsen Dev"
								width={500}
								height={500}
								className="absolute inset-0 h-full w-full object-cover"
							/>
						</div>
					</div>

					<div className="relative flex items-center bg-gray-100">
						<span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

						<div className="p-8 sm:p-16 lg:p-24">
							<h2 className="text-2xl font-bold sm:text-3xl">
								{t('lastEvent.heading.first')} <br />
								<span className="text-lighter">
									{t('lastEvent.heading.second')}
								</span>
							</h2>

							<p className="mt-4 text-gray-500">{t('lastEvent.text')}</p>

							<div className="mt-8 flex items-center gap-2 text-gray-500">
								<Icon name="location" className="h-6 w-6" />
								<span className="text-gray-600">Campus Xarala, Sicap Mbao</span>
							</div>

							<div className="mt-4 flex gap-2 xl:flex-row items-center flex-col md:mt-8">
								<Link
									href="/events/hacktoberfest-2023"
									className="inline-block w-full rounded text-center bg-baseColor px-12 py-3 text-sm font-medium text-white transition hover:bg-darker focus:outline-none focus:ring focus:ring-lighter"
								>
									{t('lastEvent.button')}
								</Link>
								<Link
									href="https://photos.app.goo.gl/j6f9geUSLrYuwDn38"
									target="_blank"
									className="inline-block w-full rounded text-center bg-baseColor px-12 py-3 text-sm font-medium text-white transition hover:bg-darker focus:outline-none focus:ring focus:ring-lighter"
								>
									{t('lastEvent.photos')}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EventSection;
