import Layout from '@/components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
				{/* Beam Analytics */}
				<Script
					src="https://beamanalytics.b-cdn.net/beam.min.js"
					data-token={process.env.BEAM_DATA_TOKEN}
					async
				/>
			</Layout>
		</>
	);
}
