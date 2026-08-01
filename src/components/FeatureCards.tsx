import { useLanguage } from "../context/LanguageContext";
import {
  IconConsulting,
  IconConstruction,
  IconEngineering,
  IconSustainable,
} from "./icons";

const expertiseIcons = [
  IconEngineering,
  IconConstruction,
  IconSustainable,
  IconConsulting,
];

const projectImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
];

export function FeatureCards() {
  const { t } = useLanguage();

  return (
    <section className="feature-cards" id="services" aria-label="Highlights">
      <div className="feature-cards__shell">
        <div className="feature-cards__bg" aria-hidden="true" />
        <div className="feature-cards__grid">
          <article className="card card--about" id="about">
            <div className="card__text">
              <h2>{t.aboutCard.title}</h2>
              <p>{t.aboutCard.body}</p>
            </div>
            <div className="card__media">
              <img src="/images/about-building.jpg" alt="" />
            </div>
          </article>

          <article className="card card--expertise">
            <h2>{t.expertise.title}</h2>
            <div className="expertise-grid">
              {t.expertise.items.map((item, i) => {
                const Icon = expertiseIcons[i];
                return (
                  <div key={item.title} className="expertise-item">
                    <Icon className="expertise-item__icon" />
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="card card--projects" id="projects">
            <h2>{t.projects.title}</h2>
            <div className="project-list">
              {t.projects.items.map((project, i) => (
                <a key={project.name} href="#projects" className="project-tile">
                  <img src={projectImages[i]} alt={project.name} />
                  <span className="project-tile__label">{project.name}</span>
                </a>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
