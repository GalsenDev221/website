import Image from 'next/image';
import hero from '/public/img/galsendev-hero.png';

const HeroSection = () => {
	return (
		<section className="">
			<div className="lg:flex lg:items-center lg:justify-between">
				<div className="relative flex justify-center lg:order-last">
					<div className="absolute -top-16 -right-2 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob sm:w-80 sm:h-80"></div>
					<div className="absolute top-16 -left-2 w-64 h-64 bg-baseColor rounded-full mix-blend-multiply filter blur-2xl opacity-60 animation-delay-2000 animate-blob sm:w-80 sm:h-80"></div>
					<Image
						src={hero}
						width="800"
						height="800"
						alt="Landing Illustration"
						loading="eager"
						placeholder="blur"
						priority={true}
						className="object-cover w-auto h-auto"
					/>
				</div>
				<div className="mt-12 mx-auto max-w-lg lg:m-0 lg:max-w-md">
					<h2 className="text-1xl font-bold sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-green-300">
						Renforcer la scène tech sénégalaise,
					</h2>
					<h2 className="text-1xl font-bold sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-300 to-yellow-200">
						connecter les développeurs,
					</h2>
					<h2 className="text-1xl font-bold sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-red-500">
						partager et offrir un soutien communautaire.
					</h2>

					<p className="mt-4 text-gray-600">
						Galsen DEV est une communauté qui regroupe les développeurs
						sénégalais dans le but de mettre en place un écosystème favorable à
						la création et au partage entre développeurs et de vulgariser la
						programmation partout au Sénégal.
					</p>
				</div>
			</div>
		</section>
	);
};

// const ImgBlurEffect = () => (
// 	<div className="relative max-w-md mx-auto">
// 		<div className="absolute -top-16 -left-4 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-ing"></div>
// 		<div className="absolute -bottom-16 -right-4 w-80 h-80 bg-galsen rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-ing"></div>
// 		<div className="relative h-0 pb-[100%] sm:max-w-xl">
// 			<Image
// 				src={hero}
// 				width="350"
// 				height="350"
// 				alt="Landing Illustration"
// 				loading="eager"
// 				placeholder="blur"
// 				className="absolute w-full h-full object-cover"
// 			/>
// 		</div>
// 	</div>
// );

export default HeroSection;
