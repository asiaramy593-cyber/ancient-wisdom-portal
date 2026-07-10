import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { useTr } from "@/lib/i18n";

export const Route = createFileRoute("/knowledge")({
  head: () => ({
    meta: [
      { title: "Knowledge Base — Egyptology Reference | Dr. Tamer Al-Solahi" },
      { name: "description", content: "Egyptology knowledge base by Dr. Tamer Al-Solahi: dynasties, sites, deities, hieroglyphic concepts, and reading lists." },
      { property: "og:title", content: "Knowledge Base — Dr. Tamer Al-Solahi" },
      { property: "og:description", content: "Reference articles in Ancient Egyptian history, sites, and language." },
      { property: "og:url", content: "https://ancient-wisdom-portal.lovable.app/knowledge" },
      { property: "og:image", content: "https://ancient-wisdom-portal.lovable.app/og/knowledge.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Knowledge Base — Egyptology Reference Library · قاعدة المعرفة" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ar_EG" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Knowledge Base — Dr. Tamer Al-Solahi" },
      { name: "twitter:description", content: "Reference articles in Ancient Egyptian history, sites, and language." },
      { name: "twitter:image", content: "https://ancient-wisdom-portal.lovable.app/og/knowledge.jpg" },
    ],
    links: [{ rel: "canonical", href: "/knowledge" }],
  }),
  component: KnowledgePage,
});

const topics = [
  { en: "The Old Kingdom (Dynasties 3–6)", ar: "الدولة القديمة (الأسرات ٣–٦)" },
  { en: "The Middle Kingdom (Dynasties 11–12)", ar: "الدولة الوسطى (الأسرات ١١–١٢)" },
  { en: "The New Kingdom (Dynasties 18–20)", ar: "الدولة الحديثة (الأسرات ١٨–٢٠)" },
  { en: "Hieroglyphs: Phonograms & Ideograms", ar: "الهيروغليفية: الصوتيات والأيقونات" },
  { en: "Theban Necropolis & Valley of the Kings", ar: "جبانة طيبة ووادي الملوك" },
  { en: "Karnak, Luxor & the Temples of Thebes", ar: "الكرنك والأقصر ومعابد طيبة" },
  { en: "Memphis, Saqqara & the Pyramid Complexes", ar: "ممفيس وسقارة ومجمعات الأهرامات" },
  { en: "Deities of the Pharaonic Pantheon", ar: "آلهة المعبد الفرعوني" },
  { en: "The Book of the Dead", ar: "كتاب الموتى" },
  { en: "Greco-Roman Egypt", ar: "مصر اليونانية الرومانية" },
  { en: "Egyptian Mummification & Funerary Rites", ar: "التحنيط والشعائر الجنائزية المصرية" },
  { en: "Daily Life in Ancient Egypt", ar: "الحياة اليومية في مصر القديمة" },
];

function KnowledgePage() {
  const tr = useTr();
  return (
    <SiteLayout>
      <PageHeader
        eyebrow={tr("Reference", "مرجع")}
        title={tr("Knowledge Base", "قاعدة المعرفة")}
        lead={tr(
          "A growing reference library on Ancient Egyptian civilization — dynasties, sites, language, and religion — prepared for students, researchers, and curious readers.",
          "مكتبة مرجعية متنامية حول الحضارة المصرية القديمة — الأسرات، والمواقع، واللغة، والدين — معدّة للطلاب والباحثين والقرّاء المهتمين."
        )}
      />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-px bg-border rounded-lg overflow-hidden border border-border">
          {topics.map((t, i) => (
            <div key={i} className="bg-card p-6 hover:bg-papyrus transition-colors">
              <div className="text-xs text-gold mb-2">{String(i + 1).padStart(2, "0")}</div>
              <h2 className="font-serif text-lg text-primary">{tr(t.en, t.ar)}</h2>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
