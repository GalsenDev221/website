import useTranslation from 'next-translate/useTranslation';

export default function LegalPrivacy() {
	const { t, lang } = useTranslation('privacy');
	return (
		<>
			<div className="px-4 mt-6 mx-auto max-w-lg md:max-w-3xl lg:max-w-screen-xl sm:px-6 lg:px-8">
				<section>
					<hgroup className="space-y-1 py-1">
						<span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
							{t('privacyPage.tag')}
						</span>
						<h1 className="text-4xl font-bold pt-4">
							{t('privacyPage.title')}
						</h1>
						<p className="text-gray-500 pb-4">{t('privacyPage.description')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('privacyPage.step1')}</h2>
						<p className="text-sm text-gray-500">{t('privacyPage.desc1')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('privacyPage.step2')}</h2>
						<p className="text-sm text-gray-500">{t('privacyPage.desc2')}</p>
						<p className="text-sm text-gray-500">{t('privacyPage.addS2')}</p>
						<p className="text-sm font-bold underline text-gray-500">
							{t('privacyPage.addS2-1')}
						</p>
						<p className="text-sm text-gray-500">{t('privacyPage.addS2-2')}</p>
						<p className="text-sm text-gray-500">{t('privacyPage.addS2-3')}</p>
						<p className="text-sm font-bold underline text-gray-500">
							{t('privacyPage.addS2-4')}
						</p>
						<p className="text-sm text-gray-500">{t('privacyPage.addS2-5')}</p>
						<p className="text-sm text-gray-500">{t('privacyPage.addS2-6')}</p>
						<p className="text-sm font-bold underline text-gray-500">
							{t('privacyPage.addS2-7')}
						</p>
						<p className="text-sm text-gray-500">{t('privacyPage.addS2-8')}</p>
						<p className="text-sm text-gray-500">{t('privacyPage.addS2-9')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('privacyPage.step3')}</h2>
						<p className="text-sm text-gray-500">{t('privacyPage.desc3')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('privacyPage.step4')}</h2>
						<p className="text-sm text-gray-500">{t('privacyPage.desc4')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('privacyPage.step5')}</h2>
						<p className="text-sm text-gray-500">{t('privacyPage.desc5')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('privacyPage.step6')}</h2>
						<p className="text-sm text-gray-500">{t('privacyPage.desc6')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<p className="font-bold underline text-gray-500">
							{t('privacyPage.final')}
						</p>
					</hgroup>
				</section>
			</div>
		</>
	);
}
