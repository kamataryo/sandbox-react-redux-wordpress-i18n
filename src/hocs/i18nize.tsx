import React from "react";
import * as i18n from "@wordpress/i18n";
import { connect } from "react-redux";
import { createActions } from "../store/reducers/i18n";

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

const data: { [locale: string]: Jed } = {
  ja: {
    "Learn React and @wordpress/i18n.": [
      "React と @wordpress/i18n を学びましょう。"
    ],
    'Current locale is %s.': ['現在のロケールは %s です。']
  },
  en: {
    "Learn React and @wordpress/i18n.": ["Learn React and @wordpress/i18n."],
    'Current locale is %s.': ['Current locale is %s.']
  }
};

export const I18nize = (Component: any) => {
  class I18nizedComopnent extends React.PureComponent<Props, State> {
    constructor(props: Props) {
      super(props);
      i18n.setLocaleData(data[props.locale], textDomain);
      this.state = { i18n };
    }

    componentDidUpdate(prevProps: Props) {
      if (prevProps.locale !== this.props.locale) {
        const { locale } = this.props;
        i18n.setLocaleData(data[locale], textDomain);
        this.setState({ i18n: { ...i18n } });
      }
    }

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
