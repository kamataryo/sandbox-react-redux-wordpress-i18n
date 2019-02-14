type i18nState = {
  locale: string;
};

const defaultLocale = "en_US";

export const initialState: i18nState = {
  locale: defaultLocale
};

const SET_LOCALE = "i18n.SET_LOCALE";

export const createActions = {
  setLocale: (locale: string) => ({ type: SET_LOCALE, payload: { locale } })
};

export const reducer = (state = initialState, action: any) => {
  if (action.type === SET_LOCALE) {
    return { ...state, locale: action.payload.locale };
  }
  return state;
};
