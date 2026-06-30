import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Languages, Sun, Moon, MessageCircle } from "lucide-react";
import { NAME_AR, NAME_EN, useLang, useTr } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { WHATSAPP_URL } from "@/lib/contact-info";

const NAV = [
  { to: "/", key: "nav_home" },
  { to: "/about", key: "nav_about" },
  { to: "/research", key: "nav_research" },
  { to: "/services", key: "nav_services" },
  { to: "/knowledge", key: "nav_knowledge" },
  { to: "/media", key: "nav_media" },
  { to: "/faq", key: "nav_faq" },
  { to: "/downloads", key: "nav_downloads" },
  { to: "/contact", key: "nav_contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const { lang, setLang, t } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const tr = useTr();
  const [open, setOpen] = useState(false);
  const name = tr(NAME_EN, NAME_AR);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <span className="font-serif text-xl text-primary tracking-tight group-hover:text-gold transition-colors">
                {name}
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="px-3 py-2 text-sm text-foreground/80 hover:text-primary transition-colors relative [&.active]:text-primary [&.active]:font-medium"
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {t(n.key)}
                </Link>
              ))}
              <Link
                to="/request"
                className="ms-2 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {t("cta_request")}
              </Link>
              <button
                onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                className="ms-2 inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-sm hover:border-gold hover:text-gold transition-colors"
                aria-label="Toggle language"
              >
                <Languages className="h-4 w-4" />
                {lang === "ar" ? "EN" : "ع"}
              </button>
              <button
                onClick={toggleTheme}
                className="ms-1 inline-flex items-center rounded-md border border-border px-2.5 py-2 text-sm hover:border-gold hover:text-gold transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </nav>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1.5 text-xs"
                aria-label="Toggle language"
              >
                <Languages className="h-4 w-4" />
                {lang === "ar" ? "EN" : "ع"}
              </button>
              <button
                onClick={toggleTheme}
                className="inline-flex items-center rounded-md border border-border p-2"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setOpen((v) => !v)}
                className="rounded-md border border-border p-2"
                aria-label="Toggle menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {open && (
            <div className="lg:hidden pb-4 border-t border-border pt-3 grid grid-cols-2 gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sm hover:bg-muted rounded-md [&.active]:text-primary [&.active]:font-medium"
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {t(n.key)}
                </Link>
              ))}
              <Link
                to="/request"
                onClick={() => setOpen(false)}
                className="col-span-2 mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                {t("cta_request")}
              </Link>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-papyrus mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="font-serif text-lg text-primary">{name}</div>
              <p className="mt-2 text-sm text-muted-foreground">{t("footer_tagline")}</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                {tr("Navigate", "تصفّح")}
              </div>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {NAV.slice(0, 8).map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="hover:text-gold transition-colors">
                      {t(n.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                {tr("Contact", "للتواصل")}
              </div>
              <p className="text-sm text-muted-foreground">
                {tr("For research collaborations, consulting, and media inquiries.",
                    "للتعاون البحثي والاستشارات والاستفسارات الإعلامية.")}
              </p>
              <Link to="/contact" className="inline-block mt-3 text-sm text-gold hover:underline">
                {t("nav_contact")} →
              </Link>
            </div>
          </div>
          <div className="gold-rule my-8" />
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} {name}. {t("footer_rights")}
          </p>
        </div>
      </footer>
    </div>
  );
}

/** Standard page section header */
export function PageHeader({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <section className="border-b border-border bg-papyrus">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        {eyebrow && (
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">{eyebrow}</div>
        )}
        <h1 className="font-serif text-4xl md:text-5xl text-primary">{title}</h1>
        {lead && <p className="mt-5 text-lg text-muted-foreground academic-prose">{lead}</p>}
        <div className="gold-rule mt-8 mx-auto max-w-xs" />
      </div>
    </section>
  );
}
