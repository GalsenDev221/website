import Link from 'next/link';

import { SocialLink } from './SocialLink';
import GalsenDevLogo from './svg/GalsenDevLogo';

const Footer = () => (
	<footer
		aria-label="Site Footer"
		className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24"
	>
		<div className="pt-8 mt-16 border-t border-gray-100 text-center sm:text-left">
			<div className="mb-8 inline-flex items-center gap-4 sm:mb-0">
				<GalsenDevLogo />
				<h2 className="text-gray-900 text-3xl">Galsen DEV</h2>
				<Link
					className="inline-flex max-w-fit items-center gap-2 text-md hover:text-gray-600/75 text-gray-900"
					href="https://status.openstatus.dev"
					target="_blank"
					rel="noreferrer"
				>
					↗ Status
					<span className="relative flex h-2 w-2">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 duration-1000" />
						<span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
					</span>
				</Link>
			</div>

			<div className="sm:mt-8 sm:flex sm:justify-between sm:items-center">
				<ul className="mb-8 flex flex-wrap justify-center gap-6 sm:mb-0 sm:order-2 lg:justify-end">
					<li>
						<SocialLink name="discord" src="https://discord.gg/CKZcKqf" />
					</li>
					<li>
						<SocialLink name="telegram" src="https://t.me/s/galsendev221" />
					</li>
					<li>
						<SocialLink
							name="whatsapp"
							src="https://chat.whatsapp.com/EzigxN1N2bZBdxooqaH2Gr"
							className="h-7 w-7"
						/>
					</li>
					<li>
						<SocialLink name="twitter" src="https://twitter.com/galsendev221" />
					</li>
					<li>
						<SocialLink
							name="instagram"
							src="https://instagram.com/galsendev221"
						/>
					</li>
					<li>
						<SocialLink
							name="facebook"
							src="https://facebook.com/galsendev221"
						/>
					</li>
					<li>
						<SocialLink
							name="youtube"
							src="https://youtube.com/@GalsenDev221"
						/>
					</li>
					<li>
						<SocialLink name="github" src="https://github.com/GalsenDev221" />
					</li>
				</ul>

				<span className="text-gray-400">
					Copyright, {new Date().getFullYear()}
				</span>
			</div>
		</div>
	</footer>
);

export default Footer;
