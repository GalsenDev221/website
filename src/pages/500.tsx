import Header from './components/Header';
import Error500 from './components/errors/500Error';

export default function Custom500() {
	return (
		<>
			<Header header="Oups !" />
			<Error500 />
		</>
	);
}
