import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { ContactForm } from "@/components/ContactForm";
import { useI18n } from "@/lib/i18n";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — M2A Logistique" },
      { name: "description", content: "Téléphone, e-mail, adresse et formulaire de contact M2A Logistique." },
      { property: "og:title", content: "Contact — M2A Logistique" },
      { property: "og:description", content: "Une question, un projet ? Notre équipe vous répond rapidement." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const items = [
    { i: Phone, l: t("contact_phone"), v: "+33 6 00 00 00 00" },
    { i: Mail, l: t("contact_email"), v: "contact@m2a-logistique.fr" },
    { i: MapPin, l: t("contact_address"), v: "France" },
    { i: Clock, l: t("contact_hours"), v: t("contact_hours_v") },
  ];
  return (
    <PageShell>
      <PageHero eyebrow={t("nav_contact")} title={t("contact_title")} sub={t("contact_sub")} />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          {items.map(({ i: Icon, l, v }) => (
            <div key={l} className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-night">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-night/60">{l}</p>
                <p className="mt-1 font-bold text-night">{v}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-3xl bg-cream p-6 sm:p-10">
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}