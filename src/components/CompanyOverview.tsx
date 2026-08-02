import { useLanguage } from "../context/LanguageContext";
import overviewImage from "../assets/overview.png";

function UspBody({ text }: { text: string }) {
  const parts = text
    .split("\n")
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length <= 1) {
    return <p className="usp__text">{text}</p>;
  }

  return (
    <ul className="usp__list">
      {parts.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function CompanyOverview() {
  const { t } = useLanguage();

  return (
    <section className="overview" id="overview">
      <div className="overview__inner">
        <div className="overview__content">
          <h2>{t.overview.title}</h2>
          <ul className="overview__usps">
            {t.overview.usps.map((usp, index) => (
              <li key={usp.title} className="usp">
                <span className="usp__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="usp__content">
                  <h3 className="usp__title">{usp.title}</h3>
                  <UspBody text={usp.body} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="overview__image">
          <img
            src={overviewImage}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
