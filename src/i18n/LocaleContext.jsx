import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { translations, defaultLocale, getNestedValue } from "./translations";

const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(defaultLocale);

  const t = useCallback(
    (key) => {
      const translation = getNestedValue(translations[locale], key);
      if (translation) {
        return translation;
      }
      const fallbackTranslation = getNestedValue(translations[defaultLocale], key);
      return fallbackTranslation ?? key;
    },
    [locale]
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}

export function useTranslation() {
  return useLocale().t;
}

