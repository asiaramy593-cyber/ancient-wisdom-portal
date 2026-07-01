import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { NAME_AR, NAME_EN, TITLE_AR, TITLE_EN, useLang, useTr } from "@/lib/i18n";
import hero from "@/assets/hero-hieroglyphs.jpg";
import { BookOpen, ScrollText, Landmark, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Tamer Al-Solahi | Egyptologist & Historical Consultant" },
      {
        name: "description",
        content:
          "Official site of Dr. Tamer Al-Solahi (د. تامر الصوالحي) — Egyptologist and historical consultant. Research, publications, lectures, and consulting in Ancient Egyptian archaeology.",
      },
      { name: "keywords", content: "Dr. Tamer Al-Solahi, Tamer Al-Solahi, د. تامر الصوالحي, Egyptology, Ancient Egyptian Archaeology, Egyptologist, historical consultant, Pharaonic history, علم المصريات, الآثار المصرية القديمة, باحث آثار مصرية, مستشار تاريخي" },
      { property: "og:title", content: "Dr. Tamer Al-Solahi — Egyptologist & Historical Consultant" },
      { property: "og:description", content: "Egyptologist and historical consultant. Research, publications, and consulting in Ancient Egyptian archaeology." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "profile" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const { lang } = useLang();
  const tr = useTr();
  const name = tr(NAME_EN, NAME_AR);
  const title = tr(TITLE_EN, TITLE_AR);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Ancient Egyptian hieroglyphs carved in sandstone"
          width={1600}
          height={900}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
            {tr("Egyptology · Research · Consulting", "علم المصريات · بحث · استشارات")}
          </div>
          {/* SEO: H1 is the name only */}
          <h1 className="font-serif text-5xl md:text-7xl text-primary leading-tight">
            {name}
          </h1>
          <div className="gold-rule my-8 mx-auto max-w-sm" />
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-foreground/80">
            {title}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            {tr(
              "Two decades of scholarship in Pharaonic history, hieroglyphic studies, and the material culture of the Nile Valley.",
              "عقدان من البحث العلمي في التاريخ الفرعوني والدراسات الهيروغليفية والثقافة المادية لوادي النيل."
            )}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/research"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              {tr("Read the Research", "اطّلع على الأبحاث")}
            </Link>
            <Link
              to="/request"
              className="inline-flex items-center rounded-md border border-gold px-6 py-3 text-sm font-medium text-gold hover:bg-gold hover:text-gold-foreground transition-colors"
            >
              {tr("Request a Consultation", "اطلب استشارة")}
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">
            {tr("Areas of Expertise", "مجالات التخصص")}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-primary mt-3">
            {tr("Scholarship rooted in the Nile Valley", "بحث علمي متجذر في وادي النيل")}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: ScrollText,
              en: { t: "Hieroglyphic Studies", d: "Translation, paleography, and contextual reading of Middle and Late Egyptian texts." },
              ar: { t: "الدراسات الهيروغليفية", d: "ترجمة وقراءة سياقية للنصوص المصرية الوسيطة والمتأخرة وعلم الخطوط." },
            },
            {
              icon: Landmark,
              en: { t: "Field Archaeology", d: "Site analysis, stratigraphy, and architectural interpretation of temple and tomb complexes." },
              ar: { t: "الآثار الميدانية", d: "تحليل المواقع وعلم الطبقات والتفسير المعماري لمجمعات المعابد والمقابر." },
            },
            {
              icon: BookOpen,
              en: { t: "Historical Consulting", d: "Advisory for museums, documentaries, publishers, and cultural institutions." },
              ar: { t: "الاستشارات التاريخية", d: "استشارات للمتاحف والوثائقيات والناشرين والمؤسسات الثقافية." },
            },
            {
              icon: GraduationCap,
              en: { t: "Academic Lectures", d: "Public lectures and university seminars on Pharaonic civilization." },
              ar: { t: "المحاضرات الأكاديمية", d: "محاضرات عامة وندوات جامعية حول الحضارة الفرعونية." },
            },
          ].map(({ icon: Icon, en, ar }, i) => {
            const c = lang === "ar" ? ar : en;
            return (
              <div key={i} className="rounded-lg border border-border bg-card p-6 hover:border-gold/60 transition-colors">
                <Icon className="h-7 w-7 text-gold" />
                <h3 className="mt-4 font-serif text-xl text-primary">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Research & Publications Highlights */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">
            {tr("Highlights", "أبرز الأعمال")}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-primary mt-3">
            {tr("Research & Publications Highlights", "أبرز الأبحاث والمنشورات")}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            {tr(
              "Selected peer-reviewed studies and field contributions in Egyptology, hieroglyphic philology, and material culture of Ancient Egypt.",
              "مختارات من الدراسات المحكّمة والمساهمات الميدانية في علم المصريات، وفقه اللغة الهيروغليفية، والثقافة المادية لمصر القديمة."
            )}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              en: { t: "Hieroglyphic Inscriptions of the Middle Kingdom", d: "A philological study of stelae from Abydos, examining royal epithets and offering formulae across the 12th Dynasty." },
              ar: { t: "نقوش هيروغليفية من الدولة الوسطى", d: "دراسة لغوية لشواهد قبور أبيدوس، مع تحليل الألقاب الملكية وصيغ القرابين في الأسرة الثانية عشرة." },
              year: "2023",
            },
            {
              en: { t: "Temple Architecture in the Late Period", d: "Stratigraphic and architectural analysis of sanctuary complexes in the Nile Delta, with notes on Persian-era restorations." },
              ar: { t: "العمارة المعبدية في العصر المتأخر", d: "تحليل طبقي ومعماري لمجمعات الحرم في دلتا النيل، مع ملاحظات على الترميمات في العصر الفارسي." },
              year: "2022",
            },
            {
              en: { t: "Funerary Practices in the New Kingdom", d: "Comparative study of Theban necropolis tomb assemblages, focusing on Book of the Dead vignettes and grave goods." },
              ar: { t: "الطقوس الجنائزية في الدولة الحديثة", d: "دراسة مقارنة لمحتويات مقابر جبانة طيبة، مع تركيز على مشاهد كتاب الموتى والقرابين الجنائزية." },
              year: "2021",
            },
          ].map((p, i) => {
            const c = lang === "ar" ? p.ar : p.en;
            return (
              <article key={i} className="rounded-lg border border-border bg-card p-6 hover:border-gold/60 transition-colors">
                <div className="text-xs uppercase tracking-widest text-gold">{p.year}</div>
                <h3 className="mt-3 font-serif text-xl text-primary leading-snug">{c.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link to="/research" className="inline-flex items-center rounded-md border border-gold px-6 py-3 text-sm font-medium text-gold hover:bg-gold hover:text-gold-foreground transition-colors">
            {tr("View Full Research Catalogue", "عرض كامل قائمة الأبحاث")}
          </Link>
        </div>
      </section>

      {/* Quote / authority */}
      <section className="bg-papyrus border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="font-serif text-2xl md:text-3xl text-primary leading-relaxed italic">
            {tr(
              "“The stones of Egypt do not speak in whispers — they testify, page by page, to a civilization that measured time by eternity.”",
              "«إن أحجار مصر لا تتحدث همساً — بل تشهد، صفحةً صفحة، على حضارةٍ قاست الزمن بالأبدية.»"
            )}
          </div>
          <div className="mt-6 text-sm uppercase tracking-[0.25em] text-muted-foreground">— {name}</div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-primary">
          {tr("Commission research or consulting", "اطلب بحثاً أو استشارة")}
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          {tr(
            "From museum exhibits to scholarly publications and film consulting — engage Dr. Al-Solahi for rigorous Egyptological work.",
            "من معارض المتاحف إلى المنشورات الأكاديمية واستشارات الأفلام — تواصل مع د. الصوالحي للحصول على عمل علمي رصين في علم المصريات."
          )}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/services" className="inline-flex items-center rounded-md border border-border px-6 py-3 text-sm font-medium hover:border-primary">
            {tr("View Services", "عرض الخدمات")}
          </Link>
          <Link to="/contact" className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            {tr("Get in Touch", "تواصل")}
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
