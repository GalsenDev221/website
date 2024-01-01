import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';

import { Icon } from './ui/Icon';
import { cn } from '@utils/cn';

const LanguageSelector = () => {
	const { lang } = useTranslation('common');
	const languages = [
		{ name: 'Français', code: 'fr' },
		{ name: 'English', code: 'en' },
	];

	return (
		<Listbox
			defaultValue={languages.find(({ code }) => code === lang)?.code}
			onChange={async (code) => await setLanguage(code)}
		>
			<div className="relative">
				<Listbox.Button className="w-10 h-10 inline-flex items-center justify-center rounded-md bg-transparent transition-colors duration-300 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-baseColor focus-visible:ring-offset-2">
					<span className="sr-only">Change the language</span>
					<Icon
						name="i18n"
						className="w-5 h-5"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Listbox.Options className="absolute right-0 mt-1 w-32 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{languages.map((language) => (
							<Listbox.Option
								key={language.code}
								value={language.code}
								className={({ active }) =>
									cn(
										'px-4 py-2 cursor-default flex items-center justify-between',
										active ? 'bg-baseColor text-white' : 'text-gray-900'
									)
								}
							>
								{({ selected }) => (
									<>
										{language.name}
										{selected && (
											<Icon
												name="check"
												className="h-5 w-5"
												aria-hidden="true"
											/>
										)}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
};

export default LanguageSelector;
