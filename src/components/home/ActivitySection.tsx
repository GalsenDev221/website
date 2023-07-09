import Image from 'next/image';

import fixing from '/public/svg/fixing.svg';
import coding from '/public/svg/coding.svg';
import useTranslation from 'next-translate/useTranslation';

const ActivitySection = () => {
	const { t, lang } = useTranslation('home');
	return (
		<section className="">
			<div className="items-center lg:gap-16 lg:grid lg:grid-cols-2">
				<div>
					<Image
						className="w-full"
						src={fixing}
						width="400"
						height="400"
						alt="Illustration"
						loading="eager"
					/>
				</div>
				<div className="mt-8 lg:mt-0 flex items-center justify-center">
					<div>
						<h2 className="text-gray-600 font-bold text-4xl">
							{t('activity.first.heading.first')}{' '}
							<span className="text-lighter">
								{t('activity.first.heading.second')}
							</span>
							,
						</h2>
						<h2 className="text-gray-600 font-bold text-4xl">
							{t('activity.first.heading.third')}{' '}
							<span className="text-darker">
								{t('activity.first.heading.fourth')}
							</span>
						</h2>
						<div className="max-w-2xl py-4 text-base mt-2 text-gray-600 lg:text-base xl:text-base">
							<p>{t('activity.first.text')}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-12 items-center lg:gap-16 lg:grid lg:grid-cols-2">
				<div className="lg:order-last">
					<Image
						className="w-full"
						src={coding}
						width="400"
						height="400"
						alt="Illustration"
						loading="eager"
					/>
				</div>
				<div className="mt-8 lg:mt-0">
					<h2 className="text-gray-600 font-bold text-4xl">
						{t('activity.second.heading.first')}{' '}
						<span className="text-darker">
							{t('activity.second.heading.second')}
						</span>
						<br /> {t('activity.second.heading.third')}
					</h2>
					<div className="max-w-2xl py-4 text-base mt-2 text-gray-600 lg:text-base xl:text-base">
						<p>{t('activity.second.text')}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ActivitySection;
