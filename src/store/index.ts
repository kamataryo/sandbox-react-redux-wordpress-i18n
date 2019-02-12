import { createStore, combineReducers } from 'redux';
import { reducer as i18n } from './reducers/i18n';

const store = createStore( combineReducers( { i18n } ) );

export default store;
