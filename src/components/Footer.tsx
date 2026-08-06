import { useLanguage } from "../context/LanguageContext";
import { asset } from "../lib/asset";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div className="footer__brand">
          <img
            src={asset("images/saqf-logo-transparent.png")}
            alt="سقف — Saqf Property Collective"
          />
          <p>{t.footer.tagline}</p>
        </div>

        <div className="footer__meta">
          <nav className="footer__links" aria-label="Footer">
            <a href="#about">{t.nav.about}</a>
            <a href="#specifications">{t.nav.specifications}</a>
            <a href="#overview">{t.nav.investment}</a>
            <a href="#cta">{t.nav.contact}</a>
          </nav>

          <div className="footer__contact">
            <span className="footer__label">{t.nav.contact}</span>
            <a
              className="footer__phone"
              href={`tel:${t.footer.phone.replace(/\s/g, "")}`}
              dir="ltr"
            >
              {t.footer.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="footer__rule" aria-hidden="true" />

      <div className="footer__bottom">
        <p className="footer__copy">
          © {year} Saqf. {t.footer.rights}
          <span className="footer__sep" aria-hidden="true">
            |
          </span>
          {t.footer.projectBy} :{" "}
          <a
            href="https://www.mafateehgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mafateeh Group
          </a>
        </p>
      </div>
    </footer>
  );
}
