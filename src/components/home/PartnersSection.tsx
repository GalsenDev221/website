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
						name="JetBrains"
						url="https://jetbrains.com"
						img="https://res.cloudinary.com/degyjrpjj/image/upload/v1750994017/galsendev/partners/jetbrains.png"
					/>
					<Partner
						name="DataCamp Donates"
						url="https://datacamp.com/donates"
						img="https://res.cloudinary.com/degyjrpjj/image/upload/v1728050595/galsendev/partners/datacamp_donates.png"
					/>
					<Partner
						name="Bictorys"
						url="https://bictorys.com"
						img="https://res.cloudinary.com/degyjrpjj/image/upload/v1786313631/galsendev/partners/bictorys.png"
					/>
					<Partner
						name="Propel"
						url="https://propel.community"
						img="https://res.cloudinary.com/degyjrpjj/image/upload/v1697856591/galsendev/partners/propel.png"
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
						name="Laravel Sénégal"
						url="https://laravel.sn"
						img="https://res.cloudinary.com/degyjrpjj/image/upload/v1786315459/galsendev/partners/laravel_senegal.png"
					/>
					<Partner
						name="Bitcoin Sénégal"
						url="https://x.com/bitcoin_sen"
						img="https://res.cloudinary.com/degyjrpjj/image/upload/v1749254453/galsendev/partners/bitcoin_senegal.png"
					/>
					<Partner
						name="Xarala"
						url="https://xarala.co"
						img="https://res.cloudinary.com/degyjrpjj/image/upload/v1697856591/galsendev/partners/xarala.png"
					/>
					<Partner
						name="Possacode"
						url="https://possacode.netlify.app"
						img="https://res.cloudinary.com/degyjrpjj/image/upload/v1697856591/galsendev/partners/possacode.png"
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
			style={{ height: 'auto' }}
		/>
	</a>
);

export default PartnersSection;
