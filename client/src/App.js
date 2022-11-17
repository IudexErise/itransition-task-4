import React from 'react';
import { useRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './elements/Header/Header';
import Footer from './elements/Footer/Footer';

function App() {
	const routes = useRoutes(false);
	return (
		<>
		<Header />
		<BrowserRouter>
			{routes}
		</BrowserRouter>
		<Footer />
		</>
	);
}

export default App;
