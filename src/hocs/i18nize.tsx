import React from "react";
import * as i18n from "@wordpress/i18n";
import { connect } from "react-redux";
import { createActions } from "../store/reducers/i18n";
import ja from '../languages/ja.json'


type Props = {
  locale: string;
  setLocale: (locale: string) => void;
};

type State = {
  i18n: object;
};

const mapStateToProps = (state: any) => ({
  locale: state.i18n.locale
});

const mapDispatchToProps = (dispatch: any) => ({
  setLocale: (locale: string) => dispatch(createActions.setLocale(locale))
});

const textDomain = "sandbox-react-redux-wordpress-i18n";

const data: { [locale: string]: Jed | void } = {
  ja: ja.locale_data[textDomain],
  en: void 0,
  default: Object.keys(ja.locale_data[textDomain]).reduce((prev, key) => ({ ...prev, [key]: [key] }), {})
};

export const I18nize = (Component: any) => {
  class I18nizedComopnent extends React.PureComponent<Props, State> {
    constructor(props: Props) {
      super(props);
      this.__setLocale(props.locale);
      this.state = { i18n };
    }

    componentDidUpdate(prevProps: Props) {
      if (prevProps.locale !== this.props.locale) {
        const { locale } = this.props;
        this.__setLocale(locale);
        this.setState({ i18n: { ...i18n } });
      }
    }

    __setLocale = (locale: string) => i18n.setLocaleData(data[locale] || (data.default as Jed), textDomain) 

    render() {
      const { i18n } = this.state;
      const { setLocale, locale } = this.props;
      return <Component i18n={{ ...i18n, setLocale, locale }} />;
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(I18nizedComopnent);
};

export default I18nize;
