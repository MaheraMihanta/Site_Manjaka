import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/PageShell";
import { useI18n } from "@/lib/i18n";

const QUOTE_EMAIL_TO = import.meta.env.DEV ? "slkfoibe.mahera@gmail.com" : "contact@m2alogistique.fr";
const QUOTE_EMAIL_SUBJECT = import.meta.env.DEV ? "[TEST] Demande de devis" : "Demande de devis";

export const Route = createFileRoute("/devis")({
  head: () => ({
    meta: [
      { title: "Devis — M2A Logistique" },
      { name: "description", content: "Demande de devis transport : type, départ, destination, volume — réponse sous 24h." },
      { property: "og:title", content: "Devis — M2A Logistique" },
      { property: "og:description", content: "Décrivez votre besoin, nous revenons vers vous sous 24h ouvrées." },
    ],
  }),
  component: DevisPage,
});

function DevisPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) return;
    const body = encodeURIComponent(
      `Type: ${fd.get("type")}\nDépart: ${fd.get("from")}\nDestination: ${fd.get("to")}\nVolume/poids: ${fd.get("volume")}\nDate: ${fd.get("date")}\n\nNom: ${fd.get("name")}\nE-mail: ${fd.get("email")}\nTéléphone: ${fd.get("phone")}\n\nMessage:\n${fd.get("message")}`,
    );
    window.location.href = `mailto:${QUOTE_EMAIL_TO}?subject=${encodeURIComponent(QUOTE_EMAIL_SUBJECT)}&body=${body}`;
    setSent(true);
  }

  return (
    <PageShell>
      <PageHero eyebrow={t("nav_quote")} title={t("quote_title")} sub={t("quote_sub")} />
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl bg-cream p-6 sm:p-10">
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <div>
            <label className="mb-1 block text-sm font-bold text-night">{t("q_type")}</label>
            <select name="type" required className="w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30">
              <option>{t("q_type_opt1")}</option>
              <option>{t("q_type_opt2")}</option>
              <option>{t("q_type_opt3")}</option>
              <option>{t("q_type_opt4")}</option>
            </select>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <DField label={t("q_from")} name="from" required />
            <DField label={t("q_to")} name="to" required />
            <DField label={t("q_volume")} name="volume" placeholder="ex. 2 palettes / 500 kg" />
            <DField label={t("q_date")} name="date" type="date" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <DField label={t("form_name")} name="name" required />
            <DField label={t("form_email")} name="email" type="email" required />
            <DField label={t("form_phone")} name="phone" type="tel" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-bold text-night">{t("q_message")}</label>
            <textarea name="message" rows={4} className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
          </div>
          <label className="flex items-start gap-2 text-xs italic text-night/70">
            <input type="checkbox" required className="mt-1 accent-brand" />
            {t("form_consent")}
          </label>
          <button type="submit" className="w-full rounded-full bg-night px-6 py-3 text-sm font-black text-white transition-transform hover:scale-[1.01] hover:bg-brand hover:text-night">
            {t("q_send")}
          </button>
          {sent && <p className="text-center text-sm font-bold text-brand">{t("form_sent")}</p>}
        </form>
      </section>
    </PageShell>
  );
}

function DField({ label, name, type = "text", required = false, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-bold text-night">{label}</label>
      <input type={type} name={name} required={required} placeholder={placeholder} className="w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
    </div>
  );
}
