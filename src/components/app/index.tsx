import React from 'react';
import './style.css';
import logo from './logo.svg';

export const App = () => (
	<div className={ 'App' }>
		<header className="App-header">
			<img src={ logo } className="App-logo" alt="logo" />
			<p>
				Edit <code>src/**/*.tsx</code> and save to reload.
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		</header>{ ' ' }
	</div>
);

export default App;