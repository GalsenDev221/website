import Image from 'next/image';

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
					url="https://propel.community/"
					img="https://propel.community/images/PropelLogoBlack.svg"
				/>
				<Partner
					name="Xarala"
					url="https://xarala.co/en/"
					img="https://xarala.co/static/img/logo.b5700a8deb63.png"
				/>
			</div>
		</div>
	</section>
);

interface PartnerProps {
	url: string;
	img: string;
	name: string;
}

const Partner = ({ url: link, img, name }: PartnerProps) => (
	<a
		href={link}
		rel="noreferrer"
		target="_blank"
		className="bg-gray-100 w-72 h-32 flex items-center justify-center"
	>
		<Image
			width={160}
			height={160}
			alt={`Logo of ${name}`}
			src={img}
			className="w-40"
		/>
	</a>
);

export default PartnersSection;
