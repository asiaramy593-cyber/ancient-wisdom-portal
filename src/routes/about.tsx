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
      { property: "og:url", content: "/about" },
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
            "Dr. Tamer Al-Solahi is a researcher in Ancient Egyptian Archaeology and historical consultant whose work bridges field practice and textual scholarship. His research focuses on the religious architecture of the New Kingdom, funerary epigraphy, and the cultural continuity of the Nile Valley from the Predynastic period through the Greco-Roman era.",
            "د. تامر الصوالحي باحث في علم الآثار المصرية القديمة ومستشار تاريخي، يجمع عمله بين الممارسة الميدانية والبحث النصي. تتركز أبحاثه على العمارة الدينية في الدولة الحديثة، والكتابات الجنائزية، واستمرارية حضارة وادي النيل من عصر ما قبل الأسرات وحتى العصر اليوناني الروماني."
          )}</p>
          <p>{tr(
            "He has consulted on museum exhibitions, documentary productions, and scholarly publications, providing rigorous historical context grounded in primary sources and recent fieldwork.",
            "قدّم استشارات لمعارض متحفية وإنتاجات وثائقية ومنشورات علمية، مقدّماً سياقاً تاريخياً دقيقاً يستند إلى المصادر الأولية والأعمال الميدانية الحديثة."
          )}</p>
          <p>{tr(
            "Beyond academic research, Dr. Al-Solahi is committed to public scholarship — making Egyptology accessible through lectures, articles, and educational programs in both Arabic and English.",
            "إلى جانب البحث الأكاديمي، يلتزم د. الصوالحي بنشر المعرفة العامة — لجعل علم المصريات في متناول الجمهور عبر المحاضرات والمقالات والبرامج التعليمية باللغتين العربية والإنجليزية."
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
