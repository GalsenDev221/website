import Header from './components/Header';
import Error404 from './components/errors/404Error';

export default function Custom404() {
	return (
		<>
			<Header header="Oups 404 !" />
			<Error404 />
		</>
	);
}
