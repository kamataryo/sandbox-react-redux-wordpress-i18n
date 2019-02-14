import React from "react";
import "./style.css";
import logo from "./logo.svg";
import I18nize from "../../hocs/i18nize";

export type Props = {
  i18n: {
    sprintf: (msg: string, ...args: any[]) => string;
    __: (msgid: string, domain: string) => string;
    setLocale: (locale: string) => void;
    locale: string;
  };
};

export const App = (props: Props) => {
  const {
    i18n: { __, sprintf, setLocale, locale }
  } = props;

  return (
    <div className={"App"}>
      <header className={"App-header"}>
        <img src={logo} className={"App-logo"} alt={"logo"} />
        <p>
          <a
            className={"App-link"}
            href={"https://reactjs.org"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            {__(
              "Learn React and @wordpress/i18n.",
              "sandbox-react-redux-wordpress-i18n"
            )}
          </a>
        </p>
        <p>
          <span>{sprintf(__('Current locale is %s.', "sandbox-react-redux-wordpress-i18n"), locale)}</span>
        </p>
        <select
          className={"locale-switch"}
          name={"locale"}
          id={"locale"}
          onChange={e => setLocale(e.target.value)}
        >
          <option value={"en_US"}>{"English"}</option>
          <option value={"ja_JP"}>{"日本語"}</option>
        </select>
      </header>
    </div>
  );
};

export default I18nize(App);
