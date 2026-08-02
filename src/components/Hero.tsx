import { useLanguage } from "../context/LanguageContext";
import { whatsappUrl } from "../lib/whatsapp";

/**
 * Hero video sources.
 * GitHub rejects the current local file (~1.1GB). Until a compressed version
 * is added at `public/videos/saqf-hero.mp4`, we keep the Pexels clip live.
 *
 * To use your video after compressing (~5–15MB):
 *   1. Save as public/videos/saqf-hero.mp4
 *   2. Set current to: asset("videos/saqf-hero.mp4")  (import { asset } from "../lib/asset")
 */
const HERO_VIDEO = {
  current:
    "https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4",
  previous:
    "https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4",
} as const;

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
        <source src={HERO_VIDEO.current} type="video/mp4" />
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
