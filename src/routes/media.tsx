import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { useTr } from "@/lib/i18n";
import { Mic, Video, Newspaper, Radio } from "lucide-react";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media — Lectures, Interviews & Documentaries | Dr. Tamer Al-Solahi" },
      { name: "description", content: "Lectures, interviews, podcasts, and documentary appearances by Dr. Tamer Al-Solahi, Egyptology researcher." },
      { property: "og:title", content: "Media — Dr. Tamer Al-Solahi" },
      { property: "og:description", content: "Selected media appearances and lectures." },
      { property: "og:url", content: "/media" },
    ],
    links: [{ rel: "canonical", href: "/media" }],
  }),
  component: MediaPage,
});

const items = [
  { icon: Video, en: { k: "Documentary", t: "Voices from the Necropolis", o: "Heritage Channel · 2024" }, ar: { k: "وثائقي", t: "أصوات من الجبانة", o: "قناة التراث · ٢٠٢٤" } },
  { icon: Mic, en: { k: "Podcast", t: "Reading the Pharaohs", o: "History Hours · 2024" }, ar: { k: "بودكاست", t: "قراءة الفراعنة", o: "ساعات التاريخ · ٢٠٢٤" } },
  { icon: Newspaper, en: { k: "Interview", t: "On the Future of Egyptology", o: "Cultural Review · 2023" }, ar: { k: "مقابلة", t: "حول مستقبل علم المصريات", o: "المراجعة الثقافية · ٢٠٢٣" } },
  { icon: Radio, en: { k: "Radio", t: "The Architecture of Belief", o: "Public Radio · 2023" }, ar: { k: "إذاعة", t: "عمارة الإيمان", o: "الإذاعة العامة · ٢٠٢٣" } },
  { icon: Video, en: { k: "Lecture", t: "Hieroglyphs Beyond Decoration", o: "University Symposium · 2023" }, ar: { k: "محاضرة", t: "الهيروغليفية بعيداً عن الزخرفة", o: "ندوة جامعية · ٢٠٢٣" } },
  { icon: Mic, en: { k: "Podcast", t: "The Theban West Bank", o: "Antiquity Talks · 2022" }, ar: { k: "بودكاست", t: "البر الغربي بطيبة", o: "أحاديث الآثار · ٢٠٢٢" } },
];

function MediaPage() {
  const tr = useTr();
  return (
    <SiteLayout>
      <PageHeader
        eyebrow={tr("Selected Media", "مختارات إعلامية")}
        title={tr("Media & Appearances", "الإعلام والظهور العام")}
        lead={tr(
          "Lectures, interviews, and documentary contributions making Egyptological scholarship accessible to a wider public.",
          "محاضرات ومقابلات ومساهمات وثائقية تُتيح بحوث علم المصريات لجمهور أوسع."
        )}
      />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, en, ar }, i) => {
            const c = tr(en, ar);
            return (
              <article key={i} className="rounded-lg border border-border bg-card p-6 hover:border-gold/60 transition-colors">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
                  <Icon className="h-4 w-4" /> {c.k}
                </div>
                <h2 className="mt-3 font-serif text-xl text-primary">{c.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{c.o}</p>
              </article>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
