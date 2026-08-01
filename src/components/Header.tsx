import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { whatsappUrl } from "../lib/whatsapp";

const navItems = [
  { id: "home", href: "#home" },
  { id: "about", href: "#about" },
  { id: "specifications", href: "#specifications" },
  { id: "investment", href: "#overview" },
  { id: "contact", href: "#cta" },
] as const;

type NavId = (typeof navItems)[number]["id"];

const cardsNavIds: NavId[] = ["about", "specifications"];

function navFromHash(): NavId | null {
  const hash = window.location.hash.replace("#", "");
  if (hash === "overview") return "investment";
  if (hash === "cta") return "contact";
  if (hash === "services" || hash === "projects") return "specifications";
  return navItems.some((item) => item.id === hash) ? (hash as NavId) : null;
}

export function Header() {
  const { t, lang, toggleLang, isFlipping } = useLanguage();
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
      const cards = document.getElementById("factory");
      const overview = document.getElementById("overview");
      const cta = document.getElementById("cta");
      if (!home || !cards || !overview || !cta) return;

      const homeBottom = home.getBoundingClientRect().bottom;
      const overviewTop = overview.getBoundingClientRect().top;
      const ctaTop = cta.getBoundingClientRect().top;

      if (ctaTop < window.innerHeight * 0.6) {
        setActive("contact");
        return;
      }

      if (overviewTop < 240) {
        setActive("investment");
        return;
      }

      if (homeBottom < 200 || cards.getBoundingClientRect().top < 220) {
        setActive((prev) => (cardsNavIds.includes(prev) ? prev : "about"));
        return;
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
  const wa = whatsappUrl(t.footer.phone);

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
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`header__link ${active === item.id ? "is-active" : ""}`}
              onClick={() => {
                activate(item.id, true);
                close();
              }}
            >
              {t.nav[item.id]}
            </a>
          ))}
          <a
            href={wa}
            className="btn btn--primary header__nav-cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            {t.nav.getStarted}
          </a>
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLang}
            disabled={isFlipping}
            aria-label={lang === "en" ? "العربية" : "English"}
          >
            {lang === "en" ? "العربية" : "EN"}
          </button>
          <a
            href={wa}
            className="btn btn--primary header__cta-desktop"
            target="_blank"
            rel="noopener noreferrer"
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
