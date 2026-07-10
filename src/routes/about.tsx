import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { useTr } from "@/lib/i18n";
import about from "@/assets/about-scholar.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Tamer Al-Solahi | Biography & Academic Profile" },
      { name: "description", content: "Biography and academic profile of Dr. Tamer Al-Solahi — researcher in Ancient Egyptian Archaeology, historical consultant, and lecturer." },
      { property: "og:title", content: "About — Dr. Tamer Al-Solahi" },
      { property: "og:description", content: "Academic biography of Dr. Tamer Al-Solahi, Egyptology researcher and historical consultant." },
      { property: "og:url", content: "https://ancient-wisdom-portal.lovable.app/about" },
      { property: "og:image", content: "https://ancient-wisdom-portal.lovable.app/og/about.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "About Dr. Tamer Al-Solahi — Biography & Academic Profile · نبذة عن د. تامر الصوالحي" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ar_EG" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About — Dr. Tamer Al-Solahi" },
      { name: "twitter:description", content: "Biography and academic profile of Dr. Tamer Al-Solahi." },
      { name: "twitter:image", content: "https://ancient-wisdom-portal.lovable.app/og/about.jpg" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const tr = useTr();
  return (
    <SiteLayout>
      <PageHeader
        eyebrow={tr("Biography", "السيرة الذاتية")}
        title={tr("About Dr. Tamer Al-Solahi", "نبذة عن د. تامر الصوالحي")}
        lead={tr(
          "A scholar dedicated to the study of Ancient Egyptian civilization, with research spanning hieroglyphic philology, temple architecture, and the material record of the Nile Valley.",
          "باحث مكرّس لدراسة الحضارة المصرية القديمة، تمتد أبحاثه عبر فقه اللغة الهيروغليفية، والعمارة المعبدية، والسجل المادي لوادي النيل."
        )}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <img src={about} alt="Egyptologist examining a papyrus" loading="lazy" width={1200} height={900} className="rounded-lg w-full object-cover aspect-[4/5] shadow-sm" />
        </div>
        <div className="md:col-span-3 academic-prose space-y-5 text-foreground/90">
          <p>{tr(
            "Dr. Tamer Al-Solahi is a specialized researcher in Ancient Egyptian Archaeology and a historical consultant, dedicating his work to the study of Ancient Egyptian civilization through documented archaeological evidence and verified scholarly references.",
            "يُعد الدكتور تامر الصوالحي باحثاً متخصصاً في الآثار المصرية القديمة ومستشاراً تاريخياً، ويكرس جهوده لدراسة الحضارة المصرية القديمة اعتماداً على الأدلة الأثرية والمراجع العلمية الموثقة."
          )}</p>
          <p>{tr(
            "He focuses on disseminating accurate historical knowledge and presenting scholarly content in a professional style that combines academic precision with clarity and accessibility.",
            "يركز على نشر المعرفة التاريخية الصحيحة وتقديم المحتوى العلمي بأسلوب احترافي يجمع بين الدقة الأكاديمية وسهولة الفهم."
          )}</p>
          <p>{tr(
            "His work spans historical studies, archaeological research and analysis, and providing historical consultancy for cultural and media projects.",
            "يهتم بإعداد الدراسات التاريخية، والأبحاث، والتحليلات الأثرية، بالإضافة إلى تقديم الاستشارات التاريخية للمشروعات الثقافية والإعلامية."
          )}</p>
          <p>{tr(
            "He seeks to raise awareness of Ancient Egyptian civilization and to safeguard Egypt's cultural heritage for future generations.",
            "يسعى إلى نشر الوعي بالحضارة المصرية القديمة والمحافظة على التراث الثقافي المصري."
          )}</p>
        </div>

      </section>

      <section className="bg-papyrus border-y border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-serif text-2xl text-primary mb-8">{tr("Areas of Research", "مجالات البحث")}</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {[
              tr("New Kingdom temple architecture", "عمارة معابد الدولة الحديثة"),
              tr("Funerary epigraphy and Book of the Dead traditions", "الكتابات الجنائزية وتقاليد كتاب الموتى"),
              tr("Hieroglyphic paleography", "علم الخطوط الهيروغليفية"),
              tr("Material culture of the Nile Valley", "الثقافة المادية لوادي النيل"),
              tr("Greco-Roman Egypt", "مصر في العصر اليوناني الروماني"),
              tr("Museum studies & curation", "علم المتاحف والقيمنة"),
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/90">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
