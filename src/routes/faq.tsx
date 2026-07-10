import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { useTr } from "@/lib/i18n";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    en: { q: "What is your area of specialization?", a: "Ancient Egyptian Archaeology, with particular focus on New Kingdom temple architecture, hieroglyphic paleography, and funerary culture." },
    ar: { q: "ما مجال تخصصك؟", a: "علم الآثار المصرية القديمة، مع تركيز خاص على عمارة معابد الدولة الحديثة، وعلم الخطوط الهيروغليفية، والثقافة الجنائزية." },
  },
  {
    en: { q: "Do you accept consulting engagements?", a: "Yes — for museums, publishers, documentary productions, and cultural institutions. Please use the Request form to share project details." },
    ar: { q: "هل تقبل ارتباطات استشارية؟", a: "نعم — للمتاحف والناشرين والإنتاجات الوثائقية والمؤسسات الثقافية. يُرجى استخدام نموذج الطلب لمشاركة تفاصيل المشروع." },
  },
  {
    en: { q: "Are lectures available in Arabic and English?", a: "Yes. Lectures, interviews, and written work can be delivered in either language depending on the audience." },
    ar: { q: "هل المحاضرات متاحة بالعربية والإنجليزية؟", a: "نعم. تُقدَّم المحاضرات والمقابلات والكتابات بأي من اللغتين بحسب الجمهور." },
  },
  {
    en: { q: "Can I cite content from this site?", a: "Yes, with proper academic attribution to Dr. Tamer Al-Solahi and a link to the original article." },
    ar: { q: "هل يمكنني الاستشهاد بمحتوى الموقع؟", a: "نعم، مع الإسناد الأكاديمي السليم إلى د. تامر الصوالحي ورابط للمقال الأصلي." },
  },
  {
    en: { q: "Do you supervise students or researchers?", a: "Limited supervision and mentorship is available for advanced students working in relevant fields." },
    ar: { q: "هل تشرف على طلاب أو باحثين؟", a: "تتوفر إشراف وإرشاد محدودان للطلاب المتقدمين العاملين في مجالات ذات صلة." },
  },
  {
    en: { q: "How can I request a research report?", a: "Use the Request page to describe your topic, timeframe, and intended use. You will receive a response with a proposal." },
    ar: { q: "كيف أطلب تقريراً بحثياً؟", a: "استخدم صفحة الطلب لشرح موضوعك والإطار الزمني والاستخدام المقصود، وسيصلك ردّ بمقترح عمل." },
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Dr. Tamer Al-Solahi | Egyptology Consulting Questions" },
      { name: "description", content: "Frequently asked questions about the research, consulting services, and lectures of Dr. Tamer Al-Solahi." },
      { property: "og:title", content: "FAQ — Dr. Tamer Al-Solahi" },
      { property: "og:description", content: "Answers to common questions about consulting, lectures, and research." },
      { property: "og:url", content: "https://ancient-wisdom-portal.lovable.app/faq" },
      { property: "og:image", content: "https://ancient-wisdom-portal.lovable.app/og/faq.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Frequently Asked Questions — Consulting, Lectures & Collaboration · الأسئلة الشائعة" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ar_EG" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FAQ — Dr. Tamer Al-Solahi" },
      { name: "twitter:description", content: "Answers to common questions about consulting, lectures, and research." },
      { name: "twitter:image", content: "https://ancient-wisdom-portal.lovable.app/og/faq.jpg" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.en.q,
            acceptedAnswer: { "@type": "Answer", text: f.en.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const tr = useTr();
  return (
    <SiteLayout>
      <PageHeader
        eyebrow={tr("Information", "معلومات")}
        title={tr("Frequently Asked Questions", "الأسئلة الشائعة")}
        lead={tr(
          "Answers to common questions about consulting engagements, lectures, citations, and academic collaboration.",
          "إجابات عن الأسئلة الأكثر شيوعاً حول الارتباطات الاستشارية، والمحاضرات، والاستشهاد، والتعاون الأكاديمي."
        )}
      />
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => {
            const c = tr(f.en, f.ar);
            return (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="font-serif text-left text-lg text-primary hover:text-gold">{c.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{c.a}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>
    </SiteLayout>
  );
}
