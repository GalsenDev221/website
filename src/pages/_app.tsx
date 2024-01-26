import Layout from '@/components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { Space_Grotesk } from 'next/font/google';
const grotesk = Space_Grotesk({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<div className={grotesk.className}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</div>
		</>
	);
}
