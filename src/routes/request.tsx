import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { useTr } from "@/lib/i18n";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/request")({
  head: () => ({
    meta: [
      { title: "Request a Consultation | Dr. Tamer Al-Solahi" },
      { name: "description", content: "Request an Egyptology consultation, historical advisory, or lecture from Dr. Tamer Al-Solahi (د. تامر الصوالحي). Share your project scope and timeline." },
      { name: "keywords", content: "request Egyptology consultation, hire Egyptologist, historical consultant request, طلب استشارة تاريخية, حجز محاضرة, استشارة علم المصريات, museum advisory request" },
      { property: "og:title", content: "Request a Consultation — Dr. Tamer Al-Solahi" },
      { property: "og:description", content: "Submit a consulting, research, or lecture request." },
      { property: "og:url", content: "/request" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/request" }],
  }),
  component: RequestPage,
});

function RequestPage() {
  const tr = useTr();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success(tr("Request submitted. You'll receive a response shortly.", "تم إرسال الطلب. سيصلك ردّ قريباً."));
    }, 700);
  };

  const label = "block text-sm font-medium text-foreground mb-1.5";
  const input = "w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

  return (
    <SiteLayout>
      <PageHeader
        eyebrow={tr("Engagement", "تواصل مهني")}
        title={tr("Request Form", "نموذج الطلب")}
        lead={tr(
          "Share project details to receive a tailored proposal for research, consulting, or a speaking engagement.",
          "شارك تفاصيل المشروع لتلقّي مقترح مخصّص للبحث، أو الاستشارة، أو محاضرة."
        )}
      />
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <form onSubmit={onSubmit} className="space-y-5 rounded-lg border border-border bg-card p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className={label} htmlFor="name">{tr("Full Name", "الاسم الكامل")}</label>
              <input id="name" name="name" required className={input} />
            </div>
            <div>
              <label className={label} htmlFor="email">{tr("Email", "البريد الإلكتروني")}</label>
              <input id="email" name="email" type="email" required className={input} />
            </div>
          </div>
          <div>
            <label className={label} htmlFor="org">{tr("Organization", "الجهة / المؤسسة")}</label>
            <input id="org" name="org" className={input} />
          </div>
          <div>
            <label className={label} htmlFor="type">{tr("Type of Request", "نوع الطلب")}</label>
            <select id="type" name="type" required className={input}>
              <option value="consulting">{tr("Historical Consulting", "استشارة تاريخية")}</option>
              <option value="museum">{tr("Museum Advisory", "استشارة متحفية")}</option>
              <option value="documentary">{tr("Documentary Scholarship", "استشارة وثائقية")}</option>
              <option value="lecture">{tr("Lecture / Seminar", "محاضرة / ندوة")}</option>
              <option value="manuscript">{tr("Manuscript Review", "مراجعة مخطوطة")}</option>
              <option value="other">{tr("Other", "أخرى")}</option>
            </select>
          </div>
          <div>
            <label className={label} htmlFor="message">{tr("Project Details", "تفاصيل المشروع")}</label>
            <textarea id="message" name="message" required rows={6} className={input} placeholder={tr("Scope, timeline, intended deliverables…", "النطاق، الجدول الزمني، المخرجات المطلوبة…")} />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full md:w-auto items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
          >
            {submitting ? tr("Sending…", "جارٍ الإرسال…") : tr("Submit Request", "إرسال الطلب")}
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}
