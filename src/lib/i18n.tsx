import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Locale = "pt" | "en";

export const SUPPORTED_LOCALES: Locale[] = ["pt", "en"];

const STORAGE_KEY = "bio-cristian:locale";

export type Localized<T = string> = { pt: T; en: T };

export const ui: Record<Locale, {
  linksEyebrow: string;
  linksTitle: string;
  toggleAriaLabel: string;
  switchTo: (l: Locale) => string;
}> = {
  pt: {
    linksEyebrow: "Acessos Rápidos",
    linksTitle: "Meus Links",
    toggleAriaLabel: "Selecionar idioma",
    switchTo: (l) => (l === "pt" ? "Mudar para Português" : "Mudar para Inglês"),
  },
  en: {
    linksEyebrow: "Quick Access",
    linksTitle: "My Links",
    toggleAriaLabel: "Select language",
    switchTo: (l) => (l === "pt" ? "Switch to Portuguese" : "Switch to English"),
  },
};

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: <T>(value: Localized<T>) => T;
  ui: (typeof ui)[Locale];
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const detectInitialLocale = (): Locale => {
  if (typeof window === "undefined") return "pt";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "pt" || saved === "en") return saved;
  const browser = window.navigator.language?.toLowerCase() ?? "";
  return browser.startsWith("en") ? "en" : "pt";
};

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(() => detectInitialLocale());

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    }
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, l);
    }
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      t: <T,>(v: Localized<T>) => v[locale],
      ui: ui[locale],
    }),
    [locale, setLocale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
};
