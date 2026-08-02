import aboutImage from "../assets/about.png";
import proj1Image from "../assets/proj1.png";
import proj2Image from "../assets/proj2.png";
import { useLanguage } from "../context/LanguageContext";
import {
  IconBuildingLayout,
  IconBuiltUpArea,
  IconLandArea,
  IconOperational,
} from "./icons";
import { SpecBody } from "./SpecBody";

const expertiseIcons = [
  IconLandArea,
  IconBuiltUpArea,
  IconBuildingLayout,
  IconOperational,
];

const projectImages = [proj1Image, proj2Image];

export function FeatureCards() {
  const { t } = useLanguage();

  return (
    <section className="feature-cards" id="factory" aria-label="Highlights">
      <div className="feature-cards__shell">
        <div className="feature-cards__bg" aria-hidden="true" />
        <div className="feature-cards__grid">
          <article className="card card--about" id="about">
            <div className="card__text">
              <h2>{t.aboutCard.title}</h2>
              <p>{t.aboutCard.body}</p>
            </div>
            <div className="card__media">
              <img src={aboutImage} alt="" />
            </div>
          </article>

          <article className="card card--expertise" id="specifications">
            <h2>{t.expertise.title}</h2>
            <div className="expertise-grid">
              {t.expertise.items.map((item, i) => {
                const Icon = expertiseIcons[i];
                return (
                  <div key={item.title} className="expertise-item">
                    <Icon className="expertise-item__icon" />
                    <h3>{item.title}</h3>
                    <SpecBody text={item.body} />
                  </div>
                );
              })}
            </div>
          </article>

          <article className="card card--projects" id="projects">
            <h2>{t.projects.title}</h2>
            <div className="project-list">
              {t.projects.items.map((project, i) => (
                <div key={project.name} className="project-tile">
                  <img src={projectImages[i]} alt="" />
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
