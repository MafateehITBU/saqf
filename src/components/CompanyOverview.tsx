import { useLanguage } from "../context/LanguageContext";

export function CompanyOverview() {
  const { t } = useLanguage();

  return (
    <section className="overview" id="overview">
      <div className="overview__inner">
        <div className="overview__content">
          <h2>{t.overview.title}</h2>
          <p>{t.overview.body}</p>
          <div className="overview__stats">
            {t.overview.stats.map((stat) => (
              <div key={stat.label} className="stat">
                <span className="stat__value">{stat.value}</span>
                <span className="stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="overview__image">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
