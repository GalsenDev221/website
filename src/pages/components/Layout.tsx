import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: { children: ReactNode }) => (
	<>
		<Navbar />
		<main className="px-4 mt-16 mx-auto max-w-lg space-y-16 lg:max-w-screen-xl sm:px-6 lg:px-8 lg:space-y-32">
			{children}
		</main>
		<Footer />
	</>
);

export default Layout;
