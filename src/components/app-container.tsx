import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import store from '../store';

export const AppContainer = () => (
	<Provider store={ store }>
		<App />
	</Provider>
);

export default AppContainer;
