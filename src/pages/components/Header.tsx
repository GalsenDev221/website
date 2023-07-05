import Head from 'next/head';

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

				<meta property="og:image" content="/public/img/og_image.png" />
				<meta property="og:title" content="Gaslen DEV" />
				<meta
					property="og:description"
					content="Renforcer la scène tech sénégalaise, connecter les développeurs, partager la connaissance et offrir un soutien communautaire."
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
			</Head>
		</>
	);
}

export default Header;
