import Header from '@/components/Header';
import Script from 'next/script';

export default function About() {
	return (
		<>
			<Header header="Hacktoberfest 2023 | Hackaton Session, Open-source Day & Talks" />
			<iframe
				data-tally-src="https://tally.so/embed/3xD4eG?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
				width="100%"
				height="284"
				title="Contact form"
			></iframe>

			<Script id="tally-js" src="https://tally.so/widgets/embed.js" />
		</>
	);
}
