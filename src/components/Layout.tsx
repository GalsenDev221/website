import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: { children: ReactNode }) => (
	<>
		<Navbar />
		<main>{children}</main>
		<Footer />
	</>
);

export default Layout;
