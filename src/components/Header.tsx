import Head from 'next/head';
import Script from 'next/script';

function Header(props) {
	return (
		<>
			<Head>
				<title>{props.header}</title>
				<meta
					name="description"
					content="Renforcer la scène tech sénégalaise, connecter les développeurs, partager la connaissance et offrir un soutien communautaire."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon/favicon.ico" />

				{/* OG Meta Tags */}
				<meta property="og:url" content="https://galsen.dev" />
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://res.cloudinary.com/degyjrpjj/image/upload/v1688584020/website/share/ugaacimkpgt6rsnecvds.png"
				/>
				<meta property="og:title" content="Galsen DEV" />
				<meta
					property="og:description"
					content="Renforcer la scène tech sénégalaise, connecter les développeurs, partager la connaissance et offrir un soutien communautaire."
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />

				{/* Twitter Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="galsen.dev" />
				<meta property="twitter:url" content="https://galsen.dev" />
				<meta name="twitter:title" content="Galsen DEV" />
				<meta
					name="twitter:description"
					content="Renforcer la scène tech sénégalaise, connecter les développeurs, partager la connaissance et offrir un soutien communautaire."
				/>
				<meta
					name="twitter:image"
					content="https://res.cloudinary.com/degyjrpjj/image/upload/v1688584020/website/share/ugaacimkpgt6rsnecvds.png"
				/>
			</Head>
			<Script
				src="https://beamanalytics.b-cdn.net/beam.min.js"
				data-token={process.env.BEAM_DATA_TOKEN}
				async
			/>
		</>
	);
}

export default Header;
