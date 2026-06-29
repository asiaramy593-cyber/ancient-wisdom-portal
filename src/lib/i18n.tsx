import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <K extends keyof typeof dict.en>(key: K) => string;
  dir: "rtl" | "ltr";
}

const LangContext = createContext<Ctx | null>(null);

export const NAME_EN = "Dr. Tamer Al-Solahi";
export const NAME_AR = "د. تامر الصوالحي";
export const TITLE_EN = "Researcher in Ancient Egyptian Archaeology & Historical Consultant";
export const TITLE_AR = "باحث في علم الآثار المصرية القديمة ومستشار تاريخي";

export const dict = {
  en: {
    brandShort: "Dr. Al-Solahi",
    nav_home: "Home",
    nav_about: "About",
    nav_research: "Research",
    nav_services: "Services",
    nav_knowledge: "Knowledge Base",
    nav_media: "Media",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_request: "Request",
    nav_downloads: "Downloads",
    cta_request: "Request a Consultation",
    cta_read_research: "Read Research",
    footer_rights: "All rights reserved.",
    footer_tagline: "Egyptology · Archaeological Research · Historical Consulting",
  },
  ar: {
    brandShort: "د. الصوالحي",
    nav_home: "الرئيسية",
    nav_about: "نبذة",
    nav_research: "الأبحاث",
    nav_services: "الخدمات",
    nav_knowledge: "قاعدة المعرفة",
    nav_media: "الإعلام",
    nav_faq: "الأسئلة الشائعة",
    nav_contact: "تواصل",
    nav_request: "طلب استشارة",
    nav_downloads: "تنزيلات",
    cta_request: "اطلب استشارة",
    cta_read_research: "اطّلع على الأبحاث",
    footer_rights: "جميع الحقوق محفوظة.",
    footer_tagline: "علم المصريات · البحث الأثري · الاستشارات التاريخية",
  },
} as const;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || "ar";
    setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t: Ctx["t"] = (key) => (dict[lang] as Record<string, string>)[key as string] ?? (dict.en as Record<string, string>)[key as string];

  return (
    <LangContext.Provider value={{ lang, setLang, t, dir: lang === "ar" ? "rtl" : "ltr" }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}

/** Pick a value by current language. */
export function useTr() {
  const { lang } = useLang();
  return <T,>(en: T, ar: T): T => (lang === "ar" ? ar : en);
}
