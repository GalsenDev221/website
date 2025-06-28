import useTranslation from 'next-translate/useTranslation';

export default function LegalConduct() {
	const { t, lang } = useTranslation('conduct');
	return (
		<>
			<div className="px-4 mt-6 mx-auto max-w-lg md:max-w-3xl lg:max-w-screen-xl sm:px-6 lg:px-8">
				<section>
					<hgroup className="space-y-1 py-1">
						<span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
							{t('conductPage.tag')}
						</span>
						<h1 className="text-4xl font-bold pt-4">
							{t('conductPage.title')}
						</h1>
						<p className="text-gray-500 pb-4">{t('conductPage.description')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('conductPage.step1')}</h2>
						<p className="text-base text-gray-500">{t('conductPage.desc1')}</p>
						<p className="text-base font-semibold text-gray-500">
							{t('conductPage.addS1-1')}
						</p>
						<p className="text-base font-semibold text-gray-500">
							{t('conductPage.addS1-2')}
						</p>
						<p className="text-base font-semibold text-gray-500">
							{t('conductPage.addS1-3')}
						</p>
						<p className="text-base font-semibold text-gray-500">
							{t('conductPage.addS1-4')}
						</p>
						<p className="text-base font-semibold text-gray-500">
							{t('conductPage.addS1-5')}
						</p>
						<p className="text-base font-semibold text-gray-500">
							{t('conductPage.addS1-6')}
						</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('conductPage.step2')}</h2>
						<p className="text-base text-gray-500">{t('conductPage.desc2')}</p>
						<p className="text-base font-semibold text-gray-500">
							{t('conductPage.addS2-1')}
						</p>
						<p className="text-base font-semibold text-gray-500">
							{t('conductPage.addS2-2')}
						</p>
						<p className="text-base font-semibold text-gray-500">
							{t('conductPage.addS2-3')}
						</p>
						<p className="text-base font-semibold text-gray-500">
							{t('conductPage.addS2-4')}
						</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<h2 className="text-2xl font-bold">{t('conductPage.step3')}</h2>
						<p className="text-base text-gray-500">{t('conductPage.desc3')}</p>
						<p className="text-base text-gray-500">{t('conductPage.desc4')}</p>
					</hgroup>

					<hgroup className="space-y-1 py-1 pb-4">
						<p className="font-bold underline text-gray-500">
							{t('conductPage.final')}
						</p>
					</hgroup>
				</section>
			</div>
		</>
	);
}
