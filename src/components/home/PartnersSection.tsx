import Image from 'next/image';

import propel from '/public/img/partners/propel.png';
import xarala from '/public/img/partners/xarala.png';
import dexchange from '/public/img/partners/dexchange.png';
import daarait from '/public/img/partners/daarait.png';
import galsenai from '/public/img/partners/galsenai.png';
import possacode from '/public/img/partners/possacode.png';
import useTranslation from 'next-translate/useTranslation';

const PartnersSection = () => {
	const { t, lang } = useTranslation('home');
	return (
		<section className="space-y-8 lg:space-y-12">
			<div className="flex flex-col items-center lg:items-start">
				<h2 className="text-lighter font-bold text-4xl sm:text-center lg:text-left">
					{t('partners.title.first')} <br />
					<span className="text-darker">{t('partners.title.second')}</span>
				</h2>
				<div className="mt-8 flex flex-col gap-3 lg:flex-row lg:gap-6 lg:w-full">
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
			<div className="flex flex-col items-center lg:items-end">
				<h2 className="text-lighter font-bold text-4xl sm:text-center lg:text-left">
					{t('partners.title.third')} <br />
					<span className="text-darker">{t('partners.title.fourth')}</span>
				</h2>{' '}
				<div className="mt-8 flex flex-col gap-2 lg:flex-row lg:gap-6 lg:w-full lg:justify-end">
					<Partner
						name="DaaraIT"
						url="https://www.linkedin.com/company/daara-it"
						img={daarait.src}
					/>
					<Partner
						name="GalsenAI"
						url="https://galsen.ai/"
						img={galsenai.src}
					/>
					<Partner
						name="Possacode"
						url="https://possacode.lepresk.com/"
						img={possacode.src}
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
