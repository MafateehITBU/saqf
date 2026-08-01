import { useLanguage } from "../context/LanguageContext";

export function LangTransition() {
  const { isFlipping, pendingLang, lang } = useLanguage();
  const label = (pendingLang ?? lang) === "ar" ? "سقف" : "Saqf";

  return (
    <div
      className={`lang-transition ${isFlipping ? "is-active" : ""}`}
      aria-hidden={!isFlipping}
    >
      <div className="lang-transition__veil" />
      <div className="lang-transition__mark">
        <span className="lang-transition__line" />
        <span className="lang-transition__label">{label}</span>
        <span className="lang-transition__line" />
      </div>
    </div>
  );
}
