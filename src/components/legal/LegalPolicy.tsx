import useTranslation from 'next-translate/useTranslation';

export default function LegalPolicy() {
	const { t, lang } = useTranslation('policy');
	return (
		<>
			<div className="px-4 mt-6 mx-auto max-w-lg md:max-w-3xl lg:max-w-screen-xl sm:px-6 lg:px-8">
				<section>
					<hgroup className="space-y-1 py-1">
						<span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
							{t('policyPage.tag')}
						</span>
						<h1 className="text-4xl font-bold pt-4">{t('policyPage.title')}</h1>
						<p className="text-gray-500 pb-4">{t('policyPage.description')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('policyPage.step1')}</h2>
						<p className="text-sm text-gray-500">{t('policyPage.desc1')}</p>
						<p className="text-sm text-gray-500">{t('policyPage.addS1')}</p>
						<p className="text-sm font-bold underline text-gray-500">
							{t('policyPage.addS1-1')}
						</p>
						<p className="text-sm text-gray-500">{t('policyPage.addS1-2')}</p>
						<p className="text-sm text-gray-500">{t('policyPage.addS1-3')}</p>
						<p className="text-sm font-bold underline text-gray-500">
							{t('policyPage.addS1-4')}
						</p>
						<p className="text-sm text-gray-500">{t('policyPage.addS1-5')}</p>
						<p className="text-sm text-gray-500">{t('policyPage.addS1-6')}</p>
						<p className="text-sm font-bold underline text-gray-500">
							{t('policyPage.addS1-7')}
						</p>
						<p className="text-sm text-gray-500">{t('policyPage.addS1-8')}</p>
						<p className="text-sm text-gray-500">{t('policyPage.addS1-9')}</p>
						<p className="text-sm text-gray-500">{t('policyPage.addS1-10')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('policyPage.step2')}</h2>
						<p className="text-sm text-gray-500">{t('policyPage.desc2')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('policyPage.step3')}</h2>
						<p className="text-sm text-gray-500">{t('policyPage.desc3')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('policyPage.step4')}</h2>
						<p className="text-sm text-gray-500">{t('policyPage.desc4')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('policyPage.step5')}</h2>
						<p className="text-sm text-gray-500">{t('policyPage.desc5')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('policyPage.step6')}</h2>
						<p className="text-sm text-gray-500">{t('policyPage.desc6')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<p className="font-bold underline text-gray-500">
							{t('policyPage.final')}
						</p>
					</hgroup>
				</section>
			</div>
		</>
	);
}
