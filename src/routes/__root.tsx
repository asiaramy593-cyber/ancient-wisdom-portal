import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { Toaster } from "sonner";

const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Tamer Al-Solahi",
  alternateName: "د. تامر الصوالحي",
  jobTitle: "Researcher in Ancient Egyptian Archaeology & Historical Consultant",
  description:
    "Researcher in Ancient Egyptian Archaeology and Historical Consultant specializing in Egyptology, hieroglyphic studies, and museum advisory.",
  knowsAbout: [
    "Egyptology",
    "Ancient Egyptian Archaeology",
    "Hieroglyphs",
    "Pharaonic History",
    "Museum Studies",
    "علم المصريات",
    "الآثار المصرية القديمة",
    "الهيروغليفية",
  ],
  knowsLanguage: ["ar", "en"],
  nationality: "Egyptian",
  url: "/",
  sameAs: [] as string[],
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dr. Tamer Al-Solahi — Egyptology Research",
  alternateName: "د. تامر الصوالحي",
  inLanguage: ["en", "ar"],
  url: "/",
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-xl text-primary">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dr. Tamer Al-Solahi | Egyptologist & Historical Consultant" },
      {
        name: "description",
        content:
          "Dr. Tamer Al-Solahi (د. تامر الصوالحي) — researcher in Ancient Egyptian Archaeology and historical consultant. Publications, lectures, and Egyptology consulting.",
      },
      { name: "author", content: "Dr. Tamer Al-Solahi" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "googlebot", content: "index, follow" },
      {
        name: "keywords",
        content:
          "Dr. Tamer Al-Solahi, Tamer Al-Solahi, د. تامر الصوالحي, تامر الصوالحي, Egyptology, Egyptologist, Ancient Egyptian Archaeology, Hieroglyphs, Pharaonic History, Egyptian history consultant, علم المصريات, الآثار المصرية القديمة, الهيروغليفية, التاريخ الفرعوني, مستشار تاريخي, باحث آثار",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Dr. Tamer Al-Solahi" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ar_EG" },
      { property: "og:title", content: "Dr. Tamer Al-Solahi — Egyptologist & Historical Consultant" },
      { property: "og:description", content: "Researcher in Ancient Egyptian Archaeology and historical consultant. Publications, lectures, and consulting." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dr. Tamer Al-Solahi — Egyptologist" },
      { name: "twitter:description", content: "Researcher in Ancient Egyptian Archaeology and historical consultant." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Amiri:wght@400;700&family=Noto+Naskh+Arabic:wght@400;500;700&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(PERSON_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(WEBSITE_JSONLD) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <Outlet />
          <Toaster position="top-center" richColors />
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
