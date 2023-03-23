import { Space_Grotesk } from '@next/font/google';
const grotesk = Space_Grotesk({ subsets: ['latin'] });

const StatsSection = () => {
	return (
		<section>
			<div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
				<div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
					<h2 className="text-3xl font-bold sm:text-4xl text-blue-800">
						Une ?!?
					</h2>

					<p className="mt-4 text-gray-600">
						Créée en 2018, Galsen DEV accueille chaque jours de nouveaux
						membres.
					</p>
				</div>

				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
					<StatCard
						iconComp={<MegaphoneIcon />}
						number="+50"
						desc="Evénements"
					/>
					<StatCard iconComp={<MembersIcon />} number="+1K" desc="Membres" />
					<StatCard iconComp={<CommitIcon />} number="+2K" desc="Commits" />
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
	<div
		className={`${grotesk.className} text-white relative bg-baseColor rounded-md p-4 shadow-xl`}
	>
		<div className="flex items-center gap-4">
			{iconComp}
			<h3 className="text-3xl font-bold leading-none">{number}</h3>
		</div>

		<p className="mt-3">{desc}</p>
	</div>
);

const MegaphoneIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth="2"
		stroke="currentColor"
		className="w-6 h-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
		/>
	</svg>
);

const MembersIcon = () => (
	<svg
		className="w-6 h-6"
		viewBox="0 0 32 32"
		fill="none"
		strokeWidth="2"
		stroke="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M9.33331 24V22.6667C9.33331 20.8986 10.0357 19.2029 11.2859 17.9526C12.5362 16.7024 14.2319 16 16 16M16 16C17.7681 16 19.4638 16.7024 20.714 17.9526C21.9643 19.2029 22.6666 20.8986 22.6666 22.6667V24M16 16C17.0608 16 18.0783 15.5786 18.8284 14.8284C19.5786 14.0783 20 13.0609 20 12C20 10.9391 19.5786 9.92172 18.8284 9.17157C18.0783 8.42143 17.0608 8 16 8C14.9391 8 13.9217 8.42143 13.1716 9.17157C12.4214 9.92172 12 10.9391 12 12C12 13.0609 12.4214 14.0783 13.1716 14.8284C13.9217 15.5786 14.9391 16 16 16ZM1.33331 24V22.6667C1.33331 21.6058 1.75474 20.5884 2.50489 19.8382C3.25503 19.0881 4.27245 18.6667 5.33331 18.6667M5.33331 18.6667C6.04056 18.6667 6.71883 18.3857 7.21893 17.8856C7.71903 17.3855 7.99998 16.7072 7.99998 16C7.99998 15.2928 7.71903 14.6145 7.21893 14.1144C6.71883 13.6143 6.04056 13.3333 5.33331 13.3333C4.62607 13.3333 3.94779 13.6143 3.44769 14.1144C2.9476 14.6145 2.66665 15.2928 2.66665 16C2.66665 16.7072 2.9476 17.3855 3.44769 17.8856C3.94779 18.3857 4.62607 18.6667 5.33331 18.6667ZM30.6666 24V22.6667C30.6666 21.6058 30.2452 20.5884 29.4951 19.8382C28.7449 19.0881 27.7275 18.6667 26.6666 18.6667M26.6666 18.6667C27.3739 18.6667 28.0522 18.3857 28.5523 17.8856C29.0524 17.3855 29.3333 16.7072 29.3333 16C29.3333 15.2928 29.0524 14.6145 28.5523 14.1144C28.0522 13.6143 27.3739 13.3333 26.6666 13.3333C25.9594 13.3333 25.2811 13.6143 24.781 14.1144C24.2809 14.6145 24 15.2928 24 16C24 16.7072 24.2809 17.3855 24.781 17.8856C25.2811 18.3857 25.9594 18.6667 26.6666 18.6667Z"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const CommitIcon = () => (
	<svg
		className="w-6 h-6"
		viewBox="0 0 32 32"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M16 22.6666C14.3778 22.6666 12.9609 22.1613 11.7494 21.1506C10.5387 20.1391 9.7778 18.8666 9.46669 17.3333H2.66669V14.6666H9.46669C9.7778 13.1333 10.5387 11.8609 11.7494 10.8493C12.9609 9.83865 14.3778 9.33331 16 9.33331C17.6222 9.33331 19.0391 9.83865 20.2507 10.8493C21.4614 11.8609 22.2222 13.1333 22.5334 14.6666H29.3334V17.3333H22.5334C22.2222 18.8666 21.4614 20.1391 20.2507 21.1506C19.0391 22.1613 17.6222 22.6666 16 22.6666ZM16 20C17.1111 20 18.0556 19.6111 18.8334 18.8333C19.6111 18.0555 20 17.1111 20 16C20 14.8889 19.6111 13.9444 18.8334 13.1666C18.0556 12.3889 17.1111 12 16 12C14.8889 12 13.9445 12.3889 13.1667 13.1666C12.3889 13.9444 12 14.8889 12 16C12 17.1111 12.3889 18.0555 13.1667 18.8333C13.9445 19.6111 14.8889 20 16 20Z" />
	</svg>
);

export default StatsSection;
