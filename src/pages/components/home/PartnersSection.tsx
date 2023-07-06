import Image from 'next/image';

import propel from '/public/img/partners/propel.png';
import xarala from '/public/img/partners/xarala.png';
import dexchange from '/public/img/partners/dexchange.png';
import useTranslation from 'next-translate/useTranslation';

const PartnersSection = () => {
	const { t, lang } = useTranslation('home');
	return (
		<section className="">
			<div className="flex flex-col items-center lg:flex-row lg:justify-between">
				<h2 className="text-lighter font-bold text-4xl sm:text-center lg:text-left">
					{t('partners.title.first')} <br />
					<span className="text-darker">{t('partners.title.second')}</span>
				</h2>
				<div className="mt-8 flex flex-col gap-2 sm:flex-row lg:mt-0">
					<Partner
						name="Propel"
						url="https://withpropel.com/"
						img={propel.src}
					/>
					<Partner name="Xarala" url="https://xarala.co/" img={xarala.src} />
					<Partner
						name="Dexchange"
						url="https://dexchange-transfert.com/"
						img={dexchange.src}
					/>
				</div>
			</div>
		</section>
	);
};

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
