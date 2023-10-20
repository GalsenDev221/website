import useSWR from 'swr';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { Event, ResponseError } from '@/pages/api/events/type';
import Header from '@/components/Header';

const fetcher = async (url: string) => {
	const res = await fetch(url);
	const data = await res.json();

	if (res.status !== 200) throw new Error(data.message);

	return data;
};

export default function EventDetailPage() {
	const { t: translationCommon } = useTranslation('common');
	const { t } = useTranslation('events');

	const router = useRouter();
	const slug = router.query.slug as string;

	const { data, error, isLoading } = useSWR<Event, ResponseError>(
		() => (slug ? '/api/events/' + slug : null),
		fetcher
	);

	// TODO: handle these use cases
	if (error) return <div>{error.message}</div>;
	if (isLoading) return <div>Loading...</div>;
	if (!data) return null;

	return (
		<>
			<Header header={translationCommon('events.header')} />
			<div className="px-4 mt-16 mx-auto max-w-lg md:max-w-3xl lg:max-w-screen-xl sm:px-6 lg:px-8">
				<section>
					<hgroup className="space-y-2">
						<span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
							{t(`eventsPage.${data.type}`)}
						</span>
						<h1 className="text-4xl font-bold">
							{t(`eventsPage.events.${slug}.title`)}
						</h1>
						<p className="text-gray-500">
							{t(`eventsPage.events.${slug}.desc`)}
						</p>
					</hgroup>

					<article className="mt-8">WHAT HAPPENED DURING THIS EVENT!!!</article>
				</section>
			</div>
		</>
	);
}
