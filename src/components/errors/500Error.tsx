import Image from 'next/image';
import e500 from '/public/svg/warning.svg';
import useTranslation from 'next-translate/useTranslation';

const Error500 = () => {
	const { t, lang } = useTranslation('common');
	return (
		<div className="grid h-screen px-4 bg-white place-content-center">
			<div className="text-center">
				<Image
					src={e500}
					width="500"
					height="500"
					alt="404 Illustration"
					loading="eager"
				/>
				<p className="mt-4 text-gray-500">{t('serverError')}</p>
			</div>
		</div>
	);
};

export default Error500;
