import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export function ContactForm() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    // honeypot anti-spam
    if (fd.get("website")) return;
    const subject = encodeURIComponent(String(fd.get("subject") || "Contact"));
    const body = encodeURIComponent(
      `Nom: ${fd.get("name")}\nE-mail: ${fd.get("email")}\nTéléphone: ${fd.get("phone")}\n\n${fd.get("message")}`,
    );
    window.location.href = `mailto:contact@m2a-logistique.fr?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t("form_name")} name="name" required />
        <Field label={t("form_email")} name="email" type="email" required />
        <Field label={t("form_phone")} name="phone" type="tel" />
        <Field label={t("form_subject")} name="subject" required />
      </div>
      <div>
        <label className="mb-1 block text-sm font-bold text-night">{t("form_message")}</label>
        <textarea name="message" rows={5} required className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
      </div>
      <label className="flex items-start gap-2 text-xs italic text-night/70">
        <input type="checkbox" required className="mt-1 accent-brand" />
        {t("form_consent")}
      </label>
      <button type="submit" className="inline-flex items-center justify-center rounded-full bg-night px-6 py-3 text-sm font-black text-white transition-transform hover:scale-[1.02]">
        {t("form_send")}
      </button>
      {sent && <p className="text-sm font-bold text-brand">{t("form_sent")}</p>}
    </form>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-bold text-night">{label}</label>
      <input type={type} name={name} required={required} className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
    </div>
  );
}