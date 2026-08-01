import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const navIds = ["home", "projects", "services", "about", "contact"] as const;
type NavId = (typeof navIds)[number];

const cardsNavIds: NavId[] = ["projects", "services", "about"];

function navFromHash(): NavId | null {
  const hash = window.location.hash.replace("#", "");
  return navIds.includes(hash as NavId) ? (hash as NavId) : null;
}

export function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<NavId>("home");
  const clickLock = useRef<NavId | null>(null);
  const lockTimer = useRef<number | null>(null);

  const activate = (id: NavId, lock = false) => {
    setActive(id);
    if (!lock) return;

    clickLock.current = id;
    if (lockTimer.current) window.clearTimeout(lockTimer.current);
    // Keep clicked item active while smooth-scroll finishes
    lockTimer.current = window.setTimeout(() => {
      clickLock.current = null;
    }, 1200);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const syncFromScroll = () => {
      setScrolled(window.scrollY > 24);

      if (clickLock.current) {
        setActive(clickLock.current);
        return;
      }

      const home = document.getElementById("home");
      const cards = document.getElementById("services");
      const overview = document.getElementById("overview");
      const contact = document.getElementById("contact");
      if (!home || !cards || !contact) return;

      const homeBottom = home.getBoundingClientRect().bottom;
      const contactTop = contact.getBoundingClientRect().top;
      const overviewTop = overview?.getBoundingClientRect().top ?? contactTop;

      // Footer in view
      if (contactTop < window.innerHeight * 0.65) {
        setActive("contact");
        return;
      }

      // Past hero / into cards band (handles hero overlap)
      if (homeBottom < 200 || cards.getBoundingClientRect().top < 220) {
        // Still in cards area (not yet deep into overview)
        if (overviewTop > 220) {
          setActive((prev) => (cardsNavIds.includes(prev) ? prev : "services"));
          return;
        }
      }

      setActive("home");
    };

    const onHashChange = () => {
      const fromHash = navFromHash();
      if (fromHash) activate(fromHash, true);
    };

    syncFromScroll();
    window.addEventListener("scroll", syncFromScroll, { passive: true });
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("scroll", syncFromScroll);
      window.removeEventListener("hashchange", onHashChange);
      if (lockTimer.current) window.clearTimeout(lockTimer.current);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header__inner">
        <a
          href="#home"
          className="header__logo"
          aria-label="Saqf"
          onClick={() => {
            activate("home", true);
            close();
          }}
        >
          <img src="/images/saqf-logo-transparent.png" alt="سقف — Saqf Property Collective" />
        </a>

        <nav className={`header__nav ${open ? "is-open" : ""}`} aria-label="Primary">
          {navIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`header__link ${active === id ? "is-active" : ""}`}
              onClick={() => {
                activate(id, true);
                close();
              }}
            >
              {t.nav[id]}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn--primary header__nav-cta"
            onClick={() => {
              activate("contact", true);
              close();
            }}
          >
            {t.nav.getStarted}
          </a>
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLang}
            aria-label={lang === "en" ? "العربية" : "English"}
          >
            {lang === "en" ? "العربية" : "EN"}
          </button>
          <a
            href="#contact"
            className="btn btn--primary header__cta-desktop"
            onClick={() => activate("contact", true)}
          >
            {t.nav.getStarted}
          </a>
          <button
            type="button"
            className={`menu-toggle ${open ? "is-open" : ""}`}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
