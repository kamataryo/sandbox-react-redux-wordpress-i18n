import React from 'react';
import './style.css';
import logo from './logo.svg';
import { __ } from '@wordpress/i18n';
import I18nize from '../../hocs/i18nize';

export type Props = {
    i18n: {
        __: ( msgid: string, domain: string ) => string;
        setLocale: ( locale: string ) => void;
    };
};

export const App = ( props: Props ) => {
    const {
        i18n: { __, setLocale },
    } = props;
    return (
        <div className={ 'App' }>
		<header className="App-header">
	<img src={ logo } className="App-logo" alt="logo" />

                <a
				className="App-link"
				href="https://reactjs.org"
                    target="_blank"
				rel="noopener noreferrer"
                >
				{ __( 'Learn React', 'sandbox-react-redux-wordpress-i18n' ) }
			</a>
	<select
	name="locale"
	id="locale"
	onChange={ ( e ) => setLocale( e.target.value ) }
                >
	<option value="en">{ 'English' }</option>
	<option value="ja">{ '日本語' }</option>
                </select>
            </header>
	</div>
    );
};

export default I18nize( App );
