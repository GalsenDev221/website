import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dialog, Transition } from '@headlessui/react';

import LanguageSelector from './LanguageSelector';
import { SocialLink } from './SocialLink';
import { Icon } from './ui/Icon';

interface MobileMenuProps {
	links: {
		name: string;
		path: string;
	}[];
}

const MobileMenu = ({ links }: MobileMenuProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const { pathname } = useRouter();
	useEffect(() => setIsOpen(false), [pathname]);

	return (
		<>
			<button
				type="button"
				className="block text-gray-700 hover:text-gray-400 md:hidden"
				onClick={() => setIsOpen(true)}
			>
				<span className="sr-only">Toggle menu</span>
				<Icon name="hamburger-menu" className="w-7 h-7 text-gray-900" />
			</button>

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
									{links.map((item, index) => (
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
		</>
	);
};

export default MobileMenu;
