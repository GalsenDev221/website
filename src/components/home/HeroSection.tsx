import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

const HeroSection = () => {
	const { t, lang } = useTranslation('home');
	return (
		<section className="">
			<div className="lg:flex lg:items-center lg:justify-between">
				<div className="relative flex justify-center lg:order-last">
					<div className="absolute -top-16 -right-2 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob sm:w-80 sm:h-80"></div>
					<div className="absolute top-16 -left-2 w-64 h-64 bg-baseColor rounded-full mix-blend-multiply filter blur-2xl opacity-60 animation-delay-2000 animate-blob sm:w-80 sm:h-80"></div>
					<Image
						src="https://res.cloudinary.com/degyjrpjj/image/upload/v1688584020/galsendev/main/tce1ijjs4dxm8vl8qxls.png"
						width="800"
						height="800"
						alt="Landing Illustration"
						loading="eager"
						priority={true}
						fetchPriority="high"
						className="object-cover w-auto h-auto"
					/>
				</div>
				<div className="mt-12 mx-auto max-w-lg lg:m-0 lg:max-w-md">
					<h2 className="text-xl font-bold sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-green-300">
						{t('hero.firstHeading')}
					</h2>
					<h2 className="text-1xl font-bold sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-300 to-yellow-200">
						{t('hero.secondHeading')}
					</h2>
					<h2 className="text-1xl font-bold sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-red-500">
						{t('hero.thirdHeading')}
					</h2>

					<p className="mt-4 text-gray-600">{t('hero.text')}</p>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
