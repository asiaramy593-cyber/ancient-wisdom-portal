import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { useTr } from "@/lib/i18n";
import { Mail, MapPin, Globe, Phone, Facebook } from "lucide-react";
import {
  EMAIL,
  MAILTO_URL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  FACEBOOK_URL,
  ADDRESS_AR,
  ADDRESS_EN,
  MAPS_URL,
} from "@/lib/contact-info";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Dr. Ahmed Al-Muaiqly — Egyptology Consulting & Inquiries" },
      { name: "description", content: "Contact Dr. Ahmed Al-Muaiqly for research collaborations, consulting engagements, lectures, and media inquiries. Based in New Cairo, Egypt." },
      { property: "og:title", content: "Contact — Dr. Ahmed Al-Muaiqly" },
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
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-card p-6 text-center hover:border-gold transition-colors">
            <Phone className="h-6 w-6 text-gold mx-auto" />
            <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{tr("WhatsApp / Phone", "واتساب / هاتف")}</div>
            <div className="mt-1 font-serif text-base text-primary" dir="ltr">{PHONE_DISPLAY}</div>
          </a>
          <a href={MAILTO_URL} className="rounded-lg border border-border bg-card p-6 text-center hover:border-gold transition-colors">
            <Mail className="h-6 w-6 text-gold mx-auto" />
            <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{tr("Email", "البريد الإلكتروني")}</div>
            <div className="mt-1 font-serif text-base text-primary break-all">{EMAIL}</div>
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-card p-6 text-center hover:border-gold transition-colors">
            <Facebook className="h-6 w-6 text-gold mx-auto" />
            <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{tr("Facebook", "فيسبوك")}</div>
            <div className="mt-1 font-serif text-base text-primary">{tr("Official Page", "الصفحة الرسمية")}</div>
          </a>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-card p-6 text-center hover:border-gold transition-colors md:col-span-2">
            <MapPin className="h-6 w-6 text-gold mx-auto" />
            <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{tr("Office", "المكتب")}</div>
            <div className="mt-1 font-serif text-base text-primary">{tr(ADDRESS_EN, ADDRESS_AR)}</div>
          </a>
          <div className="rounded-lg border border-border bg-card p-6 text-center">
            <Globe className="h-6 w-6 text-gold mx-auto" />
            <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{tr("Languages", "اللغات")}</div>
            <div className="mt-1 font-serif text-base text-primary">{tr("Arabic · English", "العربية · الإنجليزية")}</div>
          </div>
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
