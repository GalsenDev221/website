import Link from 'next/link';
import Image from 'next/image';
import code from '/public/img/galsendev-code.png';

const Presentation = () => {
	return (
		<section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
			<div className="p-8 md:p-12 lg:px-16 lg:py-24">
				<div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
					<h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
						Galsen DEV
					</h2>

					<p className="text-gray-500 md:mt-4 md:block">
						Galsen DEV est une communauté qui regroupe les développeurs
						sénégalais dans le but de mettre en place un écosystème favorable à
						la création et au partage en développeur et de vulgariser la
						programmation partout au Sénégal. Nous nous fixons aussi pour
						objectif d&apos;aider les débutants et les personnes désireux de
						rejoindre le domaine de la programmation.
					</p>

					<p className="text-gray-500 md:mt-4 md:block">
						Nous offrons un large éventail d&apos;avantages et de possibilités
						pour nos membres. Vous aurez accès à des ateliers et des formations
						animés par des professionnels chevronnés, qui vous permettront de
						rester à jour avec les dernières tendances technologiques et
						d&apos;améliorer continuellement vos compétences. Vous aurez
						également la chance de participer à des projets collaboratifs
						passionnants, où vous pourrez mettre en pratique vos connaissances
						et travailler en équipe avec d&apos;autres développeurs talentueux.
					</p>

					<div className="mt-4 md:mt-8">
						<Link
							href="/"
							className="inline-block rounded bg-baseColor px-12 py-3 text-sm font-medium text-white transition hover:bg-darker focus:outline-none focus:ring focus:ring-lighter"
						>
							Rejoignez-nous
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
