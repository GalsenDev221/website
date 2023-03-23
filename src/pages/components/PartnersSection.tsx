const PartnersSection = () => (
	<section className="">
		<div className="flex flex-col items-center lg:flex-row lg:justify-between">
			<h2 className="text-lighter font-bold text-4xl sm:text-center lg:text-left">
				Ils nous ont fait <br />
				<span className="text-darker">confiance</span>
			</h2>
			<div className="mt-8 flex flex-col gap-2 sm:flex-row lg:mt-0">
				<Partner
					name="Propel"
					link="https://propel.community/"
					img="https://propel.community/images/PropelLogoBlack.svg?6eed2deeadb712f68727cb157b49e956"
				/>
				<Partner
					name="Xarala"
					link="https://www.xarala.co/en/"
					img="https://www.xarala.co/static/img/logo.b5700a8deb63.png"
				/>
			</div>
		</div>
	</section>
);

interface PartnerProps {
	link: string;
	img: string;
	name: string;
}

const Partner = ({ link, img, name }: PartnerProps) => (
	<a
		href={link}
		rel="noreferrer"
		target="_blank"
		className="bg-gray-100 w-72 h-32 flex items-center justify-center"
	>
		{/* TODO: maybe download these images or add the domains to the next config */}
		<img
			width={160}
			height={160}
			alt={`Logo of ${name}`}
			src={img}
			className="w-40"
		/>
	</a>
);

export default PartnersSection;
