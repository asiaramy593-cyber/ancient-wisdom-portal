import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { useTr } from "@/lib/i18n";
import { FileText, Download } from "lucide-react";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads — CV & Egyptology Resources | Dr. Al-Solahi" },
      { name: "description", content: "Download the academic CV, Egyptology reading lists, and research resources of Dr. Tamer Al-Solahi (د. تامر الصوالحي)." },
      { name: "keywords", content: "Dr. Tamer Al-Solahi CV, academic CV Egyptology, Egyptology reading list, تنزيلات, السيرة الذاتية د. تامر الصوالحي, قائمة قراءة علم المصريات, research resources" },
      { property: "og:title", content: "Downloads — CV & Egyptology Resources | Dr. Al-Solahi" },
      { property: "og:description", content: "CV, reading lists, and Egyptology research resources." },
      { property: "og:url", content: "/downloads" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/downloads" }],
  }),
  component: DownloadsPage,
});

const files = [
  { en: { t: "Academic CV", d: "Full curriculum vitae — research, publications, lectures." }, ar: { t: "السيرة الذاتية الأكاديمية", d: "السيرة الكاملة — الأبحاث والمنشورات والمحاضرات." } },
  { en: { t: "Egyptology Reading List", d: "Recommended primary sources and contemporary scholarship." }, ar: { t: "قائمة قراءات علم المصريات", d: "مصادر أولية موصى بها ودراسات معاصرة." } },
  { en: { t: "Hieroglyphic Sign List (Primer)", d: "Introductory reference to common phonograms and ideograms." }, ar: { t: "قائمة العلامات الهيروغليفية (تمهيدي)", d: "مرجع تمهيدي للأصوات والأيقونات الشائعة." } },
  { en: { t: "Chronology of Dynasties", d: "Reference chart of Pharaonic, Greco-Roman, and Late Antique periods." }, ar: { t: "تسلسل الأسرات", d: "مخطط مرجعي للعصور الفرعونية واليونانية الرومانية والمتأخرة." } },
];

function DownloadsPage() {
  const tr = useTr();
  return (
    <SiteLayout>
      <PageHeader
        eyebrow={tr("Resources", "موارد")}
        title={tr("Downloads", "تنزيلات")}
        lead={tr(
          "Reference materials and resources for students, researchers, and journalists working on Ancient Egyptian topics.",
          "مواد مرجعية وموارد للطلاب والباحثين والصحفيين العاملين على موضوعات مصر القديمة."
        )}
      />
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <ul className="divide-y divide-border rounded-lg border border-border bg-card overflow-hidden">
          {files.map((f, i) => {
            const c = tr(f.en, f.ar);
            return (
              <li key={i}>
                <div className="flex items-start justify-between gap-4 p-5 hover:bg-papyrus transition-colors">
                  <div className="flex items-start gap-4">
                    <FileText className="h-6 w-6 text-gold mt-0.5" />
                    <div>
                      <h2 className="font-serif text-lg text-primary">{c.t}</h2>
                      <p className="text-sm text-muted-foreground">{c.d}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => alert(tr("Download will be available soon.", "ستتوفر التنزيلات قريباً."))}
                    className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm hover:border-gold hover:text-gold"
                  >
                    <Download className="h-4 w-4" /> {tr("PDF", "PDF")}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </SiteLayout>
  );
}
