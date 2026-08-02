import { useLanguage } from "../context/LanguageContext";
import { asset } from "../lib/asset";
import { whatsappUrl } from "../lib/whatsapp";

/** Old Pexels clip — used when the local/compressed file is missing. */
const HERO_VIDEO_FALLBACK =
  "https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4";

/**
 * Preferred local/compressed hero video.
 * - Local: copy `src/assets/سقف.mp4` → `public/videos/saqf-hero.mp4`
 * - Deploy: compress to ~5–15MB, commit `public/videos/saqf-hero.mp4`
 * If missing, the browser falls back to HERO_VIDEO_FALLBACK.
 */
const HERO_VIDEO_LOCAL = asset("videos/saqf-hero.mp4");

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
        <source src={HERO_VIDEO_LOCAL} type="video/mp4" />
        <source src={HERO_VIDEO_FALLBACK} type="video/mp4" />
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
