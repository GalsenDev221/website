import Image from 'next/image';
import Link from 'next/link';
import soon from '/public/svg/soon.svg';
import useTranslation from 'next-translate/useTranslation';

const Blank = () => {
	const { t, lang } = useTranslation('common');
	return (
		<div className="grid h-screen px-4 bg-white place-content-center">
			<div className="text-center">
				<Image
					src={soon}
					width="500"
					height="500"
					alt="404 Illustration"
					loading="eager"
				/>

				<p className="mt-4 text-gray-500">{t('underConstruction')}</p>

				<Link
					href="/"
					className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
				>
					{t('backToHome')}
				</Link>
			</div>
		</div>
	);
};

export default Blank;
