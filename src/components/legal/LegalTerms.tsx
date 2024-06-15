import useTranslation from 'next-translate/useTranslation';

export default function LegalTerms() {
	const { t, lang } = useTranslation('terms');
	return (
		<>
			<div className="px-4 mt-6 mx-auto max-w-lg md:max-w-3xl lg:max-w-screen-xl sm:px-6 lg:px-8">
				<section>
					<hgroup className="space-y-1 py-1">
						<span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
							{t('termsPage.tag')}
						</span>
						<h1 className="text-4xl font-bold pt-4">{t('termsPage.title')}</h1>
						<p className="text-gray-500 pb-4">{t('termsPage.description')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('termsPage.step1')}</h2>
						<p className="text-sm text-gray-500">{t('termsPage.desc1')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('termsPage.step2')}</h2>
						<p className="text-sm text-gray-500">{t('termsPage.desc2')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('termsPage.step3')}</h2>
						<p className="text-sm text-gray-500">{t('termsPage.desc3')}</p>
						<p className="text-sm font-bold underline text-gray-500">
							{t('termsPage.addS3-1')}
						</p>
						<p className="text-sm text-gray-500">{t('termsPage.addS3-2')}</p>
						<p className="text-sm font-bold underline text-gray-500">
							{t('termsPage.addS3-3')}
						</p>
						<p className="text-sm text-gray-500">{t('termsPage.addS3-4')}</p>
						<p className="text-sm font-bold underline text-gray-500">
							{t('termsPage.addS3-5')}
						</p>
						<p className="text-sm text-gray-500">{t('termsPage.addS3-6')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('termsPage.step4')}</h2>
						<p className="text-sm text-gray-500">{t('termsPage.desc4')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('termsPage.step5')}</h2>
						<p className="text-sm text-gray-500">{t('termsPage.desc5')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('termsPage.step6')}</h2>
						<p className="text-sm text-gray-500">{t('termsPage.desc6')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('termsPage.step7')}</h2>
						<p className="text-sm text-gray-500">{t('termsPage.desc7')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<p className="font-bold underline text-gray-500">
							{t('termsPage.final')}
						</p>
					</hgroup>
				</section>
			</div>
		</>
	);
}
