import { SocialLink } from './social-link';
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
			</div>

			<div className="sm:mt-8 sm:flex sm:justify-between sm:items-center">
				<ul className="mb-8 flex flex-wrap justify-center gap-6 sm:mb-0 sm:order-2 lg:justify-end">
					<li>
						<SocialLink name="discord" src="https://discord.gg/CKZcKqf" />
					</li>
					<li>
						<SocialLink name="telegram" src="https://t.me/galsendev221" />
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
