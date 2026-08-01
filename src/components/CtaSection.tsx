import { useLanguage } from "../context/LanguageContext";
import { whatsappUrl } from "../lib/whatsapp";

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="cta-section" id="cta">
      <div className="cta-section__inner">
        <h2 className="cta-section__title">{t.cta.title}</h2>
        <p className="cta-section__body">{t.cta.body}</p>
        <a
          href={whatsappUrl(t.footer.phone)}
          className="btn btn--primary cta-section__btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.cta.button}
        </a>
      </div>
    </section>
  );
}
