import Image from 'next/image';

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
						name="DataCamp Donates"
						url="https://datacamp.com/donates"
						img="https://res.cloudinary.com/degyjrpjj/image/upload/v1697856591/galsendev/partners/i4o35pazvwzktoi5erox.png"
					/>
					<Partner
						name="Socium Job"
						url="https://sociumjob.com"
						img="https://res.cloudinary.com/degyjrpjj/image/upload/v1697856591/galsendev/partners/svee2xo6u4tvdzexujls.png"
					/>
					<Partner
						name="Propel"
						url="https://withpropel.com"
						img="https://res.cloudinary.com/degyjrpjj/image/upload/v1697856591/galsendev/partners/de3sj9kcfgb8angwsko3.png"
					/>
					<Partner
						name="Dexchange"
						url="https://dexchange-transfert.com"
						img="https://res.cloudinary.com/degyjrpjj/image/upload/v1697856591/galsendev/partners/jkrcxgtirchld6vowlag.png"
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
						name="Xarala"
						url="https://xarala.co"
						img="https://res.cloudinary.com/degyjrpjj/image/upload/v1697856591/galsendev/partners/rjnb83nn9itvqb11vh0w.png"
					/>
					<Partner
						name="Possacode"
						url="https://possacode.netlify.app"
						img="https://res.cloudinary.com/degyjrpjj/image/upload/v1697856591/galsendev/partners/tmkuxw21fu2yntcdvykl.png"
					/>
					<Partner
						name="Galsen AI"
						url="https://galsen.ai"
						img="https://res.cloudinary.com/degyjrpjj/image/upload/v1697856591/galsendev/partners/wtihf0cldeyc68rtpj58.png"
					/>
					<Partner
						name="Daara IT"
						url="https://daarait.com"
						img="https://res.cloudinary.com/degyjrpjj/image/upload/v1697856591/galsendev/partners/vx97owcscvdgyscfsxyo.png"
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
