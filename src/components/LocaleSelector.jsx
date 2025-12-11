import { supportedLocales } from "../i18n/translations";
import { useLocale } from "../i18n/LocaleContext";

export default function LocaleSelector() {
  const { locale, setLocale, t } = useLocale();

  const handleChange = (event) => {
    setLocale(event.target.value);
  };

  return (
    <label className="locale-selector">
      <span>{t("language.label")}</span>
      <select value={locale} onChange={handleChange} aria-label={t("language.label")}>
        {Object.entries(supportedLocales).map(([code, label]) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}

