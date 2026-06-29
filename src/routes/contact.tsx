import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { useTr } from "@/lib/i18n";
import { Mail, MapPin, Globe } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Dr. Tamer Al-Solahi — Egyptology Consulting & Inquiries" },
      { name: "description", content: "Contact Dr. Tamer Al-Solahi for research collaborations, consulting engagements, lectures, and media inquiries." },
      { property: "og:title", content: "Contact — Dr. Tamer Al-Solahi" },
      { property: "og:description", content: "Get in touch for Egyptology research, consulting, and lectures." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const tr = useTr();
  return (
    <SiteLayout>
      <PageHeader
        eyebrow={tr("Get in Touch", "تواصل")}
        title={tr("Contact", "تواصل")}
        lead={tr(
          "For research collaborations, consulting engagements, lectures, and media inquiries.",
          "للتعاون البحثي، والارتباطات الاستشارية، والمحاضرات، والاستفسارات الإعلامية."
        )}
      />
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Mail, l: tr("Email", "البريد الإلكتروني"), v: "contact@alsolahi.research" },
            { icon: MapPin, l: tr("Based in", "المقر"), v: tr("Cairo, Egypt", "القاهرة، مصر") },
            { icon: Globe, l: tr("Languages", "اللغات"), v: tr("Arabic · English", "العربية · الإنجليزية") },
          ].map(({ icon: Icon, l, v }, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-6 text-center">
              <Icon className="h-6 w-6 text-gold mx-auto" />
              <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
              <div className="mt-1 font-serif text-lg text-primary">{v}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-papyrus p-8 text-center">
          <h2 className="font-serif text-2xl text-primary">{tr("Have a specific project in mind?", "لديك مشروع محدد؟")}</h2>
          <p className="mt-3 text-muted-foreground">
            {tr(
              "Use the Request form to share project scope, timeline, and intended deliverables — you'll receive a tailored response.",
              "استخدم نموذج الطلب لمشاركة نطاق المشروع، والجدول الزمني، والمخرجات المطلوبة — وسيصلك ردّ مخصّص."
            )}
          </p>
          <a href="/request" className="mt-6 inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            {tr("Open Request Form", "افتح نموذج الطلب")}
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
