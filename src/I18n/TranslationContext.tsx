import { createContext, ReactNode } from "react";
import { IntlProvider } from "react-intl";
import {
  DEFAULT_LOCALE,
  DEFAULT_TRANSLATION_STATE,
  MESSAGES,
} from "./constants";
import { Locale } from "./Locale";

interface Props {
  children: ReactNode;
  locale: Locale;
}

const TranslationContext = createContext(DEFAULT_TRANSLATION_STATE);

const TranslationProvider = ({ children, locale }: Props) => {
  return (
    <TranslationContext.Provider value={{ locale: locale, setLocale: () => undefined }}>
      <IntlProvider locale={DEFAULT_LOCALE} messages={MESSAGES[locale]}>
        {children}
      </IntlProvider>
    </TranslationContext.Provider>
  );
};

export { TranslationProvider, TranslationContext };
