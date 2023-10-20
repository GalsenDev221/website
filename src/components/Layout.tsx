import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

import { Space_Grotesk } from '@next/font/google';
const grotesk = Space_Grotesk({ subsets: ['latin'] });

const Layout = ({ children }: { children: ReactNode }) => (
	<>
		<Navbar />
		<main className={grotesk.className}>{children}</main>
		<Footer />
	</>
);

export default Layout;
