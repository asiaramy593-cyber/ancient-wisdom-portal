import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { useTr } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Dr. Tamer Al-Solahi | Egyptology Consulting" },
      { name: "description", content: "Historical consulting, museum advisory, documentary scholarship, and academic lectures by Dr. Tamer Al-Solahi." },
      { property: "og:title", content: "Services — Dr. Tamer Al-Solahi" },
      { property: "og:description", content: "Consulting, advisory and lecture services in Egyptology." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    en: { t: "Historical Consulting", d: "Authoritative historical context for publishers, filmmakers, and cultural projects relating to Ancient Egypt." },
    ar: { t: "الاستشارات التاريخية", d: "سياق تاريخي موثوق للناشرين وصنّاع الأفلام والمشاريع الثقافية المتعلقة بمصر القديمة." },
  },
  {
    en: { t: "Museum Advisory", d: "Exhibition concept review, label writing, object interpretation, and curatorial guidance." },
    ar: { t: "الاستشارات المتحفية", d: "مراجعة مفاهيم المعارض، وصياغة الشروحات، وتفسير القطع، والتوجيه القيمي." },
  },
  {
    en: { t: "Documentary Scholarship", d: "Script review, on-camera interviews, and on-set archaeological direction." },
    ar: { t: "الاستشارات الوثائقية", d: "مراجعة السيناريو، والمقابلات أمام الكاميرا، والإشراف الأثري في موقع التصوير." },
  },
  {
    en: { t: "Academic Lectures", d: "Public lectures, university seminars, and bespoke educational programs in Arabic and English." },
    ar: { t: "المحاضرات الأكاديمية", d: "محاضرات عامة وندوات جامعية وبرامج تعليمية مخصصة بالعربية والإنجليزية." },
  },
  {
    en: { t: "Manuscript & Translation Review", d: "Editorial review of Egyptological manuscripts and translation of hieroglyphic source texts." },
    ar: { t: "مراجعة المخطوطات والترجمة", d: "مراجعة تحريرية لمخطوطات علم المصريات وترجمة النصوص الهيروغليفية الأصلية." },
  },
  {
    en: { t: "Heritage Site Reports", d: "Independent reports on conservation issues, site interpretation, and visitor experience." },
    ar: { t: "تقارير المواقع التراثية", d: "تقارير مستقلة حول قضايا الصون وتفسير المواقع وتجربة الزائر." },
  },
];

function ServicesPage() {
  const tr = useTr();
  return (
    <SiteLayout>
      <PageHeader
        eyebrow={tr("Professional Services", "الخدمات المهنية")}
        title={tr("Services", "الخدمات")}
        lead={tr(
          "Rigorous Egyptological scholarship made available to institutions, media, and academic partners worldwide.",
          "بحث علمي رصين في علم المصريات متاح للمؤسسات ووسائل الإعلام والشركاء الأكاديميين حول العالم."
        )}
      />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const c = tr(s.en, s.ar);
            return (
              <div key={i} className="rounded-lg border border-border bg-card p-6 hover:border-gold/60 transition-colors">
                <div className="text-xs uppercase tracking-widest text-gold">0{i + 1}</div>
                <h2 className="mt-3 font-serif text-xl text-primary">{c.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link to="/request" className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            {tr("Submit a Request", "إرسال طلب")}
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
