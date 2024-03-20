import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import Donation from './announcements/Donation';
import GalsenDevLogo from './svg/GalsenDevLogo';
import { SocialLink } from './SocialLink';

import { cn } from '@utils/cn';
import LanguageSelector from './LanguageSelector';
import MobileMenu from './MobileMenu';

// TODO: refactor this component, there's much things going on here
const Navbar = () => {
	const { t } = useTranslation('common');
	const { asPath } = useRouter();

	const links = [
		{ name: t('navbar.home'), path: '/' },
		{ name: t('navbar.events'), path: '/events' },
		{ name: t('navbar.gallery'), path: '/gallery' },
		{
			name: 'Blog ↗',
			path: 'https://medium.com/@galsendev221',
			target: '_blank',
		},
		{ name: t('navbar.about'), path: '/about' },
		{
			name: 'Call for Speakers 2024 ↗',
			path: 'https://tally.so/r/w2P8eM',
			target: '_blank',
		},
	];

	return (
		<div className="w-full z-20 sticky top-0">
			<Donation />
			<header
				aria-label="Site Header"
				className="shadow-sm bg-white/70 backdrop-filter backdrop-blur-lg"
			>
				<div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
					<Link href="/">
						<GalsenDevLogo />
					</Link>

					<div className="flex flex-1 items-center justify-end md:justify-between">
						<nav aria-label="Site Nav" className="hidden md:block">
							<ul className="flex items-center gap-6 text-sm">
								{links.map((item, index) => (
									<li key={index}>
										<Link
											key={index}
											href={item.path}
											target={item.path.startsWith('http') ? '_blank' : '_self'}
											className={cn(
												'transition hover:text-gray-600/75',
												asPath === item.path
													? 'text-baseColor hover:text-baseColor'
													: 'text-gray-900'
											)}
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</nav>

						<div className="flex items-center gap-4">
							<div className="hidden md:flex items-center gap-4 justify-center">
								<div className="block">
									<SocialLink
										name="github"
										src="https://github.com/GalsenDev221"
									/>
								</div>

								<LanguageSelector />
							</div>

							<MobileMenu links={links} />
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
