import React, { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition, Listbox } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Donation from './announcements/Donation';
import GalsenDevLogo from './svg/GalsenDevLogo';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';

import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { SocialLink } from './social-link';

const languages = [
	{ name: 'Français', code: 'FR' },
	{ name: 'English', code: 'EN' },
];

const Navbar = () => {
	const { t, lang } = useTranslation('common');

	const [isOpen, setIsOpen] = useState(false);
	const { pathname, asPath } = useRouter();
	useEffect(() => setIsOpen(false), [pathname]);

	const link = [
		{ name: t('navbar.home'), path: '/' },
		{ name: t('navbar.events'), path: '/events' },
		{ name: t('navbar.gallery'), path: '/gallery' },
		{ name: t('navbar.blog'), path: '/blog' },
		{ name: t('navbar.about'), path: '/about' },
		{ name: 'Hacktoberfest 2023 🎉', path: '/hacktoberfest23' },
	];

	const [selected, setSelected] = useState(
		languages.find((language) => language.code === lang.toUpperCase())
	);

	return (
		<div className="w-full z-20 sticky top-0">
			<Donation />
			<header
				aria-label="Site Header"
				className="shadow-sm bg-white/70 backdrop-filter backdrop-blur-lg"
			>
				<div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
					<Link className="text-blue-600 font-bold" href="/">
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
												className={`${
													asPath === item.path
														? 'text-baseColor'
														: 'text-gray-900'
												} transition hover:text-gray-600/75`}
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
										src="https://github.com/GalsenDev22"
									/>
								</div>

								<div className="flex items-center justify-center w-full">
									<Listbox value={selected} onChange={setSelected}>
										<div className="relative">
											<Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-300 sm:text-sm">
												<span className="block truncate">{selected?.code}</span>
												<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
													<ChevronUpDownIcon
														className="h-5 w-5 text-gray-400"
														aria-hidden="true"
													/>
												</span>
											</Listbox.Button>
											<Transition
												as={Fragment}
												leave="transition ease-in duration-100"
												leaveFrom="opacity-100"
												leaveTo="opacity-0"
											>
												<Listbox.Options className="absolute right-0 mt-1 max-h-60 w-32 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
													{languages.map((language, languageIdx) => (
														<Listbox.Option
															key={languageIdx}
															className={({ active }) =>
																`relative cursor-default select-none py-2 pl-10 pr-4 ${
																	active
																		? 'bg-sky-100 text-sky-900'
																		: 'text-gray-900'
																}`
															}
															value={language}
															onClick={async () =>
																await setLanguage(
																	language.code.toLocaleLowerCase()
																)
															}
														>
															{({ selected }) => (
																<>
																	<span
																		className={`block truncate ${
																			selected ? 'font-medium' : 'font-normal'
																		}`}
																	>
																		{language.name}
																	</span>
																	{selected ? (
																		<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-600">
																			<CheckIcon
																				className="h-5 w-5"
																				aria-hidden="true"
																			/>
																		</span>
																	) : null}
																</>
															)}
														</Listbox.Option>
													))}
												</Listbox.Options>
											</Transition>
										</div>
									</Listbox>
								</div>
							</div>

							<button
								type="button"
								className="block text-gray-700 hover:text-gray-400 md:hidden"
								onClick={() => setIsOpen(true)}
							>
								<span className="sr-only">Toggle menu</span>
								<svg className="w-8 h-8" viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"
									/>
								</svg>
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
							<Dialog.Panel className="fixed inset-y-0 left-0 z-20 w-full overflow-y-auto bg-white px-4 py-4 max-w-[250px]">
								<div className="flex justify-end">
									<button
										type="button"
										className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-gray-400"
										onClick={() => setIsOpen(false)}
									>
										<span className="sr-only">Close menu</span>
										<svg className="w-8 h-8" viewBox="0 0 24 24">
											<path
												fill="currentColor"
												d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
											/>
										</svg>
									</button>
								</div>
								<div className="mt-12 flow-root">
									<div className="-my-6 divide-y divide-gray-500/10">
										<div className="space-y-2 py-6">
											{link.map((item, index) => (
												<Link
													className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
													key={index}
													href={item.path}
												>
													{item.name}
												</Link>
											))}
										</div>

										<div className="py-6 w-full flex flex-col gap-4 items-start">
											<div className="block">
												<SocialLink
													name="github"
													src="https://github.com/GalsenDev22"
												/>
											</div>

											<div className="flex items-center justify-center w-full">
												<Listbox value={selected} onChange={setSelected}>
													<div className="relative w-full">
														<Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-300 sm:text-sm">
															<span className="block truncate">
																{selected?.code}
															</span>
															<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
																<ChevronUpDownIcon
																	className="h-5 w-5 text-gray-400"
																	aria-hidden="true"
																/>
															</span>
														</Listbox.Button>
														<Transition
															as={Fragment}
															leave="transition ease-in duration-100"
															leaveFrom="opacity-100"
															leaveTo="opacity-0"
														>
															<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
																{languages.map((language, languageIdx) => (
																	<Listbox.Option
																		key={languageIdx}
																		className={({ active }) =>
																			`relative cursor-default select-none py-2 pl-10 pr-4 ${
																				active
																					? 'bg-sky-100 text-sky-900'
																					: 'text-gray-900'
																			}`
																		}
																		value={language}
																		onClick={async () =>
																			await setLanguage(
																				language.code.toLocaleLowerCase()
																			)
																		}
																	>
																		{({ selected }) => (
																			<>
																				<span
																					className={`block truncate ${
																						selected
																							? 'font-medium'
																							: 'font-normal'
																					}`}
																				>
																					{language.name}
																				</span>
																				{selected ? (
																					<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-600">
																						<CheckIcon
																							className="h-5 w-5"
																							aria-hidden="true"
																						/>
																					</span>
																				) : null}
																			</>
																		)}
																	</Listbox.Option>
																))}
															</Listbox.Options>
														</Transition>
													</div>
												</Listbox>
											</div>
										</div>
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
