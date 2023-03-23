import Head from 'next/head';
import Error404 from './components/errors/404Error';

export default function Custom404() {
	return (
		<>
			<Head>
				<title>Oup !</title>
				<meta
					name="description"
					content="La plus grande communauté de développeurs au Sénégal"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon/favicon.ico" />
			</Head>
			<Error404 />
		</>
	);
}
