import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html lang="fr">
			<Head />
			<body>
				<Main />
				<NextScript />
				<Script
					src="https://beamanalytics.b-cdn.net/beam.min.js"
					data-token={process.env.BEAM_DATA_TOKEN}
					async
				/>
			</body>
		</Html>
	);
}
