import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const Donation = () => {
	const { t, lang } = useTranslation('common');
	return (
		<div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-2 text-white">
			<p className="text-center text-sm font-medium">
				{t('donation.text.first')}{' '}
				<Link
					href="https://ko-fi.com/galsendev221"
					target="_blank"
					className="inline-block underline"
				>
					{t('donation.text.second')}
				</Link>{' '}
				{t('donation.text.third')}
			</p>
		</div>
	);
};

export default Donation;
