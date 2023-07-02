import Head from 'next/head';
import Presentation from './components/about/Presentation';

export default function About() {
	return (
		<>
			<Head>
				<title>A propos de Galsen DEV</title>
				<meta
					name="description"
					content="Renforcer la scène tech sénégalaise, connecter les développeurs, partager la connaissance et offrir un soutien communautaire."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon/favicon.ico" />
			</Head>
			<Presentation />
		</>
	);
}
