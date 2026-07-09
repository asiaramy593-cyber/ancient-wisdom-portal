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
  name: "Dr. Ahmed Al-Muaiqly",
  alternateName: "د. أحمد المعيقلى",
  jobTitle: "Researcher in Ancient Egyptian Archaeology & Historical Consultant",
  description:
    "Dr. Ahmed Al-Muaiqly is a researcher in Ancient Egyptian Archaeology and historical consultant specializing in Egyptology, hieroglyphic studies, and cultural heritage of Ancient Egypt.",
  knowsAbout: [
    "Egyptology",
    "Ancient Egyptian Archaeology",
    "Hieroglyphs",
    "Pharaonic History",
    "Cultural Heritage",
    "Historical Documentation",
    "علم المصريات",
    "الآثار المصرية القديمة",
    "الهيروغليفية",
  ],
  knowsLanguage: ["ar", "en"],
  nationality: "Egyptian",
  birthPlace: {
    "@type": "Place",
    name: "Garden City, Cairo, Egypt",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Historical Research Center, Fifth Settlement",
    addressLocality: "New Cairo",
    addressRegion: "Cairo",
    addressCountry: "EG",
  },
  telephone: "+201150778062",
  email: "ahmedalmuaiqly@gmail.com",
  url: "/",
  sameAs: [
    "https://web.facebook.com/profile.php?id=61576404092074",
  ],
};


const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dr. Ahmed Al-Muaiqly — Egyptology Research",
  alternateName: "د. أحمد المعيقلى",
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
      { title: "Dr. Ahmed Al-Muaiqly — Egyptology Researcher & Historical Consultant" },
      {
        name: "description",
        content:
          "Official site of Dr. Ahmed Al-Muaiqly (د. أحمد المعيقلى), researcher in Ancient Egyptian Archaeology and historical consultant. Research, publications, and consulting in Egyptology.",
      },
      { name: "author", content: "Dr. Ahmed Al-Muaiqly" },
      {
        name: "keywords",
        content:
          "Ahmed Al-Muaiqly, Dr. Ahmed Al-Muaiqly, أحمد المعيقلى, Egyptology, Ancient Egyptian Archaeology, Hieroglyphs, Pharaonic History, علم المصريات, الآثار المصرية, الهيروغليفية, تاريخ مصر القديمة, مستشار تاريخي",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Dr. Ahmed Al-Muaiqly" },
      { property: "og:title", content: "Dr. Ahmed Al-Muaiqly — Egyptology Researcher & Historical Consultant" },
      { property: "og:description", content: "A professional, bilingual website showcasing Dr. Ahmed Al-Muaiqly's expertise in Ancient Egyptian Archaeology." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dr. Ahmed Al-Muaiqly — Egyptology Researcher & Historical Consultant" },
      { name: "description", content: "A professional, bilingual website showcasing Dr. Ahmed Al-Muaiqly's expertise in Ancient Egyptian Archaeology." },
      { name: "twitter:description", content: "A professional, bilingual website showcasing Dr. Ahmed Al-Muaiqly's expertise in Ancient Egyptian Archaeology." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7c8cf796-011f-4d29-b3bf-cc5e9360f8a5/id-preview-b774e7b8--99832f1f-9051-48e8-acb6-ba110736b586.lovable.app-1782900015607.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7c8cf796-011f-4d29-b3bf-cc5e9360f8a5/id-preview-b774e7b8--99832f1f-9051-48e8-acb6-ba110736b586.lovable.app-1782900015607.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Tajawal:wght@400;500;700;900&family=Cairo:wght@600;700;900&display=swap",
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
    <html lang="ar" dir="rtl" className="dark" style={{ colorScheme: "dark" }}>
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
