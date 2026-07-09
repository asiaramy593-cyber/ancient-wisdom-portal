import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { useTr } from "@/lib/i18n";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research Articles — Dr. Ahmed Al-Muaiqly | Egyptology Publications" },
      { name: "description", content: "Scholarly research articles by Dr. Ahmed Al-Muaiqly on Ancient Egyptian archaeology, hieroglyphic studies, and Pharaonic history." },
      { property: "og:title", content: "Research Articles — Dr. Ahmed Al-Muaiqly" },
      { property: "og:description", content: "Peer-oriented Egyptological research and articles." },
      { property: "og:url", content: "/research" },
    ],
    links: [{ rel: "canonical", href: "/research" }],
  }),
  component: ResearchPage,
});

const articles = [
  {
    en: { t: "Solar Theology in the Temple of Karnak", s: "A reading of New Kingdom hymns to Amun-Ra and their architectural staging.", d: "2024 · Article" },
    ar: { t: "اللاهوت الشمسي في معبد الكرنك", s: "قراءة في تراتيل آمون رع في الدولة الحديثة وتجلياتها المعمارية.", d: "٢٠٢٤ · مقال" },
  },
  {
    en: { t: "Paleographic Notes on Eighteenth-Dynasty Stelae", s: "Variants in royal cartouche orthography during Thutmoside reigns.", d: "2023 · Study" },
    ar: { t: "ملاحظات في خطوط شواهد الأسرة الثامنة عشرة", s: "تنويعات إملاء الخراطيش الملكية في العصر التحوتمسي.", d: "٢٠٢٣ · دراسة" },
  },
  {
    en: { t: "Funerary Geography of the Theban Necropolis", s: "Spatial logic of tomb placement on the West Bank of Luxor.", d: "2023 · Article" },
    ar: { t: "الجغرافيا الجنائزية لجبانة طيبة", s: "المنطق المكاني لمواقع المقابر في البر الغربي بالأقصر.", d: "٢٠٢٣ · مقال" },
  },
  {
    en: { t: "Greco-Roman Continuities in Egyptian Cult Practice", s: "Hybrid iconography in the temples of Dendera and Edfu.", d: "2022 · Essay" },
    ar: { t: "استمراريات يونانية رومانية في الممارسة الطقسية المصرية", s: "الأيقونوغرافيا الهجينة في معبدَي دندرة وإدفو.", d: "٢٠٢٢ · مقالة" },
  },
  {
    en: { t: "Material Memory: Reuse of Pharaonic Stone", s: "Spolia patterns from Late Antiquity to the Medieval period.", d: "2022 · Article" },
    ar: { t: "الذاكرة المادية: إعادة استخدام الحجر الفرعوني", s: "أنماط إعادة التوظيف من العصور المتأخرة حتى العصر الوسيط.", d: "٢٠٢٢ · مقال" },
  },
  {
    en: { t: "Reading the Book of the Dead Spell 125", s: "The Hall of Two Truths and the moral architecture of judgment.", d: "2021 · Study" },
    ar: { t: "قراءة في التعويذة ١٢٥ من كتاب الموتى", s: "قاعة الحقيقتين والبنية الأخلاقية للحساب.", d: "٢٠٢١ · دراسة" },
  },
];

function ResearchPage() {
  const tr = useTr();
  return (
    <SiteLayout>
      <PageHeader
        eyebrow={tr("Publications", "المنشورات")}
        title={tr("Research Articles", "الأبحاث والمقالات")}
        lead={tr(
          "A curated selection of research and analytical articles in Ancient Egyptian archaeology, hieroglyphic studies, and the religious culture of Pharaonic Egypt.",
          "مختارات من الأبحاث والمقالات التحليلية في علم الآثار المصرية القديمة، والدراسات الهيروغليفية، والثقافة الدينية في مصر الفرعونية."
        )}
      />
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <ul className="space-y-1">
          {articles.map((a, i) => {
            const c = tr(a.en, a.ar);
            return (
              <li key={i} className="group">
                <article className="flex flex-col gap-2 border-b border-border py-7 hover:border-gold/60 transition-colors">
                  <div className="text-xs uppercase tracking-widest text-gold">{c.d}</div>
                  <h2 className="font-serif text-2xl text-primary group-hover:text-gold transition-colors">{c.t}</h2>
                  <p className="text-muted-foreground">{c.s}</p>
                </article>
              </li>
            );
          })}
        </ul>
        <p className="mt-10 text-sm text-muted-foreground text-center">
          {tr("Interested in collaborating or commissioning a study?", "تريد التعاون أو تكليف دراسة؟")}{" "}
          <Link to="/request" className="text-gold underline-offset-4 hover:underline">
            {tr("Submit a research request", "أرسل طلب بحث")}
          </Link>
        </p>
      </section>
    </SiteLayout>
  );
}
