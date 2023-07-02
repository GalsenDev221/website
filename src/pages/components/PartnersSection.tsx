import Image from 'next/image';
import propel from '/public/img/partners/propel.png';
import xarala from '/public/img/partners/xarala.png';
import dexchange from '/public/img/partners/dexchange.png';

const PartnersSection = () => (
	<section className="">
		<div className="flex flex-col items-center lg:flex-row lg:justify-between">
			<h2 className="text-lighter font-bold text-4xl sm:text-center lg:text-left">
				Ils nous ont fait <br />
				<span className="text-darker">confiance</span>
			</h2>
			<div className="mt-8 flex flex-col gap-2 sm:flex-row lg:mt-0">
				<Partner name="Propel" url="https://withpropel.com/" img={propel} />
				<Partner name="Xarala" url="https://xarala.co/" img={xarala} />
				<Partner
					name="Dexchange"
					url="https://dexchange-transfert.com/"
					img={dexchange}
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
