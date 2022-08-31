import './assets/scss/styles.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
declare const require: any;
function App() {
	const logo = require('./logo.svg') as string;
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</Routes>
		</div>
	);
}

export default App;
