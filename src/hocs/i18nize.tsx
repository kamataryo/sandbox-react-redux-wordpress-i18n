import React from 'react';
import * as i18n from '@wordpress/i18n';
import { connect } from 'react-redux';
import {createActions} from '../store/reducers/i18n'

type Props = {
    locale: string;
    setLocale: (locale: string)=> void;
};

type State = {
    i18n: object;
    locale: string;
};

const mapStateToProps = ( state: any ) => ( {
    locale: state.i18n.locale,
} );

const mapDispatchToProps = (dispatch: any) => ({
  setLocale: (locale: string) => dispatch(createActions.setLocale(locale))
})

const data = {
  'ja': {
    'Learn React': ['React を学びましょう。']
  },
  'en': {
    'Learn React': ['Learn React']
  }
}

export const I18nize = ( Component: any ) => {
    class I18nizedComopnent extends React.Component<Props, State> {
        static getDerivedStateFromProps( nextProps: Props, prevState: State ) {
            if ( prevState.locale !== nextProps.locale ) {
              const {locale} = nextProps
              console.log(locale)
              i18n.setLocaleData((data as any)[locale], 'sandbox-react-redux-wordpress-i18n')
                return { i18n: { ...i18n }, locale: locale };
            }
            return prevState;
        }

        constructor( props: Props ) {
            super( props );
            i18n.setLocaleData((data as any)[props.locale], 'sandbox-react-redux-wordpress-i18n')
            this.state = {
                i18n,
                locale: props.locale,
            };
        }

        render() {
          const {i18n} = this.state
          const {setLocale} = this.props
            return <Component i18n={ {...i18n, setLocale} }  />;
        }
    }
    return connect( mapStateToProps, mapDispatchToProps )( I18nizedComopnent as any );
};

export default I18nize;
