import { useLanguage } from "../context/LanguageContext";
import { whatsappUrl } from "../lib/whatsapp";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
      >
        <source
          src="https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">{t.hero.title}</h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>
        <a
          href={whatsappUrl(t.footer.phone)}
          className="btn btn--primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
}
