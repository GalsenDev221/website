import Link from 'next/link';
import Image from 'next/image';
import code from '/public/img/galsendev-code.png';
import useTranslation from 'next-translate/useTranslation';

const Presentation = () => {
	const { t, lang } = useTranslation('about');
	return (
		<section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
			<div className="p-8 md:p-12 lg:px-16 lg:py-24">
				<div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
					<h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
						Galsen DEV
					</h2>

					<p className="text-gray-500 md:mt-4 md:block">
						{t('presentation.firstHeading')}
					</p>

					<p className="text-gray-500 md:mt-4 md:block">
						{t('presentation.secondHeading')}
					</p>

					<div className="mt-4 md:mt-8">
						<Link
							href="https://discord.gg/CKZcKqf"
							target="_blank"
							className="inline-block rounded bg-baseColor px-12 py-3 text-sm font-medium text-white transition hover:bg-darker focus:outline-none focus:ring focus:ring-lighter"
						>
							{t('presentation.join')}
						</Link>
					</div>
				</div>
			</div>

			<Image
				src={code}
				width="800"
				height="800"
				alt="GalsenDEV Illustration"
				loading="eager"
				placeholder="blur"
				priority={true}
				className="h-56 w-full object-cover sm:h-full"
			/>
		</section>
	);
};

export default Presentation;
