import useTranslation from 'next-translate/useTranslation';
import { Icon } from '@/components/ui/Icon';

const StatsSection = () => {
	const { t, lang } = useTranslation('home');
	return (
		<section>
			<div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
				<div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
					<h2 className="text-3xl font-bold sm:text-4xl text-blue-800">
						{t('stats.title')}
					</h2>

					<p className="mt-4 text-gray-600">{t('stats.description')}</p>
				</div>

				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
					<StatCard
						iconComp={<Icon name="mega-phone" className="h-7 w-7" />}
						number={t('stats.events.count')}
						desc={t('stats.events.title')}
					/>
					<StatCard
						iconComp={<Icon name="members-icon" className="h-7 w-7" />}
						number={t('stats.members.count')}
						desc={t('stats.members.title')}
					/>
					<StatCard
						iconComp={<Icon name="commit-icon" className="h-7 w-7" />}
						number={t('stats.commits.count')}
						desc={t('stats.commits.title')}
					/>
				</div>
			</div>
		</section>
	);
};

interface CardProps {
	number: string;
	iconComp: React.ReactNode;
	desc: string;
}

const StatCard = ({ number, iconComp, desc }: CardProps) => (
	<div className="text-white relative bg-baseColor rounded-md p-4 shadow-xl">
		<div className="flex items-center gap-4">
			{iconComp}
			<h3 className="text-3xl font-bold leading-none">{number}</h3>
		</div>

		<p className="mt-3">{desc}</p>
	</div>
);

export default StatsSection;
