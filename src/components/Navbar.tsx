import React, { useState, Fragment, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { Dialog, Transition } from '@headlessui/react';

import Donation from './announcements/Donation';
import GalsenDevLogo from './svg/GalsenDevLogo';
import { SocialLink } from './social-link';

import { Icon } from '@/components/ui/icon';
import { cn } from '@utils/cn';
import LanguageSelector from './language-selector';

// TODO: refactor this component, there's much things going on here
const Navbar = () => {
	const { t } = useTranslation('common');

	const [isOpen, setIsOpen] = useState(false);
	const { pathname, asPath } = useRouter();
	useEffect(() => setIsOpen(false), [pathname]);

	const link = [
		{ name: t('navbar.home'), path: '/' },
		{ name: t('navbar.events'), path: '/events' },
		{ name: t('navbar.gallery'), path: '/gallery' },
		{ name: t('navbar.blog'), path: '/blog' },
		{ name: t('navbar.about'), path: '/about' },
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
								{link.map((item, index) => (
									<li key={index}>
										<Link
											key={index}
											href={item.path}
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

							<button
								type="button"
								className="block text-gray-700 hover:text-gray-400 md:hidden"
								onClick={() => setIsOpen(true)}
							>
								<span className="sr-only">Toggle menu</span>
								<Icon name="hamburger-menu" className="w-7 h-7 text-gray-900" />
							</button>
						</div>
					</div>
				</div>
				<Transition as={Fragment} show={isOpen}>
					<Dialog as="div" className="md:hidden" onClose={setIsOpen}>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 z-20 bg-black bg-opacity-50" />
						</Transition.Child>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 -translate-x-3"
							enterTo="opacity-100 translate-x-0"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-x-0"
							leaveTo="opacity-0 -translate-x-3"
						>
							<Dialog.Panel className="fixed inset-y-0 left-0 z-20 w-full flex flex-col overflow-y-auto bg-white px-4 py-4 max-w-[250px]">
								<div className="flex justify-end">
									<button
										type="button"
										className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-gray-400"
										onClick={() => setIsOpen(false)}
									>
										<span className="sr-only">Close menu</span>
										<Icon name="cross-1" className="w-6 h-6 text-gray-900" />
									</button>
								</div>
								<div className="-pt-6 justify-between divide-y divide-gray-500/10">
									<nav className="space-y-2 py-6">
										{link.map((item, index) => (
											<Link
												className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
												key={index}
												href={item.path}
											>
												{item.name}
											</Link>
										))}
									</nav>

									<div className="py-4 flex gap-3 items-center justify-end">
										<div className="block">
											<SocialLink
												name="github"
												src="https://github.com/GalsenDev221"
											/>
										</div>

										<LanguageSelector />
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</Dialog>
				</Transition>
			</header>
		</div>
	);
};

export default Navbar;
