import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translation } from "../i18n/translations";

type LanguageContextValue = {
  lang: Lang;
  t: Translation;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  isFlipping: boolean;
  pendingLang: Lang | null;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "saqf-lang";
const COVER_MS = 380;
const TOTAL_MS = 900;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "ar" || saved === "en" ? saved : "en";
  });
  const [isFlipping, setIsFlipping] = useState(false);
  const [pendingLang, setPendingLang] = useState<Lang | null>(null);
  const timers = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLang = useCallback(() => {
    if (isFlipping) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const next = lang === "en" ? "ar" : "en";

    if (reduceMotion) {
      setLang(next);
      return;
    }

    clearTimers();
    setPendingLang(next);
    setIsFlipping(true);
    document.documentElement.classList.add("is-lang-flipping");

    timers.current.push(
      window.setTimeout(() => {
        setLang(next);
      }, COVER_MS),
    );

    timers.current.push(
      window.setTimeout(() => {
        setIsFlipping(false);
        setPendingLang(null);
        document.documentElement.classList.remove("is-lang-flipping");
      }, TOTAL_MS),
    );
  }, [isFlipping, lang, setLang, clearTimers]);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
  }, [lang, t.dir]);

  const value = useMemo(
    () => ({ lang, t, setLang, toggleLang, isFlipping, pendingLang }),
    [lang, t, setLang, toggleLang, isFlipping, pendingLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
